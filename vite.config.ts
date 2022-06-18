import { defineConfig } from 'vite'
import { optimizeCss } from "carbon-preprocess-svelte";
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), optimizeCss()],
  build: {
    cssCodeSplit: true,
    target: "es6",
    manifest: true,
    ssrManifest: true,
    rollupOptions: {
      treeshake: true,
    }
  },
  server: {
    port: 5309,
  },
  esbuild: {
    sourcemap: true,
    treeShaking: true
  }
})
