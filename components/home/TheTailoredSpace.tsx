"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheTailoredSpace() {
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal column 1 inner (heading)
      const inner1 = col1Ref.current?.querySelector(".tailored-col-inner");
      if (inner1) {
        gsap.fromTo(
          inner1,
          { opacity: 0, y: 50 },
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

      // Reveal column 2 inner (paragraph and link)
      const inner2 = col2Ref.current?.querySelector(".tailored-col-inner");
      if (inner2) {
        gsap.fromTo(
          inner2,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Continuous Scroll Parallax Translation
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        // Section translation (speed 1.7)
        if (sectionRef.current) {
          gsap.to(sectionRef.current, {
            y: -85,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // Column 1 translation (speed 1.3)
        if (col1Ref.current) {
          gsap.to(col1Ref.current, {
            y: -65,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // Column 2 translation (speed 1.3)
        if (col2Ref.current) {
          gsap.to(col2Ref.current, {
            y: -65,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-6 md:px-16 w-full bg-white select-none">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] items-start max-w-[1440px] mx-auto">
        
        {/* Left Column: Heading with responsive line breaks */}
        <div ref={col1Ref} className="flex flex-col items-start md:items-end text-left md:text-right w-full">
          <div className="tailored-col-inner flex flex-col items-start md:items-end text-left md:text-right w-full">
            {/* Desktop heading */}
            <h2 className="hidden md:block font-serif text-[3.2em] xl:text-[3.7em] font-normal uppercase tracking-[-0.2rem] leading-[1em] text-black text-right">
              THE <br />TAILORED <br />SPACE
            </h2>
            {/* Mobile heading */}
            <h2 className="block md:hidden font-serif text-[2.5em] font-normal uppercase tracking-[-0.2rem] leading-[1em] text-black text-left">
              THE TAILORED<br /> SPACE
            </h2>
          </div>
        </div>

        {/* Right Column: Exact paragraph texts & Inspired link */}
        <div ref={col2Ref} className="flex flex-col items-start text-left mt-2 md:mt-4">
          <div className="tailored-col-inner flex flex-col items-start text-left w-full">
            <p className="font-serif text-[20px] md:text-[1.4em] font-normal leading-[1.3em] text-black/85 w-[90%] md:w-[51%] max-w-full">
              We have a penchant for unreasonable beauty. Details that others might not notice, we obsess over. Our designs reflect who you are and inspire who you want to be.
              <br /><br />
              At DUCHATEAU<sup className="text-[10px]">®</sup>, we champion a very specific vision: Yours. Welcome to your tailored space.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
