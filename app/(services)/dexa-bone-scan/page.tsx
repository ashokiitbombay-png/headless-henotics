"use client";

import React from "react";
import Script from "next/script";
import AppointmentForm from "@/components/AppointmentForm"; 
import { CheckCircle2, Star, Bone, Activity, ChevronDown, ShieldCheck, Clock, Smartphone, ArrowRight } from "lucide-react";

const IMAGES = {
  hero: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/566c0729-dexa-bone-scan-henotic-diagnostics-kharghar-navi-mumbai.webp",
  pricing: {
    single: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/74617b09-dexa-scan-in-navi-mumbai-and-mumbai-for-bone-mineral-density-bmd-and-body-composition.webp.webp",
    threePart: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/eb8efbac-dexa-bmd-scan-navi-mumbai-for-menopause-related-bone-loss-and-osteoporosis-risk.webp.webp",
    wholeBody: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/6489024d-bmd-dexa-scan-in-mumbai-for-osteoporosis-early-detection-with-accurate-bone-health-assessment.webp.webp"
  },
  faq: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/a8a7aed1-affordable-dexa-scan-in-mumbai-bmd-test-for-fracture-risk-evaluation-at-trusted-diagnostic-lab.webp-scaled.webp",
  gallery: [
    "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/d05e7950-mri-scan-in-panvel-whole-body-brain-spine-mri.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/bd284a33-advanced-dexa-bone-density-scan-mumbai-for-early-osteoporosis-diagnosis-and-prevention.webp.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b86e0533-henotic-diagnostics-front-image-ct-scan-pet-scan-mri-scan.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/2ebf9575-dexa-scan-navi-mumbai-henotic-diagnostics.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/462fc761-dexa-scan-navi-mumbai-bmd-bone-density-test-for-osteoporosis-screening-at-certified-diagnostic-center-near-you.webp-scaled.webp"
  ]
};

const FAQS = [
  { q: "Is BMD Dexa Bone Scan Fasting needed?", a: "No fasting is needed. You can eat and drink normally. Stop calcium medication 24 hrs early prior to the scan." },
  { q: "What is the procedure for a DEXA scan?", a: "It is a 'walk-in, walk-out' procedure. You lie flat for 10 minutes while a scanner arm moves above you. It is painless and uses very low radiation." },
  { q: "What is 3 Body Parts DEXA scan?", a: "A 3 Body Parts scan looks at the Spine and both Hips—the areas most prone to fractures." },
  { q: "What is Whole Body DEXA Scan?", a: "A Whole Body scan measures every bone in the body and also provides a 'Body Composition' report (fat vs muscle mass)." }
];

