import Button from './Button'
import { type Tool, useAppStore } from './store'
import styles from './FilterGroup.module.css'

export default function LanguageFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const { language = '' } = filters
  const languages = new Set<string>()
  for (const tool of tools) {
    if (tool.language) {
      for (const cat of tool.language) {
        languages.add(cat)
      }
    }
  }
  return (
    <div className={styles.group}>
      <label htmlFor="language-select" className={styles.labelWithSelect}>Filter on language: </label>
      <div className={styles.controls}>
        <select
          value={language}
          id="language-select"
          className={styles.select}
          onChange={event => {
            store.setFilters({
              ...filters,
              language: event.target.value,
            })
          }}
        >
          <option value="">-- select an option --</option>
          {[...languages].sort().map(tag => (
            <option key={tag} id={tag}>
              {tag}
            </option>
          ))}
        </select>
        <Button
          onClick={() => {
            store.setFilters({ ...filters, language: undefined })
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  )
}
