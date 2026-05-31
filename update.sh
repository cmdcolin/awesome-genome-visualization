#!/bin/bash
identify -format "%f %wx%h\n" public/*.jpg public/*.jpeg public/*.png >dims.txt
node --experimental-strip-types scripts/get_dimensions.ts
node --experimental-strip-types scripts/get_citations.ts
node --experimental-strip-types scripts/get_stars.ts
node --experimental-strip-types scripts/check_duplicates.ts
npx prettier --write TOOLS.json
