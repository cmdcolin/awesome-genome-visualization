import fs from 'fs'

const tools = JSON.parse(fs.readFileSync('TOOLS.json', 'utf8')).tools

const contentFacets = ['kind', 'task', 'data', 'view', 'field']
const metaFacets = ['ui', 'license', 'status', 'with', 'platform', 'stack']
const facets = new Set([...contentFacets, ...metaFacets])
const specificFacets = ['kind', 'task', 'data', 'view']
const maxContentTags = 4
const umbrella = 'field:Comparative genomics'
const impliesComparative = [
  'data:Synteny',
  'data:Whole-genome alignment',
  'data:Multi-way synteny',
  'data:Pangenome',
  'data:Gene order',
]

const facetOf = (tag: string) => tag.split(':')[0]
let errors = 0

function report(name: string, message: string) {
  console.log(`${name}: ${message}`)
  errors++
}

tools.forEach((tool: any) => {
  const tags: string[] = tool.tags ?? []
  if (!tags.length) {
    report(tool.name, 'no tags')
    return
  }
  for (const tag of tags) {
    const [facet, value] = tag.split(':')
    if (!value || !facets.has(facet)) {
      report(tool.name, `"${tag}" is not facet:Value with a known facet`)
    }
  }
  if (new Set(tags).size !== tags.length) {
    report(tool.name, 'duplicate tag')
  }
  if (!contentFacets.includes(facetOf(tags[0]))) {
    report(tool.name, `first tag "${tags[0]}" must be a content tag`)
  }
  const specific = tags.filter(t => specificFacets.includes(facetOf(t)))
  if (tags[0] === umbrella && specific.length) {
    report(tool.name, `${umbrella} must come after ${specific[0]}`)
  }
  const content = tags.filter(t => contentFacets.includes(facetOf(t)))
  if (content.length > maxContentTags) {
    console.log(
      `${tool.name}: ${content.length} content tags (max ${maxContentTags})`,
    )
  }
  if (
    tags.some(t => impliesComparative.includes(t)) &&
    !tags.includes(umbrella)
  ) {
    report(tool.name, `needs ${umbrella}`)
  }
})

if (errors) {
  console.log(`${errors} errors`)
  process.exit(1)
}
