import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'
import { facetLabels, facetOrder, splitTag, tagLabel } from './facets'

const quickPicks: [string, string][] = [
  ['Genome browsers', 'kind:Genome browser'],
  ['Comparative', 'field:Comparative genomics'],
  ['Dotplots', 'view:Dotplot'],
  ['MSA', 'data:MSA'],
  ['Genome graphs', 'data:Genome graph'],
  ['Terminal', 'ui:Terminal'],
]

function TagSelect({ tools }: { tools: Tool[] }) {
  const tags = useAppStore(s => s.tags)
  const addTag = useAppStore(s => s.addTag)

  const counts = new Map<string, number>()
  for (const tool of tools) {
    for (const t of tool.tags ?? []) {
      if (!tags.includes(t)) {
        counts.set(t, (counts.get(t) ?? 0) + 1)
      }
    }
  }
  const byFacet = new Map<string, [string, number][]>()
  for (const entry of [...counts].toSorted((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    const { facet } = splitTag(entry[0])
    byFacet.set(facet, [...(byFacet.get(facet) ?? []), entry])
  }

  return (
    <select
      id="tag-select"
      className={styles.select}
      value=""
      onChange={event => {
        addTag(event.target.value)
      }}
    >
      <option value="">
        {tags.length ? 'Narrow further…' : 'Choose a tag…'}
      </option>
      {facetOrder
        .filter(facet => byFacet.has(facet))
        .map(facet => (
          <optgroup key={facet} label={facetLabels[facet]}>
            {byFacet.get(facet)?.map(([t, n]) => (
              <option key={t} value={t}>
                {splitTag(t).value} ({n})
              </option>
            ))}
          </optgroup>
        ))}
    </select>
  )
}

export default function TagFilters({ tools }: { tools: Tool[] }) {
  const tags = useAppStore(s => s.tags)
  const query = useAppStore(s => s.query)
  const setTags = useAppStore(s => s.setTags)
  const removeTag = useAppStore(s => s.removeTag)
  const setQuery = useAppStore(s => s.setQuery)

  return (
    <div className={styles.panel}>
      <div className={styles.row}>
        <label htmlFor="search" className={styles.label}>
          Search
        </label>
        <input
          id="search"
          type="search"
          className={styles.search}
          placeholder="Name, note or tag"
          value={query}
          onChange={event => {
            setQuery(event.target.value)
          }}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="tag-select" className={styles.label}>
          Filter
        </label>
        <TagSelect tools={tools} />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Popular</span>
        <div className={styles.wrap}>
          {quickPicks.map(([label, tag]) => (
            <Button
              key={tag}
              onClick={() => {
                setTags([tag])
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      {tags.length ? (
        <div className={styles.row}>
          <span className={styles.label}>Active</span>
          <div className={styles.wrap}>
            {tags.map(tag => (
              <button
                key={tag}
                type="button"
                className={styles.chip}
                aria-label={`Remove filter ${tagLabel(tag)}`}
                onClick={() => {
                  removeTag(tag)
                }}
              >
                {tagLabel(tag)} <span aria-hidden="true">×</span>
              </button>
            ))}
            <Button
              onClick={() => {
                setTags([])
                setQuery('')
              }}
            >
              Clear all
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
