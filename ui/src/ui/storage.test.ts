import { afterEach, describe, expect, it, vi } from "vitest";
import { loadSettings } from "./storage.ts";

describe("loadSettings", () => {
  afterEach(() => {
    localStorage.clear();
    vi.unstubAllEnvs();
  });

  it("defaults to the local gateway host in dev", () => {
    const settings = loadSettings();

    expect(settings.gatewayUrl).toBe("127.0.0.1:18900");
  });

  it("parses a custom proxy target host from env", () => {
    vi.stubEnv("VITE_GATEWAY_PROXY_TARGET", "https://gateway.remote.example.com:2443/");

    const settings = loadSettings();

    expect(settings.gatewayUrl).toBe("gateway.remote.example.com:2443");
  });

  it("still prefers a saved gateway host when present", () => {
    localStorage.setItem(
      "openclaw.control.settings.v1",
      JSON.stringify({
        gatewayUrl: "ws://10.0.0.3:28888",
        token: "abc",
      }),
    );

    const settings = loadSettings();

    expect(settings.gatewayUrl).toBe("10.0.0.3:28888");
    expect(settings.token).toBe("abc");
  });
});
