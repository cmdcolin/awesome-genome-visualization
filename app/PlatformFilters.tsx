import { Tool } from '@/lib/api'

interface Filter {
  interactive?: string
  tag?: string
  language?: string
  platform?: string
}

export default function PlatformFilters({
  tools,
  setFilters,
  filters,
}: {
  tools: Tool[]
  filters: Filter
  setFilters: (arg: Filter) => void
}) {
  const platform = new Set<string>()
  tools.forEach(tool => {
    tool.platform?.forEach(cat => platform.add(cat))
  })
  return (
    <div className="form-group">
      <label htmlFor="platform-select">Filter on platform: </label>
      <select
        value={filters.platform || ''}
        id="platform-select"
        onChange={event =>
          setFilters({ ...filters, platform: event.target.value })
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
