import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/MohummadRafique0/budget-tracker",
  plugins: [react()],
  build: {
    outDir: "dist", // Default Vite output directory
  },
});
