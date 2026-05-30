"use client";

import React from "react";
import { List, ChevronRight, CheckCircle2, Bookmark } from "lucide-react";

export default function TableOfContents() {
  const tocItems = [
    "Introduction to Blood Testing",
    "What Is a Blood Test?",
    "Why Blood Tests Are Important",
    {
      title: "Types of Blood Tests",
      subItems: [
        "Complete Blood Count (CBC)",
        "Blood Sugar Tests",
        "HbA1c Test",
        "Lipid Profile",
        "Liver Function Tests (LFT)",
        "Kidney Function Tests (KFT)",
        "Thyroid Function Tests",
        "Vitamin and Nutritional Tests",
        "Hormone Testing",
        "Infection Screening Tests",
        "Cardiac Risk Markers",
        "Genetic and Molecular Tests"
      ]
    },
    "Blood Test Technology and Laboratory Science",
    "How Blood Tests Work",
    "Blood Test Procedure: Step-by-Step Guide",
    "Preparing for a Blood Test",
    "Understanding Blood Test Results",
    "Common Symptoms That May Require Blood Testing",
    "Conditions That Blood Tests Can Help Detect",
    "Preventive Health and Blood Testing",
    "Blood Tests for Men’s Health",
    "Blood Tests for Women’s Health",
    "Pregnancy and Prenatal Blood Tests",
    "Blood Tests for Children and Seniors",
    "Nutritional Deficiency Testing",
    "Diabetes and Metabolic Health Testing",
    "Heart Health and Cardiovascular Screening",
    "Thyroid and Hormonal Health Assessment",
    "Liver and Kidney Health Evaluation",
    "Infection and Immunity Testing",
    "Advanced Genetic and Molecular Diagnostics",
    "Related Blood Tests and Diagnostic Investigations",
    "Related Healthcare and Diagnostic Services",
    "Frequently Asked Questions About Blood Tests",
    "Blood Test Safety and Accuracy",
    "Benefits of Regular Health Screening",
    "The Future of Blood Testing and Laboratory Medicine",
    "When to Consult a Healthcare Professional",
    "Key Takeaways About Blood Testing"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-[#f8fafc] to-blue-50/50 relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1300px] relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Table of Contents Content */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase shadow-sm">
                <List size={16} /> Quick Navigation
              </div>
              
              {/* SEO: H2 Tag */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                On This <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Page</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Use this comprehensive index to quickly navigate through our detailed guide on modern blood testing and laboratory diagnostics.
              </p>
            </div>

            {/* Scrollable Glassmorphic Box */}
            <div className="bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-2 relative">
              <div className="max-h-[600px] overflow-y-auto custom-scrollbar p-6 space-y-2">
                <nav>
                  <ul className="space-y-3">
                    {tocItems.map((item, index) => {
                      // Handle simple string items
                      if (typeof item === "string") {
                        return (
                          <li key={index} className="group">
                            <a href={`#section-${index}`} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700 font-medium">
                              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                {index + 1}
                              </span>
                              <span className="flex-grow">{item}</span>
                              <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all mt-0.5" />
                            </a>
                          </li>
                        );
                      } 
                      // Handle nested object items (Types of Blood Tests)
                      else {
                        return (
                          <li key={index} className="group">
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 text-gray-900 font-bold border border-slate-100">
                              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="flex-grow">{item.title}</span>
                            </div>
                            
                            {/* Nested List */}
                            <ul className="mt-2 ml-10 space-y-2 border-l-2 border-slate-100 pl-4 py-2">
                              {item.subItems.map((sub, subIndex) => (
                                <li key={subIndex}>
                                  <a href={`#subsection-${index}-${subIndex}`} className="flex items-center gap-2 py-1.5 px-3 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors font-medium group/sub">
                                    <CheckCircle2 size={14} className="text-cyan-500 shrink-0 opacity-70 group-hover/sub:opacity-100" />
                                    {sub}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </nav>
              </div>
              
              {/* Fade out effect at the bottom of the scroll container */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent rounded-b-3xl pointer-events-none"></div>
            </div>

          </div>
          
          {/* RIGHT: Dedicated Image Layout with Gradient Glow (Sticky) */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="relative group perspective-1000 pt-4">
              
              {/* Deep Gradient Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 via-indigo-400 to-cyan-400 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              {/* High Quality Image Container */}
              <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                <img 
                  src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/henotic-diagnostics-blood-test-lab.webp" 
                  alt="Comprehensive Blood Testing Guide" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 text-white shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Bookmark size={24} className="text-cyan-300" />
                      <h3 className="font-bold text-lg">Complete Guide</h3>
                    </div>
                    <p className="text-blue-50 text-sm leading-relaxed">
                      Everything you need to know about blood tests, from preparation to understanding your diagnostic results.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Global CSS for Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}} />
    </section>
  );
}