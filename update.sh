#!/bin/bash
identify -format "%f %wx%h\n" public/*.jpg public/*.jpeg public/*.png > dims.txt
node scripts/get_dimensions.js
node scripts/get_citations.js
node scripts/get_stars.js
npx prettier --write TOOLS.json
