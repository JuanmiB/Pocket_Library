import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
  // build: {
  //     lib: {
  //     entry: "src/index.ts",
  //     name: "MyLibrary",
  //     fileName: (format) => `my-library.${format}.js`,
  //     },
  //     rollupOptions: {
  //     external: ["react"],
  //     output: {
  //         globals: {
  //         react: "React",
  //         },
  //     },
  //     },
  // },
})
