import React from "react";
import { 
  Activity, 
  Microscope, 
  Droplets, 
  HeartPulse, 
  ClipboardList, 
  CheckCircle2, 
  ShieldCheck,
  TestTube
} from "lucide-react";

export default function AEOSection() {
  const aeoData = [
    {
      icon: <Microscope className="text-blue-500" size={24} />,
      title: "What Is a Blood Test?",
      desc: "A blood test is a laboratory analysis performed on a blood sample to evaluate health, detect diseases, monitor medical conditions, and assess organ function. Blood tests help doctors measure important biomarkers including blood cells, glucose, cholesterol, hormones, enzymes, proteins, minerals, and inflammatory markers.",
      footer: "Blood testing is one of the most widely used diagnostic tools in modern healthcare and laboratory medicine."
    },
    {
      icon: <HeartPulse className="text-red-500" size={24} />,
      title: "Why Are Blood Tests Important?",
      desc: "Blood tests are important because they help identify diseases early, monitor overall health, evaluate organ function, and guide medical treatment decisions. Routine and preventive blood testing can help detect:",
      list: ["Diabetes", "Heart disease risk", "Liver disorders", "Kidney disease", "Thyroid imbalance", "Anemia", "Nutritional deficiencies", "Infections", "Hormonal disorders", "Inflammatory conditions"],
      footer: "Early detection through laboratory blood testing often improves treatment outcomes."
    },
    {
      icon: <Activity className="text-indigo-500" size={24} />,
      title: "How Does a Blood Test Work?",
      desc: "A blood test works by collecting a blood sample and analyzing it in a clinical pathology laboratory using automated analyzers and diagnostic technologies. The blood test process usually includes:",
      list: ["Blood sample collection", "Laboratory processing", "Biomarker analysis", "Clinical interpretation", "Diagnostic reporting"],
      footer: "Different blood components are measured to identify abnormalities or monitor body function."
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      title: "What Diseases Can Blood Tests Detect?",
      desc: "Blood tests can detect or help monitor many diseases and medical conditions, including:",
      list: ["Diabetes", "Thyroid disorders", "Liver disease", "Kidney dysfunction", "High cholesterol", "Heart disease", "Anemia", "Infections", "Autoimmune disorders", "Vitamin deficiencies", "Hormonal imbalance", "Blood disorders"],
      footer: "Many conditions can be identified before symptoms become severe."
    },
    {
      icon: <ClipboardList className="text-purple-500" size={24} />,
      title: "What Are the Main Types of Blood Tests?",
      desc: "The most common types of blood tests include:",
      list: ["Complete Blood Count (CBC)", "Blood glucose tests", "Lipid profile", "Liver function tests", "Kidney function tests", "Thyroid profile", "Hormone testing", "Vitamin testing", "Infection screening", "Cardiac biomarker testing", "Coagulation testing", "Immunology blood tests"],
      footer: "Each test evaluates specific health markers and organ systems."
    },
    {
      icon: <Droplets className="text-red-400" size={24} />,
      title: "What Is a CBC Blood Test?",
      desc: "A CBC blood test, or Complete Blood Count, measures red blood cells, white blood cells, hemoglobin, hematocrit, and platelets. CBC testing helps diagnose:",
      list: ["Anemia", "Infection", "Inflammation", "Blood disorders", "Immune system abnormalities"],
      footer: "It is one of the most commonly recommended hematology blood tests."
    },
    {
      icon: <Activity className="text-blue-500" size={24} />,
      title: "What Is Fasting Before a Blood Test?",
      desc: "Fasting before a blood test means avoiding food for several hours before sample collection to improve test accuracy. Fasting may be required for:",
      list: ["Blood sugar testing", "Lipid profile testing", "Metabolic testing"],
      footer: "Water is usually allowed during fasting unless instructed otherwise."
    },
    {
      icon: <ClockIcon className="text-orange-500" size={24} />,
      title: "How Long Should You Fast Before a Blood Test?",
      desc: "Most fasting blood tests require 8 to 12 hours of fasting. The exact fasting duration depends on the specific laboratory test.",
      footer: "Patients should always follow the preparation instructions provided by their doctor or pathology laboratory."
    },
    {
      icon: <TestTube className="text-cyan-500" size={24} />,
      title: "Can Blood Tests Detect Infection?",
      desc: "Yes, blood tests can help detect bacterial, viral, fungal, and inflammatory infections by analyzing white blood cells, inflammatory markers, antibodies, and other diagnostic biomarkers. Common infection-related blood tests include:",
      list: ["CBC", "CRP", "ESR", "Procalcitonin", "Serology testing"],
      footer: "Laboratory diagnostics help doctors identify the presence and severity of infection."
    },
    {
      icon: <HeartPulse className="text-pink-500" size={24} />,
      title: "Can Blood Tests Detect Vitamin Deficiency?",
      desc: "Yes, blood tests can detect deficiencies of important vitamins and minerals including:",
      list: ["Vitamin D", "Vitamin B12", "Iron", "Folate", "Calcium"],
      footer: "Deficiency testing helps diagnose fatigue, weakness, anemia, neurological symptoms, and metabolic problems."
    },
    {
      icon: <CheckCircle2 className="text-green-500" size={24} />,
      title: "Are Blood Tests Accurate?",
      desc: "Modern blood tests are highly accurate when performed using standardized laboratory protocols, automated analyzers, and proper quality control procedures.",
      footer: "Clinical pathology laboratories use advanced technologies to ensure reliable diagnostic results."
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={24} />,
      title: "What Is Preventive Blood Testing?",
      desc: "Preventive blood testing involves routine laboratory screening performed before symptoms appear to identify early health risks and silent diseases. Preventive testing supports:",
      list: ["Early diagnosis", "Risk assessment", "Chronic disease prevention", "Lifestyle monitoring", "Long-term health management"],
      footer: "Regular preventive healthcare screening improves overall wellness and medical outcomes."
    },
    {
      icon: <Activity className="text-indigo-400" size={24} />,
      title: "What Happens After a Blood Sample Is Collected?",
      desc: "After collection, the blood sample is labeled, processed, and analyzed in a laboratory using specialized diagnostic equipment.",
      footer: "The final results are interpreted by qualified laboratory professionals and healthcare providers."
    },
    {
      icon: <Microscope className="text-purple-600" size={24} />,
      title: "What Is Laboratory Medicine?",
      desc: "Laboratory medicine is the medical specialty focused on analyzing blood, urine, tissue, and other biological samples to diagnose and monitor diseases. It combines:",
      list: ["Hematology", "Biochemistry", "Clinical pathology", "Immunology", "Molecular diagnostics", "Biomarker analysis"],
      footer: "Laboratory medicine plays a central role in modern healthcare."
    },
    {
      icon: <TestTube className="text-red-500" size={24} />,
      title: "What Are Biomarkers in Blood Testing?",
      desc: "Biomarkers are measurable substances in blood that provide information about body function, disease activity, inflammation, metabolism, or organ health. Examples include:",
      list: ["Blood glucose", "Cholesterol", "Hemoglobin", "Hormones", "Liver enzymes", "Cardiac markers", "Inflammatory proteins"],
      footer: "Biomarker analysis helps doctors make accurate diagnostic and treatment decisions."
    },
    {
      icon: <ClipboardList className="text-emerald-600" size={24} />,
      title: "Why Are Regular Blood Tests Recommended?",
      desc: "Regular blood tests are recommended because they help monitor health changes over time, detect diseases early, and evaluate treatment effectiveness. Routine testing is especially important for:",
      list: ["Preventive healthcare", "Chronic disease management", "Diabetes monitoring", "Heart health assessment", "Hormonal evaluation", "Nutritional screening"],
      footer: "Consistent laboratory monitoring supports long-term wellness and early intervention."
    },
    {
      icon: <CheckCircle2 className="text-blue-500" size={24} />,
      title: "Routine vs. Diagnostic Blood Tests?",
      desc: "Routine blood tests are preventive screenings performed to evaluate general health, while diagnostic blood tests are ordered to investigate specific symptoms or medical conditions.",
      footer: "Both are essential components of modern pathology diagnostics and healthcare management."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header & 3D Featured Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase shadow-sm">
              <ClipboardList size={16} /> Knowledge Base
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Blood Test <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Questions Answered
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Explore our comprehensive Answer Engine Optimization (AEO) guide to understand everything you need to know about modern blood testing, biomarkers, and laboratory medicine.
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white transform transition-transform duration-700 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Blood%20Samples/blood-test-kharghar.webp" 
                alt="Blood Test Kharghar Laboratory" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
            <div className="absolute -inset-4 bg-blue-400/20 rounded-3xl blur-2xl -z-10 group-hover:bg-blue-400/30 transition-colors duration-700"></div>
          </div>
        </div>

        {/* Masonry-Style AEO Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {aeoData.map((item, index) => (
            <div 
              key={index} 
              className="break-inside-avoid bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight pt-1 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.desc}
              </p>
              
              {item.list && (
                <ul className="mb-4 space-y-2">
                  {item.list.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{listItem}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {item.footer && (
                <div className="mt-5 pt-4 border-t border-gray-50">
                  <p className="text-sm text-gray-500 italic border-l-2 border-blue-200 pl-3">
                    {item.footer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Simple fallback icon component
function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}