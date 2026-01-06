import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { 
    id: "radiology",
    title: "Advanced Radiology", 
    desc: "3T MRI, 128-Slice CT, and Digital X-Ray with low-radiation protocols.",
    img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/934e91ce-ct-scan-kharghar-01-scaled.webp",
    link: "/mri-scan"
  },
  { 
    id: "nuclear",
    title: "Nuclear Medicine", 
    desc: "PET-CT for precise cancer staging and metabolic imaging.",
    img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/49b5aa8f-henotic-diagnostics-mri-scan-ct-scan-pet-scan-dopa-scan.webp",
    link: "/pet-scan"
  },
  { 
    id: "cardiac",
    title: "Cardiac Sciences", 
    desc: "Angiography, 2D Echo, and TMT for comprehensive heart evaluation.",
    img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/7f8eb649-tmt-test-stress-echo-test-stress-test-2d-echo-test-kharghar-henotic-diagnostics-navi-mumbai.webp",
    link: "/angiography"
  },
  { 
    id: "pathology",
    title: "Clinical Pathology", 
    desc: "Automated analyzers for blood, hormone, and infection markers.",
    img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/88133686-henotic-diagnostics-top-pathology-lab-navi-mumbai-blood-test-near-me-health-checkup-nabl-accredited-lab-mri-scan-ct-scan-genetic-testing.webp",
    link: "/blood-tests"
  },
  { 
    id: "fetal",
    title: "Fetal Medicine", 
    desc: "4D Ultrasound, Anomaly Scans, and NIPT for maternal care.",
    img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/0c08428a-pregnancy-scan-ultrasound-khargar-henotic-diagnostics.webp.webp",
    link: "/pregnancy-sonography"
  }
];

export default function ServiceLines() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
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
            <Link key={s.id} href={s.link} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[400px]">
              <div className="absolute inset-0">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 line-clamp-2">
                  {s.desc}
                </p>
                <div className="flex items-center text-sm font-bold text-white group-hover:text-blue-300 uppercase tracking-widest">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
