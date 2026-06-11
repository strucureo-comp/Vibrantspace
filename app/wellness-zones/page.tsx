"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CONCEPTS = [
  {
    title: "Water-Therapeutic Spaces",
    desc: "Experience spa-like water systems, including customizable rainfall showerheads, body jets, and temperature-controlled steam setups to unwind after a high-intensity day."
  },
  {
    title: "Bespoke Vanity Cabinetry",
    desc: "A neat blend of designer washbasins and custom moisture-resistant under-counter cabinetry to conceal plumbing and organize towels and personal care items in style."
  },
  {
    title: "Quiet Seclusion Zones",
    desc: "A combination of ambient dimmable LED backlights, natural stone elements, and acoustic layout separations to promote mental well-being and peaceful isolation."
  }
];

export default function WellnessZonesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsToAnimate = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsToAnimate.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const addToAnimate = (el: HTMLElement | null) => {
    if (el && !elementsToAnimate.current.includes(el)) {
      elementsToAnimate.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen pt-20">
      {/* ── Hero ── */}
      <section className="relative w-full h-[60vh] bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="https://vibrantspaces.in/wp-content/uploads/2019/09/oneside-01.png"
          alt="Bathroom Designs for Every Budget"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Wellness Zones
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Promoting Physical & Mental Well-being
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              WELLNESS & HARMONY
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              A Sanctuary of Unwinding
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              Concepts for wellness zones or bathrooms call for a delicate balance that promotes user welfare in terms of both physical and mental well-being. It's a blend of health products that clear our minds and enhance the feel of the bathroom.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              Over the course of a lifetime, the average person will spend 1.5 years in the restroom. It's a great spot to unwind. Maybe there's nothing better than a nice, hot bath or shower to help you release stress after a hectic day. Consider bringing that kind of luxury experience into your residence.
            </p>
          </div>

          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden opacity-0">
            <Image
              src="https://vibrantspaces.in/wp-content/uploads/2019/09/marbel.jpg"
              alt="Luxury Spa Style Bathroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
              CONCEPTS
            </span>
            <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
              Spa & Vanity Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CONCEPTS.map((concept, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-white p-8 border border-gray-100 hover:border-[#C5A880] transition-all duration-300 opacity-0"
              >
                <h3 className="font-serif text-xl uppercase mb-4 text-black">{concept.title}</h3>
                <p className="font-sans text-gray-500 font-light text-sm leading-relaxed">{concept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-black text-white px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Build Your Wellness Sanctuary</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Create water-therapeutic spaces where you can gear up for the intensity of daily life and unwind in quiet seclusion.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Request Bathroom Design
          </Link>
        </div>
      </section>
    </div>
  );
}
