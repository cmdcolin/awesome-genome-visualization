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

## Deploying

    cd awesome-genome-visualization
    yarn deploy

## Updating README.md

    node index.js > README.md

## Automatically update TOOLS.json

The update.sh will get citation count, year, github stars, and calculate the
width/height on images and update the TOOLS.json appropriately

    GITHUB_AUTH=yourtokenhere ./update.sh

You can also refresh all github star and citation counts

    ALL_STARS=true ALL_CITATIONS=true GITHUB_AUTH=yourtokenhere ./update.sh
