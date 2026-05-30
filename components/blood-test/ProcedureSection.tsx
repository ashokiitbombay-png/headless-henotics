import React from "react";
import { 
  Syringe, 
  ClipboardList, 
  UserCheck, 
  Droplet, 
  Tag, 
  Microscope, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Lightbulb, 
  HeartPulse,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function ProcedureSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Patient Identification and Test Verification",
      icon: <UserCheck size={28} className="text-blue-500" />,
      desc: "The blood collection process begins with verification of patient information and confirmation of the requested investigations.",
      list: ["Confirm patient identity", "Review prescribed tests", "Verify preparation requirements", "Answer any questions about the procedure"],
      footer: "Accurate identification is an important part of laboratory quality and patient safety protocols."
    },
    {
      step: "Step 2",
      title: "Preparing the Collection Site",
      icon: <Droplet size={28} className="text-cyan-500" />,
      desc: "Most blood samples are collected from a vein located in the arm, commonly near the elbow.",
      list: ["A tourniquet may be applied to make veins more visible", "The collection area is cleaned using an antiseptic solution", "Sterile equipment is prepared for sample collection"],
      footer: "These measures help maintain safety and reduce the risk of contamination."
    },
    {
      step: "Step 3",
      title: "Blood Sample Collection",
      icon: <Syringe size={28} className="text-rose-500" />,
      desc: "A trained healthcare professional inserts a sterile needle into the selected vein and collects the required blood samples into specially designed collection tubes.",
      list: ["Patients may experience a brief pinching sensation", "Multiple tubes may be required depending on the tests ordered", "The process usually takes only a few minutes"],
      footer: "Most routine blood collections are completed quickly and with minimal discomfort."
    },
    {
      step: "Step 4",
      title: "Labeling and Sample Handling",
      icon: <Tag size={28} className="text-amber-500" />,
      desc: "After collection, each sample is carefully labeled and prepared for laboratory analysis.",
      list: ["Sample identification verification", "Secure specimen handling", "Proper storage conditions", "Transportation according to testing requirements"],
      footer: "Correct sample handling helps preserve specimen integrity and supports accurate test results."
    },
    {
      step: "Step 5",
      title: "Laboratory Analysis",
      icon: <Microscope size={28} className="text-emerald-500" />,
      desc: "Once received by the laboratory, blood samples undergo analysis using advanced diagnostic equipment and standardized testing procedures.",
      list: ["Blood cell counts & Sugar levels", "Cholesterol and lipid markers", "Liver & Kidney function indicators", "Hormones, Vitamins and minerals", "Inflammatory & Infection biomarkers"],
      footer: "Modern laboratory technology enables precise measurement of hundreds of health-related biomarkers."
    },
    {
      step: "Step 6",
      title: "Result Review and Reporting",
      icon: <FileText size={28} className="text-indigo-500" />,
      desc: "After testing is completed, results are reviewed through laboratory quality assurance processes before being released.",
      list: ["Measured laboratory values", "Reference ranges", "Clinical indicators", "Comparative assessments where applicable"],
      footer: "Healthcare providers use these findings alongside medical history to support diagnosis and treatment decisions."
    }
  ];

  return (
    <section id="procedure" className="py-24 bg-gradient-to-br from-slate-50 via-[#f8fafc] to-blue-50/40 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1200px] relative z-10">
        
        {/* Header Section: Left Content, Right Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase shadow-sm border border-blue-200">
              <ClipboardList size={16} /> Diagnostic Journey
            </div>
            {/* SEO: H2 */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Blood Test Procedure: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                What to Expect
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Blood testing is a routine medical procedure used to evaluate overall health, diagnose medical conditions, monitor treatments, and support preventive healthcare. Understanding the blood collection process can help patients feel more comfortable and prepared before their appointment.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[30px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white bg-white">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Blood%20Samples/blood%20testing%20kharghar.webp" 
                alt="Blood Test Procedure" 
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 text-white shadow-lg">
                <p className="font-bold text-lg flex items-center gap-2"><ShieldCheck size={20} className="text-cyan-300"/> Safe & Hygienic Process</p>
              </div>
            </div>
          </div>
        </div>

        {/* Before the Test - Glassmorphic Callout */}
        <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[30px] p-8 md:p-10 shadow-xl mb-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full opacity-50"></div>
           <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
             <div className="md:col-span-4 lg:col-span-3 text-center md:text-left">
               <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mx-auto md:mx-0 mb-4 shadow-inner">
                 <AlertCircle size={32} />
               </div>
               {/* SEO: H3 */}
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Before the Blood Test</h3>
             </div>
             <div className="md:col-span-8 lg:col-span-9">
               <p className="text-gray-600 mb-4 leading-relaxed">
                 Preparation requirements vary depending on the specific blood test being performed. Some investigations may require fasting, while others can be completed without dietary restrictions. Proper preparation helps ensure accurate and reliable laboratory results.
               </p>
               <ul className="grid sm:grid-cols-2 gap-3">
                 {["Follow preparation instructions", "Inform lab about medications", "Stay hydrated (unless fasting)", "Bring relevant medical records", "Notify staff of any medical conditions"].map((item, i) => (
                   <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                     <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" /> {item}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </div>

        {/* Vertical Timeline for Steps 1-6 */}
        <div className="relative max-w-4xl mx-auto mb-24">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-100 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Spacer for Desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl border-4 border-blue-50 shadow-xl flex items-center justify-center z-20">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full pl-24 md:pl-0 md:w-1/2">
                    <div className={`bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-300 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg mb-3 tracking-wide uppercase">
                        {item.step}
                      </span>
                      {/* SEO: H3 */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed">{item.desc}</p>
                      
                      <ul className="space-y-2 mb-5">
                        {item.list.map((listItem, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-cyan-500 font-bold shrink-0 mt-0.5">•</span>
                            {listItem}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-gray-50">
                        <p className="text-xs font-medium text-gray-500 italic">
                          {item.footer}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Grid: FAQs / Info */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">How Long Does a Blood Test Take?</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The blood collection procedure itself typically takes only a few minutes. However, turnaround times for results vary depending on the complexity of the investigation.
            </p>
            {/* SEO: H4 */}
            <h4 className="text-sm font-bold text-gray-800 mb-2">Factors influencing reporting time:</h4>
            <ul className="space-y-1">
              {["Type of test ordered", "Laboratory processing requirements", "Specialized testing methods", "Quality control verification"].map((item, i) => (
                 <li key={i} className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400"/> {item}</li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Is Blood Testing Safe?</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Blood testing is considered a safe and commonly performed medical procedure. Healthcare professionals follow strict infection-control and quality-assurance protocols throughout the collection and testing process.
            </p>
            <h4 className="text-sm font-bold text-gray-800 mb-2">Minor effects some may experience:</h4>
            <ul className="space-y-1">
              {["Temporary discomfort at the collection site", "Mild bruising", "Brief lightheadedness"].map((item, i) => (
                 <li key={i} className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400"/> {item}</li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Tips for a Smooth Experience</h3>
            </div>
            <ul className="space-y-2 mt-4">
              {[
                "Stay well hydrated unless fasting instructions specify otherwise.",
                "Wear clothing that allows easy access to the arm.",
                "Follow all preparation instructions carefully.",
                "Inform staff about medications or previous blood draw experiences.",
                "Remain seated briefly after sample collection if advised."
              ].map((item, i) => (
                 <li key={i} className="text-sm text-gray-600 flex items-start gap-2"><span className="text-purple-400 font-bold mt-0.5">•</span> {item}</li>
              ))}
            </ul>
          </div>

          {/* Card 4 - Dark Gradient Accent */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] rounded-[24px] p-8 shadow-[0_20px_40px_rgba(30,58,138,0.3)] border border-blue-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-cyan-300">
                  <HeartPulse size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Why Proper Collection Matters</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Accurate blood test results begin with proper sample collection, handling, and laboratory processing. Every stage of the procedure plays an important role in ensuring reliable diagnostic information.
              </p>
              <p className="text-white text-sm font-medium border-l-2 border-cyan-400 pl-3">
                High-quality blood testing supports early disease detection, preventive health screening, treatment monitoring, and informed clinical decision-making.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}