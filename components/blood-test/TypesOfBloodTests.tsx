import React from "react";
import { 
  Activity, 
  Droplet, 
  HeartPulse, 
  SquareActivity, 
  Stethoscope, 
  FlaskConical, 
  Apple, 
  Dna, 
  ShieldAlert, 
  Heart, 
  TestTube, 
  ShieldPlus, 
  Microscope,
  CheckCircle2,
  Star
} from "lucide-react";

export default function TypesOfBloodTests() {
  const tests = [
    {
      title: "Complete Blood Count (CBC)",
      subtitle: "Hematology Blood Testing for Overall Blood Health",
      icon: <Droplet size={56} className="text-red-500 drop-shadow-md" />,
      bg: "bg-red-50",
      border: "border-red-100",
      measures: ["Red blood cells (RBC)", "White blood cells (WBC)", "Hemoglobin", "Hematocrit", "Platelets"],
      evaluates: ["Anemia", "Infection", "Inflammation", "Blood disorders", "Immune system health"],
      ratingText: "Essential Routine Blood Test"
    },
    {
      title: "Blood Glucose Tests",
      subtitle: "Blood Sugar Testing for Diabetes Monitoring",
      icon: <SquareActivity size={56} className="text-blue-500 drop-shadow-md" />,
      bg: "bg-blue-50",
      border: "border-blue-100",
      measures: ["Fasting Blood Sugar (FBS)", "Postprandial Blood Sugar (PPBS)", "Random Blood Sugar (RBS)", "HbA1c testing"],
      evaluates: ["Diabetes", "Prediabetes", "Insulin resistance", "Metabolic disorders"],
      ratingText: "Important for Diabetes Screening"
    },
    {
      title: "Lipid Profile Test",
      subtitle: "Cholesterol and Cardiovascular Risk Assessment",
      icon: <HeartPulse size={56} className="text-orange-500 drop-shadow-md" />,
      bg: "bg-orange-50",
      border: "border-orange-100",
      measures: ["Total cholesterol", "HDL cholesterol", "LDL cholesterol", "Triglycerides"],
      evaluates: ["Cardiovascular risk", "Heart disease risk", "Metabolic syndrome", "Cholesterol imbalance"],
      ratingText: "Preventive Heart Health Screening"
    },
    {
      title: "Liver Function Tests (LFT)",
      subtitle: "Biochemistry Testing for Liver Health",
      icon: <FlaskConical size={56} className="text-amber-500 drop-shadow-md" />,
      bg: "bg-amber-50",
      border: "border-amber-100",
      measures: ["SGOT (AST)", "SGPT (ALT)", "Bilirubin", "Alkaline phosphatase", "Albumin"],
      evaluates: ["Liver inflammation", "Fatty liver disease", "Hepatitis", "Liver dysfunction", "Metabolic disorders"],
      ratingText: "Important Organ Function Assessment"
    },
    {
      title: "Kidney Function Tests (KFT)",
      subtitle: "Renal Function Blood Testing",
      icon: <Activity size={56} className="text-emerald-500 drop-shadow-md" />,
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      measures: ["Creatinine", "Blood Urea Nitrogen (BUN)", "Uric acid", "Electrolytes"],
      evaluates: ["Kidney disease", "Renal dysfunction", "Dehydration", "Electrolyte imbalance", "Chronic medical conditions"],
      ratingText: "Essential for Renal Health Monitoring"
    },
    {
      title: "Thyroid Function Tests",
      subtitle: "Hormonal Blood Testing for Thyroid Health",
      icon: <Stethoscope size={56} className="text-purple-500 drop-shadow-md" />,
      bg: "bg-purple-50",
      border: "border-purple-100",
      measures: ["TSH", "T3", "T4", "Free T3", "Free T4"],
      evaluates: ["Hypothyroidism", "Hyperthyroidism", "Hormonal imbalance", "Metabolic disorders"],
      ratingText: "Advanced Hormonal Evaluation"
    },
    {
      title: "Vitamin & Nutritional Deficiency",
      subtitle: "Biomarker Analysis for Nutritional Health",
      icon: <Apple size={56} className="text-green-500 drop-shadow-md" />,
      bg: "bg-green-50",
      border: "border-green-100",
      measures: ["Vitamin D", "Vitamin B12", "Iron studies", "Folate", "Calcium"],
      evaluates: ["Fatigue", "Weakness", "Nutritional imbalance", "Bone health concerns", "Anemia"],
      ratingText: "Important Preventive Wellness Testing"
    },
    {
      title: "Hormone Blood Tests",
      subtitle: "Endocrine and Reproductive Health Evaluation",
      icon: <Dna size={56} className="text-pink-500 drop-shadow-md" />,
      bg: "bg-pink-50",
      border: "border-pink-100",
      measures: ["Insulin", "Cortisol", "Testosterone", "Estrogen", "Progesterone", "Prolactin", "FSH", "LH"],
      evaluates: ["Fertility", "Endocrine disorders", "Reproductive health", "Metabolic imbalance"],
      ratingText: "Specialized Laboratory Diagnostics"
    },
    {
      title: "Infection & Inflammation",
      subtitle: "Clinical Pathology Testing for Infections",
      icon: <ShieldAlert size={56} className="text-rose-500 drop-shadow-md" />,
      bg: "bg-rose-50",
      border: "border-rose-100",
      measures: ["CRP", "ESR", "Procalcitonin", "Serology testing", "Antibody testing"],
      evaluates: ["Viral infections", "Bacterial infections", "Inflammatory conditions", "Autoimmune activity"],
      ratingText: "Important Diagnostic Blood Testing"
    },
    {
      title: "Cardiac Biomarker Tests",
      subtitle: "Heart Health and Cardiac Risk Evaluation",
      icon: <Heart size={56} className="text-red-600 drop-shadow-md" />,
      bg: "bg-red-50",
      border: "border-red-100",
      measures: ["Troponin", "CK-MB", "BNP", "Lipid profile markers"],
      evaluates: ["Heart disease risk", "Cardiac stress", "Cardiovascular disorders", "Emergency cardiac conditions"],
      ratingText: "Advanced Cardiac Diagnostics"
    },
    {
      title: "Coagulation & Clotting Tests",
      subtitle: "Blood Clotting and Hemostasis Evaluation",
      icon: <TestTube size={56} className="text-cyan-600 drop-shadow-md" />,
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      measures: ["PT/INR", "aPTT", "D-Dimer"],
      evaluates: ["Bleeding disorders", "Clotting disorders", "Anticoagulant therapy", "Surgical risk assessment"],
      ratingText: "Critical Hematology Assessment"
    },
    {
      title: "Autoimmune & Immunology",
      subtitle: "Immune System and Autoimmune Evaluation",
      icon: <ShieldPlus size={56} className="text-indigo-500 drop-shadow-md" />,
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      measures: ["ANA", "Rheumatoid factor", "Autoantibody testing", "Immunoglobulin analysis"],
      evaluates: ["Autoimmune diseases", "Inflammatory disorders", "Immune dysfunction"],
      ratingText: "Advanced Immune System Diagnostics"
    },
    {
      title: "Tumor Marker Blood Tests",
      subtitle: "Biomarker Testing for Cancer Monitoring",
      icon: <Microscope size={56} className="text-teal-600 drop-shadow-md" />,
      bg: "bg-teal-50",
      border: "border-teal-100",
      measures: ["PSA", "CA-125", "CEA", "AFP"],
      evaluates: ["Monitor treatment response", "Evaluate disease progression", "Support clinical cancer assessment"],
      ratingText: "Specialized Diagnostic Biomarker Testing"
    }
  ];

  return (
    <section id="types" className="py-24 bg-gradient-to-b from-gray-50 via-[#f8fafc] to-blue-50/50 relative overflow-hidden">
      
      {/* Decorative Gradient Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-cyan-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight drop-shadow-sm">
            Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Blood Tests</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm">
            <p>
              Modern laboratory medicine includes a wide range of blood tests designed to evaluate overall health, detect diseases, monitor organ function, assess nutritional balance, and support preventive healthcare. Different types of blood tests analyze specific biomarkers, blood cells, enzymes, hormones, proteins, and metabolic substances to provide valuable diagnostic insights.
            </p>
            <p>
              Understanding the different types of blood tests helps patients make informed healthcare decisions and better understand how laboratory diagnostics support disease detection and wellness monitoring.
            </p>
          </div>
        </div>

        {/* High-Quality Rate Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {tests.map((test, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col group relative"
            >
              {/* Card Header & Big Icon */}
              <div className={`${test.bg} ${test.border} border-b p-8 text-center relative overflow-hidden transition-colors duration-500 group-hover:bg-opacity-70`}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="bg-white p-4 rounded-3xl shadow-lg border border-white/50">
                    {test.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{test.title}</h3>
                <p className="text-gray-700 font-medium text-sm">{test.subtitle}</p>
              </div>

              {/* Card Body - Dual Lists */}
              <div className="p-8 flex-grow flex flex-col gap-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-3">Measures / Includes</h4>
                  <ul className="space-y-2">
                    {test.measures.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">â€¢</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-3">Helps Evaluate</h4>
                  <ul className="space-y-2">
                    {test.evaluates.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer - 5 Star Highlight */}
              <div className="bg-gray-50 p-5 mt-auto border-t border-gray-100">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-600 text-center uppercase tracking-wider">
                    {test.ratingText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preventive Bottom Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-[30px] p-10 lg:p-16 shadow-[0_20px_50px_rgba(30,58,138,0.3)] relative overflow-hidden text-center text-white transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Preventive Blood Testing and Routine Health Screening</h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Routine preventive blood tests help monitor overall wellness and identify silent health conditions before symptoms appear. Modern laboratory diagnostics continue to play a central role in preventive healthcare, personalized medicine, and long-term wellness management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Early disease detection", "Lifestyle monitoring", "Metabolic health assessment", "Organ function evaluation", "Chronic disease prevention"].map((item, i) => (
                <span key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}