import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger(), // Removed lovable-tagger
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
