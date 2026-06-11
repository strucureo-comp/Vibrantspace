"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Collaborations() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text headers
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Fade in video player wrapper
      if (videoWrapperRef.current) {
        gsap.fromTo(
          videoWrapperRef.current,
          { opacity: 0, y: 55 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-beige/65 py-24 px-6 md:px-16 flex flex-col items-center select-none"
    >
      <div className="w-full max-w-[1440px] flex flex-col space-y-12">
        
        {/* Top Headers Row */}
        <div ref={textRef} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
          <div className="flex flex-col text-left">
            <h3 className="font-serif text-[1.5em] md:text-[1.8em] xl:text-[2em] font-normal uppercase tracking-[-0.066rem] leading-[0.9em] text-black">
              Collaborations
            </h3>
            <h2 className="font-serif text-[2.3em] md:text-[2.8em] xl:text-[4em] font-normal uppercase tracking-[-0.2rem] leading-[0.9em] text-black mt-2">
              Martyn Lawrence Bullard
            </h2>
          </div>
          
          <a
            href="https://duchateau.com/collaborations/"
            className="font-heading text-[0.9em] uppercase underline underline-offset-[5px] hover:opacity-60 transition-opacity"
          >
            Meet your collaborator
          </a>
        </div>

        {/* Video Player Wrapper */}
        <div
          ref={videoWrapperRef}
          className="w-full aspect-video bg-black rounded-sm overflow-hidden shadow-2xl relative"
        >
          <video
            src="https://duchateau.com/wp-content/uploads/2026/02/MLB-Collection-Overview.mp4"
            autoPlay
            loop
            muted
            controls
            playsInline
            controlsList="nodownload"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
