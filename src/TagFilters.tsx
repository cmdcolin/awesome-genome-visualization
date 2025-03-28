import Button from './Button'
import { type Tool, useAppStore } from './store'

export default function TagFilters({ tools }: { tools: Tool[] }) {
  const store = useAppStore()
  const { filters } = store
  const { tag = '' } = filters
  const tags = new Set<string>()
  for (const tool of tools) {
    if (tool.tags) {
      for (const cat of tool.tags) {
        tags.add(cat)
      }
    }
  }
  return (
    <div className="form-group">
      <label htmlFor="tag-select">Filter on tag: </label>
      <select
        id="tag-select"
        className="select select-bordered"
        value={tag}
        onChange={event => {
          store.setFilters({
            ...filters,
            tag: event.target.value,
          })
        }}
      >
        <option value="">-- select an option --</option>
        {[...tags].sort().map(tag => (
          <option key={tag} id={tag}>
            {tag}
          </option>
        ))}
      </select>
      <Button
        onClick={() => {
          store.setFilters({ ...filters, tag: undefined })
        }}
      >
        Clear
      </Button>
    </div>
  )
}
