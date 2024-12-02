import Button from './Button'
import { type Tool, useAppStore } from './store'

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
    <div>
      <label htmlFor="platform-select">Filter on platform: </label>
      <select
        value={platform}
        id="platform-select"
        className="select select-bordered w-full max-w-xs"
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
  )
}
