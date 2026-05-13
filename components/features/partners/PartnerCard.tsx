import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Partner } from "@/config/partnerData";
import Link from "next/link";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="group flex flex-col justify-between bg-white rounded-2xl border border-gray-100 p-6 shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] relative overflow-hidden">
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600 transition-all duration-300 group-hover:h-2" />

      <div>
        {/* Core Henotic Branding */}
        <h3 className="text-xl font-bold text-blue-900 tracking-tight leading-tight mb-1">
          {partner.heading}
        </h3>
        <p className="text-xs font-semibold uppercase text-blue-600 tracking-wider mb-4">
          {partner.subHeading}
        </p>

        {/* Local Clinic Detail */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-800 bg-gray-50 inline-block px-3 py-1 rounded-md">
            {partner.clinicName}
          </p>
        </div>

        {/* NAP Data (Name, Address, Phone) */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <p className="text-sm text-gray-600 leading-relaxed">{partner.address}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-500 shrink-0" />
            <p className="text-sm text-gray-600 font-medium">{partner.hours}</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-500 shrink-0" />
            <a href={`tel:${partner.phone.replace(/[^0-9]/g, '')}`} className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors">
              {partner.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Google Maps Call to Action */}
      <div className="mt-auto grid grid-cols-1 gap-3">
        <Link 
          href={partner.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300"
        >
          <MapPin className="w-4 h-4" />
          View on Google Maps
        </Link>
        
        {partner.googleBusinessUrl && (
          <Link 
            href={partner.googleBusinessUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium py-3 px-4 rounded-xl transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Google Business Profile
          </Link>
        )}
      </div>
    </div>
  );
}