export default function DexaBoneScanPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 overflow-x-hidden">
      <Script id="schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic", "name": "Henotic Diagnostics", "image": IMAGES.hero, "telephone": "08879327184",
          "address": { "@type": "PostalAddress", "addressLocality": "Navi Mumbai", "addressCountry": "IN" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1009" }
      })}} />

      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt="DEXA Scan Machine" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/50 text-blue-200 text-xs font-bold tracking-[0.2em] backdrop-blur-md">HIGH QUALITY SEO CONTENT</span>
            <div className="flex items-center gap-2 text-yellow-400 font-bold tracking-widest text-sm"><Bone size={16} /> BMD BONE DENSITOMETRY</div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">DEXA Bone Scan <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Accuracy Matters</span></h1>
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">We combine clinical expertise with advanced medical imaging to provide a comprehensive look at your bone health. A <strong>BMD-DEXA-SCAN</strong> is a sophisticated diagnostic tool used to measure Bone Mineral Density.</p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-white border border-white/10"><Star className="fill-yellow-400 text-yellow-400" size={16}/> 4.9 Rated</div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-white border border-white/10"><Clock className="text-blue-400" size={16}/> Reports in 4 Hrs</div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end"><div className="w-full max-w-md"><AppointmentForm /></div></div>
        </div>
      </section>

      {/* PRICING */}
      <section className="w-full bg-white">
        <div className="w-full grid md:grid-cols-2 min-h-[400px]">
          <div className="relative h-64 md:h-auto overflow-hidden group">
            <img src={IMAGES.pricing.single} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-20 bg-slate-50 border-b border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Single Site Scan</h3>
            <p className="text-slate-600 mb-6 text-lg">Focused scan of either the Lumbar Spine or one Hip area. Ideal for localized pain or injury assessment.</p>
            <div className="flex items-center justify-between"><span className="text-3xl font-black text-blue-600">₹1,800</span><a href="#booking-form" className="px-6 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors cursor-pointer">Book Now</a></div>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 min-h-[400px]">
          <div className="flex flex-col justify-center p-12 lg:p-20 bg-slate-900 text-white order-2 md:order-1">
            <div className="mb-4 inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Gold Standard</div>
            <h3 className="text-3xl font-bold mb-4">3 Body Parts</h3>
            <p className="text-slate-300 mb-6 text-lg">Comprehensive scan of Lumbar Spine + Both Hips. The most recommended scan for osteoporosis screening.</p>
            <div className="flex items-center justify-between"><span className="text-3xl font-black text-yellow-400">₹3,500</span><a href="#booking-form" className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold hover:bg-yellow-400 transition-colors cursor-pointer">Book Now</a></div>
          </div>
          <div className="relative h-64 md:h-auto overflow-hidden group order-1 md:order-2">
            <img src={IMAGES.pricing.threePart} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 min-h-[400px]">
          <div className="relative h-64 md:h-auto overflow-hidden group">
            <img src={IMAGES.pricing.wholeBody} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-20 bg-slate-50">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Whole Body Scan</h3>
            <p className="text-slate-600 mb-6 text-lg">Full skeletal Bone Density + Body Composition Analysis (Fat% & Muscle Mass). The ultimate health check.</p>
            <div className="flex items-center justify-between"><span className="text-3xl font-black text-purple-600">₹5,000</span><a href="#booking-form" className="px-6 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-purple-600 transition-colors cursor-pointer">Book Now</a></div>
          </div>
        </div>
      </section>

      {/* PROCEDURE */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-10 border-l-4 border-blue-500 pl-4 text-white">Procedure Guide</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group"><div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">1</div><div><h4 className="text-xl font-bold mb-2 text-white">Check-in</h4><p className="text-slate-300 leading-relaxed">Remove jewelry and metal objects. Wear comfortable clothing.</p></div></div>
                <div className="flex gap-6 group"><div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">2</div><div><h4 className="text-xl font-bold mb-2 text-white">Positioning</h4><p className="text-slate-300 leading-relaxed">Lie on a flat table. Legs positioned on a foam block.</p></div></div>
                <div className="flex gap-6 group"><div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">3</div><div><h4 className="text-xl font-bold mb-2 text-white">The Scan</h4><p className="text-slate-300 leading-relaxed">Scanner arm moves slowly over your body. 10 minutes total.</p></div></div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2"><ShieldCheck className="text-green-400"/> Preparation Checklist</h3>
              <ul className="space-y-4">{["No fasting required.","Stop calcium/vitamins 24hrs before.","Wait 7 days if you had Contrast CT.","Wear metal-free clothing."].map((item, i) => (<li key={i} className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-green-400 shrink-0" size={20} /><span className="text-slate-200 font-medium">{item}</span></li>))}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
             <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">{FAQS.map((f, i) => (<details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"><summary className="flex justify-between items-center p-6 font-bold text-slate-800 cursor-pointer hover:bg-slate-100 transition-colors list-none">{f.q} <ChevronDown className="group-open:rotate-180 transition-transform text-blue-600" /></summary><div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-200/50 group-open:mt-4">{f.a}</div></details>))}</div>
             </div>
             <div className="relative sticky top-10"><div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div><img src={IMAGES.faq} alt="DEXA FAQ" className="relative z-10 rounded-3xl shadow-2xl border-4 border-white w-full" /></div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold text-slate-900 mb-4">Advanced Imaging Facility</h2><div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="lg:row-span-2 relative group overflow-hidden rounded-2xl shadow-lg h-full min-h-[300px]"><img src={IMAGES.gallery[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
             {IMAGES.gallery.slice(1).map((img, i) => (<div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg h-64"><img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>))}
          </div>
        </div>
      </section>
    </div>
  );
}
