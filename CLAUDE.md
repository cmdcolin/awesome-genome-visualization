# awesome-genome-visualization

## `TOOLS.json` is prettier-formatted

`TOOLS.json` lives at the root (`src/TOOLS.json` is a symlink to it). Edit it
programmatically with `json.load`, mutate,
`json.dump(..., indent=2, ensure_ascii=False)`, then run
`npx prettier --write TOOLS.json`. A round-trip of the unmodified file should
diff clean.

## The filter axes

Every axis is a `facet:Value` tag (see `CONTRIBUTING.md`): content (`kind`,
`task`, `data`, `view`, `field`) plus `ui`, `license`, `status`, `with`,
`platform` and `stack`. Prefer adding a free-form tag value over inventing an
enumerated or numeric scale. `pnpm check-tags` enforces the rules, and
`pnpm check-tools` rejects unknown keys and missing images.
