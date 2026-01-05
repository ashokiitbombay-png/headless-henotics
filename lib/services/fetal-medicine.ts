import { ServiceContent } from "../content-engine";

export const fetalMedicineContent = (slug: string, city: string): ServiceContent => {
  const isAnomaly = slug.includes("anomaly");
  const isNT = slug.includes("nt-scan");
  const isDoppler = slug.includes("doppler");
  const isFollicular = slug.includes("follicular");

  let title = `Advanced Pregnancy Ultrasound in ${city}`;
  let desc = "Comprehensive fetal imaging suite using 4D Voluson technology for monitoring fetal health.";
  let price = "₹1,500 - ₹3,500*";
  
  if (isAnomaly) {
    title = `Anomaly Scan (Level II) in ${city}`;
    desc = "Detailed mid-trimester scan (18-22 weeks) to detect structural abnormalities and fetal organ development.";
    price = "₹3,500*";
  } else if (isNT) {
    title = `NT Scan (Nuchal Translucency) in ${city}`;
    desc = "First trimester screening (11-14 weeks) to assess risk of chromosomal abnormalities like Down Syndrome.";
    price = "₹2,500*";
  } else if (isFollicular) {
    title = `Follicular Study & Monitoring in ${city}`;
    desc = "Serial ultrasound monitoring of ovarian follicles to identify the best time for conception.";
    price = "₹800 per sitting*";
  }

  return {
    title,
    scientificDesc: desc + " We utilize high-frequency transducers and 4D rendering to provide crystal clear visualization of the fetus/organs without ionizing radiation.",
    imagingContext: "Our Voluson™ E-Series machines provide 'Glass Body' rendering and Fetal Heart visualization. Essential for Obstetrics, Gynecology, and Infertility treatments.",
    procedure: [
      { title: "Preparation", desc: "For early pregnancy/pelvic scans, a full bladder is required. For late pregnancy, no specific prep." },
      { title: "The Scan", desc: "Water-soluble gel is applied. The probe is moved over the abdomen to capture measurements." },
      { title: "4D Visualization", desc: "Real-time 3D/4D reconstruction of the fetal face and limbs (if applicable)." }
    ],
    prerequisites: ["Doctor's Referral", "Previous Ultrasound Reports", "Maternal Serum Screen (if applicable)"],
    pricing: [
      { name: "Early Pregnancy / Dating", price: "₹1,500*", features: ["Confirm Viability", "Est. Due Date"] },
      { name: "NT Scan (11-13.6 wks)", price: "₹2,500*", features: ["Chromosomal Risk", "Nasal Bone"] },
      { name: "Anomaly Scan (18-22 wks)", price: "₹3,500*", features: ["Detailed Organ Check", "4D Face"] },
      { name: "Color Doppler", price: "₹2,800*", features: ["Blood Flow Check", "Growth Lag Check"] }
    ],
    preparation: isFollicular ? ["Empty bladder before scan (TVS)"] : ["Drink 1L water 1 hour before (for early scans)", "Wear loose clothing"],
    fasting: "No fasting required. Eat a light meal before coming.",
    techSpecs: "GE Voluson E10 | 4D Matrix Probe | Radiantflow™ Tech",
    turnaround: "Instant Report & Prints",
    benefits: ["Radiation Free (Safe for Baby)", "High Precision Diagnosis", "Detects Issues Early"],
    faqs: [
      { question: "Is Ultrasound safe for the baby?", answer: "Yes, ultrasound uses sound waves, not radiation. It is completely safe." },
      { question: "Can I see the baby's face?", answer: "Yes, our 4D scans provide realistic facial imaging, usually best seen at 24-28 weeks." }
    ]
  };
};
