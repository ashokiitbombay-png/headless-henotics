export function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://henoticdiagnostics.com/sitemap.xml`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
