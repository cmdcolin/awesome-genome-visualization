import fs from 'fs'
import type { Tool } from '../src/store.ts'
import { doiUrl } from '../src/doi.ts'
import { readTOOLS } from './util.ts'

const { tools } = readTOOLS()
const pinnedCategory = 'kind:Genome browser'
const heading = (category: string) => category.split(':').pop()!

const withPub = tools.filter(t => t.pub).length
const pubStats = `${Math.floor((100 * withPub) / tools.length)}% (${withPub}/${tools.length})`
console.log(
  fs.readFileSync('util/HEADER.md', 'utf8').replace('{{pubStats}}', pubStats),
)

const categories = Map.groupBy(tools, t => t.tags?.[0] ?? 'Uncategorized')

function line(tool: Tool) {
  const href = tool.url ?? tool.github
  return [
    '- ',
    href ? `[${tool.name}](${href})` : tool.name,
    tool.note ? ` (${tool.note})` : '',
    tool.pub ? ` [(pub)](${doiUrl(tool.pub.doi)})` : '',
    tool.img
      ? ` [(img)](https://cmdcolin.github.io/awesome-genome-visualization/${tool.img})`
      : '',
  ].join('')
}

for (const [category, list] of [...categories].sort(([a], [b]) =>
  a === pinnedCategory || b === pinnedCategory
    ? a === pinnedCategory
      ? -1
      : 1
    : heading(a).localeCompare(heading(b)),
)) {
  console.log('## ' + heading(category))
  for (const tool of list.sort((a, b) => a.name.localeCompare(b.name))) {
    console.log(line(tool))
  }
}

console.log(fs.readFileSync('util/FOOTER.md', 'utf8'))
