"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DuGood() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background on forest road image
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Title/Logo center reveal
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Description section reveal
      const descInner = descRef.current?.querySelector(".dugood-desc-inner");
      if (descInner) {
        gsap.fromTo(
          descInner,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Scroll translation (speed 1.4)
      if (typeof window !== "undefined" && window.innerWidth >= 768 && descRef.current) {
        gsap.to(descRef.current, {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col select-none">
      {/* Parallax Forest Section */}
      <section className="relative w-full h-[75vh] overflow-hidden flex flex-col items-center justify-center">
        {/* Parallax Image container */}
        <div className="absolute inset-0 w-full h-[135%] -top-[12%] z-0">
          <div
            ref={bgRef}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://duchateau.com/wp-content/uploads/2025/09/DuGood-forest-road.avif')",
            }}
          />
          {/* Gentle darkening overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Center Logo & Title */}
        <div ref={titleRef} className="relative z-10 text-center text-white px-6 flex flex-col items-center space-y-6">
          <h1 className="font-serif text-[4.3em] md:text-[8em] xl:text-[9.5em] font-normal uppercase tracking-[-0.2rem] leading-[0.9em] text-white">
            Sustainability
          </h1>
          <img
            src="/assets/duchateau-national-forest-white.svg"
            alt="National Forest Foundation Logo"
            className="h-10 w-auto opacity-95"
          />
        </div>
      </section>

      {/* Description / Restoration Section */}
      <section className="w-full bg-beige/65 py-28 px-6 md:px-16 flex justify-center items-center text-center">
        <div ref={descRef} className="max-w-4xl flex flex-col items-center">
          <div className="dugood-desc-inner flex flex-col items-center space-y-8 w-full">
            <h3 className="font-serif text-[2em] md:text-[2.5em] xl:text-[3em] font-normal uppercase tracking-[-0.1rem] leading-[0.9em] text-black max-w-2xl">
              Design your dream home with us
            </h3>
            <p className="font-serif text-[20px] md:text-[1.4em] font-normal leading-[1.3em] md:leading-[1.2em] text-black/80 max-w-[490px] xl:max-w-[890px]">
              Vibrant Spaces believes nature is key to aesthetic, cognitive, and spiritual satisfaction. The company is involved in the development of Shiv Nadar School, Chennai, a sustainable campus conceptualized and designed by Dr. B. V. Doshi.
            </p>
            <Link
              href="/about#sustainability"
              className="font-heading text-[0.9em] uppercase underline underline-offset-[5px] hover:opacity-60 transition-opacity"
            >
              Discover more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
