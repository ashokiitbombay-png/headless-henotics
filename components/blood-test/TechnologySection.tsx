import React from "react";
import { 
  Cpu, 
  Microscope, 
  Dna, 
  ShieldCheck, 
  MonitorSmartphone, 
  Activity, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function TechnologySection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Global Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* SEO H2 Header & Intro */}
        <header className="mb-20 text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200 text-blue-700 font-bold text-sm tracking-wide uppercase shadow-sm">
              <Cpu size={16} /> Diagnostic Innovation
            </div>
            {/* SEO: Main Section H2 */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Advanced Blood Testing Technology for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Accurate Health Assessment</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Blood testing is one of the most important tools in modern healthcare. From routine wellness screening to the diagnosis and monitoring of complex medical conditions, laboratory blood tests provide essential information about how the body functions. Advances in diagnostic technology have significantly improved the accuracy, reliability, and speed of blood test results, enabling healthcare providers to make informed clinical decisions with greater confidence.
            </p>
          </div>
          <div className="lg:col-span-5 relative group">
             {/* Gradient glow behind image */}
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[30px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
             <img 
               src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/henotic-diagnostics-blood-test-lab.webp" 
               alt="Advanced Blood Testing Technology" 
               className="relative rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white object-cover w-full h-[350px] transform group-hover:scale-[1.02] transition-transform duration-500"
             />
          </div>
        </header>

        {/* Feature 1: Automation */}
        <article className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-inner">
                <Cpu size={28} />
              </div>
              {/* SEO: H3 Subheading */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Modern Laboratory Automation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today's clinical laboratories utilize advanced automation systems designed to minimize human error while improving testing efficiency. Automated analyzers process thousands of samples with precision, ensuring consistent results across a wide range of investigations including complete blood counts, liver function tests, kidney function tests, thyroid profiles, diabetes screening, cardiac markers, hormone testing, and infectious disease detection.
              </p>
              <ul className="space-y-3">
                {["Sample identification accuracy", "Faster turnaround times", "Reduced manual processing errors", "Improved analytical precision", "Standardized laboratory workflows"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={18} className="text-indigo-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-[30px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
             <img src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/henotic-diagnostics-main-processing-lab.webp" alt="Laboratory Automation" className="relative rounded-3xl shadow-2xl border-[6px] border-white object-cover w-full h-[400px] transform group-hover:-translate-y-2 transition-transform duration-500" />
          </div>
        </article>

        {/* Feature 2: Equipment */}
        <article className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white hover:border-emerald-100 transition-colors">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 shadow-inner">
                <Microscope size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">High-Precision Diagnostic Equipment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Modern blood testing relies on sophisticated diagnostic instruments that use advanced technologies. These technologies help detect disease markers at very low concentrations, allowing earlier diagnosis and more effective treatment planning.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Flow cytometry", "Chemiluminescence immunoassay (CLIA)", "Enzyme-linked immunosorbent assay (ELISA)", "Molecular diagnostics", "Polymerase chain reaction (PCR)", "Spectrophotometry", "Hematology analyzers", "Clinical chemistry analyzers"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-[30px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
             <img src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/henotic-diagnostics.webp" alt="High-Precision Diagnostic Equipment" className="relative rounded-3xl shadow-2xl border-[6px] border-white object-cover w-full h-[400px] transform group-hover:-translate-y-2 transition-transform duration-500" />
          </div>
        </article>

        {/* Feature 3: Biomarkers */}
        <article className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white hover:border-rose-100 transition-colors">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 shadow-inner">
                <Dna size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Biomarker-Based Disease Detection</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Blood tests evaluate hundreds of biological markers that provide valuable insights into overall health. Early detection of abnormal biomarkers often allows intervention before symptoms become severe, supporting preventive healthcare strategies.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Blood cell production & immune function", "Liver & kidney performance", "Blood sugar regulation", "Hormonal balance", "Cardiovascular risk", "Nutritional deficiencies", "Inflammatory conditions", "Infectious diseases", "Cancer-related indicators"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={16} className="text-rose-500 shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-orange-400 rounded-[30px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
             <img src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/pathology-lab-near-me-henotic-diagnostics-kharghar.webp" alt="Biomarker Testing" className="relative rounded-3xl shadow-2xl border-[6px] border-white object-cover w-full h-[400px] transform group-hover:-translate-y-2 transition-transform duration-500" />
          </div>
        </article>

        {/* Feature 4: Quality Control (Complex Block with H4s) */}
        <article className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 shadow-inner">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Quality Control and Laboratory Accuracy</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Reliable blood testing depends on strict quality assurance protocols. Modern laboratories follow standardized quality control procedures throughout every stage of testing to ensure dependable and reproducible laboratory results.
              </p>

              <div className="space-y-8">
                {/* SEO: H4 Sub-subheadings */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Pre-Analytical Quality Measures</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {["Correct patient identification", "Proper sample collection", "Appropriate specimen handling", "Controlled transportation conditions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={14} className="text-amber-500" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Analytical Quality Measures</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {["Equipment calibration", "Internal quality controls", "Automated validation systems", "Performance monitoring"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={14} className="text-amber-500" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Post-Analytical Quality Measures</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {["Result verification", "Clinical correlation", "Secure reporting systems", "Data integrity checks"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={14} className="text-amber-500" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-8">
             <div className="relative group">
               <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-[30px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
               <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/0c37a66f-laboratory-henotic-diagnostics-ct-scan-dexa-bone-scan-mri-scan-sonography-ultrasound-pet-scan-dopa-scan-kharghar-navi-mumbai-768x768.webp" alt="Quality Assurance Lab" className="relative rounded-3xl shadow-xl border-[6px] border-white object-cover w-full h-[280px]" />
             </div>
             <div className="relative group">
               <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-[30px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
               <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/74f4368e-diagnostic-center-in-panvel-full-body-checkup-blood-test-pathology-lab-1024x682.webp" alt="Pre-Analytical Sample Collection" className="relative rounded-3xl shadow-xl border-[6px] border-white object-cover w-full h-[280px]" />
             </div>
          </div>
        </article>

        {/* Final Features Wrap-up: Digital, Preventive, Future */}
        <div className="grid md:grid-cols-3 gap-8">
           <article className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <MonitorSmartphone size={32} className="text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Reporting & Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Advances in healthcare technology allow blood test data to be securely stored, analyzed, and shared. Digital laboratory information systems improve efficiency by streamlining workflows and supporting electronic medical records.
              </p>
           </article>

           <article className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <Activity size={32} className="text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supporting Preventive Care</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Regular health screenings can identify risk factors for chronic conditions before significant complications develop. Blood tests provide valuable insights that support personalized healthcare and long-term wellness management.
              </p>
           </article>

           <article className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <Sparkles size={32} className="text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Future of Blood Testing</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Emerging innovations like artificial intelligence, machine learning, and genomic analysis are expanding capabilities. These developments help achieve earlier diagnosis, greater accuracy, and individualized patient care.
              </p>
           </article>
        </div>

      </div>
    </section>
  );
}