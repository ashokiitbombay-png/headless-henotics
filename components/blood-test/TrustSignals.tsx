"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function GoogleReviews() {
  // Constants based on your provided data
  const RATING = 4.9;
  const REVIEW_COUNT = "1,030";
  const MAPS_URL = "https://maps.google.com/?cid=11779150789147957572";
  
  // JSON-LD Schema for Google Rich Snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Henotic Diagnostics",
    "image": "https://storage.googleapis.com/wp-media-henoticbucket/Front%20Office/henotic-diagnostics-main-building.webp",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": RATING.toString(),
      "reviewCount": REVIEW_COUNT.replace(",", ""),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <section className="py-16 bg-gray-50/50 relative overflow-hidden">
      {/* Inject JSON-LD Schema */}
      <Script id="google-review-schema" type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </Script>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10 transform transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-8 items-center">
          
          {/* LEFT COLUMN: RATINGS & TRUST SIGNALS */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/google-icon-logo-svgrepo-com.svg" 
                alt="Google" 
                className="w-10 h-10 drop-shadow-md"
              />
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/google-my-business-icon.webp" 
                alt="Google Business Profile" 
                className="w-10 h-10 drop-shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800 ml-2">Customer Reviews</h3>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 justify-center md:justify-start">
              <span className="text-6xl font-black text-gray-900 drop-shadow-lg tracking-tighter">
                {RATING}
              </span>
              <div className="space-y-1">
                {/* 5 Yellow Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img 
                      key={i}
                      src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/yellow-star.webp" 
                      alt="Star" 
                      className="w-7 h-7 drop-shadow-[0_4px_4px_rgba(250,204,21,0.4)] transform hover:scale-110 transition-transform cursor-default"
                    />
                  ))}
                </div>
                <p className="text-gray-500 font-medium text-sm">
                  Based on <span className="font-bold text-gray-800">{REVIEW_COUNT}</span> reviews
                </p>
              </div>
            </div>

            <Link 
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/Google_Maps_icon_(2020).svg.png" 
                alt="Maps" 
                className="w-5 h-5 drop-shadow-sm"
              />
              View on Google Maps
            </Link>
          </div>

          {/* RIGHT COLUMN: VISUAL CONTEXT & MAP EMBED (3D Floating Effect) */}
          <div className="flex-1 w-full relative group">
            {/* 3D Floating Building Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://storage.googleapis.com/wp-media-henoticbucket/Front%20Office/henotic-diagnostics-main-building.webp" 
                alt="Henotic Diagnostics Main Building" 
                className="w-full h-64 object-cover object-center"
              />
              {/* Dark Overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Profile Image Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-full shadow-xl border border-white/50">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipNNi77McpTFT3ksGjloBcqV3he235QDZfbaYiCv=s1360-w1360-h1020-rw" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md bg-gray-200 object-cover"
                  onError={(e) => {
                    // Fallback just in case the profile picture URL is a placeholder
                    e.currentTarget.src = "https://storage.googleapis.com/wp-media-henoticbucket/ICONS-SYMBOLS/google-icon-logo-svgrepo-com.svg";
                  }}
                />
                <span className="text-sm font-bold text-gray-800">Henotic Diagnostics</span>
              </div>
            </div>
            
            {/* Decorative 3D Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

        </div>
      </div>
    </section>
  );
}