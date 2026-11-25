import {
  fetchJSON,
  readTOOLS,
  writeTOOLS,
  pLimit,
  sleep,
  getRawDoi,
} from './util.ts'

interface CSL {
  issued?: { 'date-parts': number[][] }
  'is-referenced-by-count'?: number
}

interface DataCite {
  data: { attributes: { citationCount: number } }
}

const userAgent =
  'Awesome-Genome-Visualization/1.0 (https://github.com/GMOD/awesome-genome-visualization; mailto:colin.diesh@gmail.com)'

async function getCitations(doi: string) {
  const csl: CSL = await fetchJSON(`https://doi.org/${doi}`, {
    headers: {
      Accept: 'application/vnd.citationstyles.csl+json',
      'User-Agent': userAgent,
    },
  })
  const year = csl.issued?.['date-parts'][0]?.[0]
  const crossrefCount = csl['is-referenced-by-count']
  const datacite: DataCite | undefined =
    crossrefCount === undefined
      ? await fetchJSON(`https://api.datacite.org/dois/${doi}`, {
          headers: { 'User-Agent': userAgent },
        })
      : undefined
  return {
    year,
    citations: crossrefCount ?? datacite?.data.attributes.citationCount,
  }
}

const data = readTOOLS()
const pubs = data.tools.flatMap(tool => (tool.pub ? [tool.pub] : []))
const failed: string[] = []
const limit = pLimit(3)

await Promise.all(
  pubs.map((pub, i) =>
    limit(async () => {
      const doi = getRawDoi(pub.doi)
      await sleep(500)
      console.log(`${i + 1}/${pubs.length} ${doi}`)
      try {
        const { year, citations } = await getCitations(doi)
        if (year === undefined || citations === undefined) {
          failed.push(`${doi}: no year or citation count`)
        } else {
          pub.year = year
          pub.citations = citations
        }
      } catch (e) {
        failed.push(`${doi}: ${String(e).slice(0, 200)}`)
      }
    }),
  ),
)

writeTOOLS(data)

if (failed.length) {
  console.log(`\nFailed: ${failed.length}\n${failed.join('\n')}`)
}
console.log(`\nUpdated ${pubs.length - failed.length}/${pubs.length} DOIs`)
