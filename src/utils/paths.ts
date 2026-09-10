export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Resolves static asset paths taking into account Next.js basePath
 * for GitHub Pages subpath deployments.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
