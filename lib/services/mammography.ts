import { ServiceContent } from "../content-engine";

export const mammographyContent = (city: string): ServiceContent => ({
  title: `Digital Mammography Center in ${city}`,
  scientificDesc: "Mammography is the gold standard screening tool for early detection of breast cancer. We use Full-Field Digital Mammography (FFDM) for high-contrast imaging of breast tissue.",
  imagingContext: "Capable of detecting micro-calcifications and masses years before they can be felt physically. Essential for women over 40.",
  procedure: [
    { title: "Positioning", desc: "Breast is positioned on the detector plate." },
    { title: "Compression", desc: "Gentle compression is applied to spread tissue for clear imaging." },
    { title: "Imaging", desc: "X-rays are taken from two angles (CC and MLO)." }
  ],
  prerequisites: ["Avoid during menstruation (for comfort)", "Previous mammograms for comparison"],
  pricing: [
    { name: "Screening Mammography", price: "₹2,000*", features: ["Bilateral", "Asymptomatic Check"] },
    { name: "Diagnostic Mammography", price: "₹3,500*", features: ["Focal View", "USG Correlation"] },
    { name: "Sonomammography", price: "₹3,000*", features: ["Mammo + Ultrasound", "Dense Breast"] }
  ],
  preparation: ["Do NOT wear deodorant, talcum powder, or lotion on chest/underarms (can mimic calcifications).", "Wear a two-piece outfit."],
  fasting: "Not Required.",
  techSpecs: "Digital Mammography System with Tomosynthesis Capable",
  turnaround: "Same Day Report",
  benefits: ["Detects cancer early", "Low radiation dose", "High Resolution"],
  faqs: [
    { question: "Is it painful?", answer: "Compression may cause slight discomfort for a few seconds, but it is critical for a clear image." },
    { question: "How often should I get checked?", answer: "Women over 40 are recommended to screen annually." }
  ]
});
