import { promises as fs } from 'fs'
import MainPage from './MainPage'
import { Tool } from '@/lib/api'

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/TOOLS.json', 'utf8')
  const tools = JSON.parse(file) as { tools: Tool[] }
  return <MainPage tools={tools.tools} />
}
