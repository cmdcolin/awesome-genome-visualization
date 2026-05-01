import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'

export default function TagFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const { tag = '' } = filters
  const tags = new Set<string>()
  for (const tool of tools) {
    if (tool.tags) {
      for (const cat of tool.tags) {
        tags.add(cat)
      }
    }
  }
  return (
    <div className={styles.group}>
      <label htmlFor="tag-select" className={styles.labelWithSelect}>Filter on tag: </label>
      <div className={styles.controls}>
        <select
          id="tag-select"
          className={styles.select}
          value={tag}
          onChange={event => {
            store.setFilters({
              ...filters,
              tag: event.target.value,
            })
          }}
        >
          <option value="">-- select an option --</option>
          {[...tags].sort().map(tag => (
            <option key={tag} id={tag}>
              {tag}
            </option>
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
