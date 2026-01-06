import Link from "next/link";
import { ArrowRight, Activity, Microscope, ScanFace, HeartPulse, Baby } from "lucide-react";

const services = [
  { 
    id: "radiology",
    title: "Advanced Radiology", 
    desc: "3T MRI, 128-Slice CT, and Digital X-Ray with low-radiation protocols.",
    icon: ScanFace,
    link: "/mri-scan",
    color: "blue"
  },
  { 
    id: "nuclear",
    title: "Nuclear Medicine", 
    desc: "PET-CT for precise cancer staging and metabolic imaging.",
    icon: Activity,
    link: "/pet-scan",
    color: "purple"
  },
  { 
    id: "cardiac",
    title: "Cardiac Sciences", 
    desc: "Angiography, 2D Echo, and TMT for comprehensive heart evaluation.",
    icon: HeartPulse,
    link: "/angiography",
    color: "red"
  },
  { 
    id: "pathology",
    title: "Clinical Pathology", 
    desc: "Automated analyzers for blood, hormone, and infection markers.",
    icon: Microscope,
    link: "/blood-tests",
    color: "teal"
  },
  { 
    id: "fetal",
    title: "Fetal Medicine", 
    desc: "4D Ultrasound, Anomaly Scans, and NIPT for maternal care.",
    icon: Baby,
    link: "/pregnancy-sonography",
    color: "pink"
  }
];

export default function ServiceLines() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Comprehensive Diagnostic Services</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              From routine blood tests to advanced molecular imaging, our facility offers a complete spectrum of diagnostic modalities under one roof.
            </p>
          </div>
          <Link href="/about-us" className="hidden md:flex items-center font-bold text-blue-700 hover:text-blue-800 transition">
            View All Departments <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.id} href={s.link} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
              <div className={`w-14 h-14 rounded-2xl bg-${s.color}-50 text-${s.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-700">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
