import React from "react";
import { 
  ClipboardCheck, 
  UtensilsCrossed, 
  Ban, 
  Droplets, 
  Pill, 
  Activity, 
  Clock, 
  AlertCircle,
  GlassWater
} from "lucide-react";

export default function PreparationSection() {
  const prepSteps = [
    {
      title: "Fasting Requirements",
      desc: "Fasting before blood test if instructed.",
      icon: <UtensilsCrossed size={24} />,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Avoid Alcohol",
      desc: "Refrain from drinking alcohol prior to testing.",
      icon: <Ban size={24} />,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Stay Hydrated",
      desc: "Drink plenty of water to make vein access easier.",
      icon: <Droplets size={24} />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Medication Adjustments",
      desc: "Temporarily adjust medications only if advised by a doctor.",
      icon: <Pill size={24} />,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Avoid Strenuous Exercise",
      desc: "Heavy workouts can alter certain enzyme levels.",
      icon: <Activity size={24} />,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Timing Instructions",
      desc: "Follow specific timing for hormone or specialized testing.",
      icon: <Clock size={24} />,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-6 shadow-sm">
            <ClipboardCheck size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Blood Test <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Preparation</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Proper blood test preparation is important because certain foods, medications, hydration status, and physical activity can influence laboratory results.
          </p>
        </div>

        {/* 3D Grid of Preparation Instructions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {prepSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-sm transition-transform group-hover:scale-110 ${step.bg} ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Important Note Alert */}
        <div className="flex items-start gap-4 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-16 shadow-sm max-w-4xl mx-auto">
          <AlertCircle className="text-yellow-500 shrink-0 mt-0.5" size={24} />
          <p className="text-yellow-800 text-sm md:text-base">
            <strong>Note:</strong> Not all blood tests require fasting. However, tests such as a lipid profile and fasting blood sugar may require several hours of fasting for accurate interpretation.
          </p>
        </div>

        {/* Deep 3D Fasting Section Callout with Embedded Image */}
        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(30,58,138,0.3)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          
          {/* Decorative Pattern inside the dark card */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="flex-1 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Fasting Before Blood Test
            </h3>
            <p className="text-blue-200 mb-6 text-lg italic border-l-2 border-blue-400 pl-4">
              "Why is fasting before a blood test important?"
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Fasting helps prevent temporary changes in blood glucose, triglycerides, and certain metabolic biomarkers that occur after eating. Depending on the test, fasting periods may range from <strong>8 to 12 hours</strong>.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 text-white shadow-lg">
              <GlassWater className="text-cyan-400 shrink-0" size={28} />
              <span className="font-medium text-sm md:text-base leading-snug">
                Water is usually allowed during fasting unless specifically instructed otherwise by your healthcare provider.
              </span>
            </div>
          </div>

          {/* Right Side: High-Quality Laboratory Image */}
          <div className="w-full lg:w-5/12 relative z-10 group">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-white/10 transform transition-transform duration-700 group-hover:scale-105 group-hover:border-white/20">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Blood%20Samples/blood%20testing%20lab%20navi%20mumbai.webp" 
                alt="Blood Testing Laboratory Navi Mumbai" 
                className="w-full h-64 md:h-80 object-cover object-center transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
              
              {/* Subtle overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg">
                <p className="text-white text-xs font-bold tracking-wider uppercase">Advanced Lab Setup</p>
              </div>
            </div>
            {/* Decorative back-glow for the image */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl -z-10 group-hover:bg-blue-400/30 transition-colors duration-700"></div>
          </div>

        </div>

      </div>
    </section>
  );
}