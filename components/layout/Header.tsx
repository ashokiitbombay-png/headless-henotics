"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, CalendarCheck, ChevronDown } from "lucide-react";
import { companyDetails } from "@/lib/constants";
import BookAppointmentModal from "@/components/features/BookAppointmentModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-lg ${scrolled ? "py-2" : "py-3"}`}
        style={{ background: "linear-gradient(90deg, #4568dc 0%, #b06ab3 100%)" }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          <Link href="/" className="flex items-center gap-3 group relative z-50">
             <img src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/a91acb36-henotic-diagnostics-site-icon-no-background-scaled-e1767760900405.webp" alt="Henotic Icon" className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md transition-transform group-hover:rotate-6" />
             <div className="flex flex-col leading-none">
               <span className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-sm group-hover:text-purple-100 transition-colors">Henotic</span>
               <span className="text-purple-100 font-medium text-xs md:text-sm tracking-[0.15em] uppercase">Diagnostics</span>
             </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-white font-medium text-sm tracking-wide">
            <Link href="/" className="hover:text-purple-100 transition">Home</Link>
            <Link href="/about-us" className="hover:text-purple-100 transition">About Us</Link>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-purple-100 transition py-4">Services <ChevronDown size={14} /></button>
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

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:08879327184" className="flex items-center gap-2 text-white hover:text-purple-100 transition font-bold text-sm bg-white/10 px-4 py-2 rounded-full border border-white/20"><Phone size={16} className="animate-pulse" /> 08879327184</a>
            <button onClick={() => setIsBookingOpen(true)} className="bg-white text-[#4568dc] hover:bg-purple-50 px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-xl transition-all flex items-center gap-2"><CalendarCheck size={16} /> Book Appointment</button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#4568dc] border-t border-white/20 shadow-xl text-white p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
            <Link href="/" className="text-lg font-semibold py-2 border-b border-white/10">Home</Link>
            <Link href="/about-us" className="text-lg font-semibold py-2 border-b border-white/10">About Us</Link>
            <div className="py-2 border-b border-white/10"><span className="text-lg font-semibold block mb-2 opacity-80">Services</span><div className="pl-4 space-y-2 text-sm"><p className="text-purple-200 font-bold text-xs uppercase mt-2">Advanced Imaging</p><Link href="/mri-scan" className="block py-1">MRI Scan (3T)</Link><Link href="/ct-scan" className="block py-1">CT Scan (128 Slice)</Link><Link href="/pet-scan" className="block py-1">PET-CT Scan</Link><p className="text-purple-200 font-bold text-xs uppercase mt-4">Pathology</p><Link href="/blood-tests" className="block py-1">Blood Tests</Link><Link href="/full-body-check-up" className="block py-1">Full Body Checkup</Link></div></div>
            <Link href="/contact" className="text-lg font-semibold py-2 border-b border-white/10">Contact</Link>
            <button onClick={() => { setIsBookingOpen(true); setIsOpen(false); }} className="bg-white text-[#4568dc] text-center py-3 rounded-lg font-bold mt-4 flex justify-center items-center gap-2"><CalendarCheck size={18} /> Book Appointment</button>
          </div>
        )}
      </header>
      <BookAppointmentModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
