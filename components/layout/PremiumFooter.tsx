import Link from "next/link";
import { companyDetails } from "@/lib/constants";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram, Linkedin, FileText, Clock, ExternalLink } from "lucide-react";

export default function PremiumFooter() {
  return (
    <footer 
      className="relative text-white font-sans pt-24 pb-32 lg:pb-16"
      style={{
        background: "linear-gradient(90deg, #16bffd 0%, #cb3066 100%)",
        transform: "translateZ(0)" // Fixes mobile wobble
      }}
    >
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        
        {/* SECTION 1: CONTACT & MAP */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 border-b border-white/20 pb-16 items-start">
          
          {/* LEFT: BRAND */}
          <div className="space-y-10">
            <Link href="/" className="inline-block group relative z-50">
              <div className="relative p-6 rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md">
                 <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-white/40 to-transparent opacity-50"></div>
                 <img 
                   src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/6d8a7750-henotic_diagnostics_logo_gedg88_e_background_removal_f_png-scaled.webp" 
                   alt="Henotic Diagnostics" 
                   className="w-72 lg:w-96 h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative z-50"
                 />
              </div>
            </Link>
            
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-md shadow-xl relative z-20">
               <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                 <MapPin size={16} className="text-white" /> Corporate Headquarters
               </h4>
               <p className="text-white/90 text-sm leading-relaxed mb-6 pl-6 border-l-2 border-white/30">
                 <strong>Henotic Diagnostics</strong><br/>
                 Second floor, Millennium Empire, Business Park,<br/>
                 Plot No 47, D Mart Rd, Sector 15, Kharghar,<br/>
                 Navi Mumbai, Maharashtra 410210
               </p>
               <div className="flex flex-col gap-3 text-sm">
                 <a href="tel:08879327184" className="flex items-center gap-3 text-white hover:text-white/80 transition font-bold bg-white/10 p-3 rounded-lg hover:bg-white/20 border border-white/10">
                   <Phone size={18} /> 08879327184 / 09372853584
                 </a>
                 <div className="flex items-center gap-3 text-white/90 p-2">
                   <Clock size={18} /> Open 24 Hours
                 </div>
                 <a href="https://henoticdiagnostics.com/" target="_blank" className="flex items-center gap-2 text-white font-semibold p-2 hover:underline">
                   <ExternalLink size={14} /> henoticdiagnostics.com
                 </a>
               </div>
            </div>
          </div>

          {/* RIGHT: MAP */}
          <div className="w-full flex flex-col h-64 lg:h-80 relative z-20">
             <div className="flex-1 bg-white/10 p-2 rounded-3xl border border-white/20 w-full shadow-2xl relative group overflow-hidden backdrop-blur-sm">
               <iframe 
                 src="https://maps.google.com/maps?q=Henotic+Diagnostics,Second+floor,Millennium+Empire,Sector+15,Kharghar,Navi+Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="rounded-2xl w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               ></iframe>
               <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/20"></div>
               <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-lg">
                 Henotic Diagnostics
               </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: PAYMENT */}
        <div className="mb-12 relative z-20">
           <p className="text-center text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-8">Secure Payment Partners</p>
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
                <div key={i} className="bg-white rounded-xl w-24 h-14 md:w-32 md:h-16 flex items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <img src={pay.url} alt={pay.name} className="h-6 md:h-8 w-auto object-contain" />
                </div>
              ))}
           </div>
        </div>

        {/* SECTION 3: BOTTOM */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
           <div className="text-[10px] font-bold text-white tracking-[0.2em] uppercase text-center md:text-left">
             © {new Date().getFullYear()} Henotic Diagnostics. All Rights Reserved.
           </div>
           <div className="flex gap-4">
              {companyDetails.socials.map((social, i) => (
                <a key={i} href={social.url} target="_blank" className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-[#cb3066] text-white transition-all">
                  {social.name === "Facebook" && <Facebook size={14} />}
                  {social.name === "Twitter" && <Twitter size={14} />}
                  {social.name === "Instagram" && <Instagram size={14} />}
                  {social.name === "LinkedIn" && <Linkedin size={14} />}
                </a>
              ))}
           </div>
           <div className="flex gap-6 text-[10px] font-bold text-white tracking-widest uppercase">
              <Link href="/sitemap.xml" className="hover:text-white/80 transition-colors flex items-center gap-1"><FileText size={12} /> Sitemap</Link>
              <Link href="#" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/80 transition-colors">Terms</Link>
           </div>
        </div>
      </div>

      {/* --- PREMIUM FLOATING WIDGETS --- */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 items-end pointer-events-none">
        
        {/* WhatsApp Widget */}
        <a 
          href="https://wa.me/918879327184" 
          target="_blank" 
          className="group relative transition-transform hover:scale-110 duration-300 pointer-events-auto"
          aria-label="Chat on WhatsApp"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-green-500 blur-xl opacity-0 group-hover:opacity-40 rounded-full transition-opacity duration-300"></div>
          <img 
             src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/c65e4696-whatsapp.webp" 
             alt="WhatsApp" 
             className="w-14 h-14 drop-shadow-2xl relative z-10" 
          />
        </a>

        {/* Call Now Widget */}
        <a 
          href="tel:08879327184" 
          className="group relative transition-transform hover:scale-110 duration-300 pointer-events-auto"
          aria-label="Call Now"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-40 rounded-full transition-opacity duration-300"></div>
          <img 
            src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/0f754a41-call-now.webp" 
            alt="Call Now" 
            className="w-14 h-14 drop-shadow-2xl animate-[pulse_2s_infinite] relative z-10" 
          />
        </a>
      </div>

    </footer>
  );
}
