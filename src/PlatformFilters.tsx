import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'

export default function PlatformFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const { platform = '' } = filters
  const platforms = new Set<string>()
  for (const tool of tools) {
    if (tool.platform) {
      for (const cat of tool.platform) {
        platforms.add(cat)
      }
    }
  }
  return (
    <div className={styles.group}>
      <label htmlFor="platform-select" className={styles.labelWithSelect}>Filter on platform: </label>
      <div className={styles.controls}>
        <select
          value={platform}
          id="platform-select"
          className={styles.select}
          onChange={event => {
            store.setFilters({
              ...filters,
              platform: event.target.value,
            })
          }}
        >
          <option value="">-- select an option --</option>
          {[...platforms].sort().map(tag => (
            <option key={tag} id={tag}>
              {tag}
            </option>
          ))}
        </select>
        <Button
          onClick={() => {
            store.setFilters({ ...filters, platform: undefined })
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  )
}
