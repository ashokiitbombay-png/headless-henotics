import { companyDetails } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: "Contact Henotic Diagnostics | Kharghar",
  description: "Visit us at Sector 15 Kharghar. Open 24 Hours. Call 08879327184 for appointments.",
};

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-blue-200">We are here to help you 24/7</p>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed mt-1">{companyDetails.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600 mt-1">
                    <a href={`tel:${companyDetails.phone[0]}`} className="hover:text-blue-600 block">{companyDetails.phone[0]}</a>
                    <a href={`tel:${companyDetails.phone[1]}`} className="hover:text-blue-600 block">{companyDetails.phone[1]}</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Working Hours</h3>
                  <p className="text-gray-600 mt-1">{companyDetails.workingHours}</p>
                  <p className="text-sm text-green-600 font-medium mt-1">? Open Now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="space-y-8">
             {/* Map Embed */}
            <div className="bg-white p-2 rounded-2xl shadow-lg overflow-hidden h-80 relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.916170669286!2d73.0765!3d19.0234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21bd3d8434b%3A0xe966bf400cb80a2d!2sHenotic%20Diagnostics!5e0!3m2!1sen!2sin!4v1704440000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>

            {/* Simple Form */}
            <form className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                <textarea rows={3} placeholder="How can we help?" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                <button className="w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition">Submit Request</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
