import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test functions like expect, describe, etc.
    environment: 'jsdom', // Simulate a browser-like environment
}
})
