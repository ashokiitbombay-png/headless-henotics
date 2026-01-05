import { ServiceContent } from "../content-engine";

export const petScanContent = (city: string): ServiceContent => ({
  title: `Advanced PET-CT Scan Center in ${city}`,
  scientificDesc: "Positron Emission Tomography - Computed Tomography (PET-CT) is a nuclear medicine technique combining metabolic functional imaging with anatomical structure. Using radiotracers like 18F-FDG, it detects cellular metabolic activity, making it the 'Gold Standard' for Oncology staging.",
  imagingContext: "Our facility uses the GE Discovery IQ (Gen 2) 5-Ring detector system. It fuses PET (metabolic) and CT (anatomical) images to pinpoint the exact location of high-glycolytic activity (tumors).",
  procedure: [
    { title: "Evaluation", desc: "History check, Serum Creatinine review, and strict Blood Sugar verification (<150 mg/dL)." },
    { title: "Isotope Injection", desc: "Intravenous injection of radioactive tracer (FDG, PSMA) via secure cannula." },
    { title: "Uptake Phase", desc: "Patient rests in a 'Quiet Room' for 45-60 mins to allow tracer absorption." },
    { title: "The Scan", desc: "15-20 minute painless scan on the 5-Ring Gantry." }
  ],
  prerequisites: ["Serum Creatinine Report", "Strict Fasting", "Blood Sugar Check", "Old PET films"],
  preparation: ["Low Carb diet 24hr prior", "No strenuous exercise", "Warm loose clothes"],
  fasting: "Strict 6-8 HOURS fasting. Only plain water allowed. No diabetic tablets morning of scan.",
  pricing: [
    { name: "Whole Body FDG PET", price: "₹11,500*", features: ["Cancer Staging", "Metabolic Review", "Free CD Copy"] },
    { name: "PSMA PET (Prostate)", price: "₹16,500*", features: ["Ga-68/F-18 PSMA", "High Sensitivity", "Onco-Consult"] },
    { name: "Cardiac Viability PET", price: "₹14,000*", features: ["Heart Muscle Check", "Perfusion Study", "Cardio Expert"] }
  ],
  techSpecs: "GE Discovery IQ Gen-2 | 16-Slice CT | LSO Crystal Detectors",
  turnaround: "Provisional: Same Day | Final: 24 Hours",
  benefits: ["Detects cancer earlier than MRI", "Whole body coverage", "Painless"],
  faqs: [
    { question: "Is the radiation dangerous?", answer: "Dose is minimal and flushes out within 6-10 hours." },
    { question: "Can I take diabetes medicine?", answer: "Stop Metformin 24hr prior. No Insulin/Tablets morning of scan." }
  ]
});
