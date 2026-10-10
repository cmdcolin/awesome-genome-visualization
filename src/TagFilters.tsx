import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'
import { facetOrder, splitTag } from './facets'

export default function TagFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const { tag = '' } = filters

  const counts = new Map<string, number>()
  for (const tool of tools) {
    for (const t of tool.tags ?? []) {
      counts.set(t, (counts.get(t) ?? 0) + 1)
    }
  }
  const byFacet = new Map<string, [string, number][]>()
  for (const entry of [...counts].sort((a, b) => a[0].localeCompare(b[0]))) {
    const { facet } = splitTag(entry[0])
    byFacet.set(facet, [...(byFacet.get(facet) ?? []), entry])
  }

  const option = ([t, n]: [string, number]) => (
    <option key={t} value={t}>
      {t} ({n})
    </option>
  )

  return (
    <div className={styles.group}>
      <label htmlFor="tag-select" className={styles.labelWithSelect}>
        Filter on tag:{' '}
      </label>
      <div className={styles.controls}>
        <select
          id="tag-select"
          className={styles.select}
          value={tag}
          onChange={event => {
            store.setFilters({ ...filters, tag: event.target.value })
          }}
        >
          <option value="">-- select an option --</option>
          {facetOrder
            .filter(facet => byFacet.has(facet))
            .map(facet => (
              <optgroup key={facet} label={facet}>
                {byFacet.get(facet)?.map(option)}
              </optgroup>
            ))}
        </select>
        <Button
          onClick={() => {
            store.setFilters({ ...filters, tag: undefined })
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  )
}
