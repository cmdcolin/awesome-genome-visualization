import { type Tool, useAppStore } from './store'

export default function PlatformFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const platform = new Set<string>()
  for (const tool of tools) {
    if (tool.platform) {
      for (const cat of tool.platform) {
        platform.add(cat)
      }
    }
  }
  return (
    <div>
      <label htmlFor="platform-select">Filter on platform: </label>
      <select
        value={filters.platform || ''}
        id="platform-select"
        onChange={event =>
          store.setFilters({ ...filters, platform: event.target.value })
        }
      >
        <option value="">-- select an option --</option>
        {[...platform].sort().map(tag => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  )
}
