// reads dims.txt, written by update.sh with ImageMagick's identify
import fs from 'fs'
import { readTOOLS, writeTOOLS } from './util.ts'

const data = readTOOLS()

const dims = Object.fromEntries(
  fs
    .readFileSync('dims.txt', 'utf8')
    .split('\n')
    .filter(f => !!f)
    .map(line => line.split(' ')),
)

for (const tool of data.tools) {
  const entry = tool.img ? dims[tool.img] : undefined
  if (entry) {
    const [width, height] = entry.split('x')
    tool.width = +width
    tool.height = +height
  }
}

writeTOOLS(data)
