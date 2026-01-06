import { CheckCircle } from "lucide-react";

export default function MedicalTechnology() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
            <img 
              src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/1a401b0d-henotic-diagnostics-mri-scan-ct-scan-pet-scan-dopa-scan-dtpa-scan.webp" 
              alt="Siemens MRI Machine" 
              className="relative rounded-3xl shadow-2xl z-10 w-full"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block">
              <div className="text-4xl font-black text-blue-600 mb-1">3 Tesla</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Silent Scan Technology</div>
            </div>
          </div>

          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Infrastructure</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Powered by Global Technology Leaders</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We partner with GE, Siemens, and Philips to bring hospital-grade imaging to an outpatient setting. Our machines are calibrated daily for maximum precision.
            </p>

            <div className="space-y-4">
              {[
                "128-Slice CT for Cardiac & Neuro Imaging",
                "3T Digital MRI with Ambient Experience",
                "Fully Automated Roche Immunology Analyzers",
                "Voluson E10 4D Ultrasound for Fetal Medicine"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="text-teal-500 flex-shrink-0" />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
