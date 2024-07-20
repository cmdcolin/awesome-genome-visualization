//run this in the static dir folder
//identify -format "%f %wx%h\n" *.jpg *.png > ../../dims.txt
import fs from 'fs'
import { readTOOLS } from './util'

const data = readTOOLS()

const d2 = Object.fromEntries(
  fs
    .readFileSync('dims.txt', 'utf8')
    .split('\n')
    .filter(f => !!f)
    .map(line => line.split(' ')),
)

fs.writeFileSync(
  'src/TOOLS.json',
  JSON.stringify(
    {
      ...data,
      tools: data.tools.map((d: any) => {
        if (d2[d.img]) {
          const entry = d2[d.img]
          const [width, height] = entry.split('x')
          return { ...d, width: +width, height: +height }
        } else {
          return d
        }
      }),
    },
    null,
    2,
  ),
)
