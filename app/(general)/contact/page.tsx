import React from 'react';

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                 <p className="text-white font-semibold text-lg drop-shadow-md">Comfortable Waiting Area</p>
              </div>
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
              For over 12+ years, Henotic Diagnostics has been helping patients and healthcare professionals with reliable and advanced diagnostic solutions. Our focus on technology, patient comfort, and timely reporting has made us a trusted name for diagnostic imaging and pathology services in Mumbai and Navi Mumbai.
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Why Patients Trust Henotic Diagnostics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFactors.map((factor, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">{factor}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Action Form / Contact Banner */}
        <section className="bg-white p-10 sm:p-14 rounded-3xl shadow-xl text-center border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-800"></div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Ready to book an appointment or have a question? Our specialized team is here to guide you through your diagnostic needs.</p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,_99,_235,_0.3)] transform hover:-translate-y-1 transition-all duration-300">
            Contact Support
          </button>
        </section>

      </div>
    </main>
  );
}
