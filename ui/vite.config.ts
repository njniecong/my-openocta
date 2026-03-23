import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const here = path.dirname(fileURLToPath(import.meta.url));

function normalizeBase(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    return "/";
  }
  if (trimmed === "./") {
    return "./";
  }
  if (trimmed.endsWith("/")) {
    return trimmed;
  }
  return `${trimmed}/`;
}

export default defineConfig(() => {
  const envBase = process.env.OPENCLAW_CONTROL_UI_BASE_PATH?.trim();
  const base = envBase ? normalizeBase(envBase) : "./";
  return {
    base,
    publicDir: path.resolve(here, "public"),
    optimizeDeps: {
      include: ["lit/directives/repeat.js"],
    },
    build: {
      outDir: path.resolve(here, "../src/embed/frontend"),
      emptyOutDir: true,
      sourcemap: true,
    },
    server: {
      // host: true,
      // port: 5173,
      // strictPort: true,
      proxy: {
        "/api/v1/site": {
          target: "http://192.168.50.254:8080",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/v1\/site/, ""),
        },
        "/api": {
          target: "http://192.168.50.254:8080",
          changeOrigin: true,
          secure: false,
        },
        "/gateway-ws": {
          target: "http://192.168.50.254:18900",
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/gateway-ws(?:\/)?$/, "/"),
        },
      },
    },
  };
});
