import React from "react";
import { 
  Stethoscope, 
  FlaskConical, 
  Droplets, 
  HeartPulse, 
  Baby, 
  Dna, 
  Activity, 
  Apple, 
  Target, 
  ScanHeart, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function RelatedServices() {
  const services = [
    {
      title: "Comprehensive Health Checkups",
      icon: <Stethoscope size={32} className="text-blue-500" />,
      bg: "bg-blue-50",
      desc: "Preventive health screenings combine multiple blood investigations with clinical assessments to provide a detailed overview of overall health.",
      list: ["CBC & Blood Sugar", "Lipid & Thyroid Profiles", "Liver & Kidney Tests", "Vitamin Assessments"]
    },
    {
      title: "Pathology & Laboratory Services",
      icon: <FlaskConical size={32} className="text-purple-500" />,
      bg: "bg-purple-50",
      desc: "Pathology laboratories perform a wide range of diagnostic investigations that extend beyond routine blood testing.",
      list: ["Urine & Stool Analysis", "Microbiology & Serology", "Culture & Sensitivity", "Histopathology & Cytology"]
    },
    {
      title: "Diabetes & Metabolic Health",
      icon: <Droplets size={32} className="text-cyan-500" />,
      bg: "bg-cyan-50",
      desc: "Blood tests are essential for assessing metabolic function and monitoring blood sugar regulation.",
      list: ["Fasting & Postprandial Sugar", "HbA1c & Insulin Levels", "Metabolic Profiles"]
    },
    {
      title: "Cardiac & Cardiovascular",
      icon: <HeartPulse size={32} className="text-rose-500" />,
      bg: "bg-rose-50",
      desc: "Cardiovascular health evaluations often combine blood testing with additional diagnostic procedures for a complete picture.",
      list: ["Lipid Profile & Biomarkers", "ECG & Echocardiography", "TMT Stress Testing", "Holter Monitoring"]
    },
    {
      title: "Women's Health & Pregnancy",
      icon: <Baby size={32} className="text-pink-500" />,
      bg: "bg-pink-50",
      desc: "Blood testing plays an important role in reproductive health, fertility assessment, and pregnancy care.",
      list: ["Prenatal & Maternal Screening", "Fertility Hormone Testing", "Pregnancy Blood Tests", "Women's Health Panels"]
    },
    {
      title: "Genetic & Molecular Diagnostics",
      icon: <Dna size={32} className="text-indigo-500" />,
      bg: "bg-indigo-50",
      desc: "Advances in laboratory science have expanded the role of genetic testing in personalized healthcare planning.",
      list: ["NIPT & Carrier Screening", "Karyotyping", "Genetic Risk Assessment", "Molecular Testing"]
    },
    {
      title: "Thyroid & Hormonal Evaluation",
      icon: <Activity size={32} className="text-amber-500" />,
      bg: "bg-amber-50",
      desc: "Hormone testing helps assess endocrine function, identify imbalances, and monitor endocrine disorders.",
      list: ["Thyroid Function Tests", "Reproductive Profiles", "Testosterone & Estrogen", "Cortisol & Fertility"]
    },
    {
      title: "Nutritional & Wellness Testing",
      icon: <Apple size={32} className="text-emerald-500" />,
      bg: "bg-emerald-50",
      desc: "Nutritional assessments help identify deficiencies that may affect overall health, immunity, and quality of life.",
      list: ["Vitamin D & B12", "Iron Studies & Ferritin", "Folate Assessment", "Mineral Profiles"]
    },
    {
      title: "Cancer & Tumor Marker Testing",
      icon: <Target size={32} className="text-red-500" />,
      bg: "bg-red-50",
      desc: "Certain blood tests may assist healthcare providers in evaluating cancer-related biomarkers when clinically indicated.",
      list: ["Tumor Marker Testing", "Oncology Panels", "Molecular Biomarker Analysis", "Follow-Up Monitoring"]
    },
    {
      title: "Diagnostic Imaging Services",
      icon: <ScanHeart size={32} className="text-teal-500" />,
      bg: "bg-teal-50",
      desc: "Laboratory testing and medical imaging often work together to provide a more complete diagnostic picture.",
      list: ["Ultrasound & Doppler", "X-Ray & Mammography", "CT Scan & MRI", "Nuclear Medicine"]
    },
    {
      title: "Preventive Healthcare Services",
      icon: <ShieldCheck size={32} className="text-emerald-600" />,
      bg: "bg-emerald-100",
      desc: "Blood testing remains one of the most valuable components of preventive medicine for long-term well-being.",
      list: ["Annual Health Checkups", "Executive Health Packages", "Wellness Screening", "Chronic Disease Monitoring"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      
      {/* Decorative Background Meshes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        {/* HERO SECTION: Content Left, Image Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase shadow-sm">
              <Activity size={16} /> Integrated Healthcare
            </div>
            
            {/* SEO: H2 Tag */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Related Diagnostic and <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Healthcare Services
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Blood tests are often performed as part of a broader diagnostic evaluation. While laboratory investigations provide critical information about organ function, metabolism, hormones, infections, and overall health, they are frequently combined with other diagnostic services to support accurate diagnosis, treatment planning, and preventive healthcare.
            </p>
            <p className="text-lg font-medium text-gray-800 border-l-4 border-blue-500 pl-4">
              Explore related healthcare services that complement blood testing and contribute to a comprehensive understanding of health and wellness.
            </p>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 relative group perspective-1000">
            {/* SEO/Layout Requirement: Gradient background below image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white transform transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/henotic-diagnostics-main-processing-lab.webp" 
                alt="Related Diagnostic and Healthcare Services" 
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID (Bento Box Style) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24 auto-rows-fr">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col group ${index === 0 || index === 9 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-110 ${service.bg}`}>
                  {service.icon}
                </div>
                {/* SEO: H3 Tag */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              
              <div className="pt-5 border-t border-gray-50 mt-auto">
                <ul className="space-y-2">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* OUTRO: Bottom Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] rounded-[40px] p-10 md:p-16 shadow-[0_20px_50px_rgba(30,58,138,0.4)] relative overflow-hidden text-center text-white transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* SEO: H3 Tag */}
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Explore More Diagnostic Resources</h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Understanding the relationship between blood tests and other diagnostic services can help patients make informed healthcare decisions. Whether monitoring a chronic condition, evaluating symptoms, supporting pregnancy care, assessing heart health, or pursuing preventive screening, integrated diagnostic services provide valuable insights that contribute to better health outcomes and evidence-based medical care.
            </p>
            
            <button className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              View All Diagnostic Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}