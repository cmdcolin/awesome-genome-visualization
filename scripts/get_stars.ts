import fs from 'fs'
import {
  fetchJSON,
  readTOOLS,
  writeTOOLS,
  runCommand,
  getOwnerRepo,
} from './util.ts'

interface Repository {
  nameWithOwner: string
  stargazerCount: number
  isArchived: boolean
  licenseInfo: { spdxId: string | null } | null
  primaryLanguage: { name: string } | null
}

interface GraphQLResponse {
  data?: Record<string, Repository | null>
  errors?: { path?: string[]; message: string }[]
}

const BATCH_SIZE = 100

const data = readTOOLS()
const token =
  process.env.GITHUB_TOKEN ?? runCommand('gh', ['auth', 'token']).trim()

const tools = data.tools.flatMap(tool => {
  const repo = getOwnerRepo(tool.github ?? tool.url ?? '')
  return repo
    ? [{ tool, ...repo, nameWithOwner: `${repo.owner}/${repo.repo}` }]
    : []
})

const missing: string[] = []
const renamed: string[] = []
const archived: string[] = []
const unlicensed: string[] = []
const unbuilt: string[] = []

for (let i = 0; i < tools.length; i += BATCH_SIZE) {
  const batch = tools.slice(i, i + BATCH_SIZE)
  console.log(`Fetching stars ${i + 1}-${i + batch.length} of ${tools.length}`)
  const query = `query { ${batch
    .map(
      ({ owner, repo }, j) =>
        `r${j}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(repo)}) { nameWithOwner stargazerCount isArchived licenseInfo { spdxId } primaryLanguage { name } }`,
    )
    .join('\n')} }`
  const response: GraphQLResponse = await fetchJSON(
    'https://api.github.com/graphql',
    {
      method: 'POST',
      headers: { Authorization: `bearer ${token}` },
      body: JSON.stringify({ query }),
    },
  )
  const { data: repos, errors = [] } = response
  if (repos) {
    batch.forEach(({ tool, nameWithOwner }, j) => {
      const result = repos[`r${j}`]
      const label = `${tool.name} (${nameWithOwner})`
      if (result) {
        tool.github_stars = result.stargazerCount
        if (
          result.nameWithOwner.toLowerCase() !== nameWithOwner.toLowerCase()
        ) {
          renamed.push(`${label} -> ${result.nameWithOwner}`)
        }
        if (
          result.isArchived &&
          !tool.tags?.some(tag => tag.startsWith('status:'))
        ) {
          archived.push(label)
        }
        const spdxId = result.licenseInfo?.spdxId
        if (
          spdxId &&
          spdxId !== 'NOASSERTION' &&
          !tool.tags?.some(tag => tag.startsWith('license:'))
        ) {
          unlicensed.push(`${label}: license:${spdxId}`)
        }
        if (
          result.primaryLanguage &&
          !tool.tags?.some(tag => tag.startsWith('stack:'))
        ) {
          unbuilt.push(`${label}: stack:${result.primaryLanguage.name}`)
        }
      } else {
        const error = errors.find(e => e.path?.[0] === `r${j}`)
        missing.push(`${label}: ${error?.message ?? 'no data'}`)
      }
    })
  } else {
    throw new Error(JSON.stringify(errors))
  }
}

writeTOOLS(data)

for (const [title, list] of [
  ['Not found (stars left unchanged)', missing],
  ['Renamed or transferred', renamed],
  ['Archived without a status: tag', archived],
  ['GitHub reports a license but no license: tag', unlicensed],
  ['GitHub reports a language but no stack: tag', unbuilt],
] as const) {
  if (list.length) {
    console.log(`\n${title}: ${list.length}\n${list.join('\n')}`)
    if (process.env.GITHUB_STEP_SUMMARY) {
      fs.appendFileSync(
        process.env.GITHUB_STEP_SUMMARY,
        `### ${title}: ${list.length}\n\n${list.map(l => `- ${l}`).join('\n')}\n\n`,
      )
    }
  }
}
console.log(
  `\nUpdated stars for ${tools.length - missing.length}/${tools.length} repos`,
)
