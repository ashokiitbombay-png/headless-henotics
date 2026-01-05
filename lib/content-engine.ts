import { companyDetails } from "@/lib/constants";
import { petScanContent } from "./services/pet-scan";
import { angiographyContent } from "./services/angiography";
import { fetalMedicineContent } from "./services/fetal-medicine";
import { niptContent } from "./services/nipt-genetics";
import { mammographyContent } from "./services/mammography";
import { angioplastyContent } from "./services/angioplasty";

// --- Global Type Definition ---
export interface ServiceContent {
  title: string;
  scientificDesc: string;
  imagingContext: string;
  procedure: { title: string; desc: string }[];
  prerequisites: string[];
  pricing: { name: string; price: string; features: string[] }[];
  preparation: string[];
  fasting: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  techSpecs: string;
  turnaround: string;
}

export function getServiceContent(slug: string, city: string): ServiceContent {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const serviceName = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  // 1. ROUTING LOGIC
  if (slug.includes("pet-scan")) return petScanContent(cityName);
  if (slug.includes("angiography")) return angiographyContent(cityName);
  if (slug.includes("angioplasty")) return angioplastyContent(cityName);
  if (slug.includes("mammography")) return mammographyContent(cityName);
  
  // Group Routing: NIPT/Genetics
  if (slug.includes("nipt") || slug.includes("prenatal") || slug.includes("nips")) {
    return niptContent(cityName);
  }

  // Group Routing: Fetal Medicine / Ultrasound
  if (
    slug.includes("pregnancy") || 
    slug.includes("anomaly") || 
    slug.includes("nt-scan") || 
    slug.includes("doppler") || 
    slug.includes("follicular") ||
    slug.includes("obstetric")
  ) {
    return fetalMedicineContent(slug, cityName);
  }

  // 2. FALLBACK (Generic Logic)
  let content: ServiceContent = {
    title: `${serviceName} in ${cityName}`,
    scientificDesc: `High-precision ${serviceName} using advanced diagnostic protocols.`,
    imagingContext: "Digital imaging with high-resolution output for detailed study.",
    procedure: [
      { title: "Registration", desc: "Digital registration." },
      { title: "Procedure", desc: "Performed by certified technicians." },
      { title: "Analysis", desc: "Reviewed by specialists." }
    ],
    prerequisites: ["Doctor's Prescription"],
    pricing: [{ name: "Standard", price: "Call for Price", features: ["Report", "Consultation"] }],
    preparation: ["Wear loose clothing."],
    fasting: "No specific fasting unless specified.",
    benefits: ["Accurate diagnosis", "Quick reporting"],
    faqs: [{ question: "Is it painful?", answer: "No, this is non-invasive." }],
    techSpecs: "Latest Diagnostic Equipment",
    turnaround: "24 Hours"
  };

  // Quick Logic for common categories
  if (slug.includes("mri") || slug.includes("ct")) {
    content.techSpecs = "3T MRI / 128 Slice CT";
    content.pricing = [{ name: "Scan", price: "₹4500*", features: ["Film", "Digital"] }];
  }
  else if (slug.includes("blood")) {
    content.techSpecs = "Roche Automated Analyzers";
    content.pricing = [{ name: "Profile", price: "₹999*", features: ["Home Visit"] }];
  }

  content.faqs.push(
    { question: "Home collection available?", answer: "Yes, in Navi Mumbai." },
    { question: "Turnaround time?", answer: content.turnaround }
  );

  return content;
}
