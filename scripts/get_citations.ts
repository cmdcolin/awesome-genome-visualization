import fs from 'fs'
import { fetchJSON, readTOOLS, pLimit, sleep, getRawDoi } from './util.ts'

const data = readTOOLS()

;(async () => {
  const limit = pLimit(3)
  const tasks = data.tools.map((d, i) =>
    limit(async () => {
      try {
        if (!d.pub || (d.pub.year && !process.env.ALL_CITATIONS)) {
          return
        }
        const rawDoi = getRawDoi(d.pub.doi)
        if (
          rawDoi.includes('zenodo') ||
          rawDoi.includes('figshare') ||
          rawDoi.includes('10.13140/RG.2.2.15289.39522')
        ) {
          return
        }

        await sleep(500)
        console.log(`${i}/${data.tools.length} doi ${rawDoi}`)

        const headers = {
          Accept: 'application/json',
          'User-Agent':
            'Awesome-Genome-Visualization/1.0 (https://github.com/GMOD/awesome-genome-visualization; mailto:colin.diesh@gmail.com)',
        }

        if (rawDoi.startsWith('10.48550')) {
          const json = await fetchJSON(
            `https://api.datacite.org/dois/${rawDoi}`,
            { headers },
          )
          d.pub.year = +json.data.attributes.publicationYear
          d.pub.citations = +json.data.attributes.citationCount
        } else {
          const json = await fetchJSON(`https://doi.org/${rawDoi}`, { headers })
          d.pub.year = +json.published['date-parts'][0][0]
          d.pub.citations = +json['is-referenced-by-count']
        }
      } catch (e) {
        console.error('DOI failed', d.pub?.doi, e)
      }
    }),
  )

  await Promise.all(tasks)
  fs.writeFileSync('TOOLS.json', JSON.stringify(data, null, 2))
})()
