import { ServiceContent } from "../content-engine";

export const petScanContent = (city: string): ServiceContent => ({
  title: `Advanced PET-CT Scan in ${city}`,
  scientificDesc: "A PET-CT scan combines functional imaging (metabolic activity) with anatomical imaging (CT) to provide a complete picture of disease location and behavior. It evaluates glucose metabolism in cells to detect high metabolic rates common in malignancy.",
  imagingContext: "Henotic Diagnostics brings world-class 128-slice PET-CT technology. Specialized in Cancer Staging, Treatment Planning, and Early Detection with Same-Day Reporting.",
  
  procedure: [
    { title: "Registration & Vitals", desc: "Arrive on time. We check weight, height, and blood sugar levels." },
    { title: "Tracer Injection", desc: "A small painless IV injection of the radioactive tracer (FDG/PSMA) is administered." },
    { title: "Uptake Phase", desc: "Rest quietly for 45-60 minutes in a private lead-lined room for tracer distribution." },
    { title: "The Scan", desc: "The scanner moves through your body for about 15-20 minutes. Remain still and breathe normally." },
    { title: "Post-Scan", desc: "You can leave immediately. Drink water to flush out the tracer." }
  ],

  prerequisites: [
    "Doctor's Prescription (Mandatory)",
    "Recent Serum Creatinine Report",
    "Strict Fasting of 6 Hours",
    "Old PET/CT Films for comparison"
  ],

  preparation: [
    "Low-carb, no-sugar meal 24h prior to scan.",
    "Drink 1L of water before arriving (stay hydrated).",
    "Wear loose, comfortable clothing (no metal).",
    "Diabetics: Consult staff regarding insulin timing."
  ],

  fasting: "Strictly No Food for 6-8 hours before scan. Only Plain Water is allowed. No coffee, tea, soda, chewing gum, or lozenges.",

  pricing: [
    { 
      name: "FDG PET-CT Scan", 
      price: "₹11,999", 
      features: ["Most Prescribed", "Whole Body Cancer Screening", "Glucose Metabolism Check"] 
    },
    { 
      name: "PSMA PET Scan", 
      price: "₹23,500", 
      features: ["Advanced Oncology", "Prostate Specific", "Recurrence Monitoring"] 
    },
    { 
      name: "DOPA PET Scan", 
      price: "₹18,500", 
      features: ["Neurology Specialist", "Parkinson’s Disease", "Neuroendocrine Tumors"] 
    },
    { 
      name: "Cardiac PET Scan", 
      price: "₹15,000", 
      features: ["Cardiology", "Myocardial Viability", "Heart Blood Flow"] 
    }
  ],

  techSpecs: "128-Slice Digital PET-CT | Time-of-Flight (TOF) Technology | Low Radiation Protocol",
  
  turnaround: "WhatsApp Reports within 12 Hours | Hardcopy & CD Available",

  benefits: [
    "Pinpoints malignant tumors with microscopic precision",
    "Differentiates benign vs malignant tissues",
    "Assess heart tissue viability before bypass",
    "Evaluate neurological disorders like dementia"
  ],

  faqs: [
    { question: "Is the procedure painful?", answer: "No. Aside from a small needle prick for the radiotracer injection, the scan is painless and non-invasive." },
    { question: "How long does it take?", answer: "The entire process takes about 2-3 hours, including the rest period for tracer uptake and the 15-20 minute scan." },
    { question: "Can I take my medications?", answer: "Most medications can be taken with water. However, diabetics must consult our staff regarding insulin timing." },
    { question: "Is it safe?", answer: "Yes, the radiotracer decays quickly and is flushed out by drinking water. The radiation dose is within safe diagnostic limits." }
  ]
});
