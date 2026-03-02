import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  integrations: [react()],
  base: '/awesome-genome-visualization',
  vite: {
    plugins: [tailwindcss()],
  },
})
