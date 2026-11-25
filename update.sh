#!/bin/bash
set -euo pipefail
identify -format "%f %wx%h\n" public/*.jpg public/*.jpeg public/*.png >dims.txt
node --experimental-strip-types scripts/get_dimensions.ts
node --experimental-strip-types scripts/get_citations.ts
node --experimental-strip-types scripts/get_stars.ts
pnpm exec oxfmt TOOLS.json
node --experimental-strip-types scripts/check_tools.ts
