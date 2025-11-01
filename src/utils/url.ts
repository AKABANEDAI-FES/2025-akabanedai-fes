import "server-only";
import path from "node:path";
import nextConfig from "../../next.config";

export function buildPath(pathname: string): string {
  const basePath = nextConfig?.basePath || "";
  return path.join(basePath, pathname);
}
