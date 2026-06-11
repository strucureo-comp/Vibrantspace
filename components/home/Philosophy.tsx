"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal first text
      if (text1Ref.current) {
        gsap.fromTo(
          text1Ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Reveal second text with a slight delay
      if (text2Ref.current) {
        gsap.fromTo(
          text2Ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-16 max-w-[1600px] mx-auto bg-white text-black flex flex-col items-center justify-center text-center">
      <h2 ref={text1Ref} className="font-serif text-4xl md:text-6xl font-light mb-8 max-w-4xl mx-auto leading-tight">
        A legacy of visionary design, masterful craftsmanship, and uncompromising quality.
      </h2>
      <p ref={text2Ref} className="font-sans text-sm tracking-[0.1em] uppercase border-b border-black pb-1 hover:opacity-70 transition-opacity cursor-pointer">
        Discover Our Story
      </p>
    </section>
  );
}
