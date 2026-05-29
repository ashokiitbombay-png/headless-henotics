import React from "react";
import { 
  Activity, 
  ShieldPlus, 
  Stethoscope, 
  HeartPulse, 
  PieChart, 
  Apple, 
  UserCog, 
  Syringe, 
  TrendingUp, 
  CheckCircle2,
  Heart
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Early Disease Detection",
      icon: <Activity className="text-red-500" size={28} />,
      bg: "bg-red-50",
      desc: "Blood tests help identify medical conditions before noticeable symptoms develop. Early detection allows timely diagnosis, faster treatment, and improved long-term health outcomes.",
      list: ["Diabetes", "Thyroid disorders", "Liver disease", "Kidney dysfunction", "High cholesterol", "Vitamin deficiencies", "Infections", "Inflammatory conditions"],
      footer: "Preventive healthcare screening plays an important role in reducing future health complications."
    },
    {
      title: "Comprehensive Health Assessment",
      icon: <PieChart className="text-blue-500" size={28} />,
      bg: "bg-blue-50",
      desc: "A blood test provides valuable insight into how different organs and body systems are functioning.",
      list: ["Blood cell health", "Metabolic function", "Hormonal balance", "Immune system activity", "Liver function", "Kidney function", "Cardiovascular risk", "Nutritional status"],
      footer: "Modern laboratory medicine uses advanced biomarkers to create a more complete picture of overall health."
    },
    {
      title: "Supports Preventive Healthcare",
      icon: <ShieldPlus className="text-emerald-500" size={28} />,
      bg: "bg-emerald-50",
      desc: "Preventive blood testing helps individuals monitor health risks before disease develops. Regular screening allows healthcare providers to identify silent conditions.",
      list: ["Wellness monitoring", "Lifestyle assessment", "Early risk detection", "Chronic disease prevention", "Personalized healthcare planning"],
      footer: "Routine testing is a core part of proactive healthcare management."
    },
    {
      title: "Accurate Disease Diagnosis",
      icon: <Stethoscope className="text-purple-500" size={28} />,
      bg: "bg-purple-50",
      desc: "Clinical pathology laboratories use advanced diagnostic technologies and automated analyzers to provide highly accurate results.",
      list: ["Infections", "Blood disorders", "Hormonal imbalance", "Autoimmune diseases", "Nutritional deficiencies", "Metabolic disorders", "Organ dysfunction"],
      footer: "Accurate laboratory diagnostics support evidence-based medical treatment decisions."
    },
    {
      title: "Monitors Chronic Conditions",
      icon: <HeartPulse className="text-pink-500" size={28} />,
      bg: "bg-pink-50",
      desc: "Blood tests are essential for monitoring chronic diseases and evaluating treatment effectiveness over time.",
      list: ["Diabetes management", "Cholesterol monitoring", "Thyroid disease follow-up", "Kidney disease assessment", "Liver disease monitoring", "Heart health evaluation"],
      footer: "Ongoing laboratory monitoring helps doctors adjust medications and track disease progression."
    },
    {
      title: "Helps Evaluate Organ Function",
      icon: <Heart className="text-orange-500" size={28} />,
      bg: "bg-orange-50",
      desc: "Many blood tests are designed to assess how well organs are functioning.",
      list: ["Liver health", "Kidney performance", "Cardiac function", "Pancreatic activity", "Endocrine system balance"],
      footer: "Biochemistry testing and biomarker analysis help detect organ-related abnormalities early."
    },
    {
      title: "Detects Nutritional Deficiencies",
      icon: <Apple className="text-green-500" size={28} />,
      bg: "bg-green-50",
      desc: "Blood tests can identify deficiencies of essential vitamins, minerals, and nutrients that affect overall health and energy levels.",
      list: ["Vitamin D", "Vitamin B12", "Iron studies", "Folate", "Calcium"],
      footer: "Early detection prevents fatigue, weakness, anemia, neurological symptoms, and metabolic complications."
    },
    {
      title: "Supports Personalized Healthcare",
      icon: <UserCog className="text-indigo-500" size={28} />,
      bg: "bg-indigo-50",
      desc: "Modern laboratory medicine allows doctors to create individualized treatment and wellness plans based on biomarker analysis.",
      list: ["Customized nutrition guidance", "Medication adjustments", "Hormonal management", "Lifestyle modifications", "Preventive care strategies"],
      footer: "Helps healthcare providers make informed clinical decisions tailored to each patient."
    },
    {
      title: "Improves Long-Term Outcomes",
      icon: <TrendingUp className="text-cyan-500" size={28} />,
      bg: "bg-cyan-50",
      desc: "Regular blood testing contributes to better long-term healthcare by helping identify medical problems early and enabling timely intervention.",
      list: ["Disease prevention", "Better treatment response", "Reduced health risks", "Improved wellness monitoring", "Early medical intervention"],
      footer: "Laboratory diagnostics remain one of the most important foundations of modern preventive medicine."
    },
    {
      title: "Fast and Minimally Invasive",
      icon: <Syringe className="text-teal-500" size={28} />,
      bg: "bg-teal-50",
      desc: "Most blood test procedures are quick, safe, and minimally invasive. Sample collection usually takes only a few minutes and provides extensive diagnostic information.",
      footer: "Modern pathology laboratories use advanced collection systems and automated technologies to improve patient comfort."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 relative overflow-hidden">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header & 3D Image Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase">
              <ShieldPlus size={16} /> Advantages
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Benefits of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Blood Testing
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Blood tests are one of the most essential tools in modern healthcare. From routine wellness screening to advanced disease diagnosis, discovering what is happening inside your body can dramatically improve your long-term health outcomes.
            </p>
          </div>
          
          {/* Deep 3D Shadow Image Box */}
          <div className="relative group perspective-1000">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-[10px] border-white transform transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_40px_80px_rgba(37,99,235,0.2)] group-hover:-rotate-1">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Blood%20Samples/henotic-diagnostics-blood-test.webp" 
                alt="Henotic Diagnostics Blood Test Analysis" 
                className="w-full h-[350px] md:h-[450px] object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-80"></div>
            </div>
            {/* Glowing Back-Shadow */}
            <div className="absolute -inset-2 bg-blue-500/20 rounded-3xl blur-2xl -z-10 group-hover:bg-blue-400/30 transition-colors duration-700"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${benefit.bg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {benefit.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                {benefit.desc}
              </p>
              
              {benefit.list && (
                <ul className="mb-6 space-y-2 flex-grow">
                  {benefit.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {benefit.footer && (
                <div className="pt-5 border-t border-gray-50 mt-auto">
                  <p className="text-xs text-gray-500 italic bg-gray-50 p-3 rounded-xl border border-gray-100">
                    {benefit.footer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Deep Gradient Summary Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.3)] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#312e81] p-10 md:p-16 text-center transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Why Blood Testing Is Essential in Modern Healthcare
            </h3>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-6 font-light">
              Blood testing is one of the most valuable tools in clinical pathology and preventive healthcare. From routine wellness screening to advanced disease diagnosis, blood tests help healthcare professionals monitor body function, evaluate biomarkers, identify hidden medical conditions, and guide treatment decisions with accuracy and reliability.
            </p>
            <p className="text-blue-200 text-base md:text-lg">
              Advancements in hematology, biochemistry, immunoassay testing, and automated laboratory medicine continue to improve diagnostic precision and patient care worldwide.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}