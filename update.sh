#!/bin/bash
identify -format "%f %wx%h\n" public/*.jpg public/*.jpeg public/*.png > dims.txt
yarn tsx scripts/get_dimensions.ts
yarn tsx scripts/get_citations.ts
yarn tsx scripts/get_stars.ts
npx prettier --write TOOLS.json
