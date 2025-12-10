# Contributing guidelines

This file loosely follows on the tradition of "awesome lists"
https://github.com/sindresorhus/awesome/blob/master/contributing.md

I will basically incorporate any suggestion and the definition of a genome
visualization is pretty loose

The README on the github website is automatically generated from TOOLS.json. If
you want, you can submit a PR against the README.md format, but I'd prefer if
you update the TOOLS.json with your tool, and add a picture to the public/
folder too!

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
