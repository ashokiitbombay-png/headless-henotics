"use client";

import React, { useState, useEffect } from "react";
import { Smartphone, ArrowRight, MapPin, Calendar, Clock, User, Phone } from "lucide-react";

// Full Location List
const ALL_LOCATIONS = [
  "Colaba", "Cuffe Parade", "Fort", "Churchgate", "Marine Lines", "Nariman Point", "Worli", "Parel", "Lower Parel", "Mahalaxmi", "Byculla", "Dadar",
  "Sion", "Kurla", "Chembur", "Ghatkopar", "Vikhroli", "Kanjurmarg", "Bhandup", "Mulund",
  "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
  "Kurla East", "Chembur East", "Ghatkopar East", "Vikhroli East", "Mulund East",
  "Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", "CBD Belapur", "Kharghar", "Kamothe", "Kalamboli", "Panvel", "New Panvel", "Taloja", "Ghansoli", "Kopar Khairane", "Airoli", "Turbhe"
];

const BADGES = [
  "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b027e422-nabl-certified-henotic-diagnostics.webp",
  "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b04115be-iso-certified-henotic-diagnostics.webp",
  "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b3a1aaeb-aerb-certified-henotic-diagnostics.webp",
  "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/3a45d45f-pcpndt-certified-henotic-diagnostics.webp",
  "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/fb54c3da-nabh-certified-henotic-diagnostics.webp"
];

export default function AppointmentForm({ defaultLocation, testName }: { defaultLocation?: string, testName?: string }) {
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "", mobile: "", test: testName || "DEXA Bone Scan", center: defaultLocation || "", date: "", time: ""
  });

  // Calculate Progress
  useEffect(() => {
    const filled = Object.values(formData).filter(val => val !== "").length;
    setProgress(Math.round((filled / 6) * 100));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const msg = `*Premium Appointment Request*%0A%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0ATest: ${formData.test}%0ACenter: ${formData.center}%0ADate: ${formData.date}%0ATime: ${formData.time}`;
    window.open(`https://wa.me/918879327184?text=${msg}`, '_blank');
  };

  return (
    <div id="booking-form" className="rounded-[2rem] shadow-2xl overflow-hidden relative z-20 transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
         style={{ backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)" }}>
      
      {/* HEADER */}
      <div className="p-8 pb-4 text-white text-center">
        <h3 className="text-3xl font-extrabold mb-2 drop-shadow-md">Official Booking Portal</h3>
        <p className="text-xs font-semibold bg-white/20 inline-block px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
          Excellence in Diagnostics | 12+ Years Precision
        </p>
      </div>

      {/* PROGRESS BAR */}
      <div className="px-8">
        <div className="flex justify-between text-[10px] font-bold text-white mb-1 uppercase tracking-wider">
          <span>Completion</span><span>{progress}% Filled</span>
        </div>
        <div className="bg-black/20 h-2 rounded-full mb-6 backdrop-blur-sm overflow-hidden border border-white/10">
          <div className="bg-gradient-to-r from-green-300 to-green-400 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(74,222,128,0.8)]" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* FORM FIELDS */}
      <div className="px-8 space-y-4">
        <div className="relative group">
          <User className="absolute left-3 top-3.5 text-white/70" size={18} />
          <input name="name" placeholder="Patient Name" onChange={handleChange} className="w-full bg-white/20 border border-white/30 rounded-xl pl-10 pr-4 py-3 placeholder-white/80 text-white focus:bg-white/30 outline-none backdrop-blur-sm transition-all focus:border-white/60 font-medium" />
        </div>

        <div className="relative group">
          <Phone className="absolute left-3 top-3.5 text-white/70" size={18} />
          <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} className="w-full bg-white/20 border border-white/30 rounded-xl pl-10 pr-4 py-3 placeholder-white/80 text-white focus:bg-white/30 outline-none backdrop-blur-sm transition-all focus:border-white/60 font-medium" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="relative group">
             <input type="text" name="test" value={formData.test} readOnly className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white/90 cursor-not-allowed text-xs font-bold uppercase tracking-wide" />
           </div>
           <div className="relative group">
             <MapPin className="absolute left-3 top-3.5 text-white/70" size={18} />
             <select name="center" value={formData.center} onChange={handleChange} className="w-full bg-white/20 border border-white/30 rounded-xl pl-10 pr-4 py-3 text-white outline-none backdrop-blur-sm appearance-none cursor-pointer font-medium text-sm">
                <option className="text-slate-900" value="">Select Center</option>
                {ALL_LOCATIONS.map(l => <option key={l} className="text-slate-900" value={l}>{l}</option>)}
             </select>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative group">
            <input type="date" name="date" onChange={handleChange} className="w-full bg-white/20 border border-white/30 rounded-xl px-3 py-3 text-white outline-none backdrop-blur-sm font-medium text-sm" />
          </div>
          <div className="relative group">
            <input type="time" name="time" onChange={handleChange} className="w-full bg-white/20 border border-white/30 rounded-xl px-3 py-3 text-white outline-none backdrop-blur-sm font-medium text-sm" />
          </div>
        </div>

        <button onClick={handleWhatsApp} className="w-full mt-6 bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all transform hover:scale-[1.02] border border-white/20">
           <Smartphone className="fill-white" size={24} /> 
           <span>Confirm via WhatsApp</span>
           <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
        <p className="text-center text-[10px] mt-2 text-white/80 font-medium uppercase tracking-widest">Secure SSL • Instant Confirmation</p>
      </div>
      
      {/* ACCREDITATION FOOTER */}
      <div className="mt-8 py-4 px-4 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-md border-t border-white/10">
         <p className="text-center text-[10px] text-white/60 mb-2 uppercase tracking-widest font-bold">Accredited by National Bodies</p>
         <div className="flex justify-between items-center gap-2 overflow-x-auto scrollbar-hide">
            {BADGES.map((b, i) => (
              <img key={i} src={b} className="h-8 object-contain hover:scale-110 transition-transform opacity-90 hover:opacity-100" alt="Accredited" />
            ))}
         </div>
      </div>
    </div>
  );
}
