import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/blood-test/HeroSection";
import IntroductionSection from "@/components/blood-test/IntroductionSection";
import TypesOfBloodTests from "@/components/blood-test/TypesOfBloodTests";
import SymptomsSection from "@/components/blood-test/SymptomsSection";
import PreparationSection from "@/components/blood-test/PreparationSection";
import ProcedureSection from "@/components/blood-test/ProcedureSection";
import BenefitsSection from "@/components/blood-test/BenefitsSection";
import WhyChooseUs from "@/components/blood-test/WhyChooseUs";
import TechnologySection from "@/components/blood-test/TechnologySection";
import PreventiveHealthSection from "@/components/blood-test/PreventiveHealthSection";
import HealthPackagesSection from "@/components/blood-test/HealthPackagesSection";
import FAQSection from "@/components/blood-test/FAQSection";
import TestimonialSection from "@/components/blood-test/TestimonialSection";
import RelatedTests from "@/components/blood-test/RelatedTests";
import RelatedServices from "@/components/blood-test/RelatedServices";
import NearbyLocations from "@/components/blood-test/NearbyLocations";
import DoctorGuidanceSection from "@/components/blood-test/DoctorGuidanceSection";
import TrustSignals from "@/components/blood-test/TrustSignals";
import CTASection from "@/components/blood-test/CTASection";
import StickyMobileCTA from "@/components/blood-test/StickyMobileCTA";
import SchemaMarkup from "@/components/blood-test/SchemaMarkup";
import Breadcrumbs from "@/components/blood-test/Breadcrumbs";
import TableOfContents from "@/components/blood-test/TableOfContents";
import EducationalContent from "@/components/blood-test/EducationalContent";
import AEOSection from "@/components/blood-test/AEOSection";
import InternalLinksHub from "@/components/blood-test/InternalLinksHub";

// Inject SEO Meta Data specifically for the Blood Test page
export const metadata: Metadata = {
  title: "Blood Test Guide, Types, Procedure & Diagnostic Services | Henotic Diagnostics",
  description: "Learn about blood tests, types of pathology investigations, fasting guidelines, blood collection procedures, diagnostic benefits, and preventive health screening services at Henotic Diagnostics.",
};

export default function BloodTestPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      {/* We are hiding the Breadcrumbs component here since it's built into the Hero! */}
      {/* <Breadcrumbs /> */}
      
      <IntroductionSection />
      <TableOfContents />
      <TypesOfBloodTests />
      <SymptomsSection />
      <PreparationSection />
      <ProcedureSection />
      <BenefitsSection />
      <WhyChooseUs />
      <TrustSignals />
      <TechnologySection />
      <PreventiveHealthSection />
      <HealthPackagesSection />
      <EducationalContent />
      <DoctorGuidanceSection />
      <FAQSection />
      <AEOSection />
      <TestimonialSection />
      <RelatedTests />
      <RelatedServices />
      <NearbyLocations />
      <InternalLinksHub />
      <CTASection />
      
      <SchemaMarkup />
      <StickyMobileCTA />
    </main>
  );
}