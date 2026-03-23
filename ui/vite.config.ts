import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import { DEV_GATEWAY_WS_PATH, normalizeDevGatewayProxyTarget } from "./src/ui/dev-gateway-config.js";

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

function toWebSocketTarget(input: string): string {
  return input.replace(/^http/i, "ws");
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, here, "");
  const envBase = process.env.OPENCLAW_CONTROL_UI_BASE_PATH?.trim();
  const proxyTarget = normalizeDevGatewayProxyTarget(env.VITE_GATEWAY_PROXY_TARGET);
  const proxyWsTarget = toWebSocketTarget(proxyTarget);
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
    // server: {
    //   host: true,
    //   port: 5173,
    //   strictPort: true,
    // },
    server: {
      proxy: {
        "/api": {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
        },
        [DEV_GATEWAY_WS_PATH]: {
          target: proxyWsTarget,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (requestPath) => requestPath.replace(/^\/gateway-ws(?:\/)?$/, "/"),
        },
      },
    },
  };
});
