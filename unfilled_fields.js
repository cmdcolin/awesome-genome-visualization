import fs from 'fs'
const { tools } = JSON.parse(fs.readFileSync('TOOLS.json'))
tools.forEach(r => {
  if (!r.tags) {
    console.log('no tags', r.name)
  }
})
tools.forEach(r => {
  if (!r.language) {
    console.log('no language', r.name, r.github, r.url)
  }
})
