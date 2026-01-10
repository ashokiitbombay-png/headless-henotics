"use client";

import React, { useState, useEffect } from "react";
import { Smartphone, ArrowRight, MapPin, User, Phone, Calendar, Clock, ShieldCheck } from "lucide-react";
import { TARGET_LOCATIONS } from "@/lib/locations";

const ACCREDITATIONS = [
  { name: "NABL", img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b027e422-nabl-certified-henotic-diagnostics.webp" },
  { name: "ISO", img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b04115be-iso-certified-henotic-diagnostics.webp" },
  { name: "AERB", img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b3a1aaeb-aerb-certified-henotic-diagnostics.webp" },
  { name: "PCPNDT", img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/3a45d45f-pcpndt-certified-henotic-diagnostics.webp" },
  { name: "NABH", img: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/fb54c3da-nabh-certified-henotic-diagnostics.webp" }
];

export default function AppointmentForm({ defaultLocation, testName }: { defaultLocation?: string, testName?: string }) {
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "", mobile: "", test: testName || "DEXA Bone Scan", center: defaultLocation || "", date: "", time: ""
  });

  useEffect(() => {
    const filled = Object.values(formData).filter(val => val !== "").length;
    setProgress(Math.round((filled / 6) * 100));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const msg = `*Official Booking Request*%0A%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0ATest: ${formData.test}%0ACenter: ${formData.center}%0ADate: ${formData.date}%0ATime: ${formData.time}`;
    window.open(`https://wa.me/918879327184?text=${msg}`, '_blank');
  };

  return (
    <div id="booking-form" className="rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden relative z-20 transform transition-all duration-500 hover:scale-[1.01]"
         style={{ backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)" }}>
      
      {/* HEADER */}
      <div className="pt-8 px-8 pb-4 text-white text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 mb-4 shadow-lg">
           <ShieldCheck size={14} className="text-white" />
           <span className="text-[10px] font-black uppercase tracking-[0.15em]">Official Booking Portal</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-black mb-2 drop-shadow-md tracking-tight">Excellence in Diagnostics</h3>
        <p className="text-xs md:text-sm font-medium text-white/90 leading-relaxed max-w-xs mx-auto">12+ Years of Precision. NABL Accredited. <br/>Trusted by leading specialists.</p>
      </div>

      {/* DYNAMIC PROGRESS BAR */}
      <div className="px-8 mt-4">
        <div className="flex justify-between text-[10px] font-bold text-white mb-2 uppercase tracking-wider">
          <span>Completion</span><span>{progress}%</span>
        </div>
        <div className="bg-black/20 h-3 rounded-full mb-6 backdrop-blur-sm overflow-hidden border border-white/10 shadow-inner">
          <div className="bg-gradient-to-r from-green-300 to-emerald-400 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(74,222,128,0.6)] relative" style={{ width: `${progress}%` }}>
             <div className="absolute top-0 right-0 h-full w-4 bg-white/40 blur-[4px]"></div>
          </div>
        </div>
      </div>

      {/* FORM FIELDS */}
      <div className="px-8 space-y-4 pb-8">
        <div className="relative group">
          <User className="absolute left-4 top-3.5 text-white/80" size={18} />
          <input name="name" placeholder="Patient Name" onChange={handleChange} className="w-full bg-white/20 border border-white/40 rounded-2xl pl-12 pr-4 py-3 placeholder-white/70 text-white focus:bg-white/30 outline-none backdrop-blur-md transition-all font-semibold shadow-sm focus:border-white focus:ring-2 focus:ring-white/20" />
        </div>

        <div className="relative group">
          <Phone className="absolute left-4 top-3.5 text-white/80" size={18} />
          <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} className="w-full bg-white/20 border border-white/40 rounded-2xl pl-12 pr-4 py-3 placeholder-white/70 text-white focus:bg-white/30 outline-none backdrop-blur-md transition-all font-semibold shadow-sm focus:border-white focus:ring-2 focus:ring-white/20" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
           <div className="relative group">
             <input type="text" name="test" value={formData.test} readOnly className="w-full bg-white/10 border border-white/30 rounded-2xl px-4 py-3 text-white/90 cursor-not-allowed text-xs font-bold uppercase tracking-wide text-center" />
           </div>
           <div className="relative group">
             <MapPin className="absolute left-3 top-3.5 text-white/80" size={18} />
             <select name="center" value={formData.center} onChange={handleChange} className="w-full bg-white/20 border border-white/40 rounded-2xl pl-10 pr-4 py-3 text-white outline-none backdrop-blur-md appearance-none cursor-pointer font-semibold text-sm shadow-sm focus:border-white focus:ring-2 focus:ring-white/20">
                <option className="text-slate-900" value="">Select Center</option>
                {TARGET_LOCATIONS.map(l => <option key={l} className="text-slate-900" value={l}>{l}</option>)}
             </select>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative group">
            <Calendar className="absolute left-3 top-3.5 text-white/80" size={16} />
            <input type="date" name="date" onChange={handleChange} className="w-full bg-white/20 border border-white/40 rounded-2xl pl-10 pr-2 py-3 text-white outline-none backdrop-blur-md font-medium text-xs shadow-sm focus:border-white uppercase" />
          </div>
          <div className="relative group">
            <Clock className="absolute left-3 top-3.5 text-white/80" size={16} />
            <input type="time" name="time" onChange={handleChange} className="w-full bg-white/20 border border-white/40 rounded-2xl pl-10 pr-2 py-3 text-white outline-none backdrop-blur-md font-medium text-xs shadow-sm focus:border-white" />
          </div>
        </div>

        <button onClick={handleWhatsApp} className="w-full mt-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-2xl shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 group transition-all transform hover:-translate-y-1 active:scale-95 border border-white/20 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
           <Smartphone className="fill-white relative z-10" size={24} /> 
           <span className="relative z-10 text-lg tracking-tight">Confirm Appointment</span>
        </button>
        
        <p className="text-center text-[10px] mt-3 text-white/80 font-bold uppercase tracking-widest flex justify-center items-center gap-1 opacity-80">
          <ShieldCheck size={10}/> Secure 256-bit SSL Data
        </p>
      </div>
      
      {/* ACCREDITATION FOOTER (Dark Gradient) */}
      <div className="py-6 px-6" style={{ background: "linear-gradient(to right, #0f172a, #334155)" }}>
         <p className="text-center text-[10px] text-white/50 mb-4 uppercase tracking-[0.3em] font-bold">Accredited by National Bodies</p>
         <div className="flex justify-between items-end gap-4 overflow-x-auto scrollbar-hide pb-2">
            {ACCREDITATIONS.map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group/badge min-w-[50px] shrink-0">
                <div className="bg-white p-1 rounded-md shadow-lg group-hover/badge:scale-110 transition-transform duration-300">
                   <img src={badge.img} className="h-8 w-auto object-contain" alt={badge.name} />
                </div>
                <span className="text-[9px] font-bold text-slate-400 group-hover/badge:text-white transition-colors">{badge.name}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
