import fs from 'fs'
import { fetchJSON, readTOOLS } from './util.ts'

const data = readTOOLS()

;(async () => {
  for (let i = 0; i < data.tools.length; i++) {
    const d = data.tools[i]

    try {
      if (d.pub) {
        const doi = d.pub.doi
        if (
          doi.includes('zenodo') ||
          doi.includes('figshare') ||
          doi.includes('10.13140/RG.2.2.15289.39522')
        ) {
          continue
        }

        if (d.pub.year && !process.env.ALL_CITATIONS) {
          continue
        }
        console.log(i + '/' + data.tools.length, 'doi', doi)
        const url = doi.startsWith('http') ? doi : 'https://doi.org/' + doi
        const json = await fetchJSON(url, {
          headers: { Accept: 'application/json' },
        })

        d.pub.year = +json.published['date-parts'][0][0]
        d.pub.citations = +json['is-referenced-by-count']
      }
    } catch (e) {
      console.error('got error, not retrying', e)
    }
  }
  fs.writeFileSync('TOOLS.json', JSON.stringify(data, null, 2))
})()
