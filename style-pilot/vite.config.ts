import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure we are building for relative paths if needed, though Vercel usually handles root.
  base: '/',
  build: {
    outDir: 'dist',
  }
})