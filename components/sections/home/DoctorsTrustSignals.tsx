"use client";
import React from "react";
import { Clock, Building2, ChevronRight, Sparkles, Award } from "lucide-react";

const TEAM_DATA = [
  { name: "Dr. Esha Batra", qualifications: "MD, DNB, Radiology, UK", experience: "14+ years experience", current: "Associated Apollo and MGM", imageUrl: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b01f282f-henotic-diagnostics-experienced-radiology-doctors-team-for-ct-scan-mri-ultrasound-dexa-and-advanced-diagnostic-imaging.webp.webp", bgColor: "bg-[#FFF9F5]", secondaryCircle: "bg-gradient-to-br from-[#FFD5CC] to-[#FFEDD5]", primaryCircle: "bg-[#FDF2F0]", accent: "text-[#E67E6B]", btnColor: "bg-[#E67E6B]" },
  { name: "Dr. Naresh Reddy", qualifications: "MD, DNB, Orthopaedic Surgeon, USA", experience: "12+ years experience", current: "Apollo Hospitals and MGM", imageUrl: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/3b2e00c2-henotic-diagnostics-leading-radiologists-and-medical-imaging-doctors-team-delivering-precision-diagnostic-healthcare-solutions.webp.webp", bgColor: "bg-[#F8F9FF]", secondaryCircle: "bg-gradient-to-br from-[#CCD9FF] to-[#E0E7FF]", primaryCircle: "bg-[#F0F4FF]", accent: "text-[#5C7CFA]", btnColor: "bg-[#5C7CFA]" },
  { name: "Dr. Vimala Choudhary", qualifications: "MD, DNB, Radiology, Fetal Med, UK", experience: "14+ years experience", current: "Apollo and GMG Hospitals", imageUrl: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/ea38942d-henotic-diagnostics-best-diagnostic-center-navi-mumbai-pathology-lab-near-me-blood-test-full-body-checkup-medical-lab-navi-mumbai-health-packages-mri-ct-scan-ultrasound-lab-test-1.webp", bgColor: "bg-[#F7FDF9]", secondaryCircle: "bg-gradient-to-br from-[#CCFBF1] to-[#D1FAE5]", primaryCircle: "bg-[#F0FDF4]", accent: "text-[#0D9488]", btnColor: "bg-[#0D9488]" }
];

const ProfileCard = ({ doctor }: { doctor: any }) => (
  <div className="group bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-3 flex flex-col h-full">
    <div className={`relative h-[340px] w-full ${doctor.bgColor} overflow-hidden flex items-center justify-center`}>
      <div className={`absolute w-[320px] h-[320px] rounded-full ${doctor.secondaryCircle} opacity-40 blur-3xl animate-pulse`}></div>
      <div className={`absolute w-[220px] h-[220px] rounded-full ${doctor.primaryCircle} border border-white shadow-inner flex items-center justify-center`}><div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md"></div></div>
      <div className="relative z-10 w-full h-full pt-10 flex justify-center items-end">
        <img src={doctor.imageUrl} alt={doctor.name} className="h-[95%] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:translate-y-[-5px]" onError={(e: any) => e.target.style.display = "none"} />
      </div>
      <div className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/50"><Award size={14} className={doctor.accent} /><span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Verified Expert</span></div>
    </div>
    <div className="p-10 flex-1 flex flex-col">
      <div className="mb-6"><h3 className="text-2xl font-black text-gray-900 mb-1 tracking-tight">{doctor.name}</h3><div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${doctor.btnColor}`}></span><p className={`${doctor.accent} font-bold text-xs tracking-widest uppercase`}>{doctor.qualifications}</p></div></div>
      <div className="grid grid-cols-1 gap-4 mb-10">
        <div className="flex items-center gap-4 text-gray-500 bg-gray-50/50 p-3 rounded-2xl border border-gray-100/50"><div className={`p-2.5 rounded-xl ${doctor.primaryCircle} ${doctor.accent}`}><Clock size={18} /></div><div className="flex flex-col"><span className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Experience</span><span className="text-sm font-bold text-gray-700">{doctor.experience}</span></div></div>
        <div className="flex items-center gap-4 text-gray-500 bg-gray-50/50 p-3 rounded-2xl border border-gray-100/50"><div className={`p-2.5 rounded-xl ${doctor.primaryCircle} ${doctor.accent}`}><Building2 size={18} /></div><div className="flex flex-col"><span className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Current Placement</span><span className="text-sm font-bold text-gray-700 line-clamp-1">{doctor.current}</span></div></div>
      </div>
      <a href="#booking-form" className={`mt-auto w-full py-4 md:py-5 px-6 md:px-8 rounded-[1.5rem] ${doctor.btnColor} text-white font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:brightness-110 hover:shadow-xl active:scale-95 group/btn`}>
        Consult Specialist <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

export default function DoctorsTrustSignals() {
  return (
    <section className="bg-slate-50 py-24 px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
           <div className="max-w-2xl"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-6"><Sparkles size={14} className="text-amber-500" /> Benchmarks of Excellence</div><h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">Precision Imaging. <br /> <span className="text-slate-400">Trusted Expertise.</span></h2></div>
           <div className="md:text-right"><p className="text-slate-500 font-medium text-lg max-w-xs md:ml-auto">Our elite team brings decades of international radiology excellence to every report.</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">{TEAM_DATA.map((doctor, index) => (<ProfileCard key={index} doctor={doctor} />))}</div>
        <div className="mt-32 pt-16 border-t border-slate-200 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-slate-800">APOLLO <span className="text-xs font-bold tracking-normal text-slate-500">Hospitals</span></div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-slate-800">MGM <span className="text-xs font-bold tracking-normal text-slate-500">Medical Center</span></div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic text-slate-800">Henotic <span className="text-xs font-bold tracking-normal not-italic text-slate-500">Labs</span></div>
        </div>
      </div>
    </section>
  );
}
