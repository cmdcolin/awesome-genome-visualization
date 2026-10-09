import fs from 'fs'

const res = JSON.parse(fs.readFileSync('TOOLS.json', 'utf8'))
const header = fs.readFileSync('util/HEADER.md', 'utf8')
const footer = fs.readFileSync('util/FOOTER.md', 'utf8')
const categories = {} as Record<string, any[]>
const pinnedCategory = 'kind:Genome browser'
const heading = (category: string) => category.split(':').pop() as string

console.log(header)

res.tools.forEach((tool: any) => {
  const tags = tool['tags'] || []
  const firsttag = tags[0] || 'Uncategorized'
  if (!categories[firsttag]) {
    categories[firsttag] = []
  }
  categories[firsttag].push(tool)
})

Object.entries(categories)
  .sort(([categoryA], [categoryB]) => {
    if (categoryA === pinnedCategory || categoryB === pinnedCategory) {
      return categoryA === pinnedCategory ? -1 : 1
    }
    return heading(categoryA).localeCompare(heading(categoryB))
  })
  .map(([category, tools]) => {
    console.log('## ' + heading(category))
    tools
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(tool => {
        console.log(
          '- ' +
            (tool.url || tool.github
              ? '[' + tool.name + '](' + (tool.url || tool.github) + ')'
              : tool.name) +
            (tool.note ? ' (' + tool.note + ')' : '') +
            (tool.publication ? ' [(pub)](' + tool.publication.url + ')' : '') +
            (tool.img
              ? ' [(img)](https://cmdcolin.github.io/awesome-genome-visualization/' +
                tool.img +
                ')'
              : ''),
        )
      })
  })

console.log(footer)
