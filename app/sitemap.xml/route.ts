import { serviceSlugs, citySlugs } from "@/lib/constants";

const BASE_URL = "https://henoticdiagnostics.com";

export async function GET() {
  // 1. Static Pages
  const staticPages = [
    "", 
    "/about-us", 
    "/contact-us"
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 1.0,
  }));

  // 2. Service Hub Pages (e.g., /mri-scan)
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. Programmatic City Pages (e.g., /mri-scan/kharghar)
  // We limit this to top 1000 to avoid timeouts, or split into multiple sitemaps
  let cityPages: any[] = [];
  serviceSlugs.forEach((service) => {
    citySlugs.forEach((city) => {
      cityPages.push({
        url: `${BASE_URL}/${service}/${city}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  // 4. Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticPages, ...servicePages, ...cityPages]
      .map((page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `)
      .join("")}
  </urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
