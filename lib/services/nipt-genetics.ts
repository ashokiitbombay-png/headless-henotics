import { ServiceContent } from "../content-engine";

export const niptContent = (city: string): ServiceContent => ({
  title: `NIPT & Advanced Prenatal Genetics in ${city}`,
  scientificDesc: "Non-Invasive Prenatal Testing (NIPT/NIPS) screens for chromosomal aneuploidies (Trisomy 21, 18, 13) by analyzing cell-free fetal DNA (cffDNA) circulating in maternal blood.",
  imagingContext: "Unlike amniocentesis, this is a simple blood test with >99% sensitivity for Down Syndrome. It poses ZERO risk of miscarriage to the fetus.",
  procedure: [
    { title: "Genetic Counseling", desc: "Pre-test counseling to understand the scope of screening." },
    { title: "Sample Collection", desc: "10ml Maternal Blood drawn from the arm (Streck Tube)." },
    { title: "DNA Sequencing", desc: "Sample sent to specialized genetics lab for Next-Gen Sequencing (NGS)." }
  ],
  prerequisites: ["Gestational Age > 10 Weeks", "Recent Ultrasound Report", "Maternal Weight"],
  pricing: [
    { name: "Basic NIPT", price: "₹12,000*", features: ["Trisomy 21, 18, 13", "Sex Chromosomes"] },
    { name: "NIPT Plus (Microdeletions)", price: "₹18,000*", features: ["Basic + 5 Microdeletions", "Expanded Panel"] },
    { name: "Dual Marker", price: "₹2,500*", features: ["Biochemical Screen", "First Trimester"] }
  ],
  preparation: ["No Fasting Required.", "Can be done at any time of day."],
  fasting: "Not Required.",
  techSpecs: "Next-Generation Sequencing (NGS) | Illumina Platform",
  turnaround: "5 - 7 Working Days",
  benefits: ["Risk-Free (Non-Invasive)", "Highly Accurate (>99%)", "Early Detection (10 Weeks+)"],
  faqs: [
    { question: "Is this test diagnostic?", answer: "NIPT is a screening test. High-risk results should be confirmed via invasive testing." },
    { question: "When can I take this test?", answer: "Any time after 10 weeks of pregnancy." }
  ]
});
