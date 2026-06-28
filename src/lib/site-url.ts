import { headers } from "next/headers";

/**
 * The public origin of this site (e.g. "https://acme.com").
 *
 * Prefers NEXT_PUBLIC_SITE_URL when it's set — that's authoritative for a
 * custom domain. Otherwise it derives the origin from the incoming request,
 * so the site is correct on a *.workers.dev dev link with zero config and
 * needs no rebuild or env change when the domain changes. Falls back to
 * localhost only when no request context is available (e.g. at build time).
 *
 * Use this instead of reading process.env.NEXT_PUBLIC_SITE_URL directly in
 * server code that produces absolute URLs (sitemap, robots, canonical, OG).
 */
export async function getSiteUrl(): Promise<string> {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    if (host) {
      const proto =
        h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
      return `${proto}://${host}`;
    }
  } catch {
    // headers() is unavailable outside a request scope (e.g. build time).
  }

  return "http://localhost:3000";
}
