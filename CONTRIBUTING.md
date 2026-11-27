# Contributing guidelines

This file loosely follows on the tradition of "awesome lists"
https://github.com/sindresorhus/awesome/blob/master/contributing.md

I will basically incorporate any suggestion and the definition of a genome
visualization is pretty loose

The README on the github website is automatically generated from TOOLS.json. If
you want, you can submit a PR against the README.md format, but I'd prefer if
you update the TOOLS.json with your tool, and add a picture to the public/
folder too!

## Tags

Every tag is `facet:Value`. The facet list is closed; values are free-form.
`pnpm check-tags` enforces the rules below.

| Facet      | Answers                     | Examples                                            |
| ---------- | --------------------------- | --------------------------------------------------- |
| `kind`     | what sort of tool it is     | Genome browser                                      |
| `task`     | what you use it for         | Assembly QC, Variant interpretation                 |
| `data`     | what it shows               | Read alignment, SV, Synteny, Signal track           |
| `view`     | what the picture looks like | Dotplot, Circular, Ideogram, Sashimi                |
| `field`    | research area               | Comparative genomics, Cancer, Plant, Human genetics |
| `ui`       | how you interact            | Static (image or SVG output), Terminal              |
| `license`  | terms of use                | Commercial, Academic                                |
| `status`   | whether it is alive         | Deadlink, Historical, Unavailable                   |
| `with`     | what it plugs into          | JBrowse, HiGlass, UCSC                              |
| `platform` | where it runs               | Web, Desktop, CLI, Portal, Mobile                   |
| `stack`    | language or framework       | Python, R, JS, ggplot2                              |

- `kind`, `task`, `data`, `view` and `field` are content tags. The first tag
  must be one, and the README files the tool under it. Put flag tags last.
- Use singular nouns and sentence case. Proper names keep their case.
- Use at most four content tags.
- `field:Comparative genomics` is the umbrella for cross-genome tools.
  `data:Synteny`, `data:Whole-genome alignment`, `data:Multi-way synteny`,
  `data:Pangenome` and `data:Gene order` all need it. List it after the specific
  tags, so the README files the tool under the specific one.
- `src/tagRemap.json` maps the pre-prefix tag names to the current ones, so old
  `?tag=` links keep working.

On the website, selected tags in the same facet combine with OR (Web or Desktop)
and tags in different facets combine with AND. `stack` shows as "Built with",
and `status` tags show as a badge on the card. The "Hide dead or archived"
toggle hides tools tagged `status:Deadlink`, `Unavailable`, `Archived` or
`Historical`.

## Notes

A tool's `note` is plain text. Bare URLs become links and `code` in backticks
renders as code. Other markdown, such as `**bold**` or `[text](url)`, shows
literally.

## Deploying

Push to `main`. The Deploy workflow builds the site and publishes it to GitHub
Pages.

## Updating README.md

    pnpm readme

The Update README workflow also regenerates it on push.

## Automatically update TOOLS.json

update.sh refreshes the citation count and year of every pub, the GitHub stars
of every repo, and the width/height of every image, then formats TOOLS.json

    ./update.sh

It authenticates to GitHub with `GITHUB_TOKEN` if set, otherwise with
`gh auth token`. get_stars.ts also lists repos that were not found, were renamed
or transferred, are archived without a `status:` tag, or have a GitHub-detected
license or language but no `license:` or `stack:` tag, for a curator to fix by
hand.

The Refresh stars and citations workflow refreshes stars and citations on the
first of every month and commits the result.
