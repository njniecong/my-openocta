export const DEFAULT_DEV_GATEWAY_PROXY_TARGET = "http://127.0.0.1:18900";
export const DEV_GATEWAY_WS_PATH = "/gateway-ws";

export function normalizeDevGatewayProxyTarget(input: string | undefined): string {
  const trimmed = input?.trim();
  return (trimmed || DEFAULT_DEV_GATEWAY_PROXY_TARGET).replace(/\/+$/, "");
}
