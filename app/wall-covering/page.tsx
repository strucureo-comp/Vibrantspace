"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const COLLECTIONS = [
  {
    name: "Zen Collection",
    desc: "Minimalist wall paneling that brings warmth and organic texture to any room. Available in Natural Oak and Raw Walnut.",
    variants: ["Natural Oak", "Raw Walnut"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Motif Collection",
    desc: "Geometric patterns meet natural wood — creating striking accent walls with sculptural dimension.",
    variants: ["Contour", "Blume", "Forma", "Roku"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Ligne Collection",
    desc: "Clean horizontal lines with refined proportions. An elegant solution for feature walls in living rooms, bedrooms, and lobbies.",
    variants: ["Natural Oak", "Natural Oak Shadow", "Raw Walnut", "Raw Walnut Shadow"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Inceptiv Collection",
    desc: "Architectural relief panels with intricate dimensional patterns inspired by natural forms.",
    variants: ["Ark Chevron", "Crest", "Curva", "Edge", "Infuse", "Kubik", "Wave"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Moderne Collection",
    desc: "Contemporary curved profiles that add depth and movement to any surface.",
    variants: ["Petite Courbe", "Moyen Courbe", "Grande Courbe", "Arque"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Pictura Collection",
    desc: "Artistically inspired wall panels that transform flat surfaces into gallery-worthy installations.",
    variants: ["Cadence", "Chord", "Lunette", "Rhythm"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Intervals Collection",
    desc: "Rhythmic paneling with harmonious proportions. A versatile solution suitable for residential and commercial applications.",
    variants: ["Natural Oak", "Raw Walnut", "Darkened Walnut", "Noir"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Celestio Collection",
    desc: "Mosaic-inspired panels creating intricate geometric patterns from natural wood veneer.",
    variants: ["Angled Hexo", "Cobble", "Gem", "Hexo", "Jig", "Pinnacle"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
  {
    name: "Celestio Legno",
    desc: "A wood-based variant of the Celestio family bringing warm tones and organic texture to geometric designs.",
    variants: ["Angled Hexo", "Cobble", "Gem", "Hexo"],
    image: "https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp",
  },
];

export default function WallCoveringPage() {
  const [selectedCollection, setSelectedCollection] = useState(COLLECTIONS[0]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleScroll = () => {
      hero.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ── Hero ── */}
      <section className="relative w-full h-[70vh] bg-black overflow-hidden flex items-end justify-start pt-20">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <Image
            src="https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp"
            alt="Vibrant Spaces Wall Coverings"
            fill
            className="object-cover opacity-70"
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16 max-w-4xl">
          <p className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase mb-4">
            Vibrant Spaces Wall Covering
          </p>
          <h1 className="font-serif font-light text-[3.5rem] md:text-[5.5rem] uppercase leading-none text-white mb-6">
            Wall<br />Coverings
          </h1>
          <p className="font-sans text-white/70 text-sm md:text-base font-light leading-relaxed max-w-lg">
            Elevate your interiors with sculptural wood wall panels. Each collection expresses a unique design language through natural materials.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase block mb-5">
              ARCHITECTURAL ARTISTRY
            </span>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] uppercase leading-none mb-8">
              Walls That<br />Tell a Story
            </h2>
          </div>
          <div>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-5">
              Vibrant Spaces Wall Coverings bring the warmth and texture of natural wood to vertical surfaces — transforming ordinary walls into extraordinary design statements.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed">
              Crafted from the same sustainably sourced European White Oak as our iconic flooring, every panel is a harmonious extension of your interior narrative.
            </p>
          </div>
        </div>
      </section>

      {/* ── Collection Explorer ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[600px]">
            {/* Sidebar */}
            <div className="border-r border-gray-200 pr-8 lg:pr-12">
              <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-gray-400 mb-6">
                Collections
              </p>
              <ul className="space-y-1">
                {COLLECTIONS.map((c) => (
                  <li key={c.name}>
                    <button
                      onClick={() => setSelectedCollection(c)}
                      className={`text-left w-full py-2.5 text-sm transition-all border-l-2 pl-4 ${
                        selectedCollection.name === c.name
                          ? "border-[#C5A880] text-black font-semibold"
                          : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
                      }`}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-2 pl-0 lg:pl-12 pt-8 lg:pt-0 flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <span className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase block mb-3">
                  Wall Covering
                </span>
                <h3 className="font-serif text-[1.8rem] md:text-[2.5rem] uppercase leading-none mb-6">
                  {selectedCollection.name}
                </h3>
                <p className="font-sans text-gray-600 font-light text-sm leading-relaxed mb-8">
                  {selectedCollection.desc}
                </p>
                <div className="mb-8">
                  <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-gray-400 mb-3">
                    Available In
                  </p>
                  <ul className="space-y-1.5">
                    {selectedCollection.variants.map((v) => (
                      <li key={v}>
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:text-black border-b border-transparent hover:border-black transition-all"
                        >
                          {v}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-block bg-black text-white font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#C5A880] transition-colors"
                  >
                    Explore Collection
                  </a>
                  <a
                    href="#"
                    className="inline-block border border-black text-black font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors"
                  >
                    Request Samples
                  </a>
                </div>
              </div>
              <div className="relative w-full lg:w-72 h-80 shrink-0 overflow-hidden">
                <Image
                  src={selectedCollection.image}
                  alt={selectedCollection.name}
                  fill
                  className="object-cover transition-opacity duration-500"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Highlights ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="text-center mb-16">
          <span className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase block mb-5">
            DESIGN POSSIBILITIES
          </span>
          <h2 className="font-serif text-[2rem] md:text-[3rem] uppercase leading-none">
            Where Art Meets Architecture
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential",
              desc: "Feature walls in living rooms, bedrooms, dining areas, and home offices.",
              icon: "🏡",
            },
            {
              title: "Commercial",
              desc: "Hotel lobbies, corporate interiors, retail environments, and hospitality spaces.",
              icon: "🏢",
            },
            {
              title: "Architectural",
              desc: "Custom installations, reception areas, feature staircases, and bespoke commissions.",
              icon: "✦",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-10 border border-gray-100 hover:border-[#C5A880] transition-colors"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-serif text-xl uppercase mb-4">{item.title}</h4>
              <p className="font-sans text-gray-600 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Black Strip ── */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "9 Collections", sub: "Unique Expressions" },
            { label: "30+ Patterns", sub: "Design Variety" },
            { label: "European Oak", sub: "Premium Species" },
            { label: "Custom Scale", sub: "Available on Request" },
          ].map((f) => (
            <div key={f.label}>
              <p className="font-serif text-lg md:text-xl uppercase text-white mb-1">{f.label}</p>
              <p className="text-[#C5A880] text-xs tracking-widest uppercase font-semibold">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 text-center px-8 bg-white">
        <p className="text-[#C5A880] text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-4">
          GET STARTED
        </p>
        <h2 className="font-serif text-[2rem] md:text-[3.5rem] uppercase leading-none mb-8 max-w-2xl mx-auto">
          Transform Your Space
        </h2>
        <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto">
          Explore our Wall Covering collections at a Vibrant Spaces showroom or authorized retailer near you. Request samples to see and feel the quality first-hand.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-black text-white font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] transition-colors"
          >
            Find a Showroom
          </Link>
          <a
            href="#"
            className="inline-block border border-black text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-black hover:text-white transition-colors"
          >
            Request Samples
          </a>
        </div>
      </section>
    </div>
  );
}
