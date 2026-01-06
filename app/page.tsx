import HeroMedical from "@/components/sections/home/HeroMedical/HeroMedical";
import TrustBar from "@/components/sections/home/TrustIndicators/TrustBar";
import Accreditations from "@/components/sections/home/TrustIndicators/blocks/Accreditations";
import ServiceLines from "@/components/sections/home/ServiceLines/ServiceLines";
import MedicalTechnology from "@/components/sections/home/MedicalTechnology/MedicalTechnology";
import CorporateVideo from "@/components/sections/home/CorporateVideo";
import FacilityShowcase from "@/components/sections/home/FacilityShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henotic Diagnostics | Premium Medical Imaging & Pathology",
  description: "NABL Accredited Diagnostic Center in Navi Mumbai. 3T MRI, PET-CT, Ultrasound, and Pathology services.",
};

export default function Home() {
  return (
    <main className="bg-white">
      <HeroMedical />
      <TrustBar />
      
      {/* Service Lines with Images */}
      <ServiceLines />
      
      {/* New Video Section */}
      <CorporateVideo />

      {/* Tech & Accreditations */}
      <MedicalTechnology />
      <Accreditations />
      
      {/* Facility Showcase */}
      <FacilityShowcase />
      
      {/* Bottom Banner */}
      <section className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Clinical Quality Assurance</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Every report goes through a rigorous double-check protocol by our panel of MD Radiologists and Pathologists to ensure zero-error diagnostics.
          </p>
        </div>
      </section>
    </main>
  );
}
