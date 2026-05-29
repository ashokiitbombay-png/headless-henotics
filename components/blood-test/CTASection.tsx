import React from "react";
import Link from "next/link";
import { 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Beaker, 
  ShieldCheck,
  CalendarCheck
} from "lucide-react";

export default function CTASection() {
  const benefits = [
    "Early detection of silent diseases",
    "Preventive healthcare monitoring",
    "Accurate diagnostic evaluation",
    "Chronic disease management",
    "Organ function assessment",
    "Nutritional deficiency screening",
    "Hormonal health evaluation",
    "Personalized healthcare planning"
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deep Vibrant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] z-0"></div>
      
      {/* Decorative Floating Blobs for 3D Depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Content & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 font-bold text-sm tracking-wide uppercase backdrop-blur-sm shadow-lg">
              <ShieldCheck size={18} /> Proactive Healthcare
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-xl">
              Take Control of Your Health with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Regular Blood Testing
              </span>
            </h2>
            
            <div className="space-y-5 text-lg text-blue-100 font-light leading-relaxed">
              <p>
                Routine blood testing plays an important role in preventive healthcare, early disease detection, and long-term wellness monitoring. Modern laboratory medicine helps evaluate critical biomarkers related to blood health, metabolism, organ function, hormonal balance, nutrition, inflammation, and chronic disease risk.
              </p>
              <p>
                Whether performed as part of an annual health checkup, preventive screening, or diagnostic evaluation, blood tests provide valuable clinical insights that support informed healthcare decisions and personalized medical care.
              </p>
              <p className="border-l-4 border-cyan-400 pl-4 text-white font-medium bg-white/5 py-2 pr-2 rounded-r-lg">
                Advanced pathology diagnostics and automated laboratory analyzers allow healthcare professionals to identify abnormalities early and monitor health conditions with greater accuracy and reliability.
              </p>
            </div>

            {/* Explore Section & Buttons */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-medium mb-6">
                Discover different types of blood tests, understand preparation guidelines, learn how diagnostic biomarkers work, and explore preventive healthcare screening designed to support better long-term health outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="/blood-test#types" 
                  className="group flex items-center justify-center gap-2 bg-white text-[#1e3a8a] font-bold py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Beaker size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  Explore Blood Tests
                </Link>
                
                <Link 
                  href="/blood-test#preparation" 
                  className="group flex items-center justify-center gap-2 bg-blue-800/50 backdrop-blur-md text-white border border-blue-400/50 font-bold py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-blue-700/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Activity size={20} className="text-cyan-300 group-hover:scale-110 transition-transform" />
                  Learn About Preparation
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Glass-morphic List Card */}
          <div className="lg:col-span-5 relative group perspective-1000 mt-10 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform transition-transform duration-700 hover:scale-[1.02] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
              
              {/* Subtle inner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Activity size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  Why Regular Blood <br/>Testing Matters
                </h3>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 text-blue-50 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 size={20} className="text-cyan-400 shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Card CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                 <button className="flex items-center gap-2 text-cyan-300 hover:text-white font-bold transition-colors group">
                   Book a Preventive Checkup <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
            
            {/* Dark back-shadow behind the glass card for contrast */}
            <div className="absolute -inset-2 bg-black/20 rounded-3xl blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}