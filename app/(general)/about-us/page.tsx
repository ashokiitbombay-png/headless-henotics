"use client";

import React, { useState } from "react";

export default function AboutUsPage() {
  // FAQ Data Structure
  const faqs = [
    {
      category: "🧪 General Diagnostic Services",
      items: [
        { q: "What services does Henotic Diagnostics offer?", a: "Henotic Diagnostics provides a complete range of diagnostic services including blood tests, full-body health checkups, advanced imaging (MRI, CT, PET scan, ultrasound), cardiac diagnostics, and women’s health screening." },
        { q: "Do you provide both in-house and partner center services?", a: "Yes, we offer in-house diagnostic services at our Kharghar center and also provide seamless booking access to certified partner centers across Mumbai and Navi Mumbai." },
        { q: "How can I book a test?", a: "You can book your test via phone, WhatsApp, or through our online platform for quick and convenient scheduling." },
        { q: "Are your reports accurate and reliable?", a: "Absolutely. All tests are conducted using advanced technology and standardized protocols to ensure high diagnostic accuracy." }
      ]
    },
    {
      category: "🔬 Blood Tests & Health Checkups",
      items: [
        { q: "What types of blood tests are available?", a: "We offer routine blood tests, specialized investigations, hormone tests, diabetes screening, lipid profiles, thyroid tests, and more." },
        { q: "Do I need to fast before a blood test?", a: "Some tests require fasting (8–12 hours), while others do not. Our team will guide you based on your test requirements." },
        { q: "What is included in a full-body health checkup?", a: "Full-body checkups include blood tests, organ function tests, and screenings designed to assess overall health and detect early signs of disease." }
      ]
    },
    {
      category: "🖥️ Imaging Services (MRI, CT, PET, Ultrasound)",
      items: [
        { q: "What imaging services do you provide?", a: "We offer ultrasound/sonography, CT scans, MRI scans, PET scans, and DEXA bone density scans through our center and partner network." },
        { q: "Is an MRI scan safe?", a: "Yes, MRI is a non-invasive and radiation-free imaging technique, making it safe for most patients." },
        { q: "How long does a CT or MRI scan take?", a: "CT scans typically take 5–10 minutes, while MRI scans may take 20–45 minutes depending on the area being examined." },
        { q: "Do I need a doctor’s prescription for imaging tests?", a: "Yes, most advanced imaging tests like CT, MRI, and PET scans require a valid doctor’s prescription." }
      ]
    },
    {
      category: "❤️ Cardiac Diagnostics",
      items: [
        { q: "What cardiac tests are available at Henotic Diagnostics?", a: "We provide ECG, 2D Echo, TMT (stress test), Holter monitoring, and access to angiography and angioplasty through partner centers." },
        { q: "What is a TMT test?", a: "TMT (Treadmill Test) evaluates how your heart performs under physical stress and helps detect coronary artery disease." },
        { q: "What is Holter monitoring?", a: "Holter monitoring is a 24–48 hour continuous ECG recording used to detect irregular heart rhythms." }
      ]
    },
    {
      category: "🤰 Women’s Health & Pregnancy Scans",
      items: [
        { q: "What pregnancy-related scans are available?", a: "We offer pregnancy ultrasound, NT scan, anomaly scan, growth scans, color Doppler, and other obstetric imaging services." },
        { q: "What is an NT scan?", a: "An NT (Nuchal Translucency) scan is a first-trimester screening test used to assess the risk of chromosomal abnormalities." },
        { q: "What is an anomaly scan?", a: "An anomaly scan is a detailed ultrasound performed during the second trimester to check fetal development and detect structural abnormalities." },
        { q: "Do you offer prenatal genetic testing?", a: "Yes, we provide advanced prenatal screening tests like NIPT/NIPS for detecting chromosomal conditions." },
        { q: "Is gender determination allowed during pregnancy scans?", a: "No. As per PCPNDT regulations in India, gender determination is strictly prohibited." }
      ]
    },
    {
      category: "🦴 DEXA & Preventive Screening",
      items: [
        { q: "What is a DEXA scan?", a: "A DEXA scan is a bone density test used to diagnose osteoporosis and assess fracture risk." },
        { q: "Who should get a DEXA scan?", a: "It is recommended for elderly individuals, postmenopausal women, and patients at risk of bone loss." }
      ]
    },
    {
      category: "⏱️ Reports & Results",
      items: [
        { q: "How long does it take to get reports?", a: "Report delivery time varies depending on the test. Many reports are available within 24 hours, while specialized tests may take longer." },
        { q: "Can I access my reports online?", a: "Yes, we provide convenient digital access to reports for easy download and sharing." }
      ]
    },
    {
      category: "💳 Pricing & Accessibility",
      items: [
        { q: "Are your services affordable?", a: "Yes, we offer competitive and transparent pricing across all diagnostic services." },
        { q: "Do you offer packages or discounts?", a: "We provide health checkup packages and periodic offers for preventive screening." }
      ]
    },
    {
      category: "📍 Location & Booking",
      items: [
        { q: "Where is Henotic Diagnostics located?", a: "We are located in Kharghar, Navi Mumbai, with easy access for patients across Navi Mumbai and nearby areas." },
        { q: "Do you provide services outside Kharghar?", a: "Yes, through our partner network, we provide diagnostic services across Mumbai and Navi Mumbai." }
      ]
    },
    {
      category: "🚀 Why Choose Us?",
      items: [
        { q: "Why should I choose Henotic Diagnostics?", a: "Henotic Diagnostics offers a combination of advanced technology, expert care, certified partner networks, accurate reporting, and convenient booking—all under one trusted platform." }
      ]
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const techImages = [
    "https://storage.googleapis.com/wp-media-henoticbucket/MRI%20SCAN/henotic-diagnostics-mri-scan-belapur.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/MRI%20SCAN/henotic-diagnostics-waiting-area.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/CT%20SCAN/henotic-diagnostics-ct-scan-kharghar.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/Front%20Office/henotic-diagnostics-main-building.webp",
  ];

  const certImages = [
    "https://storage.googleapis.com/wp-media-henoticbucket/Certificates/henotic-diagnostics-aerb-certified.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/Certificates/henotic-diagnostics-cap-certified.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/Certificates/henotic-diagnostics-iso-certified.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/Certificates/henotic-diagnostics-isoug-certified.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/Certificates/henotic-diagnostics-nabl-certified.webp",
    "https://storage.googleapis.com/wp-media-henoticbucket/Certificates/henotic-diagnostics-pcpndt-certified.webp",
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Inline Styles for Marquee Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .deep-shadow {
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2), 0 10px 20px -5px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5);
        }
        .deep-shadow-hover:hover {
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3), 0 15px 25px -5px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6);
          transform: translateY(-8px) scale(1.02);
        }
      `}} />

      {/* 🏥 Who We Are Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
                🏥 About Henotic Diagnostics
              </h1>
              <h2 className="text-2xl font-semibold text-blue-800">Who We Are</h2>
              <div className="text-lg text-slate-700 leading-relaxed space-y-4">
                <p>
                  Henotic Diagnostics is a trusted and licensed medical diagnostic and imaging center located in Kharghar, Navi Mumbai. We are committed to delivering accurate, timely, and affordable diagnostic services through a patient-first approach.
                </p>
                <p>
                  With a strong foundation in both in-house diagnostics and a technology-enabled booking platform, we provide seamless access to advanced medical testing across Mumbai and Navi Mumbai. Patients can conveniently book tests at our center or choose from our network of licensed partner facilities, ensuring flexibility, accessibility, and reliability.
                </p>
                <p className="font-medium text-slate-800">
                  From routine blood tests to advanced imaging and specialized screening, Henotic Diagnostics stands as a one-stop destination for comprehensive healthcare diagnostics.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <img
                src="https://storage.googleapis.com/wp-media-henoticbucket/MRI%20SCAN/henotic-diagnostics-mri-scan-panvel.webp"
                alt="Henotic Diagnostics MRI Scan"
                className="relative rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] object-cover h-[500px] w-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 Mission, Vision & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
               <div className="absolute inset-0 bg-teal-500 rounded-3xl transform -rotate-3 scale-105 opacity-20 blur-lg transition-transform group-hover:rotate-0 duration-500"></div>
              <img
                src="https://storage.googleapis.com/wp-media-henoticbucket/Front%20Office/henotic-diagnostics-name-plate.webp"
                alt="Henotic Diagnostics Name Plate"
                className="relative rounded-3xl deep-shadow object-cover h-[600px] w-full border-4 border-white"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-blue-600 deep-shadow transition-transform hover:-translate-y-1 duration-300">
                <h3 className="text-2xl font-bold text-blue-950 mb-3 flex items-center gap-2">🎯 Our Mission</h3>
                <p className="text-slate-700 text-lg">
                  To deliver accurate, timely, and affordable diagnostic insights by uniting advanced technology, expert medical professionals, and a robust network of licensed partner sites to ensure a seamless and accessible patient experience.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-teal-500 deep-shadow transition-transform hover:-translate-y-1 duration-300">
                <h3 className="text-2xl font-bold text-blue-950 mb-3 flex items-center gap-2">👁️ Our Vision</h3>
                <p className="text-slate-700 text-lg">
                  To be the most trusted and expansive diagnostic and imaging network across Mumbai and Navi Mumbai, setting the benchmark for clinical excellence, innovation, and accessible healthcare through collaborative partnerships.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-blue-950 mb-6 flex items-center gap-2">💎 Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Clinical Precision", desc: "Uncompromising accuracy in every test." },
                    { title: "Patient-First Approach", desc: "Designing services around your comfort." },
                    { title: "Unwavering Integrity", desc: "Highest ethical standards & transparency." },
                    { title: "Collaborative Excellence", desc: "Empowering our licensed partner network." },
                    { title: "Continuous Innovation", desc: "Pioneering advanced healthcare tech." }
                  ].map((value, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 shadow-md hover:shadow-lg transition-shadow">
                      <strong className="block text-blue-800 text-lg mb-1">{value.title}</strong>
                      <span className="text-slate-600 text-sm">{value.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧪 Services Rate Cards (Deep 3D) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">🧪 Our Services</h2>
            <p className="text-xl text-blue-100">
              At Henotic Diagnostics, we offer a wide spectrum of diagnostic services designed to meet preventive, diagnostic, and monitoring needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/Laboratory/henotic-diagnostics.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Pathology" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">🔬 Pathology & Preventive Health</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Comprehensive blood tests, Full-body health checkups, Routine and specialized lab investigations.</p>
                <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-800 transform hover:-translate-y-0.5 transition-all">View Rates & Book</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/Ultrasound/henotic-diagnostics-sonography-ultrasound-pregnancy-scan-anomaly%20scan-nt-scan-kharghar-taloja%2C%20roadpali-navi%20mumbai.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Sonography" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">🖥️ Sonography & Ultrasound (USG)</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Advanced Ultrasound Imaging at Transparent Rates, and same-day reporting available.</p>
                <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-800 transform hover:-translate-y-0.5 transition-all">View Rates & Book</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/PET%20SCAN/henotic-diagnostics-mri-scan-ct-scan-pet-scan-dopa-scan.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="CT MRI" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">High-Speed CT-MRI Imaging</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Accurate results, minimal wait time, and patient-friendly rates for all essential CT scans.</p>
                <a href="https://share.google/HTY8Tw1UvBE1ggpPY" target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Learn More</a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/PET%20SCAN/henotic-diagnostics-mri-scan-ct-scan-pet-scan-dopa-scan-dtpa-scan.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="PET CT" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">Advanced PET-CT Imaging</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Comprehensive PET-CT services featuring FDG, PSMA, and DOPA scans to support early diagnosis.</p>
                <a href="https://share.google/HTY8Tw1UvBE1ggpPY" target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Learn More</a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/DEXA-BONE-SCAN/dexa%20scan-navi-mumbai-henotic-diagnostics.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="DEXA Scan" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">BMD DEXA Bone Scan</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Advanced BMD DEXA Bone Scan for early osteoporosis detection, fracture risk assessment, and long-term bone health monitoring.</p>
                <a href="https://share.google/HTY8Tw1UvBE1ggpPY" target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Learn More</a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/2D-Echo/2d-echo-test-henotic-diagnostics-kharghar.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="ECG 2D Echo" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">ECG, 2D Echo & TMT Package</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Complete cardiac check-up including ECG, 2D Echo, and Treadmill Test (TMT) to evaluate heart rhythm.</p>
                <a href="https://share.google/HTY8Tw1UvBE1ggpPY" target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Learn More</a>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/Mammography/mammography-henotic-diagnostics-kharghar.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Mammography" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">Advanced Digital Mammography</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Safe, quick, and accurate breast cancer screening using high-resolution digital mammography for early detection.</p>
                <a href="https://share.google/HTY8Tw1UvBE1ggpPY" target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Learn More</a>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/Ultrasound/henotic-diagnostics-sonography-ultrasound-pregnancy-scan-anomaly%20scan-nt-scan-kharghar-taloja%2C%20roadpali-navi%20mumbai.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Women Health" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">Women’s Health & Prenatal Care</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Pregnancy Sonography & Obstetric Ultrasound, NT Scan & Anomaly Scan, Color Doppler Studies.</p>
                <a href="https://share.google/HTY8Tw1UvBE1ggpPY" target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Learn More</a>
              </div>
            </div>

            {/* Card 9 */}
            <div className="bg-white rounded-2xl overflow-hidden deep-shadow deep-shadow-hover transition-all duration-300 flex flex-col group cursor-pointer lg:col-start-2">
              <div className="h-56 relative overflow-hidden">
                <img src="https://storage.googleapis.com/wp-media-henoticbucket/NIPT%20TEST/nipt-genetic-screening-test-henotic-diagnostics-navi-mumbai-non-invasive-prenatal-test-for-pregnancy-best-lab-vashi-nerul-kharghar-maharashtra.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="NIPT Scan" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white drop-shadow-md">Prenatal Screening (NIPT/NIPS)</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-slate-50">
                <p className="text-slate-600 mb-6 flex-grow font-medium leading-relaxed">Advanced prenatal screening in Navi Mumbai using NIPT/NIPS to detect chromosomal risks early with a safe, accurate, non-invasive blood test.</p>
                <a href="https://share.google/HTY8Tw1UvBE1ggpPY" target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Learn More</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 👨‍⚕️ Our Expert Team */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 deep-shadow flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-extrabold text-blue-950">👨‍⚕️ Our Expert Team</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our team consists of experienced radiologists, pathologists, and trained technicians dedicated to delivering high-quality diagnostic care. Each professional is committed to maintaining the highest standards of accuracy, safety, and patient comfort.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We combine clinical expertise with compassionate care, ensuring that every patient receives clear guidance and reliable reports for informed medical decisions.
              </p>
              <div className="flex gap-4 pt-4">
                <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold">⭐ Top Radiologists</span>
                <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold">⭐ Expert Pathologists</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-2 scale-105 opacity-20 transition-transform group-hover:rotate-0 duration-500"></div>
                <img
                  src="https://storage.googleapis.com/wp-media-henoticbucket/Doctors/henotic-diagnostics-expert-radiologists-team-of-doctors-specialized-in-advanced-medical-imaging-diagnostic-services-india.webp"
                  alt="Our Expert Team"
                  className="relative rounded-3xl deep-shadow object-cover w-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 Technology & Infrastructure (Moving Carousel) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6">🏢 Technology & Infrastructure</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Henotic Diagnostics is equipped with advanced diagnostic technology and modern infrastructure to ensure precise and efficient results. Our integration of technology allows for faster report delivery and seamless coordination.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-medium text-slate-700">
            <span className="bg-slate-100 px-5 py-2 rounded-full shadow-sm border border-slate-200">✔️ High-resolution imaging systems</span>
            <span className="bg-slate-100 px-5 py-2 rounded-full shadow-sm border border-slate-200">✔️ Advanced ultrasound & Doppler</span>
            <span className="bg-slate-100 px-5 py-2 rounded-full shadow-sm border border-slate-200">✔️ Digital reporting & secure data</span>
            <span className="bg-slate-100 px-5 py-2 rounded-full shadow-sm border border-slate-200">✔️ Hygienic patient environment</span>
          </div>
        </div>

        {/* CSS Marquee Slider */}
        <div className="w-full relative h-[400px] bg-slate-50 border-y border-slate-200 py-8 shadow-inner overflow-hidden flex items-center">
          <div className="animate-marquee">
            {/* First Set */}
            {techImages.map((src, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-4">
                <img src={src} className="w-full h-80 object-cover rounded-2xl deep-shadow border-4 border-white" alt={`Tech Image ${index}`} />
              </div>
            ))}
            {/* Duplicate Set for Infinite Scroll */}
            {techImages.map((src, index) => (
              <div key={`dup-${index}`} className="w-1/4 flex-shrink-0 px-4">
                <img src={src} className="w-full h-80 object-cover rounded-2xl deep-shadow border-4 border-white" alt={`Tech Image Dup ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📜 Certifications & Compliance (Glassmorphism & Trust Signals) */}
      <section className="py-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blue-950 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-teal-900/90 backdrop-blur-sm z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg flex items-center justify-center gap-4">
              📜 Certifications & Compliance
            </h2>
            <div className="flex justify-center mb-6 text-2xl">⭐⭐⭐⭐⭐</div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              At Henotic Diagnostics, quality, safety, and ethical medical practices are at the core of everything we do. As a licensed diagnostic center in Kharghar, Navi Mumbai, we strictly adhere to national and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="glass-panel p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold text-teal-300 mb-4 border-b border-white/20 pb-2">Our Accreditations</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><span className="text-teal-400">✔️</span> <strong>ISO Certified</strong> – Standardized quality management systems.</li>
                <li className="flex items-start gap-3"><span className="text-teal-400">✔️</span> <strong>NABL Certified</strong> – Stringent laboratory quality and accuracy.</li>
                <li className="flex items-start gap-3"><span className="text-teal-400">✔️</span> <strong>AERB Approved</strong> – Radiation safety norms for imaging.</li>
                <li className="flex items-start gap-3"><span className="text-teal-400">✔️</span> <strong>PCPNDT Certified</strong> – Compliant with ethical prenatal guidelines.</li>
                <li className="flex items-start gap-3"><span className="text-teal-400">✔️</span> <strong>CAP Certified</strong> – Global standards for partner labs.</li>
                <li className="flex items-start gap-3"><span className="text-teal-400">✔️</span> <strong>ISOUG Aligned</strong> – Best practices in obstetric ultrasound.</li>
              </ul>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-white/20 pb-2">🤝 Certified Partner Network</h3>
              <p className="text-lg mb-4">
                To expand accessibility without compromising quality, Henotic Diagnostics collaborates with certified and authorized partner centers across Mumbai and Navi Mumbai.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="bg-white/10 p-3 rounded-xl border border-white/20">🏥 Valid government licenses and approvals</li>
                <li className="bg-white/10 p-3 rounded-xl border border-white/20">🏆 Recognized certifications (NABL, CAP, ISO, AERB)</li>
                <li className="bg-white/10 p-3 rounded-xl border border-white/20">📈 Proven track record of clinical accuracy</li>
              </ul>
            </div>
          </div>

          {/* Glass Top Photo Frames Slider */}
          <div className="w-full relative h-[350px] overflow-hidden flex items-center">
            <div className="animate-marquee" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
              {certImages.map((src, index) => (
                <div key={index} className="w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 px-4">
                  <div className="glass-panel p-3 rounded-2xl deep-shadow transform hover:scale-105 transition-transform duration-300">
                    <img src={src} className="w-full h-48 lg:h-56 object-contain bg-white rounded-xl" alt={`Certificate ${index}`} />
                  </div>
                </div>
              ))}
              {certImages.map((src, index) => (
                <div key={`dup-cert-${index}`} className="w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 px-4">
                  <div className="glass-panel p-3 rounded-2xl deep-shadow transform hover:scale-105 transition-transform duration-300">
                    <img src={src} className="w-full h-48 lg:h-56 object-contain bg-white rounded-xl" alt={`Certificate Dup ${index}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ❓ Dynamic FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6">❓ Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about Henotic Diagnostics services, reports, and bookings.</p>
          </div>

          <div className="space-y-12">
            {faqs.map((categoryObj, catIdx) => (
              <div key={catIdx} className="bg-white p-8 rounded-3xl deep-shadow border border-slate-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-4 inline-block">{categoryObj.category}</h3>
                <div className="space-y-4">
                  {categoryObj.items.map((item, itemIdx) => {
                    const uniqueId = `${catIdx}-${itemIdx}`;
                    const isOpen = activeFaq === uniqueId;
                    return (
                      <div key={itemIdx} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(uniqueId)}
                          className="w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-blue-50 transition-colors focus:outline-none"
                        >
                          <span className="font-semibold text-slate-800 text-lg pr-4">{item.q}</span>
                          <span className={`text-blue-600 text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="p-5 text-slate-600 bg-white border-t border-slate-100 text-lg leading-relaxed">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
