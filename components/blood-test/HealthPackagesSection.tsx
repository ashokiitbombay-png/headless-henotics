"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  PhoneCall, 
  CalendarCheck, 
  Activity, 
  Heart, 
  Droplet, 
  Stethoscope,
  Clock,
  Home,
  FileText,
  BadgePercent
} from "lucide-react";
import BookAppointmentModal from "@/components/features/appointments/BookAppointmentModal";

export default function HealthPackagesSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const packages = [
    {
      id: "comprehensive",
      title: "COMPREHENSIVE PROFILE",
      subtitle: "FULLBODY CHECK-UP WITH VITAMIN D & B12",
      image: "https://storage.googleapis.com/wp-media-henoticbucket/Happy-Indian-Family/comprehensive-full-body-medical-check-up-henotic-diagnostics.webp",
      target: "Men • Women • Seniors",
      totalTests: 85,
      mrp: "6495",
      offer: "2500",
      discount: "60% OFF",
      theme: "from-blue-600 to-cyan-500",
      bgTheme: "bg-blue-50",
      tests: [
        { cat: "DIABETIC PROFILE (3)", items: "Sugar Fasting, HbA1C, Average Glucose (eAG)" },
        { cat: "THYROID PROFILE (3)", items: "Total T3, Total T4, TSH" },
        { cat: "KIDNEY PROFILE (7)", items: "BUN, Serum Creatinine, BUN/Creat Ratio, Serum Calcium, Urea, Uric Acid, eGFR" },
        { cat: "IRON STUDIES (3)", items: "Serum Iron, TIBC, Transferrin Saturation" },
        { cat: "LIVER FUNCTION (11)", items: "SGPT, SGOT, Albumin, Alkaline Phosphatase, Bilirubin Direct/Indirect/Total, Gamma GT, Globulin, Total Protein, ALB/GLB Ratio" },
        { cat: "VITAMIN PROFILE (2)", items: "Vitamin D, Vitamin B12" },
        { cat: "LIPID PROFILE (8)", items: "LDL, HDL, Total Cholesterol, Non-HDL, Triglycerides, VLDL, LDL/HDL Ratio, Chol/HDL Ratio" },
        { cat: "CBC (28)", items: "Complete Blood Count analysis" },
        { cat: "URINE ANALYSIS (18)", items: "Complete Urine Analysis" }
      ]
    },
    {
      id: "men-advanced",
      title: "MEN ADVANCED",
      subtitle: "FULL BODY MEDICAL CHECK UP",
      quote: "Preventive healthcare for those who value good health",
      image: "https://storage.googleapis.com/wp-media-henoticbucket/Happy-Indian-Family/men-advanced-medical-check-up-henotic-diagnostics.webp",
      target: "Men",
      totalTests: 99,
      mrp: "10309",
      offer: "3800",
      discount: "60% OFF",
      theme: "from-slate-800 to-blue-700",
      bgTheme: "bg-slate-50",
      tests: [
        { cat: "DIABETIC PROFILE (3)", items: "Sugar Fasting, HbA1C, Average Glucose (eAG)" },
        { cat: "THYROID PROFILE (3)", items: "Total T3, Total T4, TSH" },
        { cat: "KIDNEY PROFILE (7)", items: "BUN, Serum Creatinine, BUN/Creat Ratio, Serum Calcium, Urea, Uric Acid, eGFR" },
        { cat: "IRON STUDIES (3)", items: "Serum Iron, TIBC, Transferrin Saturation" },
        { cat: "LIVER FUNCTION (11)", items: "SGPT, SGOT, Albumin, Alk Phosphatase, Bilirubin (D/I/T), Gamma GT, Globulin, Total Protein, Ratio" },
        { cat: "CHOLESTEROL (8)", items: "LDL, HDL, Total, Non-HDL, Triglycerides, VLDL, Ratios" },
        { cat: "CARDIAC PROFILE (6)", items: "Apo B:A1 Ratio, Apo (A1), Apo (B), Homocysteine, hs-CRP, Lipoprotein (a)" },
        { cat: "ELECTROLYTES (3)", items: "Chloride, Potassium, Sodium" },
        { cat: "VITAMIN PROFILE (2)", items: "Vitamin D, Vitamin B12" },
        { cat: "PANCREATIC (2)", items: "Amylase, Lipase" },
        { cat: "CANCER MARKER (1)", items: "PSA (Prostate Specific Antigen)" },
        { cat: "CBC (28)", items: "Complete Blood Count" },
        { cat: "URINE ANALYSIS (18)", items: "Complete Urine Analysis" }
      ]
    },
    {
      id: "women-advanced",
      title: "WOMEN ADVANCED",
      subtitle: "FULL BODY HEALTH CHECK-UP",
      quote: "To Achieve Beauty, a Woman Must First Achieve GOOD HEALTH",
      image: "https://storage.googleapis.com/wp-media-henoticbucket/Happy-Indian-Family/women-advanced-medical-checkup-henotic-diagnostics.webp",
      target: "Women",
      totalTests: 98,
      mrp: "8755",
      offer: "3800",
      discount: "55% OFF",
      theme: "from-rose-500 to-pink-500",
      bgTheme: "bg-rose-50",
      tests: [
        { cat: "DIABETIC PROFILE (3)", items: "Sugar Fasting, HbA1C, Average Glucose (eAG)" },
        { cat: "THYROID PROFILE (3)", items: "Total T3, Total T4, TSH" },
        { cat: "KIDNEY PROFILE (7)", items: "BUN, Serum Creatinine, BUN/Creat Ratio, Serum Calcium, Urea, Uric Acid, eGFR" },
        { cat: "IRON STUDIES (3)", items: "Serum Iron, TIBC, Transferrin Saturation" },
        { cat: "LIVER FUNCTION (11)", items: "SGPT, SGOT, Albumin, Alk Phosphatase, Bilirubin (D/I/T), Gamma GT, Globulin, Total Protein, Ratio" },
        { cat: "CHOLESTEROL (8)", items: "LDL, HDL, Total, Non-HDL, Triglycerides, VLDL, Ratios" },
        { cat: "CARDIAC PROFILE (6)", items: "Apo B:A1 Ratio, Apo (A1), Apo (B), Homocysteine, hs-CRP, Lipoprotein (a)" },
        { cat: "FEMALE INFERTILITY (5)", items: "FSH, LH, Prolactin, TSH, Estradiol" },
        { cat: "VITAMIN PROFILE (3)", items: "Vitamin D, Vitamin B12, Folic Acid" },
        { cat: "ARTHRITIS TEST (1)", items: "Anti-CCP" },
        { cat: "CBC (28)", items: "Complete Blood Count" },
        { cat: "URINE ANALYSIS (18)", items: "Complete Urine Analysis" }
      ]
    },
    {
      id: "wellness",
      title: "WELLNESS–1.6",
      subtitle: "CAN TELL YOUR “INSIDE” STORY",
      image: "https://storage.googleapis.com/wp-media-henoticbucket/Happy-Indian-Family/wellness-profile-health-packages-henotic-diagnostics.webp",
      target: "Men • Women • Seniors",
      totalTests: 100,
      mrp: "8750",
      offer: "3800",
      discount: "SPECIAL OFFER",
      theme: "from-emerald-600 to-teal-500",
      bgTheme: "bg-emerald-50",
      tests: [
        { cat: "DIABETIC PROFILE (3)", items: "Sugar Fasting, HbA1C, Average Glucose (eAG)" },
        { cat: "THYROID PROFILE (3)", items: "Total T3, Total T4, TSH" },
        { cat: "KIDNEY PROFILE (7)", items: "BUN, Serum Creatinine, BUN/Creat Ratio, Serum Calcium, Urea, Uric Acid, eGFR" },
        { cat: "IRON DEFICIENCY (4)", items: "Serum Iron, TIBC, Transferrin Saturation, Ferritin" },
        { cat: "LIVER FUNCTION (11)", items: "SGPT, SGOT, Albumin, Alk Phosphatase, Bilirubin (D/I/T), Gamma GT, Globulin, Total Protein, Ratio" },
        { cat: "CHOLESTEROL (8)", items: "LDL, HDL, Total, Non-HDL, Triglycerides, VLDL, Ratios" },
        { cat: "CARDIAC PROFILE (6)", items: "Apo B:A1 Ratio, Apo (A1), Apo (B), Homocysteine, hs-CRP, Lipoprotein (a)" },
        { cat: "ELECTROLYTES (3)", items: "Chloride, Potassium, Sodium" },
        { cat: "VITAMIN PROFILE (3)", items: "Vitamin D, Vitamin B12, Folic Acid" },
        { cat: "ARTHRITIS PROFILE (2)", items: "Anti-CCP, ANA" },
        { cat: "GROWTH HORMONES (1)", items: "Testosterone Levels" },
        { cat: "PANCREATIC (2)", items: "Amylase, Lipase" },
        { cat: "CBC (28)", items: "Complete Blood Count" },
        { cat: "URINE ANALYSIS (18)", items: "Complete Urine Analysis" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      
      {/* Decorative Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase mb-6 shadow-sm border border-blue-200">
            <Activity size={16} /> Premium Health Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            Preventive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Health Screening</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our highly specialized, comprehensive full-body checkup profiles designed for early detection and total wellness monitoring.
          </p>
        </div>

        {/* Health Packages Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-xl rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500 group flex flex-col"
            >
              
              {/* Image & Title Section */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${pkg.theme} mix-blend-multiply opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <div className="flex justify-between items-end gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black mb-1 tracking-tight drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-300">{pkg.title}</h3>
                      <p className="text-sm md:text-base font-medium text-gray-200 tracking-wide uppercase">{pkg.subtitle}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3 text-center shrink-0 shadow-xl">
                      <p className="text-xs text-white/80 font-bold uppercase mb-1">Total Tests</p>
                      <p className="text-3xl font-black leading-none">{pkg.totalTests}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Content Body */}
              <div className="p-8 flex-grow flex flex-col">
                
                {pkg.quote && (
                  <p className="text-sm italic text-gray-500 text-center mb-6 border-b border-gray-100 pb-4">
                    "{pkg.quote}"
                  </p>
                )}

                {/* Target Audience & Icons */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold text-gray-700">
                  <span className={`px-4 py-1.5 rounded-full ${pkg.bgTheme} border border-gray-200`}>
                    For: {pkg.target}
                  </span>
                </div>

                {/* Scrollable Tests List (Glassmorphism inner box) */}
                <div className="bg-gray-50/50 rounded-2xl border border-gray-100 p-4 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Stethoscope size={18} className="text-blue-500" /> Package Includes:
                  </h4>
                  {/* Custom Scrollbar Container */}
                  <div className="max-h-[280px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                    {pkg.tests.map((test, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100/50 hover:border-blue-200 transition-colors">
                        <p className="text-xs font-black text-gray-900 mb-1 tracking-wide">{test.cat}</p>
                        <p className="text-xs text-gray-600 leading-relaxed">{test.items}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="grid grid-cols-3 gap-2 mb-8">
                  <div className="bg-orange-50 text-orange-700 rounded-xl p-3 text-center border border-orange-100">
                    <Clock size={20} className="mx-auto mb-1 opacity-70" />
                    <p className="text-[10px] md:text-xs font-bold leading-tight">8-12 Hrs<br/>Fasting</p>
                  </div>
                  <div className="bg-blue-50 text-blue-700 rounded-xl p-3 text-center border border-blue-100">
                    <FileText size={20} className="mx-auto mb-1 opacity-70" />
                    <p className="text-[10px] md:text-xs font-bold leading-tight">Reports in<br/>8-12 Hrs</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-700 rounded-xl p-3 text-center border border-emerald-100">
                    <Home size={20} className="mx-auto mb-1 opacity-70" />
                    <p className="text-[10px] md:text-xs font-bold leading-tight">24/7 Home<br/>Visit</p>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto border-t border-gray-100 pt-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <div>
                      <p className="text-gray-400 font-bold text-sm line-through decoration-red-400 decoration-2 mb-1">MRP: ₹{pkg.mrp}</p>
                      <div className="flex items-end gap-3">
                        <p className="text-4xl font-black text-gray-900 leading-none">₹{pkg.offer}</p>
                        <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md animate-pulse">
                          {pkg.discount}
                        </div>
                      </div>
                    </div>
                    <BadgePercent size={48} className="text-gray-100 absolute right-8 transform -rotate-12" />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="tel:08879327184" 
                      className={`flex-1 flex justify-center items-center gap-2 bg-gradient-to-r ${pkg.theme} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                    >
                      <PhoneCall size={18} /> Call Now
                    </a>
                    <button 
                      onClick={() => setIsBookingOpen(true)}
                      className="flex-1 flex justify-center items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <CalendarCheck size={18} /> Book Test
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for the Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}} />

      {/* Booking Modal */}
      <BookAppointmentModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}