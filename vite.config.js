import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ IMPORTANT: Use your GitHub repo name here
export default defineConfig({
  base: '/E-commerce-app/',
  plugins: [react()],
})