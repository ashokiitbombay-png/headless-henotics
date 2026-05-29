"use client";

import React from "react";
import { Quote, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    { title: "Detailed Reports and Professional Testing Process", text: "The blood testing process was smooth, organized, and professionally managed. The reports were detailed, easy to understand, and helped us better evaluate important health markers. The overall laboratory experience felt accurate, reliable, and clinically professional.", author: "Priya Mehta" },
    { title: "Helpful Preventive Health Screening", text: "I booked preventive blood tests as part of my annual health checkup. The testing helped identify early vitamin deficiency and cholesterol concerns before symptoms became serious. Routine laboratory blood testing gave me better awareness about my overall health.", author: "Rahul Sharma" },
    { title: "Fast Sample Collection and Accurate Reporting", text: "The sample collection process was quick and comfortable, and the pathology reports were delivered on time. The blood test results were clearly structured with proper reference ranges, making it easier to review everything with the doctor.", author: "Neha Kulkarni" },
    { title: "Comprehensive Blood Test Evaluation", text: "I was impressed by the range of diagnostic blood tests available and the professional laboratory workflow. From CBC and thyroid testing to vitamin analysis and liver function evaluation, the entire experience felt clinically reliable and well-managed.", author: "Amit Desai" },
    { title: "Excellent Preventive Healthcare Experience", text: "Regular blood testing has become an important part of my preventive healthcare routine. The pathology testing process was efficient, hygienic, and professionally handled. It helped monitor important biomarkers related to diabetes risk and metabolic health.", author: "Sneha Patil" },
    { title: "Clear Guidance for Blood Test Preparation", text: "The fasting instructions and blood test preparation guidelines were clearly explained beforehand. The laboratory staff handled the sample collection carefully, and the diagnostic reports were generated quickly with accurate clinical information.", author: "Karan Joshi" },
    { title: "Advanced Laboratory Diagnostics and Timely Results", text: "The laboratory testing experience felt modern and highly organized. The automated testing systems and timely reporting helped us get important diagnostic insights quickly. The reports were comprehensive and professionally formatted.", author: "Ritu Agarwal" },
    { title: "Useful Health Monitoring Through Blood Tests", text: "Routine blood tests helped monitor my thyroid profile, blood sugar, vitamin levels, and overall wellness over time. Having access to regular laboratory diagnostics has been extremely useful for long-term health management.", author: "Vikram Shah" },
    { title: "Reliable Blood Testing for Routine Checkups", text: "I underwent routine blood testing for preventive screening, and the entire process was very smooth. The laboratory environment was clean, organized, and professionally managed. The reports were easy to understand and delivered promptly.", author: "Pooja Nair" },
    { title: "Professional Pathology Testing Services", text: "The pathology blood test process was efficient from registration to reporting. The laboratory team maintained excellent hygiene standards and explained the testing procedure clearly. The overall experience felt trustworthy and professionally handled.", author: "Arjun Verma" },
    { title: "Accurate Reports with Modern Laboratory Systems", text: "The diagnostic reports were detailed, accurate, and professionally prepared. The use of advanced laboratory analyzers and systematic workflow gave confidence in the quality of blood testing and pathology diagnostics.", author: "Meenal Kapoor" },
    { title: "Very Comfortable Blood Sample Collection", text: "I usually feel anxious during blood sample collection, but the process was quick and comfortable. The laboratory staff were supportive and professional, and the blood test reporting process was completed on schedule.", author: "Rohan Iyer" },
    { title: "Helpful Monitoring for Chronic Health Conditions", text: "Regular blood tests have helped monitor cholesterol levels, thyroid function, and blood sugar over time. Preventive laboratory testing has played an important role in maintaining my long-term health and wellness.", author: "Anjali Shah" },
    { title: "Good Experience with Preventive Blood Testing", text: "I booked preventive blood testing to better understand my health status and nutritional balance. The reports provided valuable information about important biomarkers and overall wellness indicators.", author: "Devendra Patil" },
    { title: "Well-Structured and Easy-to-Read Reports", text: "The blood test reports were clearly organized with proper values, ranges, and explanations. The laboratory process felt highly professional and made it easier to understand important diagnostic findings.", author: "Nisha Rao" },
    { title: "Efficient Laboratory Workflow and Timely Service", text: "From appointment scheduling to sample collection and final reporting, the entire blood testing experience was efficient and professionally coordinated. The turnaround time was quick, and the reports were highly detailed.", author: "Sameer Kulkarni" }
  ];

  // Split into two rows for the double marquee effect
  const row1 = testimonials.slice(0, 8);
  const row2 = testimonials.slice(8, 16);

  const highlights = [
    "Professional Laboratory Diagnostics",
    "Trusted for Preventive Blood Testing",
    "Reliable Clinical Pathology Services",
    "Advanced Laboratory Medicine and Biomarker Analysis"
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* CSS for Silky Smooth Auto-Scrolling Carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 65s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Trusted Patient Experiences with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Blood Testing Services
            </span>
          </h2>
        </div>

        <div className="grid xl:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* LEFT: Google Trust Signals (Massive 3D Card) */}
          <div className="xl:col-span-4 relative group perspective-1000">
            <div className="bg-white rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 transform transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(37,99,235,0.2)] h-full flex flex-col">
              
              {/* Header Image with Overlay */}
              <div className="relative h-56">
                <img 
                  src="https://storage.googleapis.com/wp-media-henoticbucket/Front%20Office/henotic-diagnostics-main-building.webp" 
                  alt="Henotic Diagnostics Main Corporate Building" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* GBP Avatar Badge */}
                <div className="absolute -bottom-8 left-6 bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
                  <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipNNi77McpTFT3ksGjloBcqV3he235QDZfbaYiCv=s1360-w1360-h1020-rw" 
                    alt="Henotic Profile" 
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </div>

              {/* Trust Content */}
              <div className="p-8 pt-12 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/google-icon-logo-svgrepo-com.svg" alt="Google" className="w-12 h-12 drop-shadow-md" />
                  <img src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/google-my-business-icon.webp" alt="Google Business Profile" className="w-12 h-12 drop-shadow-md" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Henotic Diagnostics</h3>
                
                <div className="flex items-end gap-4 mb-4">
                  <span className="text-6xl font-black text-gray-900 drop-shadow-sm leading-none">4.9</span>
                  <div className="pb-1">
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <img 
                          key={i} 
                          src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/yellow-star.webp" 
                          alt="Star" 
                          className="w-6 h-6 drop-shadow-[0_2px_4px_rgba(250,204,21,0.5)] transform hover:scale-110 transition-transform"
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 font-medium">Based on <strong className="text-gray-900">1,030</strong> Reviews</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a 
                    href="https://maps.google.com/?cid=11779150789147957572" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <img src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/Google_Maps_icon_(2020).svg.png" alt="Map" className="w-6 h-6 drop-shadow-sm" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Double Marquee Testimonial Carousel */}
          <div className="xl:col-span-8 overflow-hidden relative rounded-[30px] flex flex-col justify-center gap-6 py-4">
            
            {/* Fade Gradients for Carousel edges */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Row 1: Scrolling Left */}
            <div className="flex w-max animate-scroll-left carousel-track gap-6">
              {[...row1, ...row1].map((test, index) => (
                <div key={index} className="w-[400px] bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/yellow-star.webp" alt="Star" className="w-5 h-5 drop-shadow-sm" />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 leading-tight">{test.title}</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed relative">
                    <Quote className="absolute -top-2 -left-3 text-gray-100 w-8 h-8 -z-10 rotate-180" />
                    "{test.text}"
                  </p>
                  <p className="font-bold text-blue-900 border-t border-gray-50 pt-4">— {test.author}</p>
                </div>
              ))}
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="flex w-max animate-scroll-right carousel-track gap-6">
              {[...row2, ...row2].map((test, index) => (
                <div key={index} className="w-[400px] bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/yellow-star.webp" alt="Star" className="w-5 h-5 drop-shadow-sm" />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 leading-tight">{test.title}</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed relative">
                    <Quote className="absolute -top-2 -left-3 text-gray-100 w-8 h-8 -z-10 rotate-180" />
                    "{test.text}"
                  </p>
                  <p className="font-bold text-blue-900 border-t border-gray-50 pt-4">— {test.author}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM: Deep Gradient Summary Banner */}
        <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(30,58,138,0.3)] bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-10 md:p-14 transform transition-all hover:scale-[1.01] duration-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 font-bold text-sm tracking-wide uppercase backdrop-blur-md">
                <ShieldCheck size={18} /> Quality Assured
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Trusted Blood Testing for Preventive Healthcare and Diagnostic Evaluation
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Modern blood testing plays a vital role in preventive healthcare, early disease detection, biomarker analysis, chronic disease monitoring, and overall wellness assessment. Advanced pathology diagnostics, automated laboratory analyzers, and accurate clinical reporting help support informed healthcare decisions and long-term health management.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex gap-1 shrink-0 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/yellow-star.webp" alt="Star" className="w-4 h-4 drop-shadow-sm" />
                      ))}
                    </div>
                    <span className="text-white font-medium text-lg leading-tight">Rated for {highlight.replace('Rated for ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}