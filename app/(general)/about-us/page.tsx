"use client";

import React, { useState } from "react";

// Raw Data processing for dropdowns
const rawCities = [
  "colaba", "cuffe-parade", "fort", "churchgate", "marine-lines", "nariman-point", "worli", "parel", "lower-parel", "mahalaxmi", "byculla", "dadar",
  "sion", "kurla", "chembur", "ghatkopar", "vikhroli", "kanjurmarg", "bhandup", "mulund",
  "bandra", "khar", "santacruz", "vile-parle", "andheri", "jogeshwari", "goregaon", "malad", "kandivali", "borivali", "dahisar",
  "kurla-east", "chembur-east", "ghatkopar-east", "vikhroli-east", "mulund-east",
  "vashi", "sanpada", "juinagar", "nerul", "seawoods", "cbd-belapur", "kharghar", "kamothe", "kalamboli", "panvel", "new-panvel", "taloja", "ghansoli", "kopar-khairane", "airoli", "turbhe"
];

const rawTests = [
  "blood-tests", "full-body-check-up", "health-checkup", "sonography", "ultrasound", "ct-scan", "mri-scan", "pet-scan", "spect-scan", "dtpa-scan", "dexa-bone-scan", "2d-echo", "2d-echo-test", "tmt-test", "stress-test", "holter-monitoring", "angiography", "angioplasty", "TAVR", "pregnancy-sonography", "obstetric-ultrasound", "anomaly-scan", "nt-scan", "color-doppler", "liver-fibroscan", "liver-elastography", "mammography", "follicular-study", "prenatal-test", "nipt-test", "nips-test", "nippt"
];

