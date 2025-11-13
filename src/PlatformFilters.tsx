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
        {[...platforms].sort().map(plat => (
          <option key={plat} id={plat}>
            {plat}
          </option>
        ))}
      </select>
      <Button
        onClick={() => {
          const { platform, ...rest } = filters
          store.setFilters(rest)
        }}
      >
        Clear
      </Button>
    </div>
  )
}
