import Link from "next/link";
import Image from "next/image";
import { companyDetails, citySlugs } from "@/lib/constants";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Microscope, Activity, HeartPulse, Baby, FileText } from "lucide-react";

export default function PremiumFooter() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 font-sans pt-24 pb-12 overflow-hidden border-t border-slate-900">
      
      {/* 🔹 BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 shadow-[0_0_40px_rgba(34,211,238,0.4)]"></div>
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* =========================================
            SECTION 1: BRAND IDENTITY & CONTACT
           ========================================= */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20 border-b border-slate-800 pb-16">
          
          {/* LOGO & ABOUT (Spans 2 Columns) */}
          <div className="lg:col-span-2 space-y-8 pr-8">
            <Link href="/" className="inline-block group">
              <div className="relative p-2">
                {/* 3D LOGO CONTAINER */}
                <div className="relative w-auto h-20 flex items-center gap-4">
                   <div className="relative w-20 h-20 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md flex items-center justify-center overflow-hidden group-hover:border-blue-500/50 transition-all duration-500">
                      <Image 
                        src="/images/henotic-diagnostics-logo.webp" 
                        alt="Henotic Diagnostics Logo" 
                        width={80} 
                        height={80} 
                        className="object-contain p-1"
                      />
                   </div>
                   <div>
                      <h2 className="text-3xl font-black text-white tracking-widest uppercase leading-none drop-shadow-lg">
                        HENOTIC
                      </h2>
                      <p className="text-teal-400 font-bold tracking-[0.4em] text-xs uppercase mt-1">
                        DIAGNOSTICS
                      </p>
                   </div>
                </div>
              </div>
            </Link>
            
            <p className="text-sm font-medium leading-relaxed text-slate-400 uppercase tracking-wide max-w-md">
              Pioneering precision healthcare with 3T MRI, 128-Slice CT, and 4D Ultrasound technology. NABL Accredited and trusted by 50,000+ patients.
            </p>

            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 text-white">
                 <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-600/50 flex items-center justify-center text-blue-400">
                   <Phone size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">24/7 Support</p>
                   <a href={`tel:${companyDetails.phone[0]}`} className="text-lg font-bold tracking-widest hover:text-blue-400 transition">{companyDetails.phone[0]}</a>
                 </div>
               </div>

               <div className="flex items-center gap-4 text-white">
                 <div className="w-10 h-10 rounded-lg bg-teal-600/20 border border-teal-600/50 flex items-center justify-center text-teal-400">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Main Center</p>
                   <p className="text-sm font-bold tracking-wide">Sector 15, Kharghar</p>
                 </div>
               </div>
            </div>
          </div>

          {/* =========================================
              SECTION 2: SERVICE MEGA-LISTS
             ========================================= */}
          
          {/* COLUMN A: PATHOLOGY & PREVENTIVE */}
          <div>
            <h3 className="flex items-center gap-2 text-blue-400 font-black text-sm tracking-widest mb-6 uppercase">
              <Microscope size={16} /> Pathology
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wide">
              {['blood-tests', 'full-body-check-up', 'thyroid-function-tests', 'diabetes-hba1c', 'lipid-profile', 'liver-function-test', 'kidney-function-test'].map(s => (
                <li key={s}>
                  <Link href={`/${s}`} className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span> {s.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="flex items-center gap-2 text-teal-400 font-black text-sm tracking-widest mt-10 mb-6 uppercase">
              <ShieldCheck size={16} /> Preventive Health
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wide">
              {['executive-health-checkup', 'master-health-checkup', 'senior-citizen-packages', 'womens-wellness'].map(s => (
                <li key={s}>
                  <Link href={`/${s}`} className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span> {s.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN B: RADIOLOGY & CARDIOLOGY */}
          <div>
            <h3 className="flex items-center gap-2 text-purple-400 font-black text-sm tracking-widest mb-6 uppercase">
              <Activity size={16} /> Radiology
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wide">
              {['mri-scan', 'ct-scan', 'pet-scan', 'ultrasound', 'sonography', 'dexa-bone-scan', 'mammography', 'color-doppler'].map(s => (
                <li key={s}>
                  <Link href={`/${s}`} className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span> {s.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="flex items-center gap-2 text-red-400 font-black text-sm tracking-widest mt-10 mb-6 uppercase">
              <HeartPulse size={16} /> Cardiology
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wide">
              {['2d-echo', 'tmt-test', 'stress-test', 'holter-monitoring', 'angiography', 'angioplasty'].map(s => (
                <li key={s}>
                  <Link href={`/${s}`} className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span> {s.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN C: WOMEN'S & GENETICS */}
          <div>
            <h3 className="flex items-center gap-2 text-pink-400 font-black text-sm tracking-widest mb-6 uppercase">
              <Baby size={16} /> Mother & Child
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wide">
              {['pregnancy-sonography', 'obstetric-ultrasound', 'anomaly-scan', 'nt-scan', 'follicular-study', 'nipt-test', 'prenatal-test'].map(s => (
                <li key={s}>
                  <Link href={`/${s}`} className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span> {s.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-black text-sm tracking-widest mt-10 mb-6 uppercase">
              Centers Near You
            </h3>
            <div className="grid grid-cols-2 gap-2">
               {citySlugs.slice(0, 10).map(city => (
                 <Link key={city} href={`/blood-tests/${city}`} className="text-[10px] font-bold text-slate-600 hover:text-blue-400 transition-colors uppercase">
                   {city}
                 </Link>
               ))}
            </div>
            <Link href="/about-us" className="inline-block mt-4 text-[10px] font-bold text-blue-500 hover:text-white transition-colors uppercase border-b border-blue-500/30">
              View All Locations →
            </Link>
          </div>

        </div>

        {/* =========================================
            SECTION 3: FOOTER BOTTOM
           ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
           <div className="text-[10px] font-bold text-slate-600 tracking-[0.2em] uppercase">
             &copy; 2026 Henotic Diagnostics. All Rights Reserved.
           </div>
           
           <div className="flex gap-4">
              {companyDetails.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-blue-500 hover:text-white text-slate-500 transition-all"
                >
                  {social.name === "Facebook" && <Facebook size={14} />}
                  {social.name === "Twitter" && <Twitter size={14} />}
                  {social.name === "Instagram" && <Instagram size={14} />}
                  {social.name === "LinkedIn" && <Linkedin size={14} />}
                </a>
              ))}
           </div>
           
           <div className="flex gap-6 text-[10px] font-bold text-slate-600 tracking-widest uppercase items-center">
              <Link href="/sitemap.xml" className="hover:text-white transition-colors flex items-center gap-1">
                <FileText size={12} /> Sitemap
              </Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}