const formatSlug = (slug: string) => slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const cities = rawCities.map(formatSlug);
const tests = rawTests.map(formatSlug);

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

  // Added TypeScript Annotations (<string | null> and (index: string))
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (index: string) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    test: "",
    center: "",
    date: "",
    time: ""
  });

  // Added TypeScript Annotation for form events
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const filledFields = Object.values(formData).filter(value => value.trim() !== "").length;
  const progressPercentage = Math.round((filledFields / 6) * 100);

  // Added TypeScript Annotation for form submission
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filledFields < 6) {
      alert("Please fill all the fields before confirming.");
      return;
    }
    const message = `*Secure Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Test:* ${formData.test}%0A*Center:* ${formData.center}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A%0A_Please confirm my priority booking._`;
    window.open(`https://wa.me/918879327184?text=${message}`, '_blank');
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
      {/* Inline Styles for Marquee Animation & Custom Form Background */}
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
        .booking-gradient-bg {
          background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
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
                <a href="#appointment-portal" className="block text-center w-full bg-blue-900 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-800 transform hover:-translate-y-0.5 transition-all">Book Now</a>
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
                <a href="#appointment-portal" className="block text-center w-full bg-blue-900 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-800 transform hover:-translate-y-0.5 transition-all">Book Now</a>
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
                <a href="#appointment-portal" className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">Book Now</a>
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

        <div className="w-full relative h-[400px] bg-slate-50 border-y border-slate-200 py-8 shadow-inner overflow-hidden flex items-center">
          <div className="animate-marquee">
            {techImages.map((src, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-4">
                <img src={src} className="w-full h-80 object-cover rounded-2xl deep-shadow border-4 border-white" alt={`Tech Image ${index}`} />
              </div>
            ))}
            {techImages.map((src, index) => (
              <div key={`dup-${index}`} className="w-1/4 flex-shrink-0 px-4">
                <img src={src} className="w-full h-80 object-cover rounded-2xl deep-shadow border-4 border-white" alt={`Tech Image Dup ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📜 Certifications & Compliance */}
      <section className="py-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-teal-900/90 backdrop-blur-sm z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg flex items-center justify-center gap-4">
              📜 Certifications & Compliance
            </h2>
            <div className="flex justify-center mb-6 text-2xl">⭐⭐⭐⭐⭐</div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              At Henotic Diagnostics, quality, safety, and ethical medical practices are at the core of everything we do.
            </p>
          </div>

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
                          <span className={`text-blue-600 text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-5 text-slate-600 bg-white border-t border-slate-100 text-lg leading-relaxed">{item.a}</div>
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

      {/* 🏆 Accredited by National Bodies Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 drop-shadow-lg tracking-wide">
            🏆 Accredited by National Bodies
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { title: "NABL", src: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b027e422-nabl-certified-henotic-diagnostics.webp" },
              { title: "ISO", src: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b04115be-iso-certified-henotic-diagnostics.webp" },
              { title: "AERB", src: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/b3a1aaeb-aerb-certified-henotic-diagnostics.webp" },
              { title: "NABH", src: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/fb54c3da-nabh-certified-henotic-diagnostics.webp" },
              { title: "PCPNDT", src: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/3a45d45f-pcpndt-certified-henotic-diagnostics.webp" }
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-full h-28 w-28 md:h-36 md:w-36 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] transform group-hover:-translate-y-3 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <img src={cert.src} alt={cert.title} className="max-h-full max-w-full object-contain drop-shadow-md rounded-full filter brightness-110 group-hover:brightness-100" />
                </div>
                <span className="text-blue-100 mt-5 text-lg font-bold tracking-widest uppercase">{cert.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📅 Premium Official Booking Portal */}
      <section id="appointment-portal" className="py-24 booking-gradient-bg relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-2 p-8 md:p-12 text-white h-full flex flex-col justify-center bg-black/20">
              <span className="bg-white/20 text-white border border-white/40 text-sm font-bold px-4 py-1.5 rounded-full inline-block mb-6 tracking-widest w-max shadow-inner">OFFICIAL BOOKING PORTAL</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">Excellence in Diagnostics</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                <strong>12+ Years</strong> of precision. NABL Accredited. Trusted by leading specialists in Mumbai.
              </p>
              
              <ul className="space-y-5 text-lg font-medium">
                <li className="flex items-center gap-4"><span className="bg-white/20 p-2 rounded-full">🏆</span> AERB Accredited Lab</li>
                <li className="flex items-center gap-4"><span className="bg-white/20 p-2 rounded-full">📜</span> PCPNDT Registered</li>
                <li className="flex items-center gap-4"><span className="bg-white/20 p-2 rounded-full">🖥️</span> 3T MRI & 128-Slice CT</li>
                <li className="flex items-center gap-4"><span className="bg-white/20 p-2 rounded-full">⏱️</span> Same Day Reports</li>
                <li className="flex items-center gap-4"><span className="bg-white/20 p-2 rounded-full">🏠</span> Home Collection</li>
              </ul>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-3 p-8 md:p-12 bg-white h-full flex flex-col justify-center">
              <div className="mb-8 border-b border-slate-100 pb-6">
                <h3 className="text-3xl font-extrabold text-slate-800 mb-2">Secure Appointment</h3>
                <p className="text-slate-500 font-medium">Fill the details below for priority confirmation.</p>
              </div>

              {/* Dynamic Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
                  <span>Form Completion</span>
                  <span className={progressPercentage === 100 ? "text-green-600 scale-110 transition-transform" : "text-blue-600"}>{progressPercentage}% Filled</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 shadow-inner">
                  <div 
                    className={`h-3 rounded-full transition-all duration-700 ease-out shadow-md ${progressPercentage === 100 ? 'bg-green-500' : 'booking-gradient-bg'}`} 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patient Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Patient Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter full name" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-purple-500 outline-none transition bg-slate-50 font-medium" required />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="e.g. 9876543210" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-purple-500 outline-none transition bg-slate-50 font-medium" required />
                  </div>

                  {/* Test Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Test Name</label>
                    <select name="test" value={formData.test} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-purple-500 outline-none transition bg-slate-50 font-medium appearance-none cursor-pointer" required>
                      <option value="">Select Required Test...</option>
                      {tests.map((test, idx) => <option key={idx} value={test}>{test}</option>)}
                    </select>
                  </div>

                  {/* Nearest Center */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Nearest Center</label>
                    <select name="center" value={formData.center} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-purple-500 outline-none transition bg-slate-50 font-medium appearance-none cursor-pointer" required>
                      <option value="">Choose your location...</option>
                      {cities.map((city, idx) => <option key={idx} value={city}>{city}</option>)}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Date (dd-mm-yyyy)</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-purple-500 outline-none transition bg-slate-50 font-medium cursor-pointer" required />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Time (--:--)</label>
                    <input type="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-purple-500 outline-none transition bg-slate-50 font-medium cursor-pointer" required />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button 
                    type="submit" 
                    className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl font-extrabold text-white text-lg md:text-xl transition-all shadow-[0_10px_20px_rgba(37,211,102,0.3)] transform hover:-translate-y-1 ${progressPercentage === 100 ? 'bg-[#25D366] hover:bg-[#20b958] cursor-pointer' : 'bg-[#25D366]/60 cursor-not-allowed opacity-80'}`}
                    disabled={progressPercentage < 100}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Confirm Appointment Now Via WhatsApp
                  </button>
                  {progressPercentage < 100 && <p className="text-center text-sm text-slate-500 mt-4 font-semibold">Please fill all fields to enable WhatsApp booking.</p>}
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
