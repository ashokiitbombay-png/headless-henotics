"use client";

import { useState } from "react";
import { X, ShieldCheck, Clock, Calendar, MapPin, ChevronDown, User, Phone, FileText, Send, CheckCircle2 } from "lucide-react";

// FULL LOCATION LIST
const LOCATIONS = [
  "Colaba", "Cuffe Parade", "Fort", "Churchgate", "Marine Lines", "Nariman Point", "Worli", "Parel", "Lower Parel", "Mahalaxmi", "Byculla", "Dadar",
  "Sion", "Kurla", "Chembur", "Ghatkopar", "Vikhroli", "Kanjurmarg", "Bhandup", "Mulund",
  "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
  "Kurla East", "Chembur East", "Ghatkopar East", "Vikhroli East", "Mulund East",
  "Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", "CBD Belapur", "Kharghar", "Kamothe", "Kalamboli", "Panvel", "New Panvel", "Taloja", "Ghansoli", "Kopar Khairane", "Airoli", "Turbhe"
];

// ACCREDITATION LOGOS
const ACCREDITATIONS = [
  { name: "NABL", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b027e422-nabl-certified-henotic-diagnostics.webp" },
  { name: "ISO", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b04115be-iso-certified-henotic-diagnostics.webp" },
  { name: "AERB", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b3a1aaeb-aerb-certified-henotic-diagnostics.webp" },
  { name: "PCPNDT", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/3a45d45f-pcpndt-certified-henotic-diagnostics.webp" },
  { name: "NABH", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/fb54c3da-nabh-certified-henotic-diagnostics.webp" }
];

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookAppointmentModal({ isOpen, onClose }: BookAppointmentModalProps) {
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    test: "", 
    location: "", 
    date: "", 
    time: "" 
  });

  if (!isOpen) return null;

  const handleWhatsAppSubmit = () => {
    // Basic Validation
    if(!formData.name || !formData.phone) {
      alert("Please enter Name and Mobile Number");
      return;
    }

    const message = `*New Appointment Request*\n\n👤 *Name:* ${formData.name}\n📱 *Mobile:* ${formData.phone}\n🧪 *Test Name:* ${formData.test}\n📍 *Center:* ${formData.location}\n📅 *Date:* ${formData.date}\n⏰ *Time:* ${formData.time}\n\n_Sent via Official Booking Portal_`;
    
    window.open(`https://wa.me/918879327184?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200 border border-white/20">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white/80 transition-colors backdrop-blur-sm"
        >
          <X size={24} />
        </button>

        {/* LEFT SIDE: PREMIUM BRANDING (Requested Gradient) */}
        <div 
          className="w-full md:w-2/5 text-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between"
          style={{
             backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
          }}
        >
           {/* Glass Effect Overlay for readability */}
           <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

           <div className="relative z-10 space-y-8">
             <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 shadow-sm">
               <ShieldCheck size={12} /> Official Booking Portal
             </div>
             
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight drop-shadow-sm">Excellence in <br/>Diagnostics</h2>
               <p className="text-white/90 text-sm font-medium leading-relaxed mt-4 border-l-4 border-white/40 pl-4">
                 12+ Years of precision. NABL Accredited.<br/> 
                 Trusted by leading specialists in Mumbai.
               </p>
             </div>

             {/* Features List */}
             <div className="grid gap-3 pt-2">
               {[
                 "AERB Accredited Lab",
                 "PCPNDT Registered",
                 "3T MRI & 128-Slice CT",
                 "Same Day Reports",
                 "Home Collection"
               ].map((feature, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                   <CheckCircle2 size={18} className="text-white" />
                   <span className="text-xs font-bold tracking-wide">{feature}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="w-full md:w-3/5 bg-slate-50 flex flex-col h-full max-h-[90vh] md:max-h-[700px] overflow-y-auto">
          
          <div className="p-8 md:p-10 pb-0">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Secure Appointment</h3>
                <p className="text-slate-500 text-xs mt-1">Fill the details below for priority confirmation.</p>
              </div>
              <div className="text-right">
                 <span className="text-xl font-black text-blue-600">0%</span>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">Filled</p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1"><User size={10} /> Patient Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter Full Name" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#52cffe] outline-none transition text-sm font-semibold text-slate-700"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1"><Phone size={10} /> Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#52cffe] outline-none transition text-sm font-semibold text-slate-700"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Test Name & Center */}
              <div className="grid md:grid-cols-2 gap-5">
                 <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1"><FileText size={10} /> Test Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. MRI Brain, Blood Test" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#52cffe] outline-none transition text-sm font-semibold text-slate-700"
                      onChange={(e) => setFormData({...formData, test: e.target.value})}
                    />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1"><MapPin size={10} /> Select Nearest Center</label>
                   <div className="relative">
                     <select 
                       className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 appearance-none focus:ring-2 focus:ring-[#52cffe] outline-none transition text-sm font-semibold text-slate-700"
                       onChange={(e) => setFormData({...formData, location: e.target.value})}
                     >
                       <option value="">-- Select Center --</option>
                       {LOCATIONS.map(loc => (
                         <option key={loc} value={loc}>{loc}</option>
                       ))}
                     </select>
                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                   </div>
                 </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-5">
                 <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1"><Calendar size={10} /> Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#52cffe] outline-none transition text-sm font-semibold text-slate-700"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1"><Clock size={10} /> Time</label>
                   <input 
                      type="time" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#52cffe] outline-none transition text-sm font-semibold text-slate-700"
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                 </div>
              </div>

              {/* CONFIRMATION BUTTON (WhatsApp Integration) */}
              <button 
                onClick={handleWhatsAppSubmit}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_rgba(37,211,102,0.3)] transition-all hover:scale-[1.01] flex items-center justify-center gap-3 uppercase tracking-wide text-sm mt-2 group"
              >
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/c65e4696-whatsapp.webp" alt="WhatsApp" className="w-6 h-6 object-contain brightness-0 invert group-hover:invert-0 group-hover:brightness-100 transition-all" /> 
                Confirm Appointment Now Via WhatsApp
              </button>

            </form>
          </div>

          {/* ACCREDITATIONS FOOTER (Separate Gradient Section) */}
          <div 
             className="mt-auto p-6 md:p-8 border-t border-slate-200"
             style={{
               background: "linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)"
             }}
          >
             <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Accredited by National Bodies</p>
             <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
               {ACCREDITATIONS.map((badge, i) => (
                 <img 
                   key={i} 
                   src={badge.url} 
                   alt={badge.name} 
                   className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply"
                   title={badge.name}
                 />
               ))}
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
