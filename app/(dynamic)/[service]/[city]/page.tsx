import { notFound } from "next/navigation";
import { serviceSlugs, citySlugs, companyDetails } from "@/lib/constants";
import { getServiceContent } from "@/lib/content-engine";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingCard, ProcedureTimeline, ReviewCard } from "@/components/ui/ServiceComponents";
import PremiumBookingForm from "@/components/ui/PremiumBookingForm"; // <-- IMPORT ADDED
import { 
  Phone, Clock, CheckCircle, FileText, Zap, 
  MapPin, Star, User, Activity, Microscope, ArrowRight, Info
} from "lucide-react";
import { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service, city } = await params;
  const content = getServiceContent(service, city);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `${content.title} | Best Price in ${cityName}`,
    description: `Book ${content.title}. ${content.techSpecs}. Lowest Price: ${content.pricing[0].price}. NABL Accredited Center.`
  };
}

export default async function ProgrammaticPage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service, city } = await params;
  if (!serviceSlugs.includes(service) || !citySlugs.includes(city)) notFound();

  const content = getServiceContent(service, city);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <main className="bg-slate-50 font-sans text-slate-900">
      <JsonLd service={service} city={cityName} />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/7209818d-ct-scan-mri-scan-pet-scan-kharghar-navi-mumbai-henotic-diagnostics.webp" alt={`${service} in ${cityName}`} className="w-full h-full object-cover opacity-20 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 px-4 py-1.5 rounded-full mb-6 text-sm font-bold tracking-wide text-white">
              <MapPin size={16} /> Serving {cityName} Area
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6 text-white capitalize">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-md max-w-2xl">
              {content.scientificDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/40 transition flex items-center justify-center gap-3">
                Book Now <Zap size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="py-20 px-6 container mx-auto -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.pricing.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Henotic</div>
              <h3 className="font-bold text-xl text-slate-900 mt-6 mb-2">{item.name}</h3>
              <div className="text-3xl font-black text-blue-600 mb-1">{item.price}</div>
              <ul className="text-sm text-slate-600 space-y-2 mb-6 border-t border-slate-100 pt-4 h-24 overflow-hidden">
                 {item.features.map((f, k) => <li key={k} className="flex gap-2"><CheckCircle size={14} className="text-green-500 shrink-0"/> {f}</li>)}
              </ul>
              <a href="#booking" className="block w-full py-3 rounded-lg bg-slate-900 text-white text-center font-bold text-sm hover:bg-blue-600 transition">Book Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INFO BLOCKS */}
      <section className="py-20 px-6 container mx-auto grid lg:grid-cols-2 gap-16">
         <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">Why Choose Henotic for {service.replace(/-/g, ' ')}?</h2>
            <p className="text-lg text-slate-600 mb-6">{content.imagingContext}</p>
            <ul className="space-y-4">
                {content.benefits.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-slate-700"><CheckCircle className="text-teal-500"/> {feat}</li>
                ))}
            </ul>
         </div>
         <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2"><Clock /> Fasting Rules</h3>
                <p className="text-slate-700">{content.fasting}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Procedure Steps</h3>
                <div className="space-y-4">
                   {content.procedure.map((step, i) => (
                      <div key={i} className="flex gap-3">
                         <span className="font-bold text-blue-600">{i+1}.</span>
                         <div>
                            <span className="font-bold text-slate-900">{step.title}: </span>
                            <span className="text-slate-600">{step.desc}</span>
                         </div>
                      </div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* 4. PREMIUM BOOKING FORM (INJECTED HERE) */}
      <section id="booking" className="py-12 bg-slate-100/50">
         <div className="container mx-auto px-6">
            <PremiumBookingForm />
         </div>
      </section>

    </main>
  );
}
