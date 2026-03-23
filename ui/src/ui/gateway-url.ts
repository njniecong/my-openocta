/**
 * Gateway URL utilities.
 * Storage stores gatewayHost as "IP:Port" (e.g. "127.0.0.1:18900").
 * Use these helpers to build WebSocket and HTTP URLs.
 */

import {
  DEFAULT_DEV_GATEWAY_PROXY_TARGET,
  DEV_GATEWAY_WS_PATH,
  normalizeDevGatewayProxyTarget,
} from "./dev-gateway-config.js";

function isDevRuntime(): boolean {
  return Boolean(import.meta.env.DEV);
}

function currentHttpOrigin(): string {
  return typeof location !== "undefined" ? location.origin : "";
}

function currentWebSocketOrigin(): string {
  if (typeof location === "undefined") {
    return "";
  }
  const proto = location.protocol === "https:" ? "wss" : "ws";
  return `${proto}://${location.host}`;
}

export function devGatewayProxyTarget(): string {
  return normalizeDevGatewayProxyTarget(import.meta.env.VITE_GATEWAY_PROXY_TARGET);
}

export function defaultGatewayHost(): string {
  if (isDevRuntime()) {
    return parseGatewayHost(devGatewayProxyTarget());
  }
  if (typeof location !== "undefined") {
    return location.host;
  }
  return parseGatewayHost(DEFAULT_DEV_GATEWAY_PROXY_TARGET);
}

/**
 * Parse input to host:port format.
 * Accepts: "127.0.0.1:18900", "http://127.0.0.1:18900", "ws://127.0.0.1:18900"
 */
export function parseGatewayHost(input: string): string {
  const v = (input ?? "").trim();
  if (!v) return "";
  const m = v.match(/^(?:(?:https?|wss?):\/\/)?([^/]+?)(?:\/|$)/);
  if (m) return m[1];
  return v;
}

/**
 * Build WebSocket URL from host:port.
 * Uses ws:// or wss:// based on current page protocol.
 */
export function gatewayWebSocketUrl(host: string): string {
  if (isDevRuntime()) {
    const origin = currentWebSocketOrigin();
    return origin ? `${origin}${DEV_GATEWAY_WS_PATH}` : "";
  }
  const h = parseGatewayHost(host);
  if (!h) return "";
  const proto = typeof location !== "undefined" && location.protocol === "https:" ? "wss" : "ws";
  return `${proto}://${h}`;
}

/**
 * Build HTTP base URL from host:port.
 * Uses http:// or https:// based on current page protocol.
 */
export function gatewayHttpBase(host: string): string {
  if (isDevRuntime()) {
    return currentHttpOrigin();
  }
  const h = parseGatewayHost(host);
  if (!h) return "";
  const proto = typeof location !== "undefined" && location.protocol === "https:" ? "https" : "http";
  return `${proto}://${h}`;
}
