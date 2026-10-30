import fs from 'fs'
import { slug } from '../src/slug.ts'
import { readTOOLS } from './util.ts'

const toolKeys = new Set([
  'name',
  'url',
  'alt_url',
  'github',
  'twitter',
  'github_stars',
  'tags',
  'img',
  'width',
  'height',
  'pub',
  'note',
])
const pubKeys = new Set(['doi', 'url', 'year', 'citations'])

let errors = 0
function report(name: string, message: string) {
  console.error(`${name}: ${message}`)
  errors++
}

const seen = new Map<string, string>()
for (const tool of readTOOLS().tools) {
  const { name, pub, img } = tool
  const s = slug(name)
  const other = seen.get(s)
  if (other !== undefined) {
    report(name, `same slug as "${other}"`)
  }
  seen.set(s, name)

  for (const key of Object.keys(tool)) {
    if (!toolKeys.has(key)) {
      report(name, `unknown key "${key}"`)
    }
  }
  for (const key of Object.keys(pub ?? {})) {
    if (!pubKeys.has(key)) {
      report(name, `unknown pub key "${key}"`)
    }
  }
  if (pub && !pub.doi) {
    report(name, 'pub has no doi')
  }
  if (img) {
    if (!fs.existsSync(`public/${img}`)) {
      report(name, `public/${img} does not exist`)
    } else if (!tool.width || !tool.height) {
      report(name, 'img has no width/height, run ./update.sh')
    }
  }
}

if (errors) {
  console.error(`${errors} errors`)
  process.exit(1)
}
