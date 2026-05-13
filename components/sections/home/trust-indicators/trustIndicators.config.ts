import { ShieldCheck, Award, Users, Activity, FileCheck, Lock, Globe } from "lucide-react";

export const trustMetrics = [
  { label: "Diagnostic Accuracy", value: "99.7%", icon: Activity, desc: "Peer-reviewed reporting" },
  { label: "Patient Satisfaction", value: "98%", icon: Users, desc: "Based on 50k+ reviews" },
  { label: "Tests Processed", value: "1.2M+", icon: FileCheck, desc: "Across 20+ specialties" },
  { label: "Years Experience", value: "12+", icon: Award, desc: "Clinical excellence" }
];

export const accreditations = [
  { name: "NABL Accredited", sub: "Clinical Laboratory", color: "blue" },
  { name: "NABH Compliant", sub: "Imaging Standards", color: "green" },
  { name: "ISO 9001:2015", sub: "Quality Management", color: "purple" },
  { name: "AERB Approved", sub: "Radiation Safety", color: "orange" },
];

export const safetyProtocols = [
  "Low Radiation Protocols (ALARA)",
  "Pediatric Safe Imaging",
  "HIPAA-Aligned Data Privacy",
  "Double-Read Radiology Reports"
];
