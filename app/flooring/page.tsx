"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const COLLECTIONS = [
  {
    tier: "Guild",
    subtitle: "Entry to Excellence",
    desc: "Our Guild collections are crafted from European White Oak — a timeless, durable species offering exceptional versatility. Available in both solid and engineered constructions.",
    collections: ["Beaujou Collection", "L'Arbois Collection", "Boiselle Collection", "Botteva Collection", "Craft & Commerce Collection"],
    image: "https://duchateau.com/wp-content/uploads/2025/07/du-guild-hardwood-flooring.webp",
    accent: "#8B7355",
  },
  {
    tier: "Signature",
    subtitle: "Elevated Artisanship",
    desc: "Signature collections represent the finest balance between natural beauty and enduring performance. Each plank tells the story of its origin.",
    collections: ["Terra Collection", "Global Winds Collection", "Riverstone Collection", "Vernal Collection", "Chateau Collection", "Grande Savoy Collection"],
    image: "https://duchateau.com/wp-content/uploads/2025/07/du-signature-hardwood-flooring.webp",
    accent: "#6B5B45",
  },
  {
    tier: "Atelier",
    subtitle: "Master Craftmanship",
    desc: "Atelier represents our most refined hardwood flooring — handcrafted by master artisans with precise attention to texture, finish and character.",
    collections: ["Reserve"],
    image: "https://duchateau.com/wp-content/uploads/2025/07/du-atelier-hardwood-flooring.webp",
    accent: "#4A3728",
  },
  {
    tier: "Martyn Lawrence Bullard",
    subtitle: "Designer Collaboration",
    desc: "A landmark collaboration with celebrated interior designer Martyn Lawrence Bullard, delivering floor designs that are bold, theatrical and unmistakably personal.",
    collections: ["MLB Collection"],
    image: "https://duchateau.com/wp-content/uploads/2025/07/du-mlb-hardwood-flooring.webp",
    accent: "#C5A880",
  },
];

const COMPOSITE_COLLECTIONS = [
  {
    name: "Portfolio Collection",
    desc: "Engineered for exceptional durability with authentic oak character.",
  },
  {
    name: "Classic Collection",
    desc: "Timeless designs that pair naturally with any interior aesthetic.",
  },
  {
    name: "Luxetech Collection",
    desc: "Advanced technology meets premium craftsmanship for long-lasting beauty.",
  },
];

