import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // 👈 enables JSX transform + React Fast Refresh
    tailwindcss(),  // 👈 Tailwind plugin
  ],
  server:{port:5173}
})


