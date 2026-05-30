import React from "react";
import { 
  Activity, 
  Droplet, 
  HeartPulse, 
  FlaskConical, 
  Stethoscope, 
  Apple, 
  Dna, 
  ShieldAlert, 
  ShieldCheck, 
  Baby, 
  TestTube,
  LineChart,
  CheckCircle2,
  Info
} from "lucide-react";

export default function RelatedTests() {
  const tests = [
    {
      title: "Complete Blood Count (CBC)",
      icon: <Droplet size={32} className="text-red-500" />,
      bg: "bg-red-50",
      desc: "A Complete Blood Count (CBC) is one of the most frequently requested laboratory investigations and serves as a foundation for many health assessments.",
      list: ["Red blood cells (RBCs)", "White blood cells (WBCs)", "Hemoglobin", "Hematocrit", "Platelets", "Red cell indices"],
      footer: "Helps assess overall health, investigate symptoms, and monitor conditions."
    },
    {
      title: "Blood Sugar & Diabetes Testing",
      icon: <Activity size={32} className="text-blue-500" />,
      bg: "bg-blue-50",
      desc: "Blood glucose testing plays a crucial role in evaluating how the body regulates sugar and energy metabolism.",
      subSections: [
        { title: "Fasting Blood Sugar (FBS)", desc: "Measures blood glucose levels after a fasting period." },
        { title: "Postprandial Blood Sugar (PPBS)", desc: "Evaluates blood sugar levels after a meal." },
        { title: "HbA1c Test", desc: "Measures average blood glucose over the previous 2-3 months." },
        { title: "Insulin Testing", desc: "Helps assess insulin production and metabolic function." }
      ]
    },
    {
      title: "Lipid Profile",
      icon: <HeartPulse size={32} className="text-orange-500" />,
      bg: "bg-orange-50",
      desc: "A lipid profile evaluates fats and cholesterol circulating in the bloodstream to assess cardiovascular risk.",
      list: ["Total Cholesterol", "HDL Cholesterol", "LDL Cholesterol", "Triglycerides", "Non-HDL Cholesterol"]
    },
    {
      title: "Liver Function Tests (LFT)",
      icon: <FlaskConical size={32} className="text-amber-500" />,
      bg: "bg-amber-50",
      desc: "The liver performs hundreds of essential metabolic functions. LFTs help evaluate liver health and identify abnormalities.",
      list: ["ALT & AST", "Bilirubin", "Albumin & Total Protein", "Alkaline Phosphatase (ALP)", "Gamma-Glutamyl Transferase (GGT)"]
    },
    {
      title: "Kidney Function Tests (KFT)",
      icon: <TestTube size={32} className="text-emerald-500" />,
      bg: "bg-emerald-50",
      desc: "Kidneys are responsible for filtering waste products and maintaining fluid and electrolyte balance.",
      list: ["Creatinine", "Blood Urea Nitrogen (BUN)", "Uric Acid", "Electrolytes", "Estimated Glomerular Filtration Rate (eGFR)"]
    },
    {
      title: "Thyroid Function Tests",
      icon: <Stethoscope size={32} className="text-purple-500" />,
      bg: "bg-purple-50",
      desc: "The thyroid gland regulates metabolism, energy production, growth, and numerous physiological processes.",
      list: ["Thyroid Stimulating Hormone (TSH)", "Free T3", "Free T4", "Thyroid Antibodies"]
    },
    {
      title: "Iron Studies & Anemia",
      icon: <Droplet size={32} className="text-rose-500" />,
      bg: "bg-rose-50",
      desc: "Iron plays a critical role in oxygen transport and energy production. These investigations help evaluate iron status.",
      list: ["Serum Iron", "Ferritin", "Total Iron Binding Capacity (TIBC)", "Transferrin Saturation", "Hemoglobin"]
    },
    {
      title: "Vitamin & Nutritional Testing",
      icon: <Apple size={32} className="text-green-500" />,
      bg: "bg-green-50",
      desc: "Nutritional deficiencies can affect multiple body systems, contributing to fatigue, weakness, and immune dysfunction.",
      subSections: [
        { title: "Vitamin D Test", desc: "Evaluates levels important for bone health and immunity." },
        { title: "Vitamin B12 Test", desc: "Supports neurological function and red blood cell production." },
        { title: "Folate Testing", desc: "Measures folate levels involved in DNA synthesis." },
        { title: "Calcium & Mineral Profiles", desc: "Provide insights into bone metabolism and mineral balance." }
      ]
    },
    {
      title: "Hormone Testing",
      icon: <Activity size={32} className="text-indigo-500" />,
      bg: "bg-indigo-50",
      desc: "Hormones regulate many critical physiological functions. Assessments are used in reproductive health and endocrine investigations.",
      list: ["Testosterone & Estrogen", "Progesterone", "Luteinizing Hormone (LH)", "Follicle Stimulating Hormone (FSH)", "Prolactin & Cortisol"]
    },
    {
      title: "Inflammatory & Immune Markers",
      icon: <ShieldAlert size={32} className="text-red-500" />,
      bg: "bg-red-50",
      desc: "Blood tests can help evaluate immune system activity and inflammatory processes across the body.",
      list: ["C-Reactive Protein (CRP)", "High-Sensitivity CRP (hs-CRP)", "Erythrocyte Sedimentation Rate (ESR)", "Autoimmune Screening Panels", "Immunoglobulin Testing"]
    },
    {
      title: "Infection Screening Tests",
      icon: <ShieldCheck size={32} className="text-teal-500" />,
      bg: "bg-teal-50",
      desc: "Blood testing plays a significant role in identifying and monitoring viral, bacterial, and other infectious diseases.",
      list: ["Viral Marker Testing", "Antibody Testing", "Antigen Testing", "Serology Panels", "Infectious Disease Screening Profiles"]
    },
    {
      title: "Cardiac Risk & Heart Health",
      icon: <HeartPulse size={32} className="text-rose-600" />,
      bg: "bg-rose-100",
      desc: "Cardiovascular blood tests help evaluate risk factors associated with heart disease and circulatory disorders.",
      list: ["Lipid Profile", "High-Sensitivity CRP", "Homocysteine", "Apolipoproteins", "Cardiac Biomarkers"]
    },
    {
      title: "Pregnancy & Prenatal",
      icon: <Baby size={32} className="text-pink-500" />,
      bg: "bg-pink-50",
      desc: "Pregnancy-related laboratory investigations help monitor maternal and fetal health throughout pregnancy.",
      list: ["Blood Group & Rh Typing", "Complete Blood Count", "Infection Screening", "Thyroid Testing", "Genetic Screening Tests"]
    },
    {
      title: "Advanced Genetic & Molecular",
      icon: <Dna size={32} className="text-indigo-600" />,
      bg: "bg-indigo-100",
      desc: "Modern laboratory medicine increasingly incorporates advanced molecular and genetic technologies for personalized care.",
      list: ["Non-Invasive Prenatal Testing (NIPT)", "Carrier Screening", "Karyotyping", "Molecular Diagnostics", "Genetic Risk Assessment"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        {/* HERO SECTION: Content Left, Image Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase shadow-sm">
              <TestTube size={16} /> Diagnostic Portfolio
            </div>
            
            {/* SEO: H2 Tag */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Related Blood Tests & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Diagnostic Investigations
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Blood testing encompasses a wide range of laboratory investigations designed to evaluate different aspects of health, from routine wellness screening to advanced disease monitoring. While a single blood test may provide valuable information, healthcare providers often recommend a combination of tests to gain a more comprehensive understanding of a patient's health status.
            </p>
            <p className="text-lg font-medium text-gray-800 border-l-4 border-blue-500 pl-4 bg-blue-50/50 p-4 rounded-r-xl">
              Understanding how different blood tests work together can help patients appreciate the role of laboratory diagnostics in preventive healthcare, disease detection, treatment monitoring, and long-term wellness management.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative group perspective-1000">
            {/* SEO/Layout Requirement: Gradient background below image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 via-indigo-400 to-cyan-400 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white transform transition-transform duration-700 group-hover:scale-[1.03]">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Blood%20Samples/henotic-diagnostics-blood-test.webp" 
                alt="Related Blood Tests and Investigations" 
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* TESTS BENTO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {tests.map((test, index) => (
            <div 
              key={index} 
              className={`bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col ${test.subSections ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner ${test.bg}`}>
                  {test.icon}
                </div>
                {/* SEO: H3 Tag */}
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {test.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {test.desc}
              </p>
              
              {/* Render standard list if available */}
              {test.list && (
                <div className="mt-auto">
                  <ul className="space-y-2 mb-4">
                    {test.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render complex sub-sections with H4s if available */}
              {test.subSections && (
                <div className="grid sm:grid-cols-2 gap-4 mt-auto">
                  {test.subSections.map((sub, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      {/* SEO: H4 Tag */}
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{sub.title}</h4>
                      <p className="text-xs text-gray-600">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional Footer Text */}
              {test.footer && (
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-start gap-2">
                  <Info size={16} className="text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 italic">{test.footer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CONCLUSION: Deep Gradient Block */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] rounded-[30px] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white border border-blue-800">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-xl backdrop-blur-sm border border-blue-400/30">
                  <LineChart size={28} className="text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold">Why Multiple Tests Are Recommended</h3>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Many health conditions affect multiple biological systems simultaneously. Combining related laboratory investigations allows healthcare providers to:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {["Improve diagnostic accuracy", "Assess overall health comprehensively", "Monitor disease progression", "Evaluate treatment effectiveness", "Identify risk factors earlier", "Support preventive strategies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-cyan-50 font-medium">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-blue-200 italic border-l-2 border-cyan-400 pl-3">
                Rather than relying on a single laboratory value, healthcare professionals interpret multiple biomarkers together to obtain a complete picture of health.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Blood Testing as Part of Comprehensive Healthcare</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Blood tests remain one of the most valuable diagnostic tools in modern medicine. From routine wellness assessments and preventive screenings to advanced molecular diagnostics and disease monitoring, laboratory investigations provide essential information that supports evidence-based healthcare decisions.
              </p>
              <p>
                Exploring related blood tests helps patients better understand the breadth of modern laboratory medicine and the important role these investigations play in maintaining health, preventing disease, and supporting long-term wellness.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}