import React from "react";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Henotic Diagnostics",
    "image": "https://lh3.googleusercontent.com/p/AF1QipNNi77McpTFT3ksGjloBcqV3he235QDZfbaYiCv=s1360-w1360-h1020-rw",
    "@id": "https://www.henoticdiagnostics.com/#medicalclinic",
    "url": "https://www.henoticdiagnostics.com/",
    "telephone": "08879327184",
    "priceRange": "500-15000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Second floor, Millennium Empire, Business Park, Plot No 47, D Mart Rd",
      "addressLocality": "Sector 15, Kharghar, Panvel",
      "addressRegion": "Maharashtra",
      "postalCode": "410210",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.04313094481506,
      "longitude": 73.07794905888657
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/henoticdiagnostics2019/",
      "https://x.com/henoticservices",
      "https://www.instagram.com/henoticdiagnostics2019/",
      "https://www.youtube.com/@HenoticDiagnostics",
      "https://www.linkedin.com/company/14610097/admin/page-posts/published/",
      "https://in.pinterest.com/henoticdiagnostics2019/",
      "https://github.com/ashokiitbombay-png/headless-henotics",
      "https://www.tumblr.com/henotichealthcare",
      "https://www.reddit.com/user/Top_Pen3672/",
      "https://medium.com/@henoticdiagnostics",
      "https://www.peeptown.com/medical-diagnostic-imaging-center/henoticdiagnostics",
      "https://share.google/yRA62stKchzN8uOVe",
      "https://share.google/IcBtvtVjwozCBFMPp",
      "https://maps.google.com/?cid=11779150789147957572"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}