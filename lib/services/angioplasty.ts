import { ServiceContent } from "../content-engine";

export const angioplastyContent = (city: string): ServiceContent => ({
  title: `Coronary Angioplasty (PTCA) Services in ${city}`,
  scientificDesc: "Percutaneous Transluminal Coronary Angioplasty (PTCA) is a minimally invasive therapeutic procedure to open narrowed or blocked coronary arteries using a balloon and stent.",
  imagingContext: "Performed in a Cath Lab under fluoroscopic guidance. It restores blood flow to the heart muscle, relieving angina and preventing heart attacks.",
  procedure: [
    { title: "Access", desc: "Catheter inserted via radial (wrist) or femoral (groin) artery." },
    { title: "Balloon Inflation", desc: "Balloon catheter reaches blockage and inflates to crush plaque." },
    { title: "Stent Placement", desc: "Drug-Eluting Stent (DES) is placed to keep artery open permanently." }
  ],
  prerequisites: ["Angiography confirming blockage", "Blood Thinners Loading Dose", "Consent for intervention"],
  pricing: [
    { name: "Angioplasty Package", price: "Call for Estimate", features: ["Cath Lab Charges", "Stent Cost", "2-Day Hospital Stay"] },
    { name: "Primary Angioplasty", price: "Emergency", features: ["Heart Attack Protocol", "Immediate Care"] }
  ],
  preparation: ["Admit 1 day prior", "Fasting 6-8 hours", "Shaving of access site"],
  fasting: "Required (6-8 Hours)",
  techSpecs: "Flat Panel Cath Lab | FDA Approved Drug-Eluting Stents",
  turnaround: "Procedure time: 1-2 Hours. Hospital Stay: 2-3 Days.",
  benefits: ["Life-saving procedure", "Avoids Open Heart Surgery", "Quick Recovery"],
  faqs: [
    { question: "Is it major surgery?", answer: "No, it is a minimally invasive procedure done through a small puncture." },
    { question: "How long does the stent last?", answer: "Stents are permanent and become part of the artery wall." }
  ]
});
