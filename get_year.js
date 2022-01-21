//run this in the static dir folder
//identify -format "%f %wx%h\n" *.jpg *.png > ../../dims.txt
import fs from 'fs'
import fetch from 'node-fetch'

import { setTimeout } from 'timers/promises'

const data = JSON.parse(fs.readFileSync('TOOLS.json', 'utf8'))
// const d2 = Object.fromEntries(
//   fs
//     .readFileSync('dims.txt', 'utf8')
//     .split('\n')
//     .filter(f => !!f)
//     .map(line => line.split(' ')),
// )
;(async () => {
  let timeout = 1000
  for (let i = 0; i < data.tools.length; ) {
    const d = data.tools[i]

    try {
      if (d.pub) {
        const doi = d.pub.doi
        if (doi.includes('zenodo')) {
          i++
          continue
        }
        console.log(
          i + '/' + data.tools.length,
          'curr waittime',
          timeout,
          'doi',
          doi,
        )
        const url = doi.startsWith('http') ? doi : 'https://doi.org/' + doi
        const response = await fetch(url, {
          headers: { Accept: 'application/json' },
        })
        if (!response.ok) {
          throw new Error(
            `failed ${response.statusText} ${await response.text()}`,
          )
        }
        const json = await response.json()
        d.pub.year = json.published['date-parts'][0][0]
        timeout = 1000
        setTimeout(timeout)
      }
      i++
    } catch (e) {
      console.error('got error, retrying', e)
      await setTimeout(timeout)
      timeout = timeout * 2
    }
  }
  fs.writeFileSync('TOOLS.json', JSON.stringify(data, null, 2))
})()
