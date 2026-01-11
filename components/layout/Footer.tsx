import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 text-sm relative overflow-hidden">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/dc35eb9b-henotic-diagnostics-header-section-small-logo-01-scaled.webp" 
                alt="Henotic Logo" 
                className="h-10 w-10 object-contain drop-shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-wide uppercase group-hover:text-[#b06ab3] transition-colors">HENOTIC</span>
                <span className="text-slate-500 font-medium text-xs tracking-[0.15em] uppercase">DIAGNOSTICS</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              NABL Accredited & ISO Certified. Bringing the world's most advanced imaging and pathology technology to your neighborhood.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-slate-900 p-2 rounded-full hover:bg-[#4568dc] hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Contact', 'Book Appointment'].map((item) => (
                <li key={item}>
                  <Link href="/" className="flex items-center gap-2 hover:text-[#b06ab3] transition-colors group">
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-[#b06ab3]" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Key Services</h4>
            <ul className="space-y-3">
              {['MRI Scan (3T)', 'CT Scan (128 Slice)', 'PET-CT Scan', 'DEXA Bone Scan', 'Full Body Checkup'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="flex items-center gap-2 hover:text-[#4568dc] transition-colors group">
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-[#4568dc]" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-[#4568dc] mt-1" size={18} />
                <span>Shop No. 12, Crystal Plaza, Sector 7, Kharghar, Navi Mumbai, 410210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#b06ab3]" size={18} />
                <a href="tel:08879327184" className="hover:text-white transition">08879327184</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#4568dc]" size={18} />
                <a href="mailto:info@henotic.com" className="hover:text-white transition">info@henotic.com</a>
              </li>
              <li className="flex items-center gap-3 text-xs font-bold text-yellow-500 bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
                <Clock size={16} /> Open 24x7 for Emergencies
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Henotic Diagnostics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