export default function FlooringPage() {
  const [activeTab, setActiveTab] = useState<"hardwood" | "composite">("hardwood");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleScroll = () => {
      const scrolled = window.scrollY;
      hero.style.transform = `translateY(${scrolled * 0.4}px)`;
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
            src="https://duchateau.com/wp-content/uploads/2025/07/du-guild-hardwood-flooring.webp"
            alt="DUCHATEAU Hardwood Flooring"
            fill
            className="object-cover opacity-70"
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16 max-w-4xl">
          <p className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase mb-4">
            DU FLOORING
          </p>
          <h1 className="font-serif font-light text-[3.5rem] md:text-[5.5rem] uppercase leading-none text-white mb-6">
            Hardwood<br />Flooring
          </h1>
          <p className="font-sans text-white/70 text-sm md:text-base font-light leading-relaxed max-w-lg">
            Where every plank is a testament to natural beauty, artisanal craft, and enduring quality. Sourced from the world&apos;s finest European White Oak.
          </p>
        </div>
      </section>

      {/* ── Tab Navigation ── */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex gap-0">
          <button
            onClick={() => setActiveTab("hardwood")}
            className={`py-5 px-8 text-xs font-semibold tracking-[0.2em] uppercase border-b-2 transition-all ${
              activeTab === "hardwood"
                ? "border-[#C5A880] text-[#C5A880]"
                : "border-transparent text-white/50 hover:text-white"
            }`}
          >
            Hardwood Flooring
          </button>
          <button
            onClick={() => setActiveTab("composite")}
            className={`py-5 px-8 text-xs font-semibold tracking-[0.2em] uppercase border-b-2 transition-all ${
              activeTab === "composite"
                ? "border-[#C5A880] text-[#C5A880]"
                : "border-transparent text-white/50 hover:text-white"
            }`}
          >
            Composite Flooring
          </button>
        </div>
      </div>

      {/* ── Hardwood Tab ── */}
      {activeTab === "hardwood" && (
        <>
          {/* Intro */}
          <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase block mb-5">
                  THE DU DIFFERENCE
                </span>
                <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] uppercase leading-none mb-8">
                  Naturally<br />Beautiful
                </h2>
              </div>
              <div>
                <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-5">
                  From our Guild collections — a doorway into DuChateau — to the pinnacle of craftsmanship found in Atelier, every piece represents an unwavering commitment to quality.
                </p>
                <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed">
                  We source exclusively from sustainably managed European White Oak forests. Our proprietary finishing processes — including wire brushing, hand scraping, and fuming — bring out the character inherent in every plank.
                </p>
              </div>
            </div>
          </section>

          {/* Collection Tiers */}
          {COLLECTIONS.map((col, idx) => (
            <section
              key={col.tier}
              className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div
                className={`max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-[380px] md:h-[520px] overflow-hidden group">
                  <Image
                    src={col.image}
                    alt={col.tier}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className="font-semibold text-[0.65rem] tracking-[0.3em] uppercase block mb-3"
                    style={{ color: col.accent }}
                  >
                    {col.subtitle}
                  </span>
                  <h3 className="font-serif text-[2rem] md:text-[3rem] uppercase leading-none mb-6">
                    {col.tier}
                  </h3>
                  <p className="font-sans text-gray-600 font-light text-sm leading-relaxed mb-8">
                    {col.desc}
                  </p>
                  <div className="mb-8">
                    <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-gray-400 mb-3">
                      Collections Include
                    </p>
                    <ul className="space-y-1.5">
                      {col.collections.map((c) => (
                        <li key={c}>
                          <a
                            href="#"
                            className="text-sm font-medium text-gray-700 hover:text-black border-b border-transparent hover:border-black transition-all"
                          >
                            {c}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase group/btn"
                  >
                    <span>Discover {col.tier}</span>
                    <span className="h-px w-8 bg-black transition-all group-hover/btn:w-14" />
                  </a>
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {/* ── Composite Tab ── */}
      {activeTab === "composite" && (
        <>
          <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <span className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase block mb-5">
                  ENGINEERED EXCELLENCE
                </span>
                <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] uppercase leading-none mb-8">
                  Composite<br />Flooring
                </h2>
                <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed">
                  Our composite flooring collections combine the authentic look of hardwood with advanced engineering for superior stability and moisture resistance. Perfect for high-traffic areas or challenging environments.
                </p>
              </div>
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src="https://duchateau.com/wp-content/uploads/2025/07/du-guild-hardwood-flooring.webp"
                  alt="Composite Flooring"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COMPOSITE_COLLECTIONS.map((c) => (
                <div
                  key={c.name}
                  className="border border-gray-100 p-8 hover:shadow-lg transition-shadow group"
                >
                  <h4 className="font-serif text-xl uppercase mb-4 group-hover:text-[#C5A880] transition-colors">
                    {c.name}
                  </h4>
                  <p className="font-sans text-gray-600 font-light text-sm leading-relaxed mb-6">
                    {c.desc}
                  </p>
                  <a
                    href="#"
                    className="text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-2 group/btn"
                  >
                    <span>Explore</span>
                    <span className="h-px w-6 bg-black transition-all group-hover/btn:w-10" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── Features Strip ── */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "European White Oak", sub: "Sustainably Sourced" },
            { label: "30+ Finishes", sub: "Handcrafted Options" },
            { label: "25 Year Warranty", sub: "Residential Use" },
            { label: "FSC Certified", sub: "Eco Responsible" },
          ].map((f) => (
            <div key={f.label}>
              <p className="font-serif text-lg md:text-xl uppercase text-white mb-1">{f.label}</p>
              <p className="text-[#C5A880] text-xs tracking-widest uppercase font-semibold">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 text-center px-8 bg-gray-50">
        <p className="text-[#C5A880] text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-4">
          BEGIN YOUR JOURNEY
        </p>
        <h2 className="font-serif text-[2rem] md:text-[3.5rem] uppercase leading-none mb-8 max-w-2xl mx-auto">
          Find Your Perfect Floor
        </h2>
        <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto">
          Request samples, find a retailer near you, or speak with one of our flooring specialists to begin your project.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-black text-white font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] transition-colors"
          >
            Find a Retailer
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
