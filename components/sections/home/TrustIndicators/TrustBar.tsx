import { trustMetrics, accreditations } from "./trustIndicators.config";
import { ShieldCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-100 relative z-20 -mt-10 mx-6 rounded-2xl shadow-xl overflow-hidden">
      <div className="grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* Metric 1: Accuracy */}
        <div className="p-8 flex items-center gap-4 group hover:bg-slate-50 transition">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <ShieldCheck size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">99.7%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Diagnostic Accuracy</div>
          </div>
        </div>

        {/* Metric 2: Accreditation */}
        <div className="p-8 flex items-center gap-4 group hover:bg-slate-50 transition">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-black text-xs">NABL</span>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">NABL Accredited</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">ISO 15189:2012</div>
          </div>
        </div>

        {/* Metric 3: Volume */}
        <div className="p-8 flex items-center gap-4 group hover:bg-slate-50 transition">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-black text-xs">1.2M+</span>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">Tests Processed</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Since 2012</div>
          </div>
        </div>

        {/* Metric 4: Technology */}
        <div className="p-8 flex items-center gap-4 group hover:bg-slate-50 transition">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-black text-xs">3T</span>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">3 Tesla MRI</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gold Standard</div>
          </div>
        </div>

      </div>
    </section>
  );
}
