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
    title: "Hassle-free experience",
    desc: "We manage the entire project from end-to-end, ensuring a smooth and stress-free building journey for you."
  },
  {
    title: "Delivery on schedule",
    desc: "Our rigorous project management ensures that your home is delivered on time, as promised."
  },
  {
    title: "Multiple quality checks",
    desc: "Every stage of construction undergoes strict quality assessments to ensure the highest standards."
  },
  {
    title: "No cost overruns",
    desc: "Transparent pricing and careful planning mean you don't have to worry about unexpected expenses."
  },
  {
    title: "Money protection",
    desc: "We offer escrow facilities and transparent payment milestones to protect your investment."
  },
  {
    title: "Weekly progress updates",
    desc: "Stay informed with regular reports and photos of the progress being made on your site."
  }
];

export default function DisplayPage() {
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
          src="https://vibrantspaces.in/wp-content/uploads/2020/12/shutterstock_645138688-2opt.jpg"
          alt="Home Construction & Transformation"
          fill
          className="object-cover opacity-50 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Construction & Transformation
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Quality | Custom | Aesthetic
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              BESPOKE HOMES
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              Bespoke Homes Built From Scratch
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              Vibrant Spaces combines architecture, bespoke interiors, and sustainability initiatives to offer home construction and renovation services. We conceptualize, design, and build homes that combine personalized design, smart technology, and luxury amenities to complement your lifestyle.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              Transforming an old home into a new one is an art. We help transform older homes through renovation, refurbishment, and revitalization. The goal is to retain memory and character while making the home more functional, current, and valuable.
            </p>
          </div>

          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden opacity-0">
            <Image
              src="https://vibrantspaces.in/wp-content/uploads/2024/04/04.jpg"
              alt="Home Construction & Renovation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Concepts Grid ── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
              WHY CHOOSE US
            </span>
            <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
              Construction Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONCEPTS.map((concept, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-white p-8 border border-gray-100 hover:border-[#C5A880] transition-colors duration-300 opacity-0"
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
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Build Your Dream Home</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Experience transparency at every stage and a 5-year service warranty on your new home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
