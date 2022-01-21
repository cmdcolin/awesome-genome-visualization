//run this in the static dir folder
//identify -format "%f %wx%h\n" *.jpg *.png > ../../dims.txt
import fs from 'fs'
import fetch from 'node-fetch'

const data = JSON.parse(fs.readFileSync('TOOLS.json', 'utf8'))
// const d2 = Object.fromEntries(
//   fs
//     .readFileSync('dims.txt', 'utf8')
//     .split('\n')
//     .filter(f => !!f)
//     .map(line => line.split(' ')),
// )
console.log('data', data)
;(async () => {
  for (let i = 0; i < data.tools.length; i++) {
    const d = data.tools[i]
    console.log({ d })
    if (d.pub) {
      const doi = d.pub.doi
      const url = doi.startsWith('http') ? doi : 'https://doi.org/' + doi
      const response = await fetch(url, {
        headers: { Accept: 'application/json' },
      })
      if (!response.ok)
        throw new Error(
          'failed ${response.statusText} ${await response.text()}',
        )
      const json = await response.json()
      d.year = json.published['date-parts'][0][0]
    }
  }
})()

fs.writeFileSync('TOOLS.json', JSON.stringify(data, null, 2))
