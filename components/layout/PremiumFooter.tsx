import Link from "next/link";
import { companyDetails } from "@/lib/constants";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram, Linkedin, FileText, Clock, ExternalLink } from "lucide-react";

export default function PremiumFooter() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 font-sans pt-24 overflow-hidden border-t border-slate-900 pb-32 lg:pb-16">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 shadow-[0_0_40px_rgba(34,211,238,0.4)]"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* =========================================
            SECTION 1: CONTACT & MAP SPLIT LAYOUT
           ========================================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 border-b border-slate-800 pb-16 items-start">
          
          {/* LEFT COLUMN: BRAND & NAP DETAILS */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group relative">
              {/* DEEP 3D LOGO BOX */}
              <div className="relative z-10 p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] transition-all duration-500 transform hover:-translate-y-1">
                 <img 
                   src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/6d8a7750-henotic_diagnostics_logo_gedg88_e_background_removal_f_png-scaled.webp" 
                   alt="Henotic Diagnostics" 
                   className="w-64 lg:w-72 h-auto object-contain drop-shadow-2xl brightness-110"
                 />
              </div>
              {/* 3D Depth Layer */}
              <div className="absolute inset-0 bg-blue-900/20 rounded-3xl blur-xl transform translate-y-4 -z-0"></div>
            </Link>
            
            {/* NAP DETAILS BOX */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl">
               <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                 <MapPin size={16} className="text-teal-400" /> Corporate Headquarters
               </h4>
               <p className="text-slate-300 text-sm leading-relaxed mb-6 pl-6 border-l-2 border-slate-700">
                 <strong>Henotic Diagnostics</strong><br/>
                 Second floor, Millennium Empire, Business Park,<br/>
                 Plot No 47, D Mart Rd, Sector 15, Kharghar,<br/>
                 Navi Mumbai, Maharashtra 410210
               </p>
               <div className="flex flex-col gap-3 text-sm">
                 <a href="tel:08879327184" className="flex items-center gap-3 text-white hover:text-blue-400 transition font-bold bg-slate-800/50 p-3 rounded-lg hover:bg-slate-800">
                   <Phone size={18} className="text-blue-500" /> 08879327184 / 09372853584
                 </a>
                 <div className="flex items-center gap-3 text-slate-400 p-2">
                   <Clock size={18} className="text-slate-500" /> Open 24 Hours
                 </div>
                 <a href="https://henoticdiagnostics.com/" target="_blank" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition text-xs font-semibold p-2">
                   <ExternalLink size={14} /> henoticdiagnostics.com
                 </a>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DEDICATED GOOGLE MAP (REDUCED HEIGHT) */}
          <div className="w-full flex flex-col h-64 lg:h-80">
             <div className="flex-1 bg-slate-800 p-2 rounded-3xl border border-slate-700 w-full shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] relative group overflow-hidden">
               {/* GOOGLE APPROVED MAP EMBED */}
               <iframe 
                 src="https://maps.google.com/maps?q=Henotic%20Diagnostics%2C%20Kharghar%2C%20Navi%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="rounded-2xl w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
               ></iframe>
               <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-slate-700/50"></div>
               
               {/* Map Badge */}
               <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full border border-slate-700 shadow-lg">
                 Locate Us
               </div>
            </div>
          </div>

        </div>

        {/* =========================================
            SECTION 2: SECURE PAYMENT PARTNERS
           ========================================= */}
        <div className="mb-12">
           <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Secure Payment Partners</p>
           
           <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Paytm", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/4cc15576-paytm-banking-henotic-diagnostics.webp" },
                { name: "GPay", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/22f37b85-google-pay-payment-transfer-henotic-diagnostics.webp" },
                { name: "BHIM", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/9ee511bb-bhim-upi-transfer-banking-henotic-diagnostics.webp" },
                { name: "Amex", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/8982a1eb-american-experss-payment-transfer-henotic-diagnostics.webp" },
                { name: "Amazon", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/57673992-amazon-pay-payment-transfer-henotic-diagnostics.webp" },
                { name: "Cards", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/d412e583-all-debitcards-creditcards-payment-transfer-henotic-diagnostics.webp" },
                { name: "Visa", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/7ecc0645-visa-payment-transfer-henotic-diagnostics.webp" },
                { name: "Paypal", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/3ffff106-paypal-banking-henotic-diagnostics.webp" }
              ].map((pay, i) => (
                <div key={i} className="bg-white rounded-xl w-24 h-14 md:w-32 md:h-16 flex items-center justify-center shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300">
                  <img 
                    src={pay.url} 
                    alt={pay.name} 
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
              ))}
           </div>
        </div>

        {/* =========================================
            SECTION 3: FOOTER BOTTOM
           ========================================= */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[10px] font-bold text-slate-600 tracking-[0.2em] uppercase text-center md:text-left">
             © {new Date().getFullYear()} Henotic Diagnostics. All Rights Reserved.
           </div>
           <div className="flex gap-4">
              {companyDetails.socials.map((social, i) => (
                <a key={i} href={social.url} target="_blank" className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-blue-500 hover:text-white text-slate-500 transition-all">
                  {social.name === "Facebook" && <Facebook size={14} />}
                  {social.name === "Twitter" && <Twitter size={14} />}
                  {social.name === "Instagram" && <Instagram size={14} />}
                  {social.name === "LinkedIn" && <Linkedin size={14} />}
                </a>
              ))}
           </div>
           <div className="flex gap-6 text-[10px] font-bold text-slate-600 tracking-widest uppercase">
              <Link href="/sitemap.xml" className="hover:text-white transition-colors flex items-center gap-1"><FileText size={12} /> Sitemap</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
           </div>
        </div>

      </div>

      {/* =========================================
          FLOATING WIDGETS
         ========================================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/918879327184?text=Hi,%20I%20want%20to%20book%20an%20appointment." 
          target="_blank" 
          className="group flex items-center justify-end relative"
        >
          <span className="absolute right-16 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <img 
            src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/c65e4696-whatsapp.webp" 
            alt="WhatsApp" 
            className="w-14 h-14 hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
          />
        </a>

        {/* Call Button */}
        <a 
          href="tel:08879327184" 
          className="group flex items-center justify-end relative"
        >
          <span className="absolute right-16 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Now
          </span>
          <img 
            src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/0f754a41-call-now.webp" 
            alt="Call Now" 
            className="w-14 h-14 hover:scale-110 transition-transform duration-300 animate-[pulse_2s_infinite] drop-shadow-2xl"
          />
        </a>
      </div>

    </footer>
  );
}
