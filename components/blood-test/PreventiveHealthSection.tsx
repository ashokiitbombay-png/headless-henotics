import React from "react";
import { 
  ShieldCheck, 
  Activity, 
  HeartPulse, 
  ActivitySquare, 
  FlaskConical, 
  Droplet, 
  Apple, 
  Users, 
  Clock, 
  CheckCircle2, 
  Leaf, 
  Sun, 
  Heart
} from "lucide-react";

export default function PreventiveHealthSection() {
  const conditions = [
    {
      title: "Diabetes & Blood Sugar",
      icon: <ActivitySquare size={28} className="text-blue-500" />,
      bg: "bg-blue-50",
      desc: "Tests such as fasting blood glucose and HbA1c can identify abnormal blood sugar levels before diabetes becomes advanced, allowing for healthier lifestyle adoption."
    },
    {
      title: "Cardiovascular Disease Risk",
      icon: <HeartPulse size={28} className="text-rose-500" />,
      bg: "bg-rose-50",
      desc: "Evaluates risk factors including cholesterol levels, triglycerides, inflammatory markers, and metabolic indicators to support prevention strategies."
    },
    {
      title: "Thyroid Disorders",
      icon: <Activity size={28} className="text-purple-500" />,
      bg: "bg-purple-50",
      desc: "Routine thyroid testing can identify hormonal imbalances influencing metabolism, energy levels, and body temperature that may otherwise go unnoticed."
    },
    {
      title: "Liver Health",
      icon: <FlaskConical size={28} className="text-amber-500" />,
      bg: "bg-amber-50",
      desc: "Blood markers related to liver function can reveal inflammation, metabolic disturbances, or other abnormalities before symptoms appear."
    },
    {
      title: "Kidney Function",
      icon: <Droplet size={28} className="text-cyan-500" />,
      bg: "bg-cyan-50",
      desc: "Kidneys play a vital role in filtering waste. Blood tests can assess kidney performance and help detect early changes in renal function."
    },
    {
      title: "Nutritional Deficiencies",
      icon: <Apple size={28} className="text-emerald-500" />,
      bg: "bg-emerald-50",
      desc: "Identifies deficiencies in Vitamin D, B12, Iron, Ferritin, Folate, and Calcium to support timely nutritional intervention."
    }
  ];

  const lifeStages = [
    {
      stage: "Young Adults",
      icon: <Sun size={32} className="text-amber-500 mb-4" />,
      list: ["Baseline health assessment", "Nutritional status", "Blood sugar evaluation", "Cholesterol screening", "General wellness monitoring"]
    },
    {
      stage: "Middle-Aged Adults",
      icon: <Users size={32} className="text-blue-500 mb-4" />,
      list: ["Cardiovascular risk assessment", "Diabetes screening", "Hormonal evaluation", "Organ function testing", "Metabolic health monitoring"]
    },
    {
      stage: "Older Adults",
      icon: <Heart size={32} className="text-rose-500 mb-4" />,
      list: ["Chronic disease management", "Nutritional health", "Kidney function", "Liver function", "Cardiovascular health", "Overall wellness assessment"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#f8fafc] via-white to-blue-50/50 relative overflow-hidden">
      
      {/* Abstract Background Meshes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1300px] relative z-10">
        
        {/* HERO SECTION: Content Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-sm tracking-wide uppercase shadow-sm">
              <ShieldCheck size={16} /> Proactive Wellness
            </div>
            
            {/* SEO: H2 Tag */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Preventive Health & the Role of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Blood Testing
              </span>
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Preventive healthcare focuses on identifying potential health risks before symptoms develop or serious complications occur. Blood testing is one of the most effective tools in preventive medicine because it provides valuable insights into how the body is functioning and can reveal early signs of disease, nutritional deficiencies, metabolic imbalances, and organ dysfunction.
              </p>
              <p>
                Regular blood tests empower individuals and healthcare professionals to make informed decisions about lifestyle changes, treatment plans, and long-term health management.
              </p>
            </div>
          </div>
          
          {/* Image Section with Dedicated Gradient Glow */}
          <div className="relative group perspective-1000">
            {/* SEO/Layout Requirement: Gradient background below image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400 via-teal-300 to-blue-400 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Happy-Indian-Family/comprehensive-full-body-medical-check-up-henotic-diagnostics.webp" 
                alt="Preventive Health and Blood Testing" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* SECTION: Why Preventive Blood Testing Matters */}
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[30px] p-8 md:p-12 shadow-xl mb-24">
          <div className="max-w-3xl mb-8">
            {/* SEO: H3 Tag */}
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Preventive Blood Testing Matters</h3>
            <p className="text-gray-600 leading-relaxed">
              Many common health conditions develop gradually and may not produce noticeable symptoms during their early stages. Blood tests can detect subtle changes in biological markers, allowing healthcare providers to identify concerns before they progress into more serious medical problems.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Detect health issues early", 
              "Monitor overall wellness", 
              "Assess chronic disease risks", 
              "Evaluate organ function", 
              "Identify vitamin deficiencies", 
              "Track health over time", 
              "Support healthy aging", 
              "Guide preventive decisions"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                <CheckCircle2 size={20} className="text-teal-500 shrink-0" />
                <span className="text-sm font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-emerald-700 bg-emerald-50 inline-block px-4 py-2 rounded-lg border border-emerald-100">
            Early detection often improves treatment outcomes and may reduce the likelihood of complications.
          </p>
        </div>

        {/* SECTION: Conditions Grid (H3 & H4) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Conditions Identified Early</h3>
            <p className="text-gray-600">Routine blood investigations can provide important information related to various bodily functions and risks.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((cond, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${cond.bg}`}>
                  {cond.icon}
                </div>
                {/* SEO: H4 Tag */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">{cond.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{cond.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Life Stages (H3 & H4) */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Screening Across Life Stages</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Health needs change throughout life, and blood testing can help monitor wellness at every stage.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {lifeStages.map((stage, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-slate-50 rounded-3xl p-8 border border-gray-100 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                  {stage.icon}
                  {/* SEO: H4 Tag */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">{stage.stage}</h4>
                  <ul className="space-y-3">
                    {stage.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Lifestyle & Frequency (Glass Panels) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-lg border border-white">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="text-teal-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Lifestyle Connection</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Blood tests provide measurable insights into how lifestyle choices affect health. Monitoring blood markers over time can help individuals evaluate the impact of positive lifestyle changes and maintain long-term health goals.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Diet & Nutrition", "Physical Activity", "Sleep Quality", "Stress Levels", "Tobacco Use", "Alcohol Consumption", "Weight Management"].map((item, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-lg border border-white">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-blue-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Testing Frequency</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              There is no single testing schedule that applies to everyone. Regular consultations with healthcare professionals can help determine the most appropriate screening plan based on specific factors.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {["Age", "Family history", "Medical conditions", "Lifestyle factors", "Personal health goals", "Doctor recommendations"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONCLUSION: Bottom Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 rounded-[40px] p-10 lg:p-16 shadow-[0_20px_50px_rgba(4,47,46,0.4)] relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Blood Testing and Long-Term Wellness</h3>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              Preventive healthcare is not only about detecting disease—it is also about maintaining wellness and optimizing health throughout life. Comprehensive screenings combine CBC, Sugar, HbA1c, Lipid, Liver, Kidney, Thyroid, and Vitamin assessments to create a broader picture of overall health.
            </p>
            <p className="text-white font-medium text-xl border-t border-emerald-700/50 pt-8">
              By identifying potential issues before symptoms develop, preventive blood testing plays an essential role in helping individuals take control of their health, reduce future risks, and support lifelong well-being.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}