import { ServiceContent } from "../content-engine";

export const angiographyContent = (city: string): ServiceContent => ({
  title: `Advanced Angiography Services in ${city}`,
  
  scientificDesc: "Angiography is an advanced medical imaging technique used to visualize blood vessels and blood flow within arteries and veins. It helps diagnose vascular diseases such as blockages, aneurysms, stenosis, congenital abnormalities, and tumors. Angiography provides real-time, high-resolution images essential for accurate diagnosis and interventional planning. ",
  
  imagingContext: "We use contrast media injected into blood vessels, combined with X-ray, CT, or MRI imaging to capture detailed vascular anatomy. It allows dynamic visualization of circulation, vessel patency, and pathological changes. Clinical importance includes detecting arterial narrowing, identifying vascular malformations, and assessing tumor blood supply.",
  
  procedure: [
    { title: "Registration & Consent", desc: "Patient registration, consent, and pre-procedure vitals/lab verification." },
    { title: "Contrast Screening", desc: "Allergy screening and IV/Catheter insertion." },
    { title: "Image Acquisition", desc: "Contrast dye administration followed by real-time image monitoring and acquisition." },
    { title: "Observation & Report", desc: "Post-procedure observation followed by report generation and consultation." }
  ],
  
  prerequisites: [
    "6–8 hours fasting mandatory",
    "Recent Kidney Function Test (Creatinine)",
    "Referral prescription & Previous reports",
    "Allergy history clearance & Pregnancy disclosure"
  ],
  
  preparation: [
    "Fast as advised (6-8 hours).",
    "Stay hydrated (unless restricted).",
    "Remove metal objects and wear comfortable clothing.",
    "Inform staff about Blood Thinners or Diabetic medications."
  ],
  
  fasting: "Fasting: 6–8 hours. Water is allowed unless restricted. Diabetic medications: Adjust as per physician advice.",
  
  pricing: [
    { 
      name: "CT Angiography (CTA)", 
      price: "₹6,000 - ₹12,000*", 
      features: ["3D Images", "Non-Invasive", "Fast Scan"] 
    },
    { 
      name: "MR Angiography (MRA)", 
      price: "₹8,000 - ₹15,000*", 
      features: ["Radiation Free", "Kidney Safe", "High Detail"] 
    },
    { 
      name: "Coronary Angiography", 
      price: "₹20,000 Onwards*", 
      features: ["Heart Artery Check", "Ischemia Detection", "Cath Lab"] 
    },
    { 
      name: "Peripheral Angiography", 
      price: "₹7,000 Onwards*", 
      features: ["Limb Blood Flow", "Diabetic Vascular Check", "Digital Report"] 
    }
  ],
  
  techSpecs: "Multi-slice CT Scanners | High-field MRI Systems | Advanced DSA Labs | AI-assisted image processing",
  
  turnaround: "Same Day / Within 24 Hours. (Instant WhatsApp digital reports & Hardcopy films available)",
  
  benefits: [
    "Early disease detection & Accurate treatment planning",
    "Minimally invasive assessment",
    "Real-time vascular evaluation",
    "Improved patient outcomes"
  ],
  
  faqs: [
    { question: "Is Angiography painful?", answer: "Minimal discomfort; mostly painless." },
    { question: "How long does it take?", answer: "30–60 minutes depending on the type." },
    { question: "Is contrast safe?", answer: "Yes, used under strict medical supervision and pre-check of creatinine." },
    { question: "When will I get my report?", answer: "Same day or within 24 hours." }
  ]
});
