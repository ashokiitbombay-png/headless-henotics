export default function FacilityShowcase() {
  return (
    <section className="relative h-[600px] flex items-center">
      <img 
        src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/d05e7950-mri-scan-in-panvel-whole-body-brain-spine-mri.webp" 
        alt="Henotic Diagnostics Corporate Facility" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/60"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2">
         <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl text-white max-w-lg">
            <h3 className="text-3xl font-bold mb-4">State-of-the-Art Facility</h3>
            <p className="text-lg text-slate-200 mb-6 leading-relaxed">
              Our corporate headquarters in Kharghar spans 15,000 sq. ft., designed to provide a hospital-grade environment with the comfort of an outpatient center.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-400 rounded-full"></span> Dedicated MRI & CT Suites</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-400 rounded-full"></span> Automated Pathology Labs</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-400 rounded-full"></span> Premium Patient Lounges</li>
            </ul>
         </div>
      </div>
    </section>
  );
}
