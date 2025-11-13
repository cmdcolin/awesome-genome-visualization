import Button from './Button'
import { type Tool, useAppStore } from './store'

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
    <div>
      <label htmlFor="interactive-select">Filter on interactivity: </label>
      <select
        value={interactive}
        id="interactive-select"
        className="select select-bordered w-full max-w-xs"
        onChange={event => {
          store.setFilters({
            ...filters,
            interactive: event.target.value,
          })
        }}
      >
        <option value="">-- select an option --</option>
        {[...interactives].sort().map(item => (
          <option key={item} id={item}>
            {item}
          </option>
        ))}
      </select>
      <Button
        onClick={() => {
          const { interactive, ...rest } = filters
          store.setFilters(rest)
        }}
      >
        Clear
      </Button>
    </div>
  )
}
