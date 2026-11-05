import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind v4 is installed through its official Vite plugin: no
// tailwind.config.js or postcss.config.js is needed. Theme tokens live in
// src/index.css inside an @theme block.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
