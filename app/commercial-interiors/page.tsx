"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  {
    title: "AgniKul Cosmos HQ",
    desc: "A futuristic 13,000 sq. ft headquarters at IIT Madras. Blends sleek Star Trek-like aesthetics with high-performance workspaces using materials that reflect the aerospace brand. Inaugurated by senior leaders including Shri N. Chandrasekaran and Shri S. Somanath.",
    img: "/assets/redesign/works/070-Agnikul-Home-Carousel-scaled.jpg",
    badge: "Aerospace & Tech"
  },
  {
    title: "Make My Chairs, Kilpauk",
    desc: "A customizable chair retail store designed in collaboration with Srishti Design. Display products clearly while creating a spacious, welcoming, and colorful experience for customers.",
    img: "/assets/redesign/commercial/015-MakeMyChairs.jpg",
    badge: "Retail"
  },
  {
    title: "Kuber Mantra, Kilpauk",
    desc: "A 100-seater, 3500 sq. ft. restaurant designed in collaboration with Srishti Design. Accommodates many customers while preserving a family-friendly atmosphere and privacy.",
    img: "/assets/redesign/commercial/001-KuberMantra.jpg",
    badge: "Hospitality"
  },
  {
    title: "Bikers Den, Royapettah",
    desc: "A community-focused space for bikers, using lighting and design to create a sense of atmosphere, mystery, and belonging. A hub for the biking community in Chennai.",
    img: "/assets/redesign/commercial/021-BikersDen.jpg",
    badge: "Retail & Community"
  },
  {
    title: "Kites, Anna Nagar",
    desc: "A vegetarian restaurant designed in collaboration with Srishti Design. A welcoming, well-lit space for friends, family, and date nights, with an ambience suited for social sharing.",
    img: "/assets/redesign/commercial/007-KitesAnnaNagar.jpg",
    badge: "Hospitality"
  },
  {
    title: "Access Health Care Cafe",
    desc: "A warm, well-lit place of rest inside Access Health Care, designed for patients, attendants, and doctors to find reprieve and comfort.",
    img: "/assets/redesign/commercial/023-AccessHealthcare Ambattur.jpg",
    badge: "Healthcare Hospitality"
  }
];

const OTHERS = [
  "Shiv Nadar School Campus", "Allison Transmission India", "ESAB Corporate Office",
  "Indigo Fertility", "British Deputy High Commission Landscape", "Taj Fisherman's Cove Landscape",
  "FLSmidth Corporate Office Landscape", "JSW Corporate Office", "Chennai Smart City Limited"
];

export default function CommercialInteriorsPage() {
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
          src="/assets/redesign/commercial/011-Retail02-18.png"
          alt="Commercial and Retail Interiors"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Commercial
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Corporate Offices, Retail Stores, and Institutional Spaces
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-4xl mx-auto px-8 py-16 text-center">
        <h2 ref={addToAnimate} className="font-serif text-2xl md:text-3xl uppercase mb-6 opacity-0">
          Workspaces Infused With Purpose & Identity
        </h2>
        <p ref={addToAnimate} className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed opacity-0">
          Retail and hospitality spaces shape customer satisfaction. Vibrant Spaces, in collaboration with sister company Srishti Design, studies the location, brand requirements, customer flow, and visual identity to create spaces that support the shopping and guest experience.
        </p>
      </section>

      {/* ── Projects Grid ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              ref={addToAnimate}
              className="group flex flex-col bg-gray-50 border border-gray-100 hover:border-black transition-all duration-300 opacity-0"
            >
              <div className="relative h-[300px] w-full overflow-hidden bg-gray-200">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="text-[#C5A880] font-sans font-bold text-[0.7rem] tracking-[0.15em] uppercase block mb-2">
                  {proj.badge}
                </span>
                <h3 className="font-serif text-xl uppercase text-black mb-3 group-hover:text-[#C5A880] transition-colors">
                  {proj.title}
                </h3>
                <p className="font-sans text-gray-600 font-light text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Additional List ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="text-center mb-12">
            <h3 ref={addToAnimate} className="font-serif text-2xl uppercase text-black opacity-0">
              Other Completed Commercial Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHERS.map((name, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-white p-6 shadow-sm border-l-4 border-[#C5A880] opacity-0 text-sm font-sans font-light text-gray-700"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-black text-white px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Build Your Workspace</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Experience turnkey modular production powered by our state-of-the-art 30,000 sq. ft facility and advanced German machinery. Partner with Chennai's trusted commercial interior design company.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Request Commercial Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
