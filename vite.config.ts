import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Vercel serves from the domain root; GitHub Pages serves under /la-barceloneta/.
// VERCEL=1 is set automatically in Vercel's build environment.
const base = process.env.VERCEL ? '/' : '/la-barceloneta/'

export default defineConfig({
  base,
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Resolver figma:asset para imágenes (Make/Figma)
      'figma:asset': path.resolve(__dirname, './public/images'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
