import Button from './Button'
import { type Tool, useAppStore, type FilterState } from './store'

interface FilterSelectProps {
  tools: Tool[]
  filterKey: keyof FilterState
  label: string
  getValues: (tool: Tool) => string[] | undefined
}

export default function FilterSelect({
  tools,
  filterKey,
  label,
  getValues,
}: FilterSelectProps) {
  const store = useAppStore()
  const { filters } = store
  const currentValue = filters[filterKey] ?? ''

  const values = new Set<string>()
  for (const tool of tools) {
    const toolValues = getValues(tool)
    if (toolValues) {
      for (const val of toolValues) {
        values.add(val)
      }
    }
  }

  return (
    <div className="form-group">
      <label htmlFor={`${filterKey}-select`}>{label}: </label>
      <select
        id={`${filterKey}-select`}
        className="select select-bordered w-full max-w-xs"
        value={currentValue}
        onChange={event => {
          store.setFilters({
            ...filters,
            [filterKey]: event.target.value,
          })
        }}
      >
        <option value="">-- select an option --</option>
        {[...values].sort().map(value => (
          <option key={value} id={value}>
            {value}
          </option>
        ))}
      </select>
      <Button
        onClick={() => {
          const { [filterKey]: _, ...rest } = filters
          store.setFilters(rest)
        }}
      >
        Clear
      </Button>
    </div>
  )
}
