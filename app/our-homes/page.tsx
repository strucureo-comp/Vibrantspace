"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HOMES = [
  { name: "The Rajesh Gupta Residence", style: "Sophisticated Earthy Modern (9600 sq. ft.)", location: "Chennai" },
  { name: "The Jayamurugan Residence", style: "Elevated Family Lifestyle (6000 sq. ft.)", location: "Chennai" },
  { name: "Mrs. Devi's Residence", style: "Traditional Fusion", location: "Anna Nagar" },
  { name: "Mr. Edward Prabhakar", style: "Contemporary Modern", location: "Nungambakkam" },
  { name: "Mr. Badri Nivas", style: "Minimalist Luxury", location: "Adyar" },
  { name: "Mr. Shyam Srinivas", style: "Industrial Elegant", location: "Besant Nagar" },
  { name: "Mrs. Sudharma's Artistic Abode", style: "South Indian Traditional", location: "Mylapore" },
  { name: "Mr. Namra's Flat", style: "Futuristic Modern", location: "One Crest" },
  { name: "Ms. Anusha's Residence", style: "Bohemian Chic", location: "Alwarpet" },
  { name: "Dr. Hansika's Residence", style: "Ethnic Traditional", location: "Kilpauk" },
  { name: "Mr. Sampath", style: "Minimalist", location: "Kotturpuram" },
  { name: "Mr. Ananda Krishnan", style: "Modern Spacing", location: "Valasaravakkam" },
  { name: "Luxury Refresh Room", style: "Spa-like Wellness", location: "Alwarpet" },
  { name: "Ms. Divya's Home", style: "Contemporary", location: "E-Residences" },
  { name: "Mrs. Rajalakshmi", style: "Chettinad Traditional", location: "Royapettah" },
  { name: "Mr. Shivaji", style: "Modern Luxury", location: "Azure Oceanic" },
  { name: "Mr. Sam CS", style: "Statement Acoustic", location: "Teynampet" },
  { name: "Ms. Sindhu", style: "Cozy Minimalist", location: "Asta Arise" },
  { name: "Mrs. Kavitha Senthil", style: "Contemporary Fusion", location: "Anna Nagar" },
  { name: "Mrs. Divya Mavalli", style: "Futuristic Modular", location: "Tower of Adyar" },
  { name: "Dr. Yugraj Singh Yadava", style: "Sea-Facing Luxury", location: "Marina Bay" },
  { name: "Dr. Anlin", style: "Minimalist", location: "Pondicherry" },
  { name: "Mr. Dwarakesh", style: "Classic Traditional", location: "Velachery" },
  { name: "Mr. Chandrasekar", style: "Modern Architecture", location: "OMR" },
  { name: "Ms. Reshma", style: "Bohemian", location: "ECR" },
  { name: "Mr. Ganesh", style: "Traditional", location: "T Nagar" },
  { name: "Mr. Anderson", style: "Modern Cozy", location: "Chennai" }
];

