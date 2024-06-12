import fs from 'fs'
const tools = JSON.parse(fs.readFileSync('TOOLS.json', 'utf8')).tools

tools.forEach((r: any) => {
  if (!r.tags) {
    console.log('no tags', r.name)
  }
})
tools.forEach((r: any) => {
  if (!r.language) {
    console.log('no language', r.name, r.github, r.url)
  }
})

tools.forEach((r: any) => {
  if (!r.pub) {
    console.log('no pub', r.name, r.github, r.url)
  }
})

tools.forEach((r: any) => {
  if (!r.img) {
    console.log('no img', r.name, r.github, r.url)
  }
})

tools.forEach((r: any) => {
  if (!r.url && !r.github) {
    console.log('no url or github', r.name, r.github, r.url)
  }
})
