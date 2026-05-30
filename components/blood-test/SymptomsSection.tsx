import React from "react";
import { 
  Battery, 
  Scale, 
  ShieldAlert, 
  Droplets, 
  Wind, 
  User, 
  Utensils, 
  Thermometer, 
  Droplet, 
  Activity, 
  Dumbbell, 
  Heart, 
  Baby, 
  AlertTriangle, 
  Stethoscope, 
  CheckCircle2 
} from "lucide-react";

export default function SymptomsSection() {
  const symptoms = [
    {
      title: "Persistent Fatigue & Low Energy",
      icon: <Battery size={28} className="text-orange-500" />,
      bg: "bg-orange-50",
      desc: "Ongoing tiredness is one of the most common reasons healthcare providers recommend blood testing.",
      list: ["Anemia", "Iron or Vitamin B12/D deficiency", "Thyroid disorders", "Diabetes & Hormonal imbalances"]
    },
    {
      title: "Unexplained Weight Changes",
      icon: <Scale size={28} className="text-blue-500" />,
      bg: "bg-blue-50",
      desc: "Significant weight gain or weight loss without obvious lifestyle changes may warrant further investigation.",
      list: ["Thyroid & Hormonal disorders", "Diabetes & Metabolic conditions", "Nutritional deficiencies"]
    },
    {
      title: "Frequent Infections & Reduced Immunity",
      icon: <ShieldAlert size={28} className="text-red-500" />,
      bg: "bg-red-50",
      desc: "Recurring infections or prolonged recovery periods may benefit from blood testing to evaluate immune system function.",
      list: ["White blood cell counts", "Inflammatory markers", "Nutritional status"]
    },
    {
      title: "Excessive Thirst & Frequent Urination",
      icon: <Droplets size={28} className="text-cyan-500" />,
      bg: "bg-cyan-50",
      desc: "Increased thirst and urination are symptoms that may be associated with blood sugar abnormalities.",
      list: ["Fasting Blood Sugar", "Postprandial Blood Sugar", "HbA1c Testing"]
    },
    {
      title: "Dizziness & Lightheadedness",
      icon: <Wind size={28} className="text-teal-500" />,
      bg: "bg-teal-50",
      desc: "Symptoms such as dizziness, weakness, or feeling faint may occur for various reasons.",
      list: ["Hemoglobin levels", "Iron status & Blood sugar", "Electrolyte balance"]
    },
    {
      title: "Hair Loss & Changes in Hair Health",
      icon: <User size={28} className="text-purple-500" />,
      bg: "bg-purple-50",
      desc: "Hair thinning or excessive hair loss may sometimes be associated with underlying nutritional or hormonal factors.",
      list: ["Iron Studies & Ferritin", "Thyroid Function Tests", "Vitamin D & B12 Assessment"]
    },
    {
      title: "Changes in Appetite",
      icon: <Utensils size={28} className="text-amber-500" />,
      bg: "bg-amber-50",
      desc: "Noticeable increases or decreases in appetite can sometimes be linked to metabolic, hormonal, or systemic conditions.",
      list: ["Thyroid function", "Blood glucose regulation", "Hormonal balance"]
    },
    {
      title: "Persistent Fever or Infection Signs",
      icon: <Thermometer size={28} className="text-rose-500" />,
      bg: "bg-rose-50",
      desc: "Ongoing fever or symptoms suggesting infection may prompt healthcare providers to recommend laboratory testing.",
      list: ["Complete Blood Count (CBC)", "Inflammatory Markers", "Infection Screening Tests"]
    },
    {
      title: "Easy Bruising or Unusual Bleeding",
      icon: <Droplet size={28} className="text-red-600" />,
      bg: "bg-red-100",
      desc: "Frequent bruising or unexplained bleeding may indicate abnormalities related to blood cells or clotting mechanisms.",
      list: ["Platelet levels", "Blood cell counts", "Coagulation-related markers"]
    },
    {
      title: "Shortness of Breath",
      icon: <Activity size={28} className="text-sky-500" />,
      bg: "bg-sky-50",
      desc: "Shortness of breath can result from numerous medical conditions and may require laboratory evaluation.",
      list: ["Anemia", "Inflammation", "Infection-related conditions", "Metabolic abnormalities"]
    },
    {
      title: "Muscle Weakness & Joint Discomfort",
      icon: <Dumbbell size={28} className="text-emerald-500" />,
      bg: "bg-emerald-50",
      desc: "Muscle weakness, aches, or persistent joint discomfort may sometimes be associated with underlying factors.",
      list: ["Vitamin deficiencies", "Inflammatory conditions", "Autoimmune disorders"]
    },
    {
      title: "Digestive & Gastrointestinal Symptoms",
      icon: <Heart size={28} className="text-pink-500" />,
      bg: "bg-pink-50",
      desc: "Certain digestive symptoms may lead healthcare providers to recommend blood testing.",
      list: ["Persistent abdominal discomfort", "Unexplained weight loss", "Nutritional concerns"]
    },
    {
      title: "Hormonal & Reproductive Health",
      icon: <Baby size={28} className="text-indigo-500" />,
      bg: "bg-indigo-50",
      desc: "Hormonal imbalances may affect multiple body systems and can present with varied symptoms.",
      list: ["Irregular menstrual cycles", "Fertility concerns", "Mood changes", "Unexplained weight fluctuations"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
      
      {/* Abstract Glassmorphism Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        {/* HERO SECTION: Content Left, Image Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-700 font-bold text-sm tracking-wide uppercase shadow-sm">
              <AlertTriangle size={16} /> Clinical Indicators
            </div>
            
            {/* SEO: H2 Tag */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Symptoms & Health Concerns That May Require <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
                Blood Testing
              </span>
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Blood tests are commonly recommended when individuals experience symptoms that may indicate underlying health conditions. Because many diseases affect the body's chemistry, hormone levels, blood cells, or organ function, laboratory testing can provide valuable information that helps healthcare professionals identify potential causes and guide further evaluation.
              </p>
              <p className="bg-white/60 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-sm font-medium text-gray-800">
                It is important to remember that symptoms alone do not determine a diagnosis. Blood tests are one of several tools healthcare providers use to better understand a patient's overall health status.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative group perspective-1000">
            {/* Dedicated Gradient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-300 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white transform transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Happy-Indian-Family/wellness-profile-health-packages-henotic-diagnostics.webp" 
                alt="Health Symptoms and Blood Testing" 
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* SYMPTOMS BENTO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24 auto-rows-fr">
          {symptoms.map((symptom, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(244,63,94,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col group ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-110 ${symptom.bg}`}>
                  {symptom.icon}
                </div>
                {/* SEO: H3 Tag */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-rose-600 transition-colors">
                  {symptom.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {symptom.desc}
              </p>
              
              <div className="pt-4 border-t border-gray-50 mt-auto">
                <ul className="space-y-2">
                  {symptom.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* OUTRO & WARNING SECTION */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Warning Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-rose-900 to-red-950 rounded-[30px] p-8 md:p-10 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={32} className="text-rose-400" />
                <h3 className="text-2xl font-bold">Symptoms That Should Not Be Ignored</h3>
              </div>
              <p className="text-rose-100 text-sm leading-relaxed mb-6">
                While many symptoms have harmless explanations, persistent or worsening symptoms should be evaluated by a qualified healthcare professional.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {["Ongoing fatigue", "Unexplained weight changes", "Persistent fever", "Recurrent infections", "Excessive thirst", "Frequent urination", "Unusual bleeding", "Persistent weakness"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-rose-50 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></div> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                <p className="text-sm font-medium">Timely medical evaluation and appropriate laboratory testing can help identify potential health concerns earlier.</p>
              </div>
            </div>
          </div>

          {/* Early Detection Conclusion */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-[30px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Blood Testing & Early Detection</h3>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Many medical conditions develop gradually and may produce subtle symptoms during their early stages. Blood testing provides objective information that can help detect changes in health before more serious complications occur.
              </p>
              <p className="font-medium text-gray-800 border-l-4 border-blue-500 pl-4 py-1">
                When used alongside medical history, physical examination, and clinical evaluation, blood tests remain one of the most valuable tools for understanding symptoms, assessing overall health, and supporting preventive healthcare.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}