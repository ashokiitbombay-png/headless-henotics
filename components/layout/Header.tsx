"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, CalendarCheck } from "lucide-react";
import { companyDetails } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-premium flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-medical-900 to-medical-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-glow transition-transform group-hover:scale-105">
            H
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-none tracking-tight">HENOTIC</h1>
            <p className="text-[10px] font-bold text-medical-600 tracking-[0.2em] uppercase">Diagnostics</p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <Link href="/" className="hover:text-medical-600 transition-colors">Home</Link>
          <div className="relative group cursor-pointer py-2">
            <span className="flex items-center gap-1 hover:text-medical-600 transition-colors">
              Services <ChevronDown size={14} />
            </span>
            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 grid grid-cols-2 gap-6 z-50">
               <div>
                 <h4 className="text-medical-900 font-bold mb-3 uppercase text-xs tracking-wider">Advanced Imaging</h4>
                 <ul className="space-y-2 text-slate-500">
                   <li><Link href="/mri-scan" className="hover:text-medical-600 block">MRI Scan (3T)</Link></li>
                   <li><Link href="/ct-scan" className="hover:text-medical-600 block">CT Scan (128 Slice)</Link></li>
                   <li><Link href="/pet-scan" className="hover:text-medical-600 block">PET-CT Scan</Link></li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-teal-900 font-bold mb-3 uppercase text-xs tracking-wider">Pathology & More</h4>
                 <ul className="space-y-2 text-slate-500">
                   <li><Link href="/blood-tests" className="hover:text-medical-600 block">Blood Tests</Link></li>
                   <li><Link href="/full-body-checkup" className="hover:text-medical-600 block">Full Body Checkup</Link></li>
                   <li><Link href="/ultrasound" className="hover:text-medical-600 block">Ultrasound / USG</Link></li>
                 </ul>
               </div>
            </div>
          </div>
          <Link href="/about-us" className="hover:text-medical-600 transition-colors">About Us</Link>
          <Link href="/contact-us" className="hover:text-medical-600 transition-colors">Contact</Link>
        </nav>

        {/* CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${companyDetails.phone[0]}`} className="flex items-center gap-2 text-medical-900 font-bold text-sm group">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
               <Phone size={16} className="text-medical-600" />
            </div>
            <span>{companyDetails.phone[0]}</span>
          </a>
          <Link href="/contact-us" className="bg-medical-900 hover:bg-medical-800 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20 transition-all hover:shadow-blue-900/40 flex items-center gap-2">
            <CalendarCheck size={16} /> Book Appointment
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4 md:hidden">
          <Link href="/" className="text-lg font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/mri-scan" className="text-lg font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/contact-us" className="text-lg font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <a href={`tel:${companyDetails.phone[0]}`} className="bg-medical-600 text-white text-center py-3 rounded-xl font-bold">Call Now</a>
        </div>
      )}
    </header>
  );
}
