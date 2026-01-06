import Link from "next/link";
import { companyDetails, citySlugs } from "@/lib/constants";
import { 
  Phone, MessageSquare, Clock, CheckCircle, ShieldCheck, FileText, Zap, 
  MapPin, Star, User, Activity, Microscope, ArrowRight, ChevronRight
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision PET-CT Scan in Navi Mumbai | Henotic Diagnostics",
  description: "Book FDG, PSMA, DOPA PET Scans. 128-Slice Digital Tech, ₹11,999 Pricing, Same Day WhatsApp Reports. NABL Accredited Center in Kharghar.",
};

export default function PetScanPage() {
  const petScanTypes = [
    { name: "FDG PET-CT Scan", desc: "Standard Whole Body Cancer Screening & Staging using Fluorodeoxyglucose.", price: "₹11,999", tag: "Most Prescribed", clinical: "Evaluates glucose metabolism in cells to detect high metabolic rates common in malignancy." },
    { name: "PSMA PET Scan", desc: "Highly specific for Prostate Cancer detection and recurrence monitoring.", price: "₹23,500", tag: "Advanced Oncology", clinical: "Targets Prostate-Specific Membrane Antigen for superior sensitivity in prostate health." },
    { name: "DOPA PET Scan", desc: "Specialized for Neuroendocrine tumors and Parkinson’s Disease evaluation.", price: "₹18,500", tag: "Neurology Specialist", clinical: "Analyzes dopamine transport and metabolism in the brain and neuroendocrine system." },
    { name: "Cardiac PET Scan", desc: "Gold standard for assessing Myocardial Viability and heart blood flow.", price: "₹15,000", tag: "Cardiology", clinical: "Assesses heart muscle health before bypass surgery or angioplasty." }
  ];

  const faqs = [
    { q: "What is a PET-CT Scan?", a: "A PET-CT scan combines functional imaging (metabolic activity) with anatomical imaging (CT) to provide a complete picture of disease location and behavior." },
    { q: "Is the procedure painful?", a: "No. Aside from a small needle prick for the radiotracer injection, the scan is painless and non-invasive." },
    { q: "How long does it take?", a: "The entire process takes about 2-3 hours, including the rest period for tracer uptake and the 15-20 minute scan." },
    { q: "Can I take my medications?", a: "Most medications can be taken with water. However, diabetics must consult our staff regarding insulin timing." }
  ];

  // Sort cities for better UX
  const sortedCities = [...citySlugs].sort();

  return (
    <main className="bg-slate-50 font-sans text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/7209818d-ct-scan-mri-scan-pet-scan-kharghar-navi-mumbai-henotic-diagnostics.webp" alt="Henotic PET-CT Facility" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 px-4 py-1.5 rounded-full mb-6 text-sm font-bold tracking-wide text-white">
              <ShieldCheck size={16} /> Advanced Molecular Imaging Center
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6 text-white">
              Precision PET-CT Scan in <span className="text-white underline decoration-4 underline-offset-8 decoration-blue-500">Navi Mumbai</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed font-medium drop-shadow-md">
              Henotic Diagnostics brings world-class 128-slice PET-CT technology. Specialized in Cancer Staging, Treatment Planning, and Early Detection with Same-Day Reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${companyDetails.phone[0]}`} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/40 transition flex items-center justify-center gap-3">
                Schedule Scan <Zap size={20} />
              </a>
              <a href="#locations" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition flex items-center gap-3 backdrop-blur-sm">
                Find Center <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section id="pricing" className="py-20 px-6 container mx-auto -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {petScanTypes.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">{item.tag}</div>
              <h3 className="font-bold text-xl text-slate-900 mt-6 mb-2">{item.name}</h3>
              <div className="text-3xl font-black text-blue-600 mb-1">{item.price}</div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Inclusive of GST</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 h-16">{item.desc}</p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] text-blue-600 font-bold flex items-start gap-2">
                  <Activity size={12} className="mt-0.5 shrink-0" /> {item.clinical}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AVAILABLE LOCATIONS BLOCK (Premium Design) */}
      <section id="locations" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-extrabold uppercase tracking-widest text-sm mb-2 block">Our Network</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Available PET Scan Locations</h2>
            <p className="text-slate-600 text-lg">
              We have expanded our diagnostic network. Click on your nearest location to view center-specific details and book an appointment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sortedCities.map((city) => (
              <Link 
                key={city} 
                href={'/pet-scan/' + city}
                title={`Book PET Scan in ${city}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <h4 className="font-bold text-slate-800 capitalize group-hover:text-blue-600 transition-colors">
                    {city.replace(/-/g, ' ')}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1 group-hover:text-blue-400">
                    View Center
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-center gap-3 text-sm text-blue-800 max-w-4xl mx-auto">
            <MapPin size={18} className="text-blue-600 shrink-0" />
            <p>
              <strong>Note:</strong> While the main PET-CT machine is located at our Kharghar hub, we offer consultation, sample collection, and ambulance services across all the locations listed above.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE ARTICLE */}
      <section className="py-20 px-6 container mx-auto bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-extrabold uppercase tracking-widest text-sm mb-4 block">Medical Imaging Excellence</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Understanding PET-CT: The Gold Standard</h2>
            <div className="prose prose-lg text-slate-600 space-y-6">
              <p>Positron Emission Tomography (PET) combined with Computed Tomography (CT) is not just a scan; it is a window into the <strong>cellular metabolism</strong> of the human body. Unlike traditional MRI or CT which focuses only on structure, PET-CT reveals <em>biological function</em>.</p>
              <p>At Henotic Diagnostics, our latest generation machines utilize <strong>radioactive tracers</strong> like FDG to identify "hot spots" of abnormal metabolic activity. This allows our expert radiologists to pinpoint malignant tumors with microscopic precision.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                <div className="text-3xl font-black text-blue-700 mb-1">128</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Slices per rotation</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                <div className="text-3xl font-black text-blue-700 mb-1">Low</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Radiation Protocol</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/1a401b0d-henotic-diagnostics-mri-scan-ct-scan-pet-scan-dopa-scan-dtpa-scan.webp" alt="Advanced PET-CT Equipment" className="rounded-[40px] shadow-2xl shadow-blue-100 border-8 border-white" />
          </div>
        </div>
      </section>

      {/* PROCEDURE & PREP */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-10 flex items-center gap-3"><Activity className="text-blue-400" /> Procedure Guide</h2>
              <div className="space-y-8">
                {[
                  { title: "Registration", desc: "Check-in, weight, and strict blood glucose measurement." },
                  { title: "Tracer Injection", desc: "Painless IV injection of the radioactive tracer." },
                  { title: "Uptake Phase", desc: "Rest comfortably for 45-60 mins while tracer absorbs." },
                  { title: "The Scan", desc: "15-20 minute scan. Open and non-claustrophobic." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white shrink-0 shadow-lg shadow-blue-900/50">{i + 1}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-blue-300"><Clock /> Fasting Guidelines</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3"><span className="text-blue-500">•</span> Strictly No Food for 6-8 hours before scan.</li>
                  <li className="flex gap-3"><span className="text-blue-500">•</span> Only Plain Water is allowed. No coffee/tea.</li>
                  <li className="flex gap-3"><span className="text-blue-500">•</span> Diabetics: No insulin/tablets on morning of scan.</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-blue-300"><FileText /> What to Bring</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3"><span className="text-blue-500">•</span> Doctor's Prescription (Original).</li>
                  <li className="flex gap-3"><span className="text-blue-500">•</span> Recent Creatinine Report (within 30 days).</li>
                  <li className="flex gap-3"><span className="text-blue-500">•</span> Old PET/CT/MRI films for comparison.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & FEEDBACK */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black text-blue-900 mb-8">Patient Feedback</h2>
            <div className="space-y-6">
              {[
                { name: "Rajesh Mehra", text: "Extremely professional staff. Got my PET scan reports on WhatsApp within 12 hours." },
                { name: "Priya Deshmukh", text: "The center is very clean and technicians are patient. Explained the process clearly." }
              ].map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                  <p className="text-slate-600 italic mb-4">"{t.text}"</p>
                  <p className="font-bold text-slate-900 text-sm">- {t.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-blue-900 mb-8">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
