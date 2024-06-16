import fs from 'fs'
import { fetchJSON, readTOOLS } from './util'

const data = readTOOLS()
;(async () => {
  let count = 0
  for (let i = 0; i < data.tools.length; i++) {
    const d = data.tools[i]

    try {
      let github =
        d.github ||
        (d.url?.startsWith('https://github.com') ? d.url : undefined)
      if (!github) {
        console.error('No github found for', d.name, d.url)
        count++
      } else if (github && (process.env.ALL_STARS || !d.github_stars)) {
        github = github.replace('https://github.com/', '').replace(/\/$/, '')

        console.log(i + '/' + data.tools.length, 'github', github)
        const url = `https://api.github.com/repos/${github}`

        const { stargazers_count } = await fetchJSON(url, {
          headers: {
            Accept: 'application/json',
            Authorization: `token ${process.env.GITHUB_AUTH}`,
          },
        })

        d.github_stars = +stargazers_count
      }
    } catch (e) {
      console.error('got error', e)
    }
  }
  console.log(count, data.tools.length)
  fs.writeFileSync('TOOLS.json', JSON.stringify(data, null, 2))
})()
