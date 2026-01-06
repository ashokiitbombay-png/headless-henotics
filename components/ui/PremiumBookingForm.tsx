"use client";
import React, { useState, useEffect } from "react";
import { 
  User, Phone, Activity, Calendar, Clock, MapPin, 
  ChevronDown, MessageCircle, ShieldCheck 
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

  // Full Location List
  const locations = {
    "South Mumbai": [
      "Colaba", "Cuffe Parade", "Fort", "Churchgate", "Marine Lines", 
      "Nariman Point", "Worli", "Parel", "Lower Parel", "Mahalaxmi", 
      "Byculla", "Dadar"
    ],
    "Central Mumbai": [
      "Sion", "Kurla", "Chembur", "Ghatkopar", "Vikhroli", 
      "Kanjurmarg", "Bhandup", "Mulund"
    ],
    "Western Suburbs": [
      "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", 
      "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar"
    ],
    "Eastern Suburbs": [
      "Kurla East", "Chembur East", "Ghatkopar East", "Vikhroli East", "Mulund East"
    ],
    "Navi Mumbai": [
      "Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", 
      "CBD Belapur", "Kharghar", "Kamothe", "Kalamboli", "Panvel", 
      "New Panvel", "Taloja", "Ghansoli", "Kopar Khairane", "Airoli", "Turbhe"
    ]
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
    <div className="w-full max-w-6xl mx-auto my-12 relative z-20 px-4">
      {/* 3D Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          box-shadow: 
            0 20px 50px rgba(0,0,0,0.15), 
            0 10px 20px rgba(0,0,0,0.1),
            inset 0 0 0 1px rgba(255,255,255,0.8);
          border-radius: 32px;
        }
        .deep-input {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          box-shadow: inset 2px 2px 5px rgba(0,0,0,0.03);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .deep-input:focus {
          background: #ffffff;
          border-color: #3b82f6;
          box-shadow: 
            inset 1px 1px 2px rgba(0,0,0,0.02),
            0 0 0 4px rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }
        .btn-whatsapp {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 
            0 10px 20px -5px rgba(37, 211, 102, 0.4),
            0 4px 0 #0c6157,
            0 8px 10px rgba(0,0,0,0.1);
          transition: all 0.2s;
        }
        .btn-whatsapp:active {
          transform: translateY(4px);
          box-shadow: 
            0 4px 10px -5px rgba(37, 211, 102, 0.4),
            0 0 0 #0c6157;
        }
        .progress-bar {
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          transition: width 0.5s ease-out;
        }
        .logo-row img {
          filter: grayscale(100%) opacity(0.8);
          transition: all 0.3s;
        }
        .logo-row img:hover {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.05);
        }
      `}</style>

      <div className="glass-card overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Left: Premium Visuals */}
        <div className="lg:w-5/12 relative bg-slate-900 overflow-hidden">
          <img 
            src="https://storage.googleapis.com/wp-media-henoticbucket/2025/12/26ffea41-henotic-diagnostics-taloja-phase-1-ultrasound-sonography-center-pregnancy-scan-nt-scan-fetal-doppler-anomaly-scan-3d-4d-scan-ultrasound-near-me-taloja-navi-mumbai.webp" 
            alt="Medical Facility" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10" />
          
          <div className="relative z-10 p-10 h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-1.5 rounded-full text-blue-200 text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck size={14} /> Official Booking Portal
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Excellence in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Diagnostics</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg font-light">
                Secure your slot at Mumbai's most trusted imaging center. 12+ Years of precision, now closer to you.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <p className="text-blue-200 text-xs font-bold uppercase mb-4 tracking-widest">Why Choose Henotic?</p>
              <ul className="space-y-3">
                {["NABL Accredited Lab", "3T MRI & 128-Slice CT", "Same Day Reports", "Home Collection Available"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: The Form */}
        <div className="lg:w-7/12 p-8 lg:p-12 bg-white relative flex flex-col">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 font-serif">Book Appointment</h1>
              <p className="text-slate-500 text-sm mt-1">Fill the details below for priority confirmation.</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-blue-600">{progress}%</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Completed</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
            <div className="progress-bar h-full rounded-full" style={{ width: `${progress}%` }}></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" id="name" required placeholder="Patient Name"
                className="deep-input w-full pl-12 pr-4 py-4 rounded-xl outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                onChange={handleChange} value={formData.name}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="tel" id="mobile" required placeholder="Mobile Number" pattern="[0-9]{10}"
                  className="deep-input w-full pl-12 pr-4 py-4 rounded-xl outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                  onChange={handleChange} value={formData.mobile}
                />
              </div>
              <div className="relative group">
                <Activity className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text" id="test" required placeholder="Test Name (e.g. MRI)"
                  className="deep-input w-full pl-12 pr-4 py-4 rounded-xl outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                  onChange={handleChange} value={formData.test}
                />
              </div>
            </div>

            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors pointer-events-none" />
              <select 
                id="location" required 
                className="deep-input w-full pl-12 pr-10 py-4 rounded-xl outline-none text-slate-800 font-medium cursor-pointer appearance-none bg-transparent"
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

            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative group">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="date" id="date" required 
                  className="deep-input w-full pl-12 pr-4 py-4 rounded-xl outline-none text-slate-800 font-medium cursor-pointer"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleChange} value={formData.date}
                />
              </div>
              <div className="relative group">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="time" id="time" required 
                  className="deep-input w-full pl-12 pr-4 py-4 rounded-xl outline-none text-slate-800 font-medium cursor-pointer"
                  onChange={handleChange} value={formData.time}
                />
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
              <input type="checkbox" id="disclaimer" className="mt-1 w-5 h-5 text-blue-600 rounded cursor-pointer" onChange={handleChange} checked={formData.disclaimer} />
              <label htmlFor="disclaimer" className="text-xs text-slate-600 font-medium cursor-pointer leading-snug">
                I authorize Henotic Diagnostics to contact me via WhatsApp/Phone for appointment confirmation.
              </label>
            </div>

            <button type="submit" className="btn-whatsapp w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 mt-4">
              <MessageCircle size={24} className="animate-pulse" /> Confirm Appointment Now
            </button>
          </form>

          {/* Accreditation Bar */}
          <div className="mt-10 pt-6 border-t border-slate-100">
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Accredited by National Bodies</p>
            <div className="flex justify-center items-center gap-6 logo-row flex-wrap px-4">
              {[
                { name: "NABL", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b027e422-nabl-certified-henotic-diagnostics.webp" },
                { name: "ISO", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b04115be-iso-certified-henotic-diagnostics.webp" },
                { name: "AERB", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b3a1aaeb-aerb-certified-henotic-diagnostics.webp" },
                { name: "PCPNDT", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/bf901506-pcpndt-certififed-henotic-diagnostics.webp" },
                { name: "NABH", url: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/fb54c3da-nabh-certified-henotic-diagnostics.webp" }
              ].map((logo, i) => (
                <img 
                  key={i} 
                  src={logo.url} 
                  alt={logo.name} 
                  title={logo.name}
                  className="h-10 w-auto object-contain"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
