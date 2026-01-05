import Link from 'next/link';
import { ArrowRight, Activity, ShieldCheck, Clock, Award } from 'lucide-react';
import { serviceSlugs } from '@/lib/constants';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579684385136-137af18db23d?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800 border border-blue-700 text-blue-200 text-sm font-semibold mb-6">
            Trusted by 50,000+ Patients
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Precision Diagnostics.<br/>
            <span className="text-teal-400">Human Care.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Experience world-class pathology and radiology services in Navi Mumbai. Accurate reports, advanced technology, and 24/7 availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition shadow-xl flex items-center justify-center gap-2">
              Book Appointment <ArrowRight size={20} />
            </Link>
            <Link href="/about-us" className="border border-blue-400 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition flex items-center justify-center">
              Our Centers
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Open 24/7", desc: "Emergency services round the clock." },
              { icon: ShieldCheck, title: "NABL Accredited", desc: "Highest standard of quality assurance." },
              { icon: Activity, title: "Advanced Tech", desc: "Latest MRI & CT Scan machines." },
              { icon: Award, title: "Expert Doctors", desc: "Verified radiologists and pathologists." },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition text-center">
                <f.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {serviceSlugs.map((slug) => (
              <Link 
                key={slug} 
                href={`/${slug}`} 
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 border border-transparent transition flex items-center justify-center font-medium capitalize text-gray-700"
              >
                {slug.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
