import { companyDetails } from "@/lib/constants";
// Import ALL existing modules
import { petScanContent } from "./services/pet-scan";
import { angiographyContent } from "./services/angiography";
import { fetalMedicineContent } from "./services/fetal-medicine";
import { mammographyContent } from "./services/mammography";
import { niptContent } from "./services/nipt-genetics";
import { angioplastyContent } from "./services/angioplasty";

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

  // --- 1. ROUTER: Check for Specialized Modules ---
  if (slug.includes("pet-scan")) return petScanContent(cityName);
  if (slug.includes("angiography")) return angiographyContent(cityName);
  if (slug.includes("angioplasty")) return angioplastyContent(cityName);
  if (slug.includes("mammography")) return mammographyContent(cityName);
  
  if (slug.includes("nipt") || slug.includes("prenatal") || slug.includes("nips")) {
    return niptContent(cityName);
  }

  if (slug.includes("pregnancy") || slug.includes("anomaly") || slug.includes("nt-scan") || slug.includes("doppler") || slug.includes("follicular") || slug.includes("obstetric")) {
    return fetalMedicineContent(slug, cityName);
  }

  // --- 2. NEW GENETIC SERVICES LOGIC (Added Directly Here) ---

  if (slug.includes("gut-microbiome")) {
    return {
        title: `Gut Microbiome Testing in ${cityName}`,
        scientificDesc: "Comprehensive mapping of your gut bacteria using Metagenomic Sequencing. Analyzes DNA to detect imbalances, inflammation, and digestive health.",
        imagingContext: "Your gut health impacts immunity, mood, and metabolism. This test sequences 100% of bacterial DNA for personalized nutrition.",
        procedure: [{ title: "Kit Collection", desc: "Collect stool sample using our sterile home-collection kit." }, { title: "Lab Processing", desc: "DNA extraction and sequencing." }],
        prerequisites: ["Stop antibiotics 2 weeks prior (if possible)"],
        pricing: [
            { name: "Gut Health Basic", price: "₹9,999*", features: ["Bacterial Diversity", "Digestion Score"] },
            { name: "Gut Intelligence Pro", price: "₹19,500*", features: ["Pathogen Check", "Diet Plan", "Metabolic Insights"] }
        ],
        preparation: ["No fasting required.", "Follow kit instructions carefully."],
        fasting: "None.",
        benefits: ["Personalized Diet Plan", "Understand Inflammation", "Boost Immunity"],
        faqs: [{ question: "How do I collect the sample?", answer: "We send a kit to your home with easy instructions." }],
        techSpecs: "Whole Genome Metagenomic Sequencing (Illumina)",
        turnaround: "3-4 Weeks"
    };
  }

  if (slug.includes("whole-exome")) {
    return {
        title: `Whole Exome Sequencing (WES) in ${cityName}`,
        scientificDesc: "WES analyzes the protein-coding regions (exons) of your genome to identify genetic disorders, rare diseases, and hereditary risks.",
        imagingContext: "Covers 22,000+ genes. Recommended for undiagnosed conditions and carrier screening.",
        procedure: [{ title: "Blood Draw", desc: "4ml blood sample collected in EDTA tube." }],
        prerequisites: ["Genetic Counseling (Recommended)", "Clinical History"],
        pricing: [
            { name: "Clinical Exome", price: "₹18,000*", features: ["Known Diseases", "Genetic Counselling"] },
            { name: "Whole Exome", price: "₹24,000*", features: ["All Coding Regions", "Raw Data Access"] }
        ],
        preparation: ["No specific preparation."],
        fasting: "Not required.",
        benefits: ["Diagnose rare conditions", "Family planning info", "One-time test"],
        faqs: [{ question: "Is this a blood test?", answer: "Yes, a simple blood draw is sufficient." }],
        techSpecs: "Next-Generation Sequencing (NGS) - 100x Depth",
        turnaround: "4-6 Weeks"
    };
  }

  if (slug.includes("dna-testing")) {
    return {
        title: `Advanced DNA Testing in ${cityName}`,
        scientificDesc: "Genetic DNA profiling for ancestry, paternity, or lifestyle predisposition (Nutrigenomics).",
        imagingContext: "Unlock your genetic blueprint to understand fitness potential, food sensitivities, and heritage.",
        procedure: [{ title: "Buccal Swab / Blood", desc: "Simple cheek swab or blood sample." }],
        prerequisites: ["ID Proof (for Paternity)"],
        pricing: [
            { name: "Paternity DNA", price: "₹12,000*", features: ["Legal & Personal", "99.99% Accuracy"] },
            { name: "Lifestyle DNA", price: "₹15,000*", features: ["Fitness Profile", "Food Intolerance"] }
        ],
        preparation: ["Rinse mouth before swab."],
        fasting: "Not required.",
        benefits: ["Definitive answers", "Personalized lifestyle"],
        faqs: [{ question: "Is it confidential?", answer: "Yes, strictly confidential handling." }],
        techSpecs: "PCR / Microarray Analysis",
        turnaround: "10-14 Days"
    };
  }

  // --- 3. FALLBACK (Generic Logic for anything else) ---
  let content: ServiceContent = {
    title: `Advanced ${serviceName} in ${cityName}`,
    scientificDesc: `${serviceName} is a critical diagnostic tool used to evaluate health with high precision.`,
    imagingContext: "We use advanced digital technology to ensure high-precision results.",
    procedure: [{ title: "Procedure", desc: "Standard protocol by certified professionals." }],
    prerequisites: ["Doctor's Prescription"],
    pricing: [{ name: "Standard", price: "Call for Price", features: ["Report", "Consultation"] }],
    preparation: ["No specific preparation required."],
    fasting: "No fasting required.",
    benefits: ["Accurate Diagnosis", "Quick Turnaround"],
    faqs: [{ question: "Is it painful?", answer: "No, it is non-invasive." }],
    techSpecs: "Latest Generation Equipment",
    turnaround: "24 Hours"
  };

  // Quick Category Logic
  if (slug.includes("mri")) {
    content.techSpecs = "3 Tesla MRI (Silent Scan)";
    content.pricing[0] = { name: "MRI Brain/Spine", price: "₹6,500*", features: ["3T Clarity", "Film Included"] };
  }
  if (slug.includes("ct-scan")) {
    content.techSpecs = "128 Slice CT Scanner";
    content.pricing[0] = { name: "CT Brain", price: "₹3,500*", features: ["High Res", "Film"] };
  }
  if (slug.includes("ultrasound")) {
    content.techSpecs = "GE Voluson E10";
    content.pricing[0] = { name: "Abdomen USG", price: "₹1,200*", features: ["Instant Report"] };
  }
  if (slug.includes("blood") || slug.includes("checkup")) {
    content.techSpecs = "Roche Analyzers";
    content.pricing[0] = { name: "Basic Profile", price: "₹999*", features: ["Home Visit"] };
  }

  return content;
}
