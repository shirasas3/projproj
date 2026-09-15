import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/projproj/',   // 👈 replace "repo-name" with your actual GitHub repo name
  plugins: [react()],
})
