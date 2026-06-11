"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroHeader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for video
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Fade out and translate text on scroll
      if (textRef.current) {
        gsap.to(textRef.current, {
          y: -100,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <video
          ref={videoRef}
          src="https://duchateau.com/wp-content/uploads/2026/02/MLB-Collection-Overview.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 ref={textRef} className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide uppercase">
          Martyn Lawrence Bullard
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-fadeInUp-slow">
        <span className="text-white/70 text-xs tracking-[0.2em] uppercase mb-2 font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[fadeInDown_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
}