export default function OurHomesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsToAnimate = useRef<(HTMLElement | null)[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsToAnimate.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [searchTerm]);

  const addToAnimate = (el: HTMLElement | null) => {
    if (el && !elementsToAnimate.current.includes(el)) {
      elementsToAnimate.current.push(el);
    }
  };

  const filteredHomes = HOMES.filter(
    (h) =>
      h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.style.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen pt-20">
      {/* ── Hero ── */}
      <section className="bg-black text-white py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-[2.5rem] md:text-[4.5rem] leading-tight uppercase mb-6 animate-fadeInUp">
            Vibrant Homes
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.2em] text-xs md:text-sm uppercase max-w-2xl mx-auto animate-fadeInUp anim-delay-200">
            A Sneak Peek Into Our 2500+ Completed Residential Portfolios
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-4xl mx-auto px-8 py-16 text-center">
        <h2 ref={addToAnimate} className="font-serif text-2xl md:text-3xl uppercase mb-6 opacity-0">
          Modular | Renovation | Traditional
        </h2>
        <p ref={addToAnimate} className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8 opacity-0">
          From traditional to contemporary, our expertise is widespread and multi-faceted. Draw inspiration from these homes before meeting with our experts. Let us know what you want, and we will bring it to fruition for you. That is a Vibrant promise.
        </p>
      </section>

      {/* ── Search Bar ── */}
      <section className="max-w-xl mx-auto px-8 pb-10">
        <div className="relative flex items-center border border-gray-200 focus-within:border-black transition-colors px-4 py-3 bg-gray-50">
          <Search size={18} className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search home projects by name, style or location..."
            className="w-full bg-transparent outline-none font-sans text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* ── Homes Grid ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
        {searchTerm !== "" && (
          <div className="text-sm font-sans text-gray-500 mb-6 uppercase tracking-wider">
            Found {filteredHomes.length} projects matching your search query
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHomes.map((home, idx) => (
            <div
              key={idx}
              ref={addToAnimate}
              className="group flex flex-col bg-gray-50 border border-gray-100 hover:border-black transition-all duration-300 opacity-0"
            >
              <div className="relative h-[300px] w-full overflow-hidden bg-gray-200">
                <Image
                                    src={
                    [
                      "/assets/redesign/works/001-shutterstock_622608683.jpg",
                      "/assets/redesign/works/002-marbel.jpg",
                      "/assets/redesign/works/003-oneside-01.png",
                      "/assets/redesign/works/004-1-2.jpg",
                      "/assets/redesign/works/005-2-2.jpg",
                      "/assets/redesign/works/006-3-1.jpg",
                      "/assets/redesign/works/007-4-3.jpg",
                      "/assets/redesign/works/008-06-1.jpg",
                      "/assets/redesign/works/009-06-1-400x400.jpg",
                      "/assets/redesign/works/010-DSC2680-1.jpg",
                      "/assets/redesign/works/011-DSC2680-1-1024x683.jpg",
                      "/assets/redesign/works/012-DSC2680-1-1200x800.jpg",
                      "/assets/redesign/works/013-DSC2680-1-200x133.jpg",
                      "/assets/redesign/works/014-DSC2680-1-300x200.jpg",
                      "/assets/redesign/works/015-DSC2680-1-400x267.jpg",
                      "/assets/redesign/works/016-DSC2680-1-600x400.jpg",
                      "/assets/redesign/works/017-DSC2680-1-768x512.jpg",
                      "/assets/redesign/works/018-DSC2680-1-800x533.jpg",
                      "/assets/redesign/works/019-shutterstock_645138688-2.jpg",
                      "/assets/redesign/works/020-Black-2.jpg",
                      "/assets/redesign/works/021-Glass-Mosaic-Tiles-2.jpg",
                      "/assets/redesign/works/022-Glass-Mosaic-Tiles-2-1200x675.jpg",
                      "/assets/redesign/works/023-Glass-Mosaic-Tiles-2-400x225.jpg",
                      "/assets/redesign/works/024-Glass-Mosaic-Tiles-2-600x338.jpg",
                      "/assets/redesign/works/025-Glass-Mosaic-Tiles-2-800x450.jpg",
                      "/assets/redesign/works/026-Grey-2.jpg",
                      "/assets/redesign/works/027-icon_003.png",
                      "/assets/redesign/works/028-Lacquered-Glass-1.jpg",
                      "/assets/redesign/works/029-Lacquered-Glass-1-1200x675.jpg",
                      "/assets/redesign/works/030-Lacquered-Glass-1-400x225.jpg"
                    ][idx % 30]
                  }
                  alt={home.name}
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="text-[#C5A880] font-sans font-bold text-[0.7rem] tracking-[0.15em] uppercase block mb-2">
                  {home.style}
                </span>
                <h3 className="font-serif text-lg uppercase text-black mb-1 group-hover:text-[#C5A880] transition-colors">
                  {home.name}
                </h3>
                <p className="font-sans text-gray-400 text-xs tracking-wider uppercase font-light">
                  Location: {home.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-black text-white px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Replicate the Look</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            See a style or layout you like? Our experts can customize and replicate the exact same setup in your home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Request Project Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
