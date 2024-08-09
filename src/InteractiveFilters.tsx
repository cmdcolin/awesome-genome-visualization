import { type Tool, useAppStore } from './store'

export default function InteractiveFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const interactive = new Set<string>()
  for (const tool of tools) {
    if (tool.interactive) {
      for (const cat of tool.interactive) {
        interactive.add(cat)
      }
    }
  }
  return (
    <div>
      <label htmlFor="interactive-select">Filter on interactivity: </label>
      <select
        value={filters.interactive || ''}
        id="interactive-select"
        onChange={event =>
          store.setFilters({
            ...filters,
            interactive: event.target.value,
          })
        }
      >
        <option value="">-- select an option --</option>
        {[...interactive].sort().map(tag => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  )
}
