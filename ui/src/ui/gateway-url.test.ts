import { afterEach, describe, expect, it, vi } from "vitest";
import { gatewayHttpBase, gatewayWebSocketUrl, parseGatewayHost } from "./gateway-url.ts";

describe("gateway URL helpers in dev", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("uses the current page origin for HTTP requests", () => {
    vi.stubEnv("VITE_GATEWAY_PROXY_TARGET", "http://10.0.0.8:19900");

    expect(gatewayHttpBase("127.0.0.1:18900")).toBe(window.location.origin);
    expect(gatewayHttpBase("")).toBe(window.location.origin);
  });

  it("uses the current page host for WebSocket proxy requests", () => {
    const proto = window.location.protocol === "https:" ? "wss" : "ws";

    expect(gatewayWebSocketUrl("127.0.0.1:18900")).toBe(
      `${proto}://${window.location.host}/gateway-ws`,
    );
    expect(gatewayWebSocketUrl("")).toBe(`${proto}://${window.location.host}/gateway-ws`);
  });

  it("still parses gateway hosts from configured targets", () => {
    expect(parseGatewayHost("http://127.0.0.1:18900")).toBe("127.0.0.1:18900");
    expect(parseGatewayHost("wss://gateway.example.com/socket")).toBe("gateway.example.com");
  });
});
