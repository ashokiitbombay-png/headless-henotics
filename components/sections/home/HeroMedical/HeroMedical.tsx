import Link from "next/link";
import { ChevronRight, Phone, CalendarCheck, ShieldCheck } from "lucide-react";
import { companyDetails } from "@/lib/constants";

export default function HeroMedical() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center bg-slate-900">
      
      {/* 1. Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/0c37a66f-laboratory-henotic-diagnostics-ct-scan-dexa-bone-scan-mri-scan-sonography-ultrasound-pet-scan-dopa-scan-kharghar-navi-mumbai.webp" 
          alt="Henotic Diagnostics Advanced Laboratory" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-slow-zoom"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* 2. Hero Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            World-Class Healthcare
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
            Uncompromising <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
              Precision & Quality
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light border-l-4 border-blue-500 pl-6">
            At Henotic Diagnostics, accuracy isn't just a goal; it is our promise. We adhere to the most rigorous global standards to ensure your health is in safe hands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="#accreditations" className="flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <ShieldCheck size={20} className="text-blue-600" /> View Accreditations
            </Link>
            <Link href="/mri-scan" className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
              Explore Services <ChevronRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
