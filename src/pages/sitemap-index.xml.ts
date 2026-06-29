import type { APIRoute } from "astro";
import { guides, productPages, site } from "@data/site";

const staticPages = [
  "/",
  "/ratgeber/",
  "/impressum/",
  "/datenschutz/",
  "/affiliate-hinweis/",
  "/sitemap/",
];

const urls = [
  ...staticPages,
  ...Object.values(productPages).map((page) => page.href),
  ...guides.map((guide) => guide.href),
];

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = new URL(path, site.url).toString();
    const priority = path === "/" ? "1.0" : path.startsWith("/ratgeber") ? "0.7" : "0.8";
    return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
