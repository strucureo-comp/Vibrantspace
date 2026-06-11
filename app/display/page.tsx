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
    title: "TV & Media Consoles",
    desc: "Clean-lined media units with concealed wiring, acoustic backings, and integrated gaming station mounts to make your living room's entertainment wall a sleek focal point."
  },
  {
    title: "Library Bookshelves",
    desc: "Floor-to-ceiling customized bookcases with integrated task lighting and reading nooks, designed for book lovers who want their collections on elegant display."
  },
  {
    title: "Dining Room China Servers",
    desc: "Modernized dining room servers and credenzas with glass-paneled display cabinets, perfect for showcasing fine china, glassware, and silver."
  },
  {
    title: "Custom Bar Displays",
    desc: "Sophisticated bar areas featuring mirrored back panels, wine rack systems, and floating glass shelving with integrated LED uplighting."
  },
  {
    title: "Open-Plan Room Dividers",
    desc: "Multifunctional open shelving structures that separate areas (like living and dining) without blocking natural light, preserving spatial flow."
  },
  {
    title: "Hidden Pooja Compartments",
    desc: "A creative display wall that conceals a traditional pooja cabinet behind slide-away panels, blending traditional rituals into modern interiors."
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
          alt="Exclusive Display Interiors"
          fill
          className="object-cover opacity-50 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Display & Storage
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Exclusive Display Interiors for Modern Living
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              VERSATILE SPATIAL FLOW
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              A Face-lift for Empty Walls
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              Over the years, display units have morphed to assume many roles. They have come to be more than just a place where you proudly show off your mementos and memoirs. Contemporary display units can be used to separate an open floor plan, or just to give a facelift to the space.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              When planned well, the right display can enhance the theme of your interiors, whether you opt for a cozy, minimalist, traditional, rustic or contemporary look. Which makes it crucial for you to get the perfect display unit for your space.
            </p>
          </div>

          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden opacity-0">
            <Image
              src="https://vibrantspaces.in/wp-content/uploads/2024/04/04.jpg"
              alt="Custom Room Divider Display"
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
              MODULAR FLEXIBILITY
            </span>
            <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
              Display Concepts
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
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Create Your Focal Point</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Talk to some of the best interior decorators in Chennai to nail down the perfect display piece for your home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Design Display Unit
          </Link>
        </div>
      </section>
    </div>
  );
}
