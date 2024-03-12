import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sass } from '@sveltejs/adapter-static';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sass(),],
})
