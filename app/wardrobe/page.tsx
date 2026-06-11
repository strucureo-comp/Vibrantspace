"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TYPES = [
  {
    title: "Sliding Wardrobes",
    desc: "Sleek, contemporary doors gliding horizontally along metal tracks. Requires no swing room, making it the ultimate space-saving solution. Ideal for wide layouts (up to 10 feet) with options like Streaks, Glaze, Classical, Mosaic, and Tesseract sliding shutters.",
    accent: "Space Saver"
  },
  {
    title: "Hinged / Swing Wardrobes",
    desc: "Conventional shutters attached via premium soft-close hinges. Provides complete interior visibility when open and allows hanging hooks or mirrors behind shutters. Versatile for tricky shapes like L-shaped, triangular, and pentagonal corners.",
    accent: "Full Visibility"
  },
  {
    title: "Armadio Floor-to-Ceiling Systems",
    desc: "A luxury global system of modular wardrobes with floor-to-ceiling shutters extending up to 9.5 feet (compared to regular 7 feet units). Eliminates separate loft spaces, offering a seamless luxury aesthetic that makes any room appear significantly larger.",
    accent: "Luxury Statement"
  },
  {
    title: "Bi-Fold Doors",
    desc: "Gliding panels that fold outward in accordion style. Combining sliding convenience with full hinged visibility, bi-fold closets are highly functional for wardrobes up to 7 feet wide.",
    accent: "Convenient Access"
  }
];

const ACCESSORIES = [
  { name: "Pull-down Hanger Rods", desc: "Easily reach high hanging clothes in tall wardrobes without needing a stool." },
  { name: "Trouser Pull-out Racks", desc: "Keep trousers organized, wrinkle-free, and easy to select." },
  { name: "Jewellery Drawer Inserts", desc: "Velvet-lined drawers with compartments for delicate accessories." },
  { name: "Integrated LED Uplighting", desc: "Motion-sensor wardrobe LEDs that light up shelves and hangers." }
];

export default function WardrobePage() {
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
          src="https://vibrantspaces.in/wp-content/uploads/2024/04/02.jpeg"
          alt="Bespoke Wardrobes"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Custom Wardrobes
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Compact | Ergonomic | Futuristic
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              YOUR PERSONAL SPACE
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              Tetris-like Space Optimization
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              A wardrobe is one of the most personal pieces of furniture in a home. Just like how no two people have the same clothing styles, no two wardrobes can be the same. Where someone would want smaller shelves and multiple cubbies to color-coordinate their denim or sweater collection, others might want long hanging racks to ensure their summer dresses and stunning ethnic wear remain wrinkle-free.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              From pull-down rods to trouser racks and jewellery drawers, our modular wardrobe designers in Chennai ensure every staple item in your closet has its own special home that's easily accessible. With contemporary designs, sturdy materials and a sleek finish, we put your style, utility and needs above all.
            </p>
          </div>

          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden opacity-0">
            <Image
              src="https://vibrantspaces.in/wp-content/uploads/2024/04/01.jpg"
              alt="Luxury Wardrobe System"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Materials & Sustainability ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <h3 className="font-serif text-2xl md:text-3xl uppercase mb-6 text-black">Sustainable Materials</h3>
            <p className="font-sans text-gray-600 font-light text-sm leading-relaxed mb-4">
              While we have a wide selection of wood to choose from, our specialties are premium birch ply and High-Density High Moisture Resistant (HDHMR) ply made from sustainably sourced eucalyptus wood.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm leading-relaxed">
              We employ eco-friendly production and transportation practices to ensure your wardrobes are exceptionally sturdy, moisture-resistant, and environmentally responsible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div ref={addToAnimate} className="bg-white p-6 shadow-sm opacity-0">
              <h4 className="font-serif font-bold text-lg text-black mb-2">Birch Ply</h4>
              <p className="text-xs text-gray-500 font-sans font-light">Cross-banded layers of real birch wood for high structural integrity.</p>
            </div>
            <div ref={addToAnimate} className="bg-white p-6 shadow-sm opacity-0">
              <h4 className="font-serif font-bold text-lg text-[#C5A880] mb-2">HDHMR Ply</h4>
              <p className="text-xs text-gray-500 font-sans font-light">Eucalyptus-derived fibers ensuring high moisture resistance, ideal for humid environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wardrobe Types ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="text-center mb-16">
          <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
            SYSTEM TYPES
          </span>
          <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
            Wardrobe Door Configurations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TYPES.map((t, idx) => (
            <div
              key={idx}
              ref={addToAnimate}
              className="p-8 bg-white border border-gray-100 hover:shadow-md transition-shadow opacity-0"
            >
              <span className="text-[#C5A880] font-sans text-xs tracking-widest uppercase font-bold block mb-2">{t.accent}</span>
              <h3 className="font-serif text-xl uppercase mb-4 text-black">{t.title}</h3>
              <p className="font-sans text-gray-600 font-light text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Internal Accessories ── */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
              INTERIOR FITOUTS
            </span>
            <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
              Wardrobe Accessories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACCESSORIES.map((acc, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-neutral-900 p-6 border border-white/5 opacity-0"
              >
                <h4 className="font-serif text-lg text-[#C5A880] mb-3">{acc.name}</h4>
                <p className="font-sans text-gray-400 font-light text-xs md:text-sm leading-relaxed">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-gray-50 px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Build Your Dream Closet</h2>
          <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Let us design a functional wardrobe tailored to your space limits, lifestyle, and storage requirements. Get 2D/3D layouts in advance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] transition-colors rounded-none"
          >
            Request Wardrobe Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
