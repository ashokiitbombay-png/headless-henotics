import React from "react";
import { 
  ShieldCheck, 
  Microscope, 
  TestTube, 
  HeartPulse, 
  Stethoscope, 
  Clock, 
  Users, 
  Activity, 
  Award,
  CheckCircle2,
  Star
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Accurate & Reliable Reporting",
      desc: "Modern laboratory systems use advanced automated analyzers, standardized quality protocols, and clinically validated testing methods to improve reporting accuracy.",
      icon: <ShieldCheck size={48} className="text-emerald-500 drop-shadow-md" />,
      bg: "bg-emerald-50",
      list: ["Early disease detection", "Accurate biomarker evaluation", "Chronic disease monitoring", "Preventive healthcare screening", "Treatment planning and follow-up"],
      ratingText: "Trusted Diagnostic Accuracy"
    },
    {
      title: "Advanced Laboratory Technology",
      desc: "Modern laboratory blood testing relies on sophisticated diagnostic systems and automated technologies to improve analytical precision and efficiency.",
      icon: <Microscope size={48} className="text-blue-500 drop-shadow-md" />,
      bg: "bg-blue-50",
      list: ["Automated hematology analyzers", "Clinical biochemistry systems", "Immunoassay testing platforms", "Digital laboratory workflows", "High-sensitivity biomarker testing"],
      ratingText: "Advanced Laboratory Diagnostics"
    },
    {
      title: "Comprehensive Testing Services",
      desc: "A wide range of blood tests helps support preventive healthcare, wellness screening, disease diagnosis, and medical monitoring.",
      icon: <TestTube size={48} className="text-purple-500 drop-shadow-md" />,
      bg: "bg-purple-50",
      list: ["Complete Blood Count (CBC)", "Blood glucose & Lipid profile", "Liver & Kidney function tests", "Thyroid & Hormone analysis", "Infection & Cardiac biomarkers"],
      ratingText: "Comprehensive Diagnostic Evaluation"
    },
    {
      title: "Preventive Healthcare Focus",
      desc: "Routine laboratory screening helps support long-term wellness and proactive healthcare management by identifying silent health risks early.",
      icon: <HeartPulse size={48} className="text-rose-500 drop-shadow-md" />,
      bg: "bg-rose-50",
      list: ["Early detection of conditions", "Cardiovascular risk assessment", "Diabetes monitoring", "Nutritional evaluation", "Metabolic health screening"],
      ratingText: "Preventive Wellness Screening"
    },
    {
      title: "Experienced Clinical Expertise",
      desc: "Accurate blood testing requires skilled laboratory professionals, clinical pathology expertise, and standardized quality assurance processes.",
      icon: <Stethoscope size={48} className="text-indigo-500 drop-shadow-md" />,
      bg: "bg-indigo-50",
      list: ["Careful sample handling", "Precision biomarker analysis", "Clinical validation protocols", "Pathology review", "Quality-controlled workflows"],
      ratingText: "Professional Pathology Standards"
    },
    {
      title: "Fast & Efficient Workflow",
      desc: "Efficient diagnostic workflows help improve turnaround time while maintaining high standards of testing accuracy and quality.",
      icon: <Clock size={48} className="text-orange-500 drop-shadow-md" />,
      bg: "bg-orange-50",
      list: ["Streamlined sample processing", "Automated analysis", "Faster report generation", "Digital pathology workflows", "Efficient diagnostic coordination"],
      ratingText: "Efficient Diagnostic Reporting"
    },
    {
      title: "Patient-Centered Experience",
      desc: "A comfortable and professionally managed testing process helps improve the overall healthcare experience and accessibility.",
      icon: <Users size={48} className="text-teal-500 drop-shadow-md" />,
      bg: "bg-teal-50",
      list: ["Safe blood sample collection", "Hygienic testing environments", "Clear preparation guidance", "Transparent reporting", "Easy-to-understand info"],
      ratingText: "Trusted Patient Experience"
    },
    {
      title: "Evidence-Based Medicine",
      desc: "Laboratory results provide objective clinical data that help doctors diagnose diseases, monitor treatment response, and evaluate risks accurately.",
      icon: <Activity size={48} className="text-cyan-500 drop-shadow-md" />,
      bg: "bg-cyan-50",
      list: ["Personalized healthcare decisions", "Medical treatment planning", "Disease progression monitoring", "Preventive healthcare strategies", "Long-term wellness management"],
      ratingText: "Evidence-Based Diagnostic Care"
    },
    {
      title: "Diagnostic Excellence",
      desc: "Modern laboratories follow standardized protocols and quality-control systems to maintain accuracy, reliability, and clinical consistency.",
      icon: <Award size={48} className="text-amber-500 drop-shadow-md" />,
      bg: "bg-amber-50",
      list: ["Standardized procedures", "Precision biomarker analysis", "Advanced pathology systems", "Quality-controlled testing", "Reliable reporting protocols"],
      ratingText: "Quality-Focused Laboratory Testing"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 relative overflow-hidden">
      
      {/* Decorative Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Why Choose Advanced <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Blood Testing & Diagnostics
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Modern blood testing plays a critical role in preventive healthcare, early disease detection, biomarker analysis, and clinical decision-making. Choosing a trusted laboratory diagnostics provider helps ensure accurate reporting, reliable pathology analysis, and comprehensive healthcare evaluation.
          </p>
          
          {/* Oversized Google Trust Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-gray-100 pb-4 sm:pb-0 sm:pr-6">
              <img src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/google-icon-logo-svgrepo-com.svg" alt="Google" className="w-16 h-16 drop-shadow-md" />
              <img src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/google-my-business-icon.webp" alt="Google Business Profile" className="w-16 h-16 drop-shadow-md" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-black text-gray-900 leading-none">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/yellow-star.webp" alt="Star" className="w-6 h-6 drop-shadow-sm" />
                  ))}
                </div>
              </div>
              <p className="text-gray-500 font-medium">Highly Rated on Google Business</p>
            </div>
          </div>
        </div>

        {/* High-Quality Rate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[30px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col group relative"
            >
              {/* Card Header & Oversized Icon */}
              <div className="p-8 pb-4 relative z-10">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-500 ${reason.bg}`}>
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {reason.desc}
                </p>
              </div>

              {/* Card List Body */}
              <div className="px-8 pb-8 flex-grow">
                <ul className="space-y-3">
                  {reason.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer - 5 Star Highlight */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-5 mt-auto border-t border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-700 text-center uppercase tracking-wider group-hover:text-blue-700 transition-colors">
                    {reason.ratingText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conclusion Banner */}
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] rounded-[40px] p-10 lg:p-14 shadow-[0_20px_50px_rgba(30,58,138,0.4)] relative overflow-hidden text-center transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-extrabold text-white mb-6">Trusted Blood Testing for Modern Healthcare</h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-10">
              Blood testing remains one of the most valuable tools in preventive healthcare, clinical pathology, disease diagnosis, and wellness monitoring. Advanced laboratory diagnostics, biomarker analysis, hematology, and biochemistry testing continue to improve healthcare outcomes through accurate, timely, and evidence-based medical insights.
            </p>
            
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 lg:gap-6">
              {[
                "Trusted Preventive Blood Testing", 
                "Advanced Clinical Pathology Diagnostics", 
                "Accurate Laboratory Medicine Solutions", 
                "Comprehensive Healthcare Biomarker Analysis"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full shadow-lg">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-bold tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}