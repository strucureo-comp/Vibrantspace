"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const IMAGES = [
  "https://duchateau.com/wp-content/uploads/2026/01/Guild-Flooring-Lartisien-Collection-Lucien-color-render-web-scaled.webp",
  "https://duchateau.com/wp-content/uploads/2026/01/Flooring-Beaujou-Collection-Coteu-Color-render-web-scaled.webp",
  "https://duchateau.com/wp-content/uploads/2026/01/Flooring-LArtisein-Collection-Auren-Color-scaled.webp",
  "https://duchateau.com/wp-content/uploads/2026/01/Guild-Flooring-Boiselle-Collection-Marune-Web-scaled.webp",
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax scroll on text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Cycle slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[95vh] bg-black overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={IMAGES[currentIdx]}
              alt="Duchateau Luxury Interior"
              className="w-full h-full object-cover animate-kenBurnsOut"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Center Details Overlay (Shield + Headings) */}
      <motion.div 
        style={{ y: logoY }}
        className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-6 pt-[40px]"
      >
        <img
          src="/assets/du-logo-mark-white.svg"
          alt="Duchateau Mark"
          className="h-14 w-auto mb-3 opacity-90 animate-fadeInDown"
        />
        
        <h2 className="text-white font-serif font-normal uppercase tracking-[-0.2rem] text-[18vw] md:text-[14vw] lg:text-[11vw] xl:text-[12em] leading-[0.9em] animate-fadeInUp">
          GUILD<span className="text-[0.1em] relative ml-0.5 inline-block font-sans" style={{ top: "-5.5em" }}>®</span>
        </h2>
        
        <p className="text-white font-serif font-normal tracking-[0rem] uppercase mt-1 text-[4vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[2em] leading-[0.9em] animate-fadeInUp-slow">
          The doorway into duchateau
        </p>
      </motion.div>

      {/* Bottom Large Watermark SVG Logo */}
      <div className="relative z-20 w-full overflow-visible flex justify-center">
        <motion.img
          style={{ y: textY }}
          src="/assets/du-logo-white.svg"
          alt="DUCHATEAU"
          className="w-full max-w-[2560px] h-[77px] md:h-[151px] object-contain select-none opacity-95 pointer-events-none relative -bottom-2 md:-bottom-4"
        />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent z-15 pointer-events-none" />
    </section>
  );
}