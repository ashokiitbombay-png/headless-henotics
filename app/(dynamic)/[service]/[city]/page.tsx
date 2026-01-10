import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { TARGET_LOCATIONS, slugify, unslugify } from "@/lib/locations";
import AppointmentForm from "@/components/AppointmentForm"; 
import DoctorsGrid from "@/components/DoctorsGrid";
import { 
  CheckCircle2, Star, Bone, Activity, CalendarCheck, Phone, ShieldCheck, 
  Clock, FileText, Smartphone, User, Stethoscope, Microscope, Zap, ChevronDown, 
  Home, ChevronRight, MapPin 
} from "lucide-react";

const VALID_SERVICES = ["dexa-scan", "dexa-bone-scan"];

const IMAGES = {
  hero: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/be9a7e98-dexa-scan-kharghar-for-bmd-testing-accurate-bone-density-measurement-and-fast-reports.webp.webp",
  explanation: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/23b0bf84-dexa-scan-ghansoli-navi-mumbai-bmd-test-for-accurate-osteoporosis-assessment.webp.webp",
  tech: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/d05e7950-mri-scan-in-panvel-whole-body-brain-spine-mri.webp",
  pricing: {
    single: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/74617b09-dexa-scan-in-navi-mumbai-and-mumbai-for-bone-mineral-density-bmd-and-body-composition.webp.webp",
    threePart: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/eb8efbac-dexa-bmd-scan-navi-mumbai-for-menopause-related-bone-loss-and-osteoporosis-risk.webp.webp",
    wholeBody: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/6489024d-bmd-dexa-scan-in-mumbai-for-osteoporosis-early-detection-with-accurate-bone-health-assessment.webp.webp"
  },
  faq: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/a8a7aed1-affordable-dexa-scan-in-mumbai-bmd-test-for-fracture-risk-evaluation-at-trusted-diagnostic-lab.webp-scaled.webp"
};

const FAQS = [
  { q: "Is BMD Dexa Bone Scan Fasting needed?", a: "No fasting is needed. You can eat and drink normally. Stop calcium medication 24 hrs early prior to the scan." },
  { q: "What is the procedure for a DEXA scan?", a: "It is a walk-in, walk-out procedure. You lie flat for 10 minutes while a scanner arm moves above you. It is painless and uses very low radiation." },
  { q: "What is 3 Body Parts DEXA scan?", a: "A 3 Body Parts scan looks at the Spine and both Hips—the areas most prone to fractures." },
  { q: "What is Whole Body DEXA Scan?", a: "A Whole Body scan measures every bone in the body and also provides a Body Composition report (fat vs muscle mass)." }
];

export async function generateStaticParams() {
  const paths = [];
  for (const service of VALID_SERVICES) {
    for (const loc of TARGET_LOCATIONS) {
      paths.push({ service: service, city: slugify(loc) });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  if (!VALID_SERVICES.includes(resolvedParams.service)) return {};
  const cityName = unslugify(resolvedParams.city || "");
  const serviceName = resolvedParams.service.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  
  return { 
    title: `${serviceName} in ${cityName} | Gold Standard BMD Test | Henotic`, 
    description: `Best ${serviceName} center in ${cityName}. Advanced Fan-Beam technology for Osteoporosis screening. MD Radiologist Reports in 4 Hrs. Book Now.`,
    alternates: { canonical: `https://henoticdiagnostics.com/${resolvedParams.service}/${resolvedParams.city}` }
  };
}

export default async function DynamicServiceLocationPage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const resolvedParams = await params;
  if (!VALID_SERVICES.includes(resolvedParams.service)) return notFound(); 
  const citySlug = resolvedParams.city;
  const cityName = unslugify(citySlug || ""); 
  if (!TARGET_LOCATIONS.some(loc => slugify(loc) === citySlug)) return notFound();

  const serviceDisplay = resolvedParams.service === "dexa-bone-scan" ? "DEXA Bone Scan" : "BMD DEXA Scan";
  const serviceLink = `/${resolvedParams.service}`;
  const currentLocationLink = `/${resolvedParams.service}/${citySlug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://henoticdiagnostics.com/" },
      { "@type": "ListItem", "position": 2, "name": serviceDisplay, "item": `https://henoticdiagnostics.com${serviceLink}` },
      { "@type": "ListItem", "position": 3, "name": cityName, "item": `https://henoticdiagnostics.com${currentLocationLink}` }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* JSON-LD SCHEMAS */}
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-local" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ 
          "@context": "https://schema.org", "@type": "MedicalClinic", 
          "name": `Henotic Diagnostics - ${serviceDisplay} Center`, 
          "url": `https://henoticdiagnostics.com${currentLocationLink}`, 
          "address": { "@type": "PostalAddress", "addressLocality": cityName, "addressRegion": "Maharashtra", "addressCountry": "IN" }, 
          "medicalSpecialty": "Radiology",
          "priceRange": "₹1800-₹5000",
          "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }
      })}} />

      {/* --- HERO SECTION --- */}
      <section className="relative text-white py-16 lg:py-24 overflow-hidden" style={{ backgroundImage: "linear-gradient(120deg, #4568dc 0%, #b06ab3 100%)" }}>
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border border-white/20 shadow-lg backdrop-blur-sm"><Bone size={14} className="text-yellow-300" /> SERVING {cityName.toUpperCase()}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">{serviceDisplay} <br/><span className="text-blue-100">in {cityName}</span></h1>
            <p className="text-lg text-white/90 leading-relaxed font-medium">Looking for a <strong>{serviceDisplay} in {cityName}</strong>? Henotic Diagnostics provides the Gold Standard in Bone Densitometry.</p>
            <div className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-white border border-white/10 text-sm font-bold"><Star className="fill-yellow-400 text-yellow-400" size={16}/> 4.9 Rating</div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-white border border-white/10 text-sm font-bold"><Clock className="text-blue-300" size={16} /> Reports in 4 Hrs</div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:ml-auto"><AppointmentForm defaultLocation={cityName} testName={serviceDisplay} /></div>
        </div>
      </section>

      {/* --- VISIBLE GRADIENT BREADCRUMB BAR --- */}
      <nav className="w-full shadow-md relative z-20" style={{ backgroundImage: "linear-gradient(to right, #4568dc, #b06ab3)" }}>
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs md:text-sm font-bold text-white uppercase tracking-wider overflow-x-auto whitespace-nowrap">
            <li className="flex items-center gap-1 hover:text-yellow-300 transition-colors"><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
            <ChevronRight size={14} className="text-white/60" />
            <li className="flex items-center gap-1 hover:text-yellow-300 transition-colors"><Link href={serviceLink}>{serviceDisplay}</Link></li>
            <ChevronRight size={14} className="text-white/60" />
            <li className="text-yellow-300 flex items-center gap-1"><MapPin size={14} /> {cityName}</li>
          </ol>
        </div>
      </nav>

      {/* --- SCIENTIFIC DETAILS & MEDICAL CONTEXT --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              <img src={IMAGES.explanation} alt="Bone Mineral Density Chart" className="rounded-3xl shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Scientific Science of DEXA</h2>
              <p className="text-slate-600 leading-relaxed">
                The <strong>Dual-Energy X-ray Absorptiometry (DEXA)</strong> scan utilizes two distinct X-ray energy beams. One beam is absorbed by soft tissue, and the other by bone. By subtracting soft tissue absorption, our advanced Fan-Beam technology calculates <strong>Bone Mineral Density (BMD)</strong> in g/cm² with high precision.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Activity className="text-purple-600" /> T-Score & Z-Score Benchmarks</h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li className="flex gap-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">NORMAL</span> T-score -1.0 or higher.</li>
                  <li className="flex gap-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">OSTEOPENIA</span> T-score between -1.0 and -2.5.</li>
                  <li className="flex gap-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">OSTEOPOROSIS</span> T-score -2.5 or lower.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING & TYPES --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">DEXA Scan Types & Prices in {cityName}</h2>
            <p className="text-slate-500 mt-2">Transparent pricing with no hidden costs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Single Site */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="h-48 overflow-hidden"><img src={IMAGES.pricing.single} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Single Site Scan</h3>
                <p className="text-slate-500 text-sm mb-4 min-h-[40px]">Focused scan of either the Lumbar Spine OR one Hip.</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="text-2xl font-black text-blue-600">₹1,800</span>
                  <a href="#booking-form" className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">BOOK NOW</a>
                </div>
              </div>
            </div>
            {/* 3 Body Parts */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-400 relative group transform md:-translate-y-4">
              <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-center text-xs font-bold py-1 uppercase tracking-widest">Gold Standard</div>
              <div className="h-48 overflow-hidden mt-6"><img src={IMAGES.pricing.threePart} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">3 Body Parts</h3>
                <p className="text-slate-500 text-sm mb-4 min-h-[40px]">Lumbar Spine + Both Hips. The clinical standard for Osteoporosis.</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="text-2xl font-black text-yellow-500">₹3,500</span>
                  <a href="#booking-form" className="text-xs font-bold bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors">BOOK NOW</a>
                </div>
              </div>
            </div>
            {/* Whole Body */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="h-48 overflow-hidden"><img src={IMAGES.pricing.wholeBody} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Whole Body Scan</h3>
                <p className="text-slate-500 text-sm mb-4 min-h-[40px]">Full Skeleton BMD + Body Composition (Fat vs Muscle).</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="text-2xl font-black text-purple-600">₹5,000</span>
                  <a href="#booking-form" className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors">BOOK NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE HENOTIC --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img src={IMAGES.tech} alt="Advanced Imaging Tech" className="rounded-3xl shadow-2xl" />
            </div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Why Choose Henotic in {cityName}?</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl h-fit"><Zap className="text-blue-600" /></div>
                  <div><h4 className="font-bold text-lg">Advanced Fan-Beam Technology</h4><p className="text-slate-500 text-sm">Superior to older pencil-beam scanners. Faster scan times and higher resolution images.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-xl h-fit"><Smartphone className="text-green-600" /></div>
                  <div><h4 className="font-bold text-lg">WhatsApp Reporting</h4><p className="text-slate-500 text-sm">Get your digital report instantly via WhatsApp. Hardcopy films are also provided.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl h-fit"><Stethoscope className="text-purple-600" /></div>
                  <div><h4 className="font-bold text-lg">Expert Radiologists</h4><p className="text-slate-500 text-sm">Reports verified by MD Radiologists with 15+ years of experience in musculoskeletal imaging.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCEDURE & PREP (Dark Theme) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-10 border-l-4 border-blue-500 pl-4 text-white">Procedure Guide</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group"><div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">1</div><div><h4 className="text-xl font-bold mb-2 text-white">Check-in</h4><p className="text-slate-300 leading-relaxed">Remove jewelry and metal objects. Wear comfortable clothing provided by the center if needed.</p></div></div>
                <div className="flex gap-6 group"><div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">2</div><div><h4 className="text-xl font-bold mb-2 text-white">Positioning</h4><p className="text-slate-300 leading-relaxed">Lie on a flat table. Legs positioned on a foam block to flatten the spine for accuracy.</p></div></div>
                <div className="flex gap-6 group"><div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">3</div><div><h4 className="text-xl font-bold mb-2 text-white">The Scan</h4><p className="text-slate-300 leading-relaxed">Scanner arm moves slowly over your body. 10 minutes total. No pain, low radiation.</p></div></div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2"><ShieldCheck className="text-green-400"/> Preparation Checklist</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-green-400 shrink-0" size={20} /><span className="text-slate-200 font-medium">No fasting required (Eat normally).</span></li>
                <li className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-green-400 shrink-0" size={20} /><span className="text-slate-200 font-medium">Stop calcium/vitamins 24hrs before test.</span></li>
                <li className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-green-400 shrink-0" size={20} /><span className="text-slate-200 font-medium">Wait 7 days if you had a Contrast CT scan.</span></li>
                <li className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-green-400 shrink-0" size={20} /><span className="text-slate-200 font-medium">Wear metal-free clothing (No zippers).</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST SIGNALS (DOCTORS TEAM) - CLIENT COMPONENT --- */}
      <DoctorsGrid />

      {/* --- FAQs --- */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex justify-between items-center p-6 font-bold text-slate-800 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                  {f.q} <ChevronDown className="group-open:rotate-180 transition-transform text-blue-600" />
                </summary>
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 group-open:mt-4">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATIONS LINK --- */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm mb-4">We proudly serve patients from <strong>{cityName}</strong> and surrounding areas:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {TARGET_LOCATIONS.slice(0, 15).map((loc, i) => (
              <Link key={i} href={`/${resolvedParams.service}/${slugify(loc)}`} className="text-xs text-blue-600 hover:underline px-2 border-r border-slate-300 last:border-0">
                {loc}
              </Link>
            ))}
            <span className="text-xs text-slate-400 px-2">+35 More</span>
          </div>
        </div>
      </section>

    </div>
  );
}
