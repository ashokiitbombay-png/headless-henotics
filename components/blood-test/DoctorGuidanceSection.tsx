"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Microscope, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Languages, 
  Clock, 
  Building2, 
  Award, 
  PhoneCall, 
  ArrowRight,
  TestTube
} from "lucide-react";

export default function DoctorGuidanceSection() {
  const expertise = [
    "Pathology", "Microbiology", "Clinical Pathology", "Diagnostic Pathology", 
    "Hematology", "Cytology", "Histopathology", "Blood Investigations", 
    "Urine Analysis", "Tissue Biopsy Analysis"
  ];

  const memberships = [
    "Indian Medical Association (IMA)",
    "The Pathologist Association (TPA)",
    "Indian Association of Pathologists & Microbiologists (IAPM)"
  ];

  const experience = [
    "Pathologist & Blood Bank Incharge at Apollo Hospitals, Belapur",
    "Sr. Pathologist & Microbiologist in United CIIGMA Hospital, Aurangabad"
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Rounded 40px Luxury Container */}
        <div className="relative bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0f172a] rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50 transform translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 transform -translate-x-1/3 translate-y-1/4"></div>
          
          <div className="relative z-10 p-8 md:p-14 lg:p-20 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN: Content */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Header Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 font-bold text-sm tracking-wide uppercase backdrop-blur-md mb-6">
                  <Microscope size={16} /> Expert Pathologist
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                  Dr. Arti Chavan
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 text-blue-200 text-lg font-medium">
                  <span className="flex items-center gap-2">
                    <GraduationCap size={20} className="text-cyan-400" /> MBBS, DPB, PGDHHM
                  </span>
                  <span className="hidden sm:inline text-blue-500">•</span>
                  <span className="text-cyan-100">Sr. Pathologist & Microbiologist</span>
                </div>
              </motion.div>

              {/* Bio / Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-300 leading-relaxed text-lg"
              >
                <p>
                  Dr Arti Chavan is an experienced Consultant Pathologist Microbiologist at Henotic Diagnostics. She has over <strong className="text-white">25 years of experience</strong> and is recognized as one of the best pathologists in Navi Mumbai. She specializes in a wide range of diagnostic services, including blood investigations, urine analysis, tissue biopsy, cytology, histopathology and preventive screenings.
                </p>
              </motion.div>

              {/* Quick Facts Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid sm:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="text-cyan-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-wider font-bold mb-1">Experience</p>
                    <p className="text-white font-medium">25+ Years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="text-cyan-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-wider font-bold mb-1">Languages</p>
                    <p className="text-white font-medium">English, मराठी, हिन्दी</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-cyan-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-wider font-bold mb-1">Timings</p>
                    <p className="text-white font-medium">Mon to Sat 9:30 AM - 5:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-cyan-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="text-white font-medium">Mumbai & Navi Mumbai</p>
                  </div>
                </div>
              </motion.div>

              {/* Expertise Pills */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <TestTube className="text-cyan-400" size={20} /> Expertise & Treatments
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item, i) => (
                    <span key={i} className="bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-cyan-50 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10"
              >
                <a 
                  href="tel:08879327184" 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-[#0a192f] font-bold py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(34,211,238,0.3)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <PhoneCall size={20} /> Call for Appointment
                </a>
                <a 
                  href="https://maps.app.goo.gl/5tXrLNHL8SKLM6rYA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-md"
                >
                  <Building2 size={20} /> Get Directions
                </a>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: Image & Extra Details */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Image Container with 3D Border & Glow */}
                <div className="relative rounded-[30px] overflow-hidden border-[8px] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#112240] aspect-[4/5] group">
                  <img 
                    src="https://storage.googleapis.com/wp-media-henoticbucket/Doctors/dr-aarti-chavaun-best-radiologist-kharghar-henotic-diagnostics.webp" 
                    alt="Dr. Arti Chavan - Sr. Pathologist & Microbiologist" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Floating Name Tag */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl">
                    <p className="text-white font-bold text-lg leading-tight">Henotic Diagnostics</p>
                    <p className="text-cyan-300 text-sm">Sector 15, Kharghar, Panvel</p>
                  </div>
                </div>
              </motion.div>

              {/* Memberships & Past Experience Accordion-Style Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative -mt-12 z-20 mx-4 sm:mx-8 bg-[#112240] rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Award className="text-cyan-400" size={18} /> Past Experience
                    </h4>
                    <ul className="space-y-2">
                      {experience.map((exp, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <ArrowRight className="text-blue-500 shrink-0 mt-1" size={14} />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <GraduationCap className="text-cyan-400" size={18} /> Memberships
                    </h4>
                    <ul className="space-y-2">
                      {memberships.map((membership, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <ArrowRight className="text-blue-500 shrink-0 mt-1" size={14} />
                          <span>{membership}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}