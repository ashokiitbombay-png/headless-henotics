import Link from 'next/link';
import { citySlugs, companyDetails } from '@/lib/constants';
import { getServiceContent } from '@/lib/content-engine';
import { Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best ct-scan Centers in Mumbai | Henotic Diagnostics',
  description: 'Book ct-scan in Mumbai. NABL Accredited Labs, Best Price, Home Collection available.',
};

export default function ServicePhysicalPage() {
  const serviceSlug = 'ct-scan';
  // Default to Mumbai content for the hub page
  const content = getServiceContent(serviceSlug, 'Mumbai');

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 border border-blue-500 text-blue-300 text-xs font-bold mb-6 uppercase tracking-wider">
            Premium Diagnostic Service
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
            {serviceSlug.replace(/-/g, ' ')} Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            {content.scientificDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            {/* FIXED LINK SYNTAX BELOW */}
            <a href={'tel:' + companyDetails.phone[0]} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition flex items-center gap-2">
              <Phone size={20} /> Book Now
            </a>
            <div className="flex items-center gap-2 text-sm font-medium bg-gray-800 px-5 py-3 rounded-full border border-gray-700">
               <CheckCircle size={16} className="text-green-400" /> NABL Accredited
            </div>
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW & INFO */}
      <div className="container mx-auto px-6 -mt-10 relative z-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About this Test</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {content.imagingContext}
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
            <h3 className="font-bold text-blue-900 mb-2">Technical Specifications</h3>
            <p className="text-blue-800 text-sm">{content.techSpecs}</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Why is it done?</h3>
          <ul className="grid md:grid-cols-2 gap-3 mb-6">
            {content.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <CheckCircle size={16} className="text-teal-500 mt-0.5 shrink-0" /> {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. SIDEBAR: PRICING */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Pricing Packages</h3>
            <div className="space-y-4">
              {content.pricing.map((plan, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-800">{plan.name}</span>
                    <span className="text-blue-600 font-bold">{plan.price}</span>
                  </div>
                  <p className="text-xs text-gray-500">{plan.features.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. LOCATION MATRIX */}
      <div className="container mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Locations in Mumbai</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {citySlugs.map((city) => (
            <Link 
              key={city}
              // FIXED LINK SYNTAX HERE TOO
              href={'/' + serviceSlug + '/' + city}
              className="group flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition text-sm font-medium text-gray-600 hover:text-blue-600 capitalize"
            >
              {city.replace(/-/g, ' ')}
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
