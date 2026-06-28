/**
 * GET /robots.txt — Search engine crawler directives
 */

import { getSiteUrl } from "@/lib/site-url";

export async function GET() {
  const SITE_URL = await getSiteUrl();
  const body = `# Digital Home
# ${SITE_URL}

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# AI crawlers — welcome
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# LLMs
# See also: ${SITE_URL}/llms.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
