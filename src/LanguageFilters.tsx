import { type Tool, useAppStore } from './store'

export default function LanguageFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const languages = new Set<string>()
  for (const tool of tools) {
    if (tool.language) {
      for (const cat of tool.language) {
        languages.add(cat)
      }
    }
  }
  return (
    <div>
      <label htmlFor="language-select">Filter on language: </label>
      <select
        value={filters.language || ''}
        id="language-select"
        onChange={event =>
          store.setFilters({ ...filters, language: event.target.value })
        }
      >
        <option value="">-- select an option --</option>
        {[...languages].sort().map(tag => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  )
}
