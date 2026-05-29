"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Home, ChevronRight, Phone, CalendarCheck, X } from "lucide-react";
import PremiumBookingForm from "@/components/features/appointments/PremiumBookingForm";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // 1. JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.henoticdiagnostics.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blood Test",
        "item": "https://www.henoticdiagnostics.com/blood-test/"
      }
    ]
  };

  // 2. Accreditation Logos
  const accreditations = [
    { name: "NABL", src: "https://storage.googleapis.com/wp-media-henoticbucket/Accreditation%20Logos/NABL-henotic-diagnsotics-kharghar.webp" },
    { name: "CAP", src: "https://storage.googleapis.com/wp-media-henoticbucket/Accreditation%20Logos/cap-accredidation-logo.webp" },
    { name: "ISO", src: "https://storage.googleapis.com/wp-media-henoticbucket/Accreditation%20Logos/iso-certification-for-henotic-diagnsotics-kharghar.webp" }
  ];

  return (
    <>
      {/* Inject Breadcrumb Schema */}
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image & Deep Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/henotic-diagnostics-blood-test-lab.webp" 
            alt="Henotic Diagnostics Blood Test Laboratory" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-3xl">
            
            {/* Top Left: 3D Accreditation Logos */}
            <div className="flex gap-4 mb-8">
              {accreditations.map((logo, index) => (
                <div 
                  key={index} 
                  className="w-16 h-16 rounded-full bg-white p-1 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-white/20 transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                >
                  <img src={logo.src} alt={logo.name} className="w-full h-full object-contain rounded-full" />
                </div>
              ))}
            </div>

            {/* Visible Gradient Breadcrumb Nav */}
            <nav className="inline-flex items-center space-x-2 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/20 shadow-lg">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors flex items-center gap-1">
                <Home size={14} /> <span className="text-sm font-medium tracking-wide">Home</span>
              </Link>
              <ChevronRight size={14} className="text-white/60" />
              <span className="text-white font-bold text-sm tracking-wide">Blood Test</span>
            </nav>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
              Advanced Blood Test & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Pathology Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md border-l-4 border-blue-500 pl-4">
              Get accurate, fast, and reliable diagnostic testing. Our state-of-the-art, NABL & CAP accredited laboratories ensure the highest clinical standards for your preventive health and diagnostic needs.
            </p>

            {/* Bottom Left: 3D Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="tel:08879327184" 
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 border border-blue-500/30"
              >
                <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-white" />
                </div>
                Call Now: 08879327184
              </a>
              
              <button 
                onClick={() => setIsFormOpen(true)}
                className="group flex items-center justify-center gap-3 bg-white text-[#1e3a8a] font-bold py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 border border-white/80"
              >
                <div className="bg-blue-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <CalendarCheck size={18} className="text-blue-700" />
                </div>
                Book Appointment
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Modal Wrapper for PremiumBookingForm */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white text-gray-800 p-2 rounded-full shadow-2xl hover:bg-red-50 hover:text-red-600 transition-colors z-50"
            >
              <X size={24} />
            </button>
            
            {/* The actual booking form */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <PremiumBookingForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}