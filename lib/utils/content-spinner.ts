export function spinContent(service: string, city: string) {
  const templates = [
    `Looking for the best ${service} in ${city}? We offer affordable rates.`,
    `Top-rated ${service} centers near you in ${city}. Book an appointment today.`,
    `Verified ${service} labs in ${city} with instant reporting.`,
  ];
  // Simple hash to pick a consistent variation per city
  const index = (service.length + city.length) % templates.length;
  return templates[index];
}

export function formatSlug(slug: string) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
