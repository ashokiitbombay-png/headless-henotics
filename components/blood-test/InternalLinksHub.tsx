import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Baby, 
  Waves, 
  Radiation, 
  ActivitySquare, 
  HeartPulse, 
  Stethoscope, 
  ChevronRight,
  Network
} from "lucide-react";

export default function InternalLinksHub() {
  const linkCategories = [
    {
      title: "Preventive Health & Screening",
      icon: <ShieldCheck size={28} className="text-emerald-500" />,
      bg: "bg-emerald-50",
      borderColor: "border-emerald-100",
      hoverBorder: "hover:border-emerald-300",
      links: [
        { name: "Full Body Check Up", path: "/full-body-check-up" },
        { name: "Health Checkup", path: "/health-checkup" },
        { name: "Blood Test", path: "/blood-test" }
      ]
    },
    {
      title: "Women's Health & Pregnancy",
      icon: <Baby size={28} className="text-pink-500" />,
      bg: "bg-pink-50",
      borderColor: "border-pink-100",
      hoverBorder: "hover:border-pink-300",
      links: [
        { name: "Prenatal Test", path: "/prenatal-test" },
        { name: "NIPT Test", path: "/nipt-test" },
        { name: "NIPS Test", path: "/nips-test" },
        { name: "Pregnancy Sonography", path: "/pregnancy-sonography" },
        { name: "Obstetric Ultrasound", path: "/obstetric-ultrasound" },
        { name: "Anomaly Scan", path: "/anomaly-scan" },
        { name: "NT Scan", path: "/nt-scan" },
        { name: "Follicular Study", path: "/follicular-study" }
      ]
    },
    {
      title: "Ultrasound & Imaging",
      icon: <Waves size={28} className="text-blue-500" />,
      bg: "bg-blue-50",
      borderColor: "border-blue-100",
      hoverBorder: "hover:border-blue-300",
      links: [
        { name: "Sonography", path: "/sonography" },
        { name: "Ultrasound", path: "/ultrasound" },
        { name: "Color Doppler", path: "/color-doppler" },
        { name: "Mammography", path: "/mammography" }
      ]
    },
    {
      title: "Advanced Diagnostic Imaging",
      icon: <Radiation size={28} className="text-purple-500" />,
      bg: "bg-purple-50",
      borderColor: "border-purple-100",
      hoverBorder: "hover:border-purple-300",
      links: [
        { name: "CT Scan", path: "/ct-scan" },
        { name: "MRI Scan", path: "/mri-scan" },
        { name: "PET Scan", path: "/pet-scan" },
        { name: "SPECT Scan", path: "/spect-scan" },
        { name: "DTPA Scan", path: "/dtpa-scan" },
        { name: "DEXA Bone Scan", path: "/dexa-bone-scan" }
      ]
    },
    {
      title: "Liver Health Assessment",
      icon: <ActivitySquare size={28} className="text-amber-500" />,
      bg: "bg-amber-50",
      borderColor: "border-amber-100",
      hoverBorder: "hover:border-amber-300",
      links: [
        { name: "Liver Fibroscan", path: "/liver-fibroscan" },
        { name: "Liver Elastography", path: "/liver-elastography" }
      ]
    },
    {
      title: "Cardiac Diagnostic Services",
      icon: <HeartPulse size={28} className="text-rose-500" />,
      bg: "bg-rose-50",
      borderColor: "border-rose-100",
      hoverBorder: "hover:border-rose-300",
      links: [
        { name: "2D Echo", path: "/2d-echo" },
        { name: "2D Echo Test", path: "/2d-echo-test" },
        { name: "TMT Test", path: "/tmt-test" },
        { name: "Stress Test", path: "/stress-test" },
        { name: "Holter Monitoring", path: "/holter-monitoring" }
      ]
    },
    {
      title: "Interventional Cardiology",
      icon: <Stethoscope size={28} className="text-cyan-500" />,
      bg: "bg-cyan-50",
      borderColor: "border-cyan-100",
      hoverBorder: "hover:border-cyan-300",
      links: [
        { name: "Angiography", path: "/angiography" },
        { name: "Angioplasty", path: "/angioplasty" },
        { name: "TAVR", path: "/tavr" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      
      {/* Decorative Background Blur Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase mb-6 shadow-sm">
            <Network size={16} /> Quick Links
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Explore Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Diagnostic Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Navigate through our comprehensive range of specialized healthcare investigations and advanced imaging services.
          </p>
        </div>

        {/* Masonry-style Bento Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {linkCategories.map((category, index) => (
            <div 
              key={index} 
              className={`break-inside-avoid bg-white/80 backdrop-blur-xl rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border ${category.borderColor} transition-all duration-300 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] ${category.hoverBorder} group`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner ${category.bg}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.path}
                      className="group/link flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                    >
                      <span className="text-sm font-medium text-gray-700 group-hover/link:text-blue-600 transition-colors">
                        {link.name}
                      </span>
                      <ChevronRight size={16} className="text-gray-300 group-hover/link:text-blue-500 transform group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}