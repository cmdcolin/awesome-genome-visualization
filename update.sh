#!/bin/bash
cd awesome-genome-visualization/static;
identify -format "%f %wx%h\n" *.jpg *.png > ../../dims.txt
cd ../../
node get_dimensions.js
npx prettier --write TOOLS.json
