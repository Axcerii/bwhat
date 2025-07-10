import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // ou 'node' si tu ne testes pas le DOM
  }
})