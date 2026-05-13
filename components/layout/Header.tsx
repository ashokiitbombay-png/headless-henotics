"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, CalendarCheck, ChevronDown, ChevronUp } from "lucide-react";
import BookAppointmentModal from "@/components/features/appointments/BookAppointmentModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // State for Mobile Services Dropdown Toggle
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-lg ${
          scrolled ? "py-2" : "py-3"
        }`}
        style={{
          background: "linear-gradient(90deg, #4568dc 0%, #b06ab3 100%)"
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          {/* LOGO SECTION - Stacked Text */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/dc35eb9b-henotic-diagnostics-header-section-small-logo-01-scaled.webp" 
                alt="Henotic Icon" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md transition-transform group-hover:rotate-6"
              />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-sm group-hover:text-purple-100 transition-colors uppercase">
                  HENOTIC
                </span>
                <span className="text-purple-100 font-medium text-xs md:text-sm tracking-[0.15em] uppercase">
                  DIAGNOSTICS
                </span>
              </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 text-white font-medium text-sm tracking-wide">
            <Link href="/" className="hover:text-purple-100 transition">Home</Link>
            <Link href="/about-us" className="hover:text-purple-100 transition">About Us</Link>
            
            {/* DESKTOP SERVICES HOVER DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-purple-100 transition py-4">
                Services <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 text-slate-800 grid grid-cols-2 gap-8 border border-purple-100">
                 <div>
                   <h4 className="text-xs font-bold text-[#4568dc] uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Advanced Imaging</h4>
                   <ul className="space-y-2 text-sm">
                     <li><Link href="/mri-scan" className="hover:text-[#b06ab3] transition block">MRI Scan (3T)</Link></li>
                     <li><Link href="/ct-scan" className="hover:text-[#b06ab3] transition block">CT Scan (128 Slice)</Link></li>
                     <li><Link href="/pet-scan" className="hover:text-[#b06ab3] transition block">PET-CT Scan</Link></li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-xs font-bold text-[#b06ab3] uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Pathology & More</h4>
                   <ul className="space-y-2 text-sm">
                     <li><Link href="/blood-tests" className="hover:text-[#4568dc] transition block">Blood Tests</Link></li>
                     <li><Link href="/full-body-check-up" className="hover:text-[#4568dc] transition block">Full Body Checkup</Link></li>
                     <li><Link href="/ultrasound" className="hover:text-[#4568dc] transition block">Ultrasound / USG</Link></li>
                   </ul>
                 </div>
              </div>
            </div>

            <Link href="/contact" className="hover:text-purple-100 transition">Contact</Link>
          </nav>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:08879327184" className="flex items-center gap-2 text-white hover:text-purple-100 transition font-bold text-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Phone size={16} className="animate-pulse" /> 08879327184
            </a>
            
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-[#4568dc] hover:bg-purple-50 px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-xl transition-all flex items-center gap-2"
            >
              <CalendarCheck size={16} /> Book Appointment
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU DRAWER */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#4568dc] border-t border-white/20 shadow-xl text-white p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[85vh] overflow-y-auto">
            
            <Link href="/" className="text-lg font-semibold py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            
            <Link href="/about-us" className="text-lg font-semibold py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            
            {/* MOBILE SERVICES ACCORDION */}
            <div className="py-3 border-b border-white/10">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-lg font-semibold opacity-100 focus:outline-none"
              >
                Services
                {isMobileServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {/* Expandable Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? "max-h-[500px] mt-3 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="pl-4 space-y-3 text-sm border-l-2 border-white/20 ml-2">
                   {/* Group 1 */}
                   <div>
                     <p className="text-purple-200 font-bold text-xs uppercase tracking-wider mb-2">Advanced Imaging</p>
                     <Link href="/mri-scan" className="block py-1 hover:text-purple-100" onClick={() => setIsOpen(false)}>MRI Scan (3T)</Link>
                     <Link href="/ct-scan" className="block py-1 hover:text-purple-100" onClick={() => setIsOpen(false)}>CT Scan (128 Slice)</Link>
                     <Link href="/pet-scan" className="block py-1 hover:text-purple-100" onClick={() => setIsOpen(false)}>PET-CT Scan</Link>
                   </div>
                   
                   {/* Group 2 */}
                   <div>
                     <p className="text-purple-200 font-bold text-xs uppercase tracking-wider mb-2 mt-2">Pathology</p>
                     <Link href="/blood-tests" className="block py-1 hover:text-purple-100" onClick={() => setIsOpen(false)}>Blood Tests</Link>
                     <Link href="/full-body-check-up" className="block py-1 hover:text-purple-100" onClick={() => setIsOpen(false)}>Full Body Checkup</Link>
                   </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-lg font-semibold py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            
            {/* Mobile Actions */}
            <div className="mt-4 space-y-3">
              <a href="tel:08879327184" className="w-full flex justify-center items-center gap-2 py-3 rounded-lg border border-white/30 text-white font-bold hover:bg-white/10 transition">
                <Phone size={18} /> Call 08879327184
              </a>
              <button 
                onClick={() => { setIsBookingOpen(true); setIsOpen(false); }}
                className="w-full bg-white text-[#4568dc] py-3 rounded-lg font-bold flex justify-center items-center gap-2 shadow-lg"
              >
                <CalendarCheck size={18} /> Book Appointment
              </button>
            </div>

          </div>
        )}
      </header>

      {/* RENDER MODAL */}
      <BookAppointmentModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
