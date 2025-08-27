import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Mern-food-delivery/', // match the subdirectory
  plugins: [react()],
})
;