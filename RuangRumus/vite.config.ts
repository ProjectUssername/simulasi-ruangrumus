import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), tailwindcss()]
  try {
    const m = await import('./.vite-source-tags.js')
    plugins.push(m.sourceTags())
  } catch {
    /* The optional preview editor is not needed for production. */
  }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_'])
  const processEnvDefines: Record<string, string> = {}
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value)
  }

  return {
    plugins,
    css: { postcss: { plugins: [] } },
    build: {
      rollupOptions: {
        output: { manualChunks: { math: ['katex'], react: ['react', 'react-dom'] } },
      },
    },
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
  }
})
