import { readTOOLS } from './util.ts'

const tools = readTOOLS().tools

const seen = new Map<string, number>()
for (const tool of tools) {
  seen.set(tool.name, (seen.get(tool.name) ?? 0) + 1)
}

const duplicates = [...seen.entries()].filter(([, count]) => count > 1)

if (duplicates.length > 0) {
  for (const [name, count] of duplicates) {
    console.error(`Duplicate tool name "${name}" appears ${count} times`)
  }
  process.exit(1)
}
