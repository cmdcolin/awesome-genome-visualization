import { Tool } from '@/lib/api'

interface Filter {
  interactive?: string
  tag?: string
  language?: string
  platform?: string
}

export default function InteractiveFilters({
  tools,
  setFilters,
  filters,
}: {
  tools: Tool[]
  filters: Filter
  setFilters: (argument: Filter) => void
}) {
  const interactive = new Set<string>()
  for (const tool of tools) {
    if (tool.interactive) {
      for (const cat of tool.interactive) {
        interactive.add(cat)
      }
    }
  }
  return (
    <div className="form-group">
      <label htmlFor="interactive-select">Filter on interactivity: </label>
      <select
        value={filters.interactive || ''}
        id="interactive-select"
        onChange={event =>
          setFilters({
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
