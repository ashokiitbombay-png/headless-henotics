"use client";

import { useState } from "react";
import { X, ShieldCheck, Clock, CheckCircle2, Award, Send, ChevronDown } from "lucide-react";

const LOCATIONS = [
  "Colaba", "Cuffe Parade", "Fort", "Churchgate", "Marine Lines", "Nariman Point", "Worli", "Parel", "Lower Parel", "Mahalaxmi", "Byculla", "Dadar",
  "Sion", "Kurla", "Chembur", "Ghatkopar", "Vikhroli", "Kanjurmarg", "Bhandup", "Mulund",
  "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
  "Kurla East", "Chembur East", "Ghatkopar East", "Vikhroli East", "Mulund East",
  "Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", "CBD Belapur", "Kharghar", "Kamothe", "Kalamboli", "Panvel", "New Panvel", "Taloja", "Ghansoli", "Kopar Khairane", "Airoli", "Turbhe"
];

const SERVICES = [
  "Blood Tests", "Full Body Check Up", "Health Checkup",
  "Sonography", "Ultrasound", "CT Scan", "MRI Scan", "PET Scan", "SPECT Scan", "DTPA Scan", "DEXA Bone Scan",
  "2D Echo", "TMT Test", "Stress Test", "Holter Monitoring", "Angiography", "Angioplasty", "TAVR",
  "Pregnancy Sonography", "Obstetric Ultrasound", "Anomaly Scan", "NT Scan", "Color Doppler", "Liver Fibroscan", "Liver Elastography", "Mammography", "Follicular Study",
  "Prenatal Test", "NIPT Test", "NIPS Test", "NIPPT"
];

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookAppointmentModal({ isOpen, onClose }: BookAppointmentModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", location: "", service: "" });

  if (!isOpen) return null;

  const handleWhatsAppSubmit = () => {
    const message = `Hi, I would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.location}`;
    window.open(`https://wa.me/918879327184?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200 border border-white/20">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 rounded-full text-slate-600 transition-colors backdrop-blur-sm"><X size={24} /></button>

        {/* LEFT SIDE: BRANDING */}
        <div className="w-full md:w-2/5 text-white p-8 md:p-10 relative overflow-hidden flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #2b32b2 0%, #1488cc 100%)" }}>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 space-y-6">
             <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-white/10"><Clock size={12} /> Priority Booking</div>
             <div><h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">Diagnostics<br/><span className="text-blue-200">Excellence</span></h2><p className="text-blue-100 text-sm font-medium">Official Portal • NABL Accredited</p></div>
             <div className="space-y-4 pt-4 border-t border-white/10">
               <div className="flex items-start gap-3"><div className="bg-white/20 p-2 rounded-lg"><ShieldCheck size={18} /></div><div><h4 className="font-bold text-sm">100% Accurate</h4><p className="text-xs text-blue-100">Trusted by top specialists</p></div></div>
               <div className="flex items-start gap-3"><div className="bg-white/20 p-2 rounded-lg"><Award size={18} /></div><div><h4 className="font-bold text-sm">Same Day Reports</h4><p className="text-xs text-blue-100">Fast digital delivery</p></div></div>
             </div>
           </div>
           <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-3">Accredited by National Bodies</p>
              <div className="flex flex-wrap gap-2">{["NABL", "ISO", "AERB", "PCPNDT", "NABH"].map((badge) => (<span key={badge} className="px-2 py-1 bg-white/10 border border-white/20 text-white text-[9px] font-bold rounded">{badge}</span>))}</div>
           </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="w-full md:w-3/5 bg-slate-50 p-8 md:p-10 overflow-y-auto max-h-[80vh] md:max-h-[600px]">
          <div className="mb-6"><h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">Secure Appointment <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full border border-green-200">Online</span></h3><p className="text-slate-500 text-xs mt-1">Fill details below for instant confirmation.</p></div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Patient Name</label><input type="text" placeholder="Full Name" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium" onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
              <div className="space-y-1"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phone Number</label><input type="tel" placeholder="+91" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium" onChange={(e) => setFormData({...formData, phone: e.target.value})} /></div>
            </div>
            <div className="space-y-1"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Select Nearest Center</label><div className="relative"><select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium text-slate-700" onChange={(e) => setFormData({...formData, location: e.target.value})}><option value="">-- Choose Location --</option>{LOCATIONS.map(loc => (<option key={loc} value={loc}>{loc}</option>))}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} /></div></div>
            <div className="space-y-1"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Preferred Service</label><div className="relative"><select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-blue-500 outline-none transition text-sm font-medium text-slate-700" onChange={(e) => setFormData({...formData, service: e.target.value})}><option value="">-- Select Test Type --</option>{SERVICES.map(svc => (<option key={svc} value={svc}>{svc}</option>))}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} /></div></div>
            <div className="pt-2 space-y-3">
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 text-sm"><CheckCircle2 size={18} /> Confirm Appointment</button>
              <button type="button" onClick={handleWhatsAppSubmit} className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 text-sm"><Send size={18} /> Submit via WhatsApp</button>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-2">Direct Support: <a href="tel:08879327184" className="font-bold text-slate-600 hover:underline">08879327184</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}
