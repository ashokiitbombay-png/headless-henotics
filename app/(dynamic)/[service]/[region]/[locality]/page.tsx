import React from 'react';

// --- DATA FOR STATIC GENERATION ---
// We define all possible combinations here so Next.js can pre-build them.
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

// --- NEXT.JS STATIC PARAMS GENERATOR ---
export async function generateStaticParams() {
  const params: { service: string; region: string; locality: string }[] = [];

  for (const service of SERVICES) {
    for (const [region, localities] of Object.entries(REGIONS)) {
      for (const locality of localities) {
        params.push({ service, region, locality });
      }
    }
  }
  
  return params;
}

// --- COMPONENT PROPS ---
interface LocalityPageProps {
  params: Promise<{
    service: string;
    region: string;
    locality: string;
  }>;
}

// --- MAIN COMPONENT ---
export default async function LocalityPage({ params }: LocalityPageProps) {
  // Await the parameters (Next.js 15+ requirement)
  const resolvedParams = await params;
  const { service, region, locality } = resolvedParams;

  // Formatting helper
  const formatText = (text: string) => {
    if (!text) return '';
    return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <main className="p-8">
      <h1>Diagnostic Services in {formatText(locality)}</h1>
      <div className="mt-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <ul className="space-y-2">
          <li><strong>Service:</strong> {formatText(service)}</li>
          <li><strong>Region:</strong> {formatText(region)}</li>
          <li><strong>Locality:</strong> {formatText(locality)}</li>
        </ul>
      </div>
      
      {/* 
        You can now safely fetch data from your CMS or Database here 
        using the 'service' and 'locality' variables! 
      */}
    </main>
  );
}