import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'

// tags used on fewer tools than this drop into a collapsed "Rare tags" group
const COMMON_TAG_THRESHOLD = 3

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
  const sorted = [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]))
  const common = sorted.filter(([, n]) => n >= COMMON_TAG_THRESHOLD)
  const rare = sorted.filter(([, n]) => n < COMMON_TAG_THRESHOLD)

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
          <optgroup label="Common tags">{common.map(option)}</optgroup>
          <optgroup label={`Rare tags (used on <${COMMON_TAG_THRESHOLD} tools)`}>
            {rare.map(option)}
          </optgroup>
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
