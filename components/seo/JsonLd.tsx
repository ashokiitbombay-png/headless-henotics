import React from "react";
import { siteConfig } from "@/config/site";

// Helper to format slugs (e.g., "ct-scan" -> "Ct Scan")
const formatText = (text: string) => {
  if (!text) return "";
  return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

interface JsonLdProps {
  service: string;
  region: string;
  locality: string;
}

export function JsonLd({ service, region, locality }: JsonLdProps) {
  const formattedService = formatText(service);
  const formattedLocality = formatText(locality);
  const formattedRegion = formatText(region);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": `${formattedService} in ${formattedLocality}, ${formattedRegion} | ${siteConfig.name}`,
    "description": `Top-rated ${formattedService} services in ${formattedLocality}, ${formattedRegion}. Book your appointment today with ${siteConfig.name}.`,
    "image": siteConfig.image,
    "url": `${siteConfig.url}/${service}/${region}/${locality}/`,
    "telephone": siteConfig.phone,
    "priceRange": siteConfig.priceRange,
    "provider": {
      "@type": "MedicalOrganization",
      "name": siteConfig.name,
      "image": siteConfig.image
    },
    "areaServed": {
      "@type": "City",
      "name": formattedLocality,
      "containedInPlace": {
        "@type": "State",
        "name": "Maharashtra"
      }
    },
    "address": {
      "@type": "PostalAddress",
      // We use the corporate street address, but dynamically update the Locality!
      "streetAddress": siteConfig.address.streetAddress,
      "addressLocality": formattedLocality,
      "addressRegion": "Maharashtra",
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.addressCountry
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}