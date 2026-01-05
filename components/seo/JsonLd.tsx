export function JsonLd({ service, city }: { service: string; city: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `${service} Center in ${city}`,
    "description": `Top rated ${service} services in ${city}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
