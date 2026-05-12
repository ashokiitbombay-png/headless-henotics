"use client";

import React, { useState, useEffect } from 'react';

export default function ContactUs() {
  const trustFactors = [
    "NABL Associated Diagnostic Standards",
    "Licensed Diagnostic Center",
    "Advanced Imaging & Pathology Services",
    "Experienced Radiologists & Technicians",
    "Fast & Accurate Reports",
    "Same-Day Reporting for Select Tests",
    "Patient-Friendly Online Booking",
    "Trusted by Doctors Across Mumbai",
    "Advanced MRI, CT & PET Imaging Access",
    "Dedicated Women’s Health Diagnostics",
    "Home Sample Collection Available",
    "Digital Report Access & Assistance",
    "Transparent Appointment Process",
    "Hygienic & Patient-Centric Environment"
  ];

  // State for the interactive form
  const [formData, setFormData] = useState({
    name: '', mobile: '', test: '', center: '', date: '', time: ''
  });
  const [progress, setProgress] = useState(0);

  // Dynamic Progress Bar Logic
  useEffect(() => {
    const totalFields = 6;
    let filledFields = 0;
    if (formData.name.trim() !== '') filledFields++;
    if (formData.mobile.trim() !== '') filledFields++;
    if (formData.test.trim() !== '') filledFields++;
    if (formData.center.trim() !== '') filledFields++;
    if (formData.date.trim() !== '') filledFields++;
    if (formData.time.trim() !== '') filledFields++;
    
    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle WhatsApp Redirection
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Backticks and variables are preserved correctly now
    const message = `Hello Henotic Diagnostics, I would like to confirm my appointment:
- Patient Name: *${formData.name}*
- Mobile: *${formData.mobile}*
- Test Name: *${formData.test}*
- Preferred Center: *${formData.center}*
- Date: *${formData.date}*
- Time: *${formData.time}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918879327184?text=` + encodedMessage;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl drop-shadow-sm">
            Contact Us – Henotic Diagnostics
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            At Henotic Diagnostics, we are committed to delivering accurate, accessible, and patient-focused diagnostic healthcare services.
          </p>
        </div>

        {/* Section 1: Introduction & MRI */}
        <section className="bg-white rounded-3xl shadow-lg overflow-hidden lg:flex lg:items-center transform transition-all hover:shadow-xl">
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Care</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need advanced imaging, preventive health checkups, blood tests, women’s health diagnostics, or cardiac evaluations, our experienced team is here to support your healthcare journey with precision and care.
            </p>
          </div>
          <div className="lg:w-1/2 h-72 lg:h-auto relative">
            <img 
              src="https://storage.googleapis.com/wp-media-henoticbucket/MRI%20SCAN/henotic-diagnostics-mri-scan-panvel.webp" 
              alt="Henotic Diagnostics MRI Scan in Panvel" 
              className="w-full h-full object-cover rounded-r-3xl"
            />
          </div>
        </section>

        {/* Section 2: Deep 3D Location & Waiting Area */}
        <section className="py-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900">Visit Our Center</h2>
             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Experience a hygienic, patient-centric environment designed for your comfort and peace of mind.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* 3D Image Container */}
            <div className="relative group w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,_0,_0,_0.2)] hover:shadow-[0_30px_60px_rgba(0,_0,_0,_0.3)] transform hover:-translate-y-3 transition-all duration-500 ease-out border-8 border-white">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/MRI%20SCAN/henotic-diagnostics-waiting-area.webp" 
                alt="Henotic Diagnostics Patient Waiting Area" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* 3D Google Maps Container */}
            <div className="relative w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,_0,_0,_0.2)] hover:shadow-[0_30px_60px_rgba(0,_0,_0,_0.3)] transform hover:-translate-y-3 transition-all duration-500 ease-out border-8 border-white ring-1 ring-black/5">
              <iframe 
                src="https://maps.google.com/maps?q=Henotic%20Diagnostics,%20Kharghar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Henotic Diagnostics Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Section 3: Excellence & Main Building */}
        <section className="bg-blue-900 rounded-3xl shadow-[0_15px_40px_rgba(30,_58,_138,_0.3)] overflow-hidden lg:flex lg:items-center text-white transform transition-all hover:-translate-y-1">
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6">Excellence in Diagnostics You Can Trust</h2>
            <p className="text-lg leading-relaxed text-blue-100">
              For over 12+ years, Henotic Diagnostics has been helping patients and healthcare professionals with reliable and advanced diagnostic solutions.
            </p>
          </div>
          <div className="lg:w-1/2 h-72 lg:h-full relative">
            <img 
              src="https://storage.googleapis.com/wp-media-henoticbucket/Front%20Office/henotic-diagnostics-main-building.webp" 
              alt="Henotic Diagnostics Main Building" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Section 4: Why Trust Us Grid */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Patients Trust Henotic Diagnostics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFactors.map((factor, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-gray-800 font-medium">{factor}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- NEW PREMIUM BOOKING FORM SECTION --- */}
        <section className="py-12" id="booking">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Premium Content */}
            <div className="px-4">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-bold text-sm tracking-widest uppercase mb-4 shadow-sm border border-blue-200">
                Official Booking Portal
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Excellence in <span className="text-blue-600">Diagnostics</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 font-medium">
                12+ Years of precision. NABL Accredited. <br/>
                <span className="text-gray-500 font-normal">Trusted by leading specialists in Mumbai.</span>
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["AERB Accredited Lab", "PCPNDT Registered", "3T MRI & 128-Slice CT", "Same Day Reports", "Home Collection"].map((tag, idx) => (
                  <span key={idx} className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div 
              className="rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden transition-transform duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
              style={{ backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)' }}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow-md">Secure Appointment</h3>
                <p className="text-white/90 text-lg mb-8 font-medium">Fill the details below for priority confirmation.</p>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-white text-sm font-bold mb-2">
                    <span className="uppercase tracking-wider">Completion</span>
                    <span>{progress}% Filled</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm shadow-inner overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-700 ease-out relative" 
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Patient Name" required className="w-full p-4 rounded-2xl bg-white/90 backdrop-blur-md border-0 focus:ring-4 focus:ring-white/50 text-gray-800 placeholder-gray-500 shadow-sm transition-all" />
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className="w-full p-4 rounded-2xl bg-white/90 backdrop-blur-md border-0 focus:ring-4 focus:ring-white/50 text-gray-800 placeholder-gray-500 shadow-sm transition-all" />
                  </div>

                  <select name="test" value={formData.test} onChange={handleChange} required className="w-full p-4 rounded-2xl bg-white/90 backdrop-blur-md border-0 focus:ring-4 focus:ring-white/50 text-gray-800 shadow-sm transition-all">
                    <option value="" disabled>Select Test Name</option>
                    <option value="MRI Scan">MRI Scan</option>
                    <option value="CT Scan">CT Scan</option>
                    <option value="Sonography / Ultrasound">Sonography / Ultrasound</option>
                    <option value="Blood Test / Pathology">Blood Test / Pathology</option>
                    <option value="Health Checkup Package">Health Checkup Package</option>
                  </select>

                  <select name="center" value={formData.center} onChange={handleChange} required className="w-full p-4 rounded-2xl bg-white/90 backdrop-blur-md border-0 focus:ring-4 focus:ring-white/50 text-gray-800 shadow-sm transition-all">
                    <option value="" disabled>Select Nearest Center</option>
                    <option value="Kharghar Center">Kharghar Center</option>
                    <option value="Panvel Center">Panvel Center</option>
                    <option value="Navi Mumbai (Main)">Navi Mumbai (Main)</option>
                  </select>

                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-4 rounded-2xl bg-white/90 backdrop-blur-md border-0 focus:ring-4 focus:ring-white/50 text-gray-800 shadow-sm transition-all" />
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full p-4 rounded-2xl bg-white/90 backdrop-blur-md border-0 focus:ring-4 focus:ring-white/50 text-gray-800 shadow-sm transition-all" />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full mt-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold py-5 px-6 rounded-2xl shadow-[0_10px_20px_rgba(37,211,102,0.3)] transform transition-all hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 text-xl"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    Confirm Appointment Now
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Accreditations Row */}
          <div className="mt-16 rounded-[2rem] p-10 shadow-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700">
            <h4 className="text-center text-slate-300 text-lg font-bold mb-10 uppercase tracking-[0.2em]">Accredited by National Bodies</h4>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b027e422-nabl-certified-henotic-diagnostics.webp" alt="NABL" className="h-16 md:h-20 object-contain hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"/>
              <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b04115be-iso-certified-henotic-diagnostics.webp" alt="ISO" className="h-16 md:h-20 object-contain hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"/>
              <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b3a1aaeb-aerb-certified-henotic-diagnostics.webp" alt="AERB" className="h-16 md:h-20 object-contain hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"/>
              <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/3a45d45f-pcpndt-certified-henotic-diagnostics.webp" alt="PCPNDT" className="h-16 md:h-20 object-contain hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"/>
              <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/fb54c3da-nabh-certified-henotic-diagnostics.webp" alt="NABH" className="h-16 md:h-20 object-contain hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"/>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
