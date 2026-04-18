import fs from 'fs'
import { fetchJSON, readTOOLS, runCommand, getOwnerRepo } from './util.ts'

const data = readTOOLS()

async function getStars() {
  const toolsToFetch = data.tools
    .map(d => ({ d, repo: getOwnerRepo(d.github || d.url || '') }))
    .filter(({ d, repo }) => repo && (process.env.ALL_STARS || !d.github_stars))

  const BATCH_SIZE = 100
  for (let i = 0; i < toolsToFetch.length; i += BATCH_SIZE) {
    const batch = toolsToFetch.slice(i, i + BATCH_SIZE)
    console.log(`Fetching stars batch ${i / BATCH_SIZE + 1}...`)

    const query = `query { ${batch
      .map(
        ({ repo }, j) =>
          `r${j}: repository(owner: "${repo!.owner}", name: "${repo!.repo}") { stargazerCount }`,
      )
      .join('\n')} }`

    try {
      let response: any
      try {
        const result = runCommand(
          `gh api graphql -f query='${query.replace(/'/g, "'\\''")}'`,
        )
        response = JSON.parse(result)
      } catch (e) {
        response = await fetchJSON('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${process.env.GITHUB_AUTH}`,
          },
          body: JSON.stringify({ query }),
        })
      }

      batch.forEach(({ d }, j) => {
        const starCount = response.data?.[`r${j}`]?.stargazerCount
        if (starCount !== undefined) {
          d.github_stars = starCount
        }
      })
    } catch (e) {
      console.error('Batch failed', e)
    }
  }

  fs.writeFileSync('TOOLS.json', JSON.stringify(data, null, 2))
}

getStars()
