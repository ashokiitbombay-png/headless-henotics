const BASE_URL = "https://www.henoticdiagnostics.com";

// Hardcoded constants to remove external dependencies and guarantee build safety
const REGIONS = {
  "mumbai": [
    "colaba", "cuffe-parade", "fort", "churchgate", "marine-lines", "nariman-point", "worli", "parel", "lower-parel", "mahalaxmi", "byculla", "dadar",
    "sion", "kurla", "chembur", "ghatkopar", "vikhroli", "kanjurmarg", "bhandup", "mulund",
    "bandra", "khar", "santacruz", "vile-parle", "andheri", "jogeshwari", "goregaon", "malad", "kandivali", "borivali", "dahisar",
    "kurla-east", "chembur-east", "ghatkopar-east", "vikhroli-east", "mulund-east"
  ],
  "navi-mumbai": [
    "vashi", "sanpada", "juinagar", "nerul", "seawoods", "cbd-belapur", "kharghar", "kamothe", "kalamboli", "panvel", "new-panvel", "taloja", "ghansoli", "kopar-khairane", "airoli", "turbhe"
  ]
};

const SERVICES = [
  "blood-test", "full-body-check-up", "health-checkup",
  "sonography", "ultrasound", "pregnancy-sonography", "obstetric-ultrasound", "anomaly-scan", "nt-scan", "color-doppler", "mammography", "follicular-study",
  "ct-scan", "mri-scan", "pet-scan", "spect-scan", "dtpa-scan", "dexa-bone-scan", "liver-fibroscan", "liver-elastography",
  "2d-echo", "2d-echo-test", "tmt-test", "stress-test", "holter-monitoring",
  "angiography", "angioplasty", "tavr",
  "prenatal-test", "nipt-test", "nips-test", "nippt"
];

export async function GET() {
  const currentDate = new Date().toISOString();

  // 1. Static Pages
  const staticPages = [
    "", 
    "/about-us", 
    "/contact-us"
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 1.0,
  }));

  // 2. Service Hub Pages (e.g., /mri-scan)
  const servicePages = SERVICES.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. Programmatic Region & Locality Pages (e.g., /mri-scan/navi-mumbai/kharghar)
  const locationPages: { url: string; lastModified: string; changeFrequency: string; priority: number }[] = [];
  
  for (const service of SERVICES) {
    for (const [region, localities] of Object.entries(REGIONS)) {
      for (const locality of localities) {
        locationPages.push({
          url: `${BASE_URL}/${service}/${region}/${locality}/`,
          lastModified: currentDate,
          changeFrequency: "weekly",
          priority: 0.8,
        });
      }
    }
  }

  const allPages = [...staticPages, ...servicePages, ...locationPages];

  // 4. Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages.map((page) => `
      <url>
        <loc>${page.url}</loc>
        <lastmod>${page.lastModified}</lastmod>
        <changefreq>${page.changeFrequency}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `).join("")}
  </urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      // Add cache control to ensure Next.js caching doesn't stale the sitemap in production
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}