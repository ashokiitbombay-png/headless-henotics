"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, MapPin, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

// ==========================================
// 1. DATA CONFIGURATION
// ==========================================

const REGIONS = {
  "South Mumbai": ["colaba", "cuffe-parade", "fort", "churchgate", "marine-lines", "nariman-point", "worli", "parel", "lower-parel", "mahalaxmi", "byculla", "dadar"],
  "Central Mumbai": ["sion", "kurla", "chembur", "ghatkopar", "vikhroli", "kanjurmarg", "bhandup", "mulund"],
  "Western Suburbs": ["bandra", "khar", "santacruz", "vile-parle", "andheri", "jogeshwari", "goregaon", "malad", "kandivali", "borivali", "dahisar"],
  "Eastern Suburbs": ["kurla-east", "chembur-east", "ghatkopar-east", "vikhroli-east", "mulund-east"],
  "Navi Mumbai": ["vashi", "sanpada", "juinagar", "nerul", "seawoods", "cbd-belapur", "kharghar", "kamothe", "kalamboli", "panvel", "new-panvel", "taloja", "ghansoli", "kopar-khairane", "airoli", "turbhe"],
};

const SERVICE_CATEGORIES = {
  "Pathology & Preventive": ["blood-tests", "full-body-check-up", "health-checkup"],
  "Radiology & Imaging": ["sonography", "ultrasound", "pregnancy-sonography", "obstetric-ultrasound", "anomaly-scan", "nt-scan", "color-doppler", "mammography", "follicular-study"],
  "Advanced Imaging": ["ct-scan", "mri-scan", "pet-scan", "spect-scan", "dtpa-scan", "dexa-bone-scan", "liver-fibroscan", "liver-elastography"],
  "Cardiology Diagnostics": ["2d-echo", "2d-echo-test", "tmt-test", "stress-test", "holter-monitoring"],
  "Interventional Cardiology": ["angiography", "angioplasty", "tavr"],
  "Prenatal & Genetic": ["prenatal-test", "nipt-test", "nips-test", "nippt"],
};

// ==========================================
// 2. COMPONENT
// ==========================================

export default function SecondFooter() {
  // State to track which Region is open
  const [openRegion, setOpenRegion] = useState<string | null>("Navi Mumbai");

  // Helper to format text (e.g. "mri-scan" -> "MRI Scan")
  const formatText = (slug: string) => slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16 font-sans">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest mb-2">
            <span className="text-blue-500">Global</span> Service Directory
          </h2>
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            Find Specialists & Diagnostics Near You
          </p>
        </div>

        {/* REGION TABS / ACCORDION */}
        <div className="grid lg:grid-cols-5 gap-2 mb-8">
          {Object.keys(REGIONS).map((region) => (
            <button
              key={region}
              onClick={() => setOpenRegion(openRegion === region ? null : region)}
              className={cn(
                "px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border border-transparent",
                openRegion === region 
                  ? "bg-blue-600 text-white shadow-lg border-blue-500" 
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              )}
            >
              {region}
            </button>
          ))}
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          
          {openRegion && (
            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                <MapPin className="text-blue-500" size={20} />
                <h3 className="text-xl font-bold text-white">{openRegion} Locations</h3>
              </div>

              {/* LOCATIONS GRID */}
              <div className="grid gap-6">
                {REGIONS[openRegion as keyof typeof REGIONS].map((location) => (
                  <details 
                    key={location} 
                    className="group border border-slate-800 bg-slate-900/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 open:bg-slate-900 open:border-blue-500"
                  >
                    
                    {/* LOCATION SUMMARY (CLICKABLE) */}
                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></div>
                        <span className="text-sm font-bold text-slate-200 uppercase tracking-wide group-hover:text-white">
                          {formatText(location)}
                        </span>
                      </div>
                      <ChevronDown size={16} className="text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-500" />
                    </summary>

                    {/* SERVICES MATRIX FOR THIS LOCATION */}
                    <div className="p-6 pt-0 border-t border-slate-800/50 mt-2">
                       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                          {Object.entries(SERVICE_CATEGORIES).map(([category, services]) => (
                            <div key={category}>
                              <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Activity size={10} /> {category}
                              </h4>
                              <ul className="space-y-2">
                                {services.map((service) => (
                                  <li key={service}>
                                    <Link 
                                      href={`/${service}/${location}`}
                                      className="block text-[11px] font-medium text-slate-500 hover:text-white transition-colors hover:translate-x-1 duration-200"
                                      title={`${formatText(service)} in ${formatText(location)}`}
                                    >
                                      {formatText(service)}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                       </div>
                    </div>

                  </details>
                ))}
              </div>
            </div>
          )}

          {!openRegion && (
            <div className="text-center py-20 text-slate-600">
              <p>Select a region above to view centers and services.</p>
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}
