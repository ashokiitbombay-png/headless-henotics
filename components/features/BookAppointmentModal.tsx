"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  User, 
  Phone, 
  FileText, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  
  const [progress, setProgress] = useState(0);

  // Real-time Progress Calculation
  useEffect(() => {
    const requiredFields = [formData.name, formData.phone, formData.location, formData.date, formData.time];
    const filledCount = requiredFields.filter(f => f.trim() !== "").length;
    // Test name is optional bonus
    const bonus = formData.test.trim() !== "" ? 1 : 0;
    const total = requiredFields.length; 
    const newProgress = Math.min(100, Math.round(((filledCount + bonus * 0.5) / total) * 100));
    setProgress(newProgress);
  }, [formData]);

  // Lock Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = () => {
    if(!formData.name || !formData.phone) {
      alert("Please enter Name and Mobile Number to proceed.");
      return;
    }
    const message = `*New Appointment Request*\n\n👤 *Name:* ${formData.name}\n📱 *Mobile:* ${formData.phone}\n🧪 *Test:* ${formData.test || "Not Specified"}\n📍 *Center:* ${formData.location || "Not Specified"}\n📅 *Date:* ${formData.date || "Any"}\n⏰ *Time:* ${formData.time || "Any"}\n\n_Sent via Official Booking Portal_`;
    window.open(`https://wa.me/918879327184?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Helper Component for Form Inputs
  const InputGroup = ({ icon: Icon, label, type = "text", placeholder, value, field }: any) => (
    <div className="space-y-1.5 group">
      <label className={cn("text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors", value ? "text-blue-600" : "text-slate-500")}>
        <Icon size={12} className={cn(value ? "text-blue-600" : "text-slate-400")} /> {label}
      </label>
      <div className="relative">
        <input 
          type={type} 
          placeholder={placeholder} 
          value={value}
          className={cn(
            "w-full bg-white border rounded-xl px-4 py-3.5 pl-10 focus:ring-2 focus:ring-[#52cffe] outline-none transition-all duration-300 text-sm font-bold text-gray-900 placeholder:text-gray-400 shadow-sm",
            value ? "border-blue-200 bg-blue-50/20" : "border-slate-200 group-hover:border-slate-300"
          )}
          onChange={(e) => setFormData(prev => ({...prev, [field]: e.target.value}))}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300">
           {value ? <CheckCircle2 size={16} className="text-blue-500" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center sm:p-4 font-sans">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>

      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-white h-[90dvh] md:h-auto md:max-h-[90vh] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in slide-in-from-bottom-10 md:zoom-in-95 duration-300 border border-white/20">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors backdrop-blur-md border border-white/20 shadow-lg"
        >
          <X size={20} />
        </button>

        {/* LEFT PANEL: BRANDING */}
        <div 
          className="w-full md:w-2/5 text-white p-6 md:p-12 relative flex flex-col justify-between shrink-0"
          style={{ backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)" }}
        >
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

           <div className="relative z-10">
             <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/20 shadow-lg backdrop-blur-sm mb-6">
               <ShieldCheck size={12} className="text-white" /> Official Booking Portal
             </div>
             <h2 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-md">
               Excellence in <br/><span className="text-white/90">Diagnostics</span>
             </h2>
             
             <div className="hidden md:block mt-6 space-y-4">
               <p className="text-white/90 text-sm font-medium leading-relaxed border-l-4 border-white/40 pl-4">
                 12+ Years of precision. NABL Accredited.<br/> Trusted by leading specialists in Mumbai.
               </p>
               <div className="grid gap-3 pt-4">
                 {["AERB Accredited Lab", "PCPNDT Registered", "3T MRI & 128-Slice CT", "Same Day Reports", "Home Collection"].map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-3 bg-white/10 p-2.5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                     <CheckCircle2 size={16} className="text-white" />
                     <span className="text-xs font-bold tracking-wide">{feature}</span>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Mobile Badges */}
             <div className="flex md:hidden gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                {["NABL Accredited", "24/7 Open", "Home Visit", "Same Day Reports"].map((f, i) => (
                  <span key={i} className="shrink-0 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold border border-white/10">{f}</span>
                ))}
             </div>
           </div>
        </div>

        {/* RIGHT PANEL: FORM */}
        <div className="w-full md:w-3/5 bg-slate-50 flex flex-col h-full overflow-hidden relative">
          
          <div className="flex-1 overflow-y-auto p-6 md:p-10 relative z-10">
            
            {/* Progress Header */}
            <div className="flex justify-between items-end mb-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">Secure Appointment</h3>
                <p className="text-slate-500 text-xs mt-1">Fill details below for priority confirmation.</p>
              </div>
              <div className="text-right">
                 <span className={cn("text-xl font-black transition-colors duration-500", progress === 100 ? "text-green-500" : "text-blue-600")}>{progress}%</span>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">Filled</p>
              </div>
            </div>
            
            {/* Animated Progress Bar */}
            <div className="w-full h-1.5 bg-slate-200 rounded-full mb-8 overflow-hidden">
              <div 
                className={cn("h-full transition-all duration-700 ease-out rounded-full", progress === 100 ? "bg-green-500" : "bg-gradient-to-r from-blue-400 to-[#d16ba5]")} 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputGroup icon={User} label="Patient Name" placeholder="Enter Full Name" field="name" value={formData.name} />
                <InputGroup icon={Phone} label="Mobile Number" type="tel" placeholder="+91" field="phone" value={formData.phone} />
              </div>

              <InputGroup icon={FileText} label="Test Name (Optional)" placeholder="e.g. MRI Brain, Blood Test" field="test" value={formData.test} />

               {/* Location Select */}
               <div className="space-y-1.5 group">
                 <label className={cn("text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors", formData.location ? "text-blue-600" : "text-slate-500")}>
                   <MapPin size={12} /> Select Nearest Center
                 </label>
                 <div className="relative">
                   <select 
                     value={formData.location}
                     className={cn(
                       "w-full bg-white border rounded-xl px-4 py-3.5 pl-10 appearance-none focus:ring-2 focus:ring-[#52cffe] outline-none transition text-sm font-bold text-gray-900 shadow-sm cursor-pointer", 
                       formData.location ? "border-blue-200 bg-blue-50/20" : "border-slate-200"
                     )} 
                     onChange={(e) => setFormData({...formData, location: e.target.value})}
                   >
                     <option value="" disabled>-- Tap to Select Location --</option>
                     {LOCATIONS.map(loc => (
                       <option key={loc} value={loc}>{loc}</option>
                     ))}
                   </select>
                   <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                     {formData.location ? <CheckCircle2 size={16} className="text-blue-500" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>}
                   </div>
                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                 </div>
               </div>

              <div className="grid grid-cols-2 gap-4">
                 <InputGroup icon={Calendar} label="Date" type="date" field="date" value={formData.date} />
                 <InputGroup icon={Clock} label="Time" type="time" field="time" value={formData.time} />
              </div>

              {/* Confirm Appointment Now Via WhatsApp */}
              <button 
                onClick={handleWhatsAppSubmit}
                disabled={!formData.name || !formData.phone}
                className={cn(
                  "w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-wide text-xs md:text-sm mt-4 group relative overflow-hidden shadow-lg transform active:scale-[0.98]",
                  formData.name && formData.phone 
                    ? "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-[0_8px_25px_rgba(37,211,102,0.4)]" 
                    : "bg-slate-300 text-slate-500 cursor-not-allowed"
                )}
              >
                {/* Shine Animation */}
                {formData.name && formData.phone && (
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
                
                <div className="bg-white rounded-full p-1">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                Confirm Via WhatsApp
              </button>
              
              <p className="text-center text-[10px] text-slate-400 flex justify-center items-center gap-1">
                <AlertCircle size={10} /> Secure SSL Encrypted Connection
              </p>
            </form>
          </div>

          {/* ACCREDITATIONS */}
          <div 
            className="shrink-0 p-5 md:p-6 border-t border-slate-200 relative z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]"
            style={{ 
              background: "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)" 
            }}
          >
             <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
               <span className="w-8 h-[1px] bg-slate-300"></span> Accredited by National Bodies <span className="w-8 h-[1px] bg-slate-300"></span>
             </p>
             <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
               {ACCREDITATIONS.map((badge, i) => (
                 <img 
                  key={i} 
                  src={badge.url} 
                  alt={badge.name} 
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 mix-blend-multiply hover:scale-110" 
                 />
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
