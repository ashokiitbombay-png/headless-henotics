"use client";
import React, { useState, useEffect } from "react";
import { 
  User, Phone, Activity, Calendar, Clock, MapPin, 
  ChevronDown, MessageCircle, ShieldCheck, Check
} from "lucide-react";

export default function PremiumBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    test: "",
    date: "",
    time: "",
    location: "",
    disclaimer: false
  });

  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = {
    "South Mumbai": ["Colaba", "Cuffe Parade", "Fort", "Churchgate", "Marine Lines", "Nariman Point", "Worli", "Parel", "Lower Parel", "Mahalaxmi", "Byculla", "Dadar"],
    "Central Mumbai": ["Sion", "Kurla", "Chembur", "Ghatkopar", "Vikhroli", "Kanjurmarg", "Bhandup", "Mulund"],
    "Western Suburbs": ["Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar"],
    "Eastern Suburbs": ["Kurla East", "Chembur East", "Ghatkopar East", "Vikhroli East", "Mulund East"],
    "Navi Mumbai": ["Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", "CBD Belapur", "Kharghar", "Kamothe", "Kalamboli", "Panvel", "New Panvel", "Taloja", "Ghansoli", "Kopar Khairane", "Airoli", "Turbhe"]
  };

  useEffect(() => {
    const fields = ["name", "mobile", "test", "date", "time", "location", "disclaimer"];
    const filled = fields.filter(field => {
      if (field === "disclaimer") return formData.disclaimer;
      // @ts-ignore
      return formData[field]?.toString().trim() !== "";
    });
    setProgress(Math.round((filled.length / fields.length) * 100));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.disclaimer) {
      alert("Please acknowledge the disclaimer.");
      setIsSubmitting(false);
      return;
    }

    const message = `*Priority Appointment Request*%0a` +
      `---------------------------%0a` +
      `*👤 Name:* ${formData.name}%0a` +
      `*📱 Mobile:* ${formData.mobile}%0a` +
      `*🩺 Test:* ${formData.test}%0a` +
      `*📅 Date:* ${formData.date}%0a` +
      `*⏰ Time:* ${formData.time}%0a` +
      `*📍 Location:* ${formData.location}%0a` +
      `---------------------------%0a` +
      `_Sent via Secure Booking Portal_`;

    window.open(`https://wa.me/918879327184?text=${message}`, "_blank");
    setIsSubmitting(false);
  };

  return (
    <div className="w-full lg:max-w-7xl lg:mx-auto lg:my-10 relative z-20 font-sans">
      <style jsx>{`
        .glass-card {
          background: #ffffff;
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }
        @media (min-width: 1024px) {
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(24px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border-radius: 32px;
            border: 1px solid rgba(255,255,255,0.8);
          }
        }
        .deep-input {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .deep-input:focus {
          background: #ffffff;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
        .btn-whatsapp {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .btn-whatsapp:active {
          transform: scale(0.98);
        }
        .progress-bar {
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          transition: width 0.5s ease-out;
        }
        .accreditation-img {
          filter: grayscale(100%);
          opacity: 0.8;
          transition: all 0.3s;
        }
        .accreditation-img:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }
      `}</style>

      {/* Main Container */}
      <div className="glass-card overflow-hidden flex flex-col lg:flex-row w-full lg:min-h-[800px]">
        
        {/* Left: Branding & Value Props (Visible on Mobile & Desktop) */}
        <div className="lg:w-5/12 relative bg-slate-900 text-white overflow-hidden min-h-[300px] lg:min-h-full flex flex-col justify-between">
          {/* Background Image */}
          <img 
            src="https://storage.googleapis.com/wp-media-henoticbucket/2025/12/26ffea41-henotic-diagnostics-taloja-phase-1-ultrasound-sonography-center-pregnancy-scan-nt-scan-fetal-doppler-anomaly-scan-3d-4d-scan-ultrasound-near-me-taloja-navi-mumbai.webp" 
            alt="Medical Facility" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
          
          <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 px-3 py-1 rounded-full text-blue-200 text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck size={12} /> Official Booking Portal
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                Excellence in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Diagnostics</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm lg:text-lg font-light max-w-sm">
                12+ Years of precision. NABL Accredited. Trusted by leading specialists in Mumbai.
              </p>
            </div>
            
            {/* Value Props Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {["NABL Accredited Lab", "3T MRI & 128-Slice CT", "Same Day Reports", "Home Collection"].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-xs lg:text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: The Form */}
        <div className="lg:w-7/12 bg-white flex flex-col">
          
          <div className="p-6 lg:p-10 flex-grow flex flex-col">
            
            {/* Header */}
            <div className="flex justify-between items-end mb-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 font-serif">Secure Appointment</h1>
                <p className="text-slate-500 text-xs lg:text-sm mt-1">Fill the details below for priority confirmation.</p>
              </div>
              <div className="text-right">
                <div className="text-xl lg:text-2xl font-black text-blue-600">{progress}%</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Filled</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
              <div className="progress-bar h-full rounded-full" style={{ width: `${progress}%` }}></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5 flex-grow">
              
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                <input 
                  type="text" id="name" required placeholder="Patient Name"
                  className="deep-input w-full pl-12 pr-4 py-3.5 rounded-xl outline-none text-slate-800 placeholder:text-slate-400 font-medium text-sm lg:text-base"
                  onChange={handleChange} value={formData.name}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input 
                    type="tel" id="mobile" required placeholder="Mobile Number" pattern="[0-9]{10}"
                    className="deep-input w-full pl-12 pr-4 py-3.5 rounded-xl outline-none text-slate-800 placeholder:text-slate-400 font-medium text-sm lg:text-base"
                    onChange={handleChange} value={formData.mobile}
                  />
                </div>
                <div className="relative group">
                  <Activity className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input 
                    type="text" id="test" required placeholder="Test Name (e.g. MRI)"
                    className="deep-input w-full pl-12 pr-4 py-3.5 rounded-xl outline-none text-slate-800 placeholder:text-slate-400 font-medium text-sm lg:text-base"
                    onChange={handleChange} value={formData.test}
                  />
                </div>
              </div>

              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                <select 
                  id="location" required 
                  className="deep-input w-full pl-12 pr-10 py-3.5 rounded-xl outline-none text-slate-800 font-medium text-sm lg:text-base cursor-pointer appearance-none bg-transparent"
                  onChange={handleChange} value={formData.location}
                >
                  <option value="" disabled>Select Nearest Center</option>
                  {Object.entries(locations).map(([region, cities]) => (
                    <optgroup label={region} key={region}>
                      {cities.map(city => <option key={city} value={city}>{city}</option>)}
                    </optgroup>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              </div>

              <div className="grid grid-cols-2 gap-4 lg:gap-5">
                <div className="relative group">
                  <input 
                    type="date" id="date" required 
                    className="deep-input w-full px-4 py-3.5 rounded-xl outline-none text-slate-800 font-medium text-sm lg:text-base cursor-pointer text-center"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={handleChange} value={formData.date}
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="time" id="time" required 
                    className="deep-input w-full px-4 py-3.5 rounded-xl outline-none text-slate-800 font-medium text-sm lg:text-base cursor-pointer text-center"
                    onChange={handleChange} value={formData.time}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50/50 border border-blue-100 rounded-xl mt-2">
                <input type="checkbox" id="disclaimer" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" onChange={handleChange} checked={formData.disclaimer} />
                <label htmlFor="disclaimer" className="text-xs text-slate-600 font-medium cursor-pointer leading-snug select-none">
                  I authorize Henotic Diagnostics to contact me via WhatsApp/Phone for appointment confirmation.
                </label>
              </div>

              <button type="submit" className="btn-whatsapp w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 mt-4 active:scale-95 transition-transform shadow-lg shadow-green-500/20">
                <MessageCircle size={24} className="animate-pulse" /> Confirm Appointment Now
              </button>
            </form>
          </div>

          {/* Accreditation Bar - Distinct Background Section */}
          <div className="bg-slate-50 border-t border-slate-100 py-6 px-6 lg:px-10">
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Accredited by National Bodies</p>
            <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
              {[
                { name: "NABL", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b027e422-nabl-certified-henotic-diagnostics.webp" },
                { name: "ISO", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b04115be-iso-certified-henotic-diagnostics.webp" },
                { name: "AERB", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b3a1aaeb-aerb-certified-henotic-diagnostics.webp" },
                { name: "PCPNDT", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/bf901506-pcpndt-certififed-henotic-diagnostics.webp" },
                { name: "NABH", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/fb54c3da-nabh-certified-henotic-diagnostics.webp" }
              ].map((logo, i) => (
                <div key={i} className="flex flex-col items-center gap-1 group cursor-default">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-10 w-auto object-contain accreditation-img grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
