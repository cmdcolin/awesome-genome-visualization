import fs from 'fs'
import fetch from 'node-fetch'

import { setTimeout } from 'timers/promises'

const data = JSON.parse(fs.readFileSync('TOOLS.json', 'utf8'))

;(async () => {
  let timeout = 1000
  let count=0
  for (let i = 0; i < data.tools.length; ) {
    const d = data.tools[i]

    try {
      let github =
        d.pub
      if (!github) {
        console.error('No pub found for', d.name, d.url)
        count++
      }
      else if (undefined&&github) {
        github = github.replace('https://github.com/', '').replace(/\/$/, '')

        console.log(
          i + '/' + data.tools.length,
          'curr waittime',
          timeout,
          'github',
          github,
        )
        const url = `https://api.github.com/repos/${github}`

        const response = await fetch(url, {
          headers: {
            Accept: 'application/json',
            Authorization: `token ${process.env.GITHUB_AUTH}`,
          },
        })
        if (!response.ok) {
          throw new Error(
            `failed ${response.statusText} ${await response.text()}`,
          )
        }
        const { stargazers_count } = await response.json()
        d.github_stars = +stargazers_count
        timeout = 1000
      }
      i++
    } catch (e) {
      console.error('got error, retrying', e)
      await setTimeout(timeout)
      timeout = timeout * 2
      if (timeout >= 4000) {
        i++
      }
    }
  }
  console.log(count,data.tools.length)
  fs.writeFileSync('TOOLS.json', JSON.stringify(data, null, 2))
})()
