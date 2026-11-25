import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'
import { facetLabels, facetOrder, splitTag, tagLabel } from './facets'

export function SearchInput() {
  const query = useAppStore(s => s.query)
  const setQuery = useAppStore(s => s.setQuery)
  return (
    <input
      id="search"
      type="search"
      aria-label="Search tools"
      className={`${styles.control} ${styles.search}`}
      placeholder="Search name, note or tag"
      value={query}
      onChange={event => {
        setQuery(event.target.value)
      }}
    />
  )
}

export function TagSelect({ tools }: { tools: Tool[] }) {
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
      aria-label="Filter by tag"
      className={styles.control}
      value=""
      onChange={event => {
        addTag(event.target.value)
      }}
    >
      <option value="">
        {tags.length ? 'Narrow further…' : 'Filter by tag…'}
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

export function ActiveTags() {
  const tags = useAppStore(s => s.tags)
  const setTags = useAppStore(s => s.setTags)
  const removeTag = useAppStore(s => s.removeTag)
  const setQuery = useAppStore(s => s.setQuery)

  return tags.length ? (
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
  ) : null
}
