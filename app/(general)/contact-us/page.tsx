import { companyDetails } from "@/lib/constants";
import PremiumBookingForm from "@/components/ui/PremiumBookingForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Henotic Diagnostics",
  description: "Schedule your MRI, CT Scan, or Pathology test online. Fast and secure booking for Navi Mumbai centers.",
};

export default function ContactUs() {
  return (
    <main className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Contact & Booking</h1>
        <p className="text-slate-600 text-lg">
          Visit our centers or book online. We are open 24/7 for emergency services.
        </p>
      </div>

      {/* The Premium Form */}
      <div className="px-4 mb-20">
        <PremiumBookingForm />
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 max-w-6xl">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <Phone size={28} />
          </div>
          <h3 className="font-bold text-slate-900 text-xl mb-2">Call Us</h3>
          <p className="text-slate-500 mb-4">24/7 Helpline for queries</p>
          <a href={`tel:${companyDetails.phone[0]}`} className="text-lg font-black text-blue-700 hover:underline">{companyDetails.phone[0]}</a>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-4">
            <MapPin size={28} />
          </div>
          <h3 className="font-bold text-slate-900 text-xl mb-2">Main Center</h3>
          <p className="text-slate-500 mb-4">Kharghar, Navi Mumbai</p>
          <a href={companyDetails.googleMapsLink} target="_blank" className="text-teal-700 font-bold hover:underline">Get Directions</a>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
            <Mail size={28} />
          </div>
          <h3 className="font-bold text-slate-900 text-xl mb-2">Email Support</h3>
          <p className="text-slate-500 mb-4">For reports & corporate</p>
          <a href={`mailto:${companyDetails.email}`} className="text-purple-700 font-bold hover:underline">{companyDetails.email}</a>
        </div>
      </div>

    </main>
  );
}
