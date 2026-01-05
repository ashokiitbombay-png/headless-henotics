import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyDetails, serviceSlugs } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Henotic Diagnostics</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Advanced diagnostic services delivering precision and care. NABL accredited labs with 24/7 availability.
          </p>
          <div className="flex gap-4">
            {companyDetails.socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                {social.name === 'Facebook' && <Facebook size={20} />}
                {social.name === 'Twitter' && <Twitter size={20} />}
                {social.name === 'Instagram' && <Instagram size={20} />}
                {social.name === 'LinkedIn' && <Linkedin size={20} />}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-white font-semibold mb-6">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {serviceSlugs.slice(0, 6).map((slug) => (
              <li key={slug}>
                <Link href={`/${slug}`} className="hover:text-blue-400 capitalize transition">
                  {slug.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
              <span>{companyDetails.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <a href={`tel:${companyDetails.phone[0]}`}>{companyDetails.phone[0]}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours */}
        <div>
          <h4 className="text-white font-semibold mb-6">Working Hours</h4>
          <div className="flex items-center gap-3 mb-4">
            <Clock size={18} className="text-blue-500" />
            <span className="font-medium text-white">{companyDetails.workingHours}</span>
          </div>
          <p className="text-xs text-gray-500">
            Emergency services available. Home collection services operational from 7:00 AM to 9:00 PM.
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Henotic Diagnostics. All rights reserved.
      </div>
    </footer>
  );
}
