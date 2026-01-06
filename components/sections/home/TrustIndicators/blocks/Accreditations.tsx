import React from "react";
import { CheckCircle } from "lucide-react";

export default function Accreditations() {
  return (
    <section id="accreditations" className="w-full relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 drop-shadow-sm">Our Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 drop-shadow-sm">Benchmarks of Excellence</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Henotic Diagnostics stands among the elite laboratories globally, holding the trifecta of supreme quality accreditations.
          </p>
        </div>

        {/* 3D Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">

          {/* CAP Card */}
          <article className="group relative bg-white rounded-3xl p-8 border border-slate-100 h-full flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-3xl"></div>
            
            <div className="relative w-48 h-32 mb-8 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/2025/12/6980ef5c-cap-accredited-lab-henotic-diagnostics.webp" 
                alt="CAP Accredited Logo" 
                className="relative z-10 w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h4 className="text-2xl font-serif font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
              CAP Accredited
            </h4>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">College of American Pathologists</h5>

            <p className="text-slate-600 leading-relaxed text-sm text-justify mb-auto">
              Achieving accreditation from the College of American Pathologists (CAP) places Henotic Diagnostics among an exclusive group of laboratories worldwide. Considered the "Gold Standard" in pathology, this rigorous program inspects laboratory practices, equipment calibration, and staff qualifications.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-50 w-full">
              <span className="text-blue-600 font-semibold text-sm flex items-center justify-center gap-2">
                Global Gold Standard
                <CheckCircle size={16} />
              </span>
            </div>
          </article>

          {/* NABL Card */}
          <article className="group relative bg-white rounded-3xl p-8 border border-slate-100 h-full flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/10">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-t-3xl"></div>
            
            <div className="relative w-48 h-32 mb-8 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-yellow-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/2025/12/67415d7c-nabl-accrediated-lab-henotic-diagnostics.webp" 
                alt="NABL Accredited Logo" 
                className="relative z-10 w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h4 className="text-2xl font-serif font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">
              NABL Accredited
            </h4>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">ISO 15189:2012 Certified</h5>

            <p className="text-slate-600 leading-relaxed text-sm text-justify mb-auto">
              NABL accreditation verifies our strict adherence to ISO 15189 standards, ensuring every test result is precise, reproducible, and technically valid. Our facility undergoes rigorous third-party audits to maintain this status, providing patients with the ultimate assurance of technical competence.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-50 w-full">
              <span className="text-yellow-600 font-semibold text-sm flex items-center justify-center gap-2">
                Technical Competence
                <CheckCircle size={16} />
              </span>
            </div>
          </article>

          {/* CDC Card */}
          <article className="group relative bg-white rounded-3xl p-8 border border-slate-100 h-full flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-3xl"></div>
            
            <div className="relative w-48 h-32 mb-8 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-indigo-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/2025/12/1e590b8f-cdc-accrediated-lab-henotic-diagnostics.webp" 
                alt="CDC Certified Logo" 
                className="relative z-10 w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h4 className="text-2xl font-serif font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">
              CDC Certified
            </h4>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">LSP - CRMLN Program</h5>

            <p className="text-slate-600 leading-relaxed text-sm text-justify mb-auto">
              Our participation in CDC-standardized programs demonstrates our dedication to accuracy in chronic disease management. This certification ensures that our testing protocols align with United States federal standards for precision and bias control, particularly in complex lipid assessments.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-50 w-full">
              <span className="text-indigo-700 font-semibold text-sm flex items-center justify-center gap-2">
                Standardized Accuracy
                <CheckCircle size={16} />
              </span>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
