"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, MapPin, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const REGIONS = {
  "South Mumbai": ["colaba", "cuffe-parade", "fort", "churchgate", "marine-lines", "nariman-point", "worli", "parel", "lower-parel", "mahalaxmi", "byculla", "dadar"],
  "Central Mumbai": ["sion", "kurla", "chembur", "ghatkopar", "vikhroli", "kanjurmarg", "bhandup", "mulund"],
  "Western Suburbs": ["bandra", "khar", "santacruz", "vile-parle", "andheri", "jogeshwari", "goregaon", "malad", "kandivali", "borivali", "dahisar"],
  "Eastern Suburbs": ["kurla-east", "chembur-east", "ghatkopar-east", "vikhroli-east", "mulund-east"],
  "Navi Mumbai": ["vashi", "sanpada", "juinagar", "nerul", "seawoods", "cbd-belapur", "kharghar", "kamothe", "kalamboli", "panvel", "new-panvel", "taloja", "ghansoli", "kopar-khairane", "airoli", "turbhe"],
};

// Helper function to determine the URL region slug
const getRegionSlug = (regionCategory: string) => {
  if (regionCategory === "Navi Mumbai") return "navi-mumbai";
  return "mumbai"; 
};

const SERVICE_CATEGORIES = {
  "Pathology & Preventive": ["blood-test", "full-body-check-up", "health-checkup"],
  "Radiology & Imaging": ["sonography", "ultrasound", "pregnancy-sonography", "obstetric-ultrasound", "anomaly-scan", "nt-scan", "color-doppler", "mammography", "follicular-study"],
  "Advanced Imaging": ["ct-scan", "mri-scan", "pet-scan", "spect-scan", "dtpa-scan", "dexa-bone-scan", "liver-fibroscan", "liver-elastography"],
  "Cardiology Diagnostics": ["2d-echo", "2d-echo-test", "tmt-test", "stress-test", "holter-monitoring"],
  "Interventional Cardiology": ["angiography", "angioplasty", "tavr"],
  "Prenatal & Genetic": ["prenatal-test", "nipt-test", "nips-test", "nippt"],
};

export default function SecondFooter() {
  const [openRegion, setOpenRegion] = useState<string | null>("Navi Mumbai");
  const formatText = (slug: string) => slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <footer 
      className="text-white py-16 font-sans relative"
      style={{
        background: "linear-gradient(90deg, #4568dc 0%, #b06ab3 100%)",
        transform: "translateZ(0)"
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest mb-2 drop-shadow-md">
            Global Service Directory
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(REGIONS).map((region) => (
            <button
              key={region}
              onClick={() => setOpenRegion(openRegion === region ? null : region)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                openRegion === region 
                  ? "bg-white text-[#b06ab3] border-white shadow-lg scale-105" 
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              )}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          {openRegion && (
            <div className="animate-in fade-in duration-500">
              <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
                <MapPin className="text-white" size={20} />
                <h3 className="text-xl font-bold text-white">{openRegion} Locations</h3>
              </div>

              <div className="grid gap-4">
                {REGIONS[openRegion as keyof typeof REGIONS].map((location) => (
                  <details 
                    key={location} 
                    className="group border border-white/20 bg-white/5 rounded-xl overflow-hidden transition-all hover:bg-white/10 open:bg-white/10 open:border-white/40"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="text-sm font-bold text-white uppercase tracking-wide">
                          {formatText(location)}
                        </span>
                      </div>
                      <ChevronDown size={16} className="text-white/70 group-open:rotate-180 transition-transform" />
                    </summary>

                    <div className="p-6 pt-0 border-t border-white/10 mt-2">
                       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                          {Object.entries(SERVICE_CATEGORIES).map(([category, services]) => (
                            <div key={category}>
                              <h4 className="text-[10px] font-black text-white/80 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Activity size={10} /> {category}
                              </h4>
                              <ul className="space-y-1">
                                {services.map((service) => (
                                  <li key={service}>
                                    <Link 
                                      href={`/${service}/${getRegionSlug(openRegion)}/${location}`}
                                      className="block text-[11px] font-medium text-white/70 hover:text-white transition-colors hover:translate-x-1 duration-200"
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
        </div>
      </div>
    </footer>
  );
}