# awesome-genome-visualization

## `TOOLS.json` is hand-maintained — never run prettier on it

`TOOLS.json` lives at the root (`src/TOOLS.json` is a symlink to it) and is
written in a custom style: the top two levels are expanded — one tool object per
block, one key per line at 6-space indent — but every array and object **value**
stays inline (`"tags": ["A", "B"]`, `"pub": {"doi": "x", "year": 2018}`). The
file has **no trailing newline**.

It is deliberately not prettier-conformant. `prettier --write TOOLS.json` reflows
it — about +419 lines, expanding every inline array — and buries the semantic
diff that a review actually needs to see.

To edit it programmatically, load with `json.loads`, mutate, then re-serialize
faithfully: per tool emit `    {`, then `      "key": ` + `json.dumps(value,
ensure_ascii=False)` per line, wrapped in `{\n  "tools": [\n` … `\n  ]\n}` with
no trailing newline. A round-trip of the unmodified file should diff clean —
check that before trusting a script that rewrites it.

## The filter axes

Entries are classified along four axes: **tags**, **status**, **language** and
**platform/interactive**. Prefer adding a free-form tag over inventing an
enumerated or numeric scale.
