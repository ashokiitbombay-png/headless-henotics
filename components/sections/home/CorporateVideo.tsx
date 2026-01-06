"use client";
import { useRef, useState } from "react";
import { Play, Volume2, VolumeX, Pause } from "lucide-react";

export default function CorporateVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
           <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2 block">Corporate Overview</span>
           <h2 className="text-3xl lg:text-5xl font-bold text-white">Trusted Healthcare Partner</h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group max-w-5xl mx-auto">
          <video 
            ref={videoRef}
            src="https://storage.googleapis.com/wp-media-henoticbucket/2026/01/4e1a5cd1-henotic_diagnostics_trusted_health_care-corporate-video.mp4"
            className="w-full h-auto aspect-video object-cover"
            loop
            muted={false} // Initially allow sound if user interacts
            controls={false}
          />
          
          {/* Custom Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all duration-300">
             {!isPlaying && (
               <button onClick={togglePlay} className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition border border-white/50 text-white">
                 <Play size={32} fill="currentColor" />
               </button>
             )}
          </div>

          <div className="absolute bottom-6 right-6 flex gap-4">
             <button onClick={togglePlay} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition">
               {isPlaying ? <Pause size={20} /> : <Play size={20} />}
             </button>
             <button onClick={toggleMute} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition">
               {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
