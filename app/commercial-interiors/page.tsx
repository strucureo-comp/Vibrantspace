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
    desc: "A futuristic 13,000 sq. ft headquarters at IIT Madras for India's aerospace innovators. Blends sleek Star Trek-like aesthetics with high-performance workspaces using steel, glass, marble, and mosaic details.",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/04/04.jpg",
    badge: "Aerospace"
  },
  {
    title: "Allison Transmission India",
    desc: "A function-forward corporate headquarters and executive dining lounge. Features neutral colors, warm wood accents, open-plan acoustical desks, and a specialized industrial kitchen serving over 1,000 employees.",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/04/02.jpeg",
    badge: "Corporate Office"
  },
  {
    title: "Shiv Nadar School Campus",
    desc: "Turnkey execution of classrooms and public spaces designed by Padma Bhushan Dr. B. V. Doshi. Built around a green, sustainable theme using reclaimed wood from old ships, earning accolades from L&T Constructions.",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/04/01.jpg",
    badge: "Education"
  },
  {
    title: "Statue of Unity Interiors",
    desc: "Vibrant Spaces was the only South Indian interior design firm shortlisted to draft the visitor experience galleries and internal layouts of this historic monument, balancing massive scale with human comfort.",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/12/shutterstock_622608683.webp",
    badge: "Public Monument"
  },
  {
    title: "ESAB Corporate Office",
    desc: "A 50-seater office space in Chennai for a $2.84 billion Swedish-American global automation leader. Rooted in simplicity, local Chennai character, and robust functionality.",
    img: "https://vibrantspaces.in/wp-content/uploads/2020/12/shutterstock_645138688-2opt.jpg",
    badge: "Corporate Office"
  },
  {
    title: "Steel Shoppe Headquarters",
    desc: "A bold, industrial-themed office space merging raw concrete textures, exposed mesh, raw metals, and vibrant spatial yellow bands mapping Spatial flow.",
    img: "https://vibrantspaces.in/wp-content/uploads/2019/09/oneside-01.png",
    badge: "Industrial Office"
  }
];

const OTHERS = [
  "JSW Corporate Office", "Bikers Den (Royapettah Biking Hub)", "Nizam Marriage Hall (Tanjore Vastu-compliant Hall)",
  "Kites Restaurant", "Chennai Smart City Limited", "Doctor Saravanan Hospital (Tindivanam)",
  "Seashell Logistics Office", "Digital Track Solutions", "Access Healthcare Services"
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
          src="https://vibrantspaces.in/wp-content/uploads/2024/04/04.jpg"
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
          Vibrant Spaces designs and executes warm, function-forward commercial zones that bridge professionalism with brand personality. We leverage our advanced 30,000 sq ft factory and structured execution process to deliver office and retail interiors on time and on budget, even under challenging conditions.
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
            Partner with Chennai's trusted commercial interior design company to draft, manufacture, and install modular offices, retail centers, or marriage halls.
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
