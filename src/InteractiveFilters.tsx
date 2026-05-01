import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'

export default function InteractiveFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const { interactive = '' } = filters
  const interactives = new Set<string>()
  for (const tool of tools) {
    if (tool.interactive) {
      for (const cat of tool.interactive) {
        interactives.add(cat)
      }
    }
  }
  return (
    <div className={styles.group}>
      <label htmlFor="interactive-select" className={styles.labelWithSelect}>Filter on interactivity: </label>
      <div className={styles.controls}>
        <select
          value={interactive}
          id="interactive-select"
          className={styles.select}
          onChange={event => {
            store.setFilters({
              ...filters,
              interactive: event.target.value,
            })
          }}
        >
          <option value="">-- select an option --</option>
          {[...interactives].sort().map(tag => (
            <option key={tag} id={tag}>
              {tag}
            </option>
          ))}
        </select>
        <Button
          onClick={() => {
            store.setFilters({ ...filters, interactive: undefined })
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  )
}
