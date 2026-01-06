import Link from "next/link";
import { companyDetails, citySlugs } from "@/lib/constants";
import { getServiceContent } from "@/lib/content-engine";
import { Phone, MapPin, Zap, ShieldCheck, Activity, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best sonography in Mumbai | Henotic Diagnostics",
  description: "Book sonography in Mumbai. NABL Accredited Labs, Best Price, Home Collection available.",
};

export default function ServiceHubPage() {
  const serviceSlug = "sonography";
  const content = getServiceContent(serviceSlug, "Mumbai");

  return (
    <main className="bg-slate-50 font-sans text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 px-4 py-1.5 rounded-full mb-6 text-sm font-bold tracking-wide text-white">
              <ShieldCheck size={16} /> Advanced Diagnostics
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6 text-white capitalize">
              {serviceSlug.replace(/-/g, " ")} Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-md">
              {content.scientificDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${companyDetails.phone[0]}`} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/40 transition flex items-center justify-center gap-3">
                Book Appointment <Zap size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 container mx-auto -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.pricing.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition duration-300 relative overflow-hidden group">
              <h3 className="font-bold text-xl text-slate-900 mt-6 mb-2">{item.name}</h3>
              <div className="text-3xl font-black text-blue-600 mb-1">{item.price}</div>
              <ul className="text-sm text-slate-600 space-y-2 mb-6 border-t border-slate-100 pt-4 h-20 overflow-hidden">
                 {item.features.map((f, k) => <li key={k} className="flex gap-2"><CheckCircle size={14} className="text-green-500 shrink-0"/> {f}</li>)}
              </ul>
              <a href={`tel:${companyDetails.phone[0]}`} className="block w-full py-3 rounded-lg bg-slate-900 text-white text-center font-bold text-sm hover:bg-blue-600 transition">Book Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Available Locations</h2>
            <p className="text-slate-600 text-lg">Select your nearest center for {serviceSlug.replace(/-/g, " ")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {citySlugs.sort().map((city) => (
              <Link 
                key={city} 
                href={`/${serviceSlug}/${city}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-bold text-slate-800 capitalize group-hover:text-blue-600">{city.replace(/-/g, " ")}</span>
                <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
