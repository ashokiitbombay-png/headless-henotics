import React from "react";
import { Activity, ShieldCheck, Microscope, Droplets, HeartPulse, ClipboardList, CheckCircle2 } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Premium Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase">
                <Microscope size={16} /> Diagnostic Excellence
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Understanding Blood Tests: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  The Foundation of Modern Diagnostic Healthcare
                </span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p>
                A blood test is one of the most essential tools in modern healthcare, helping doctors evaluate overall health, detect diseases early, monitor ongoing medical conditions, and guide preventive healthcare decisions. From routine wellness screening to advanced disease diagnosis, blood testing plays a critical role in laboratory medicine and clinical pathology.
              </p>
              <p>
                Blood contains vital biological information about how the body functions. Through advanced laboratory blood testing, medical professionals can analyze red blood cells, white blood cells, platelets, hormones, enzymes, proteins, glucose levels, cholesterol, minerals, and many other important diagnostic biomarkers.
              </p>
              <p>
                Today’s pathology blood test systems use highly sophisticated automated analyzers, immunoassay testing platforms, hematology technologies, and biochemistry diagnostics to generate fast, accurate, and clinically reliable results.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Image & Quick Facts */}
          <div className="relative">
            {/* Deep 3D Shadow Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-8 border-white transform transition-transform duration-700 hover:scale-[1.03] hover:shadow-[0_40px_70px_rgba(0,0,0,0.3)] group z-10">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Blood%20Samples/blood%20testing%20kharghar.webp" 
                alt="Blood Testing Laboratory in Kharghar" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-4 border border-white/50">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Advanced Automation</h4>
                  <p className="text-xs text-gray-500">Fast, accurate, evidence-based results.</p>
                </div>
              </div>
            </div>

            {/* Decorative Dots Pattern Behind Image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] z-0 opacity-70"></div>
          </div>

        </div>

        {/* BOTTOM SECTION: Two Column Features */}
        <div className="grid md:grid-cols-2 gap-10 mt-20 border-t border-gray-100 pt-16">
          
          {/* What Is a Blood Test? */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
              <Droplets size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is a Blood Test?</h3>
            <p className="text-gray-600 mb-6">
              A laboratory examination performed on a blood sample collected from a vein or finger prick. Specialists analyze components to evaluate body function and identify abnormalities. Commonly used for:
            </p>
            <ul className="space-y-3">
              {[
                "Preventive healthcare & routine checkups",
                "Disease diagnosis & monitoring",
                "Evaluating organ function (liver, kidneys)",
                "Detecting infections & hormone levels",
                "Assessing nutritional status & medications",
                "Pregnancy & pre-surgical evaluation"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Blood Tests Are Done */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Blood Tests Are Done</h3>
            <p className="text-gray-600 mb-6">
              Blood analysis helps identify changes inside the body that may not yet cause visible symptoms, allowing early identification of health risks before complications become serious.
            </p>
            <ul className="space-y-3">
              {[
                "Detecting diabetes and blood sugar abnormalities",
                "Evaluating cholesterol and cardiovascular risk",
                "Diagnosing infections and inflammation",
                "Identifying anemia and blood disorders",
                "Monitoring thyroid health and hormonal balance",
                "Screening for autoimmune diseases"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <ClipboardList size={20} className="text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}