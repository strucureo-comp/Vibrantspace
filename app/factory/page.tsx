"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MACHINES = [
  {
    name: "Beam Saw / Horizontal Panel Saw",
    desc: "Precision industrial saw used to slice large sheets of wood-based panels like MDF, plywood, and particle board with microscopic accuracy."
  },
  {
    name: "CNC Router (Computer Numerical Control)",
    desc: "Advanced automated router used for high-precision cutting, intricate carving, drilling, and shaping of wood-based panels and furniture shutters."
  },
  {
    name: "Edge Banding Machine",
    desc: "Finishes and seals exposed raw edges of wood panels. This not only elevates the overall aesthetics but crucially seals them against humidity, moisture, and impact damage."
  },
  {
    name: "Hot & Cold Press Systems",
    desc: "Bonds decorative laminates or natural wood veneers onto structural panels using calibrated thermal heat and extreme physical pressure for durable adhesion."
  },
  {
    name: "Industrial Panel Saw",
    desc: "Essential starting line saw used to slice large wood boards into workable, custom dimensions for modular furniture and cabinetry."
  },
  {
    name: "Clean Spray Booth",
    desc: "Dust-free, temperature-controlled environment designed for spray painting, polishing, or lacquering cabinet shutters and decorative panels to secure a mirror-like finish."
  }
];

export default function FactoryPage() {
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
          src="/assets/redesign/factory/028-shutterstock_622608683.webp"
          alt="Vibrant Spaces State of the Art Factory"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Our Factory
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            30,000 Sq.Ft Manufacturing Facility
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              INDUSTRIAL STRENGTH
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              Where Dreams Take Shape
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              Extravagant dreams and bold aspirations begin right here, on the factory floor. We take immense pride in presenting Vibrant Spaces’ state-of-the-art manufacturing facility spanning 30,000 sq. feet, where craftsmanship meets cutting-edge precision.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              Equipped with advanced German machinery, this facility is the heart of our operations. It doubles as a creative hub where ideas are prototyped and perfected before reaching a site, supporting higher standards of finish, longevity, and execution quality.
            </p>
            <p className="font-sans text-[#C5A880] font-bold text-xs uppercase tracking-widest">
              Highlights: State-of-the-art factory | Supreme quality | 5-year warranty on woodworks
            </p>
          </div>

          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden opacity-0">
            <Image
              src="/assets/redesign/factory/027-1-88.jpg"
              alt="Advanced German Machinery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── B2B & Quality ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <h3 className="font-serif text-2xl md:text-3xl uppercase mb-6 text-black">B2B Collaboration & Scale</h3>
            <p className="font-sans text-gray-600 font-light text-sm leading-relaxed mb-4">
              With the guidance of trusted professionals, we have calibrated our manufacturing unit to support B2B collaborations and large-scale turnkey interior contracts, ensuring rigorous quality control, strong vendor networks, and efficient logistics.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm leading-relaxed">
              We actively prioritize sustainability and workplace safety: minimizing material wastage, optimizing energy use, and promoting safe, ethical labor practices at every stage.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div ref={addToAnimate} className="bg-white p-6 shadow-sm opacity-0">
              <h4 className="font-serif font-bold text-lg text-black mb-2">Architect Hub</h4>
              <p className="text-xs text-gray-500 font-sans font-light">Collaborative space for architects to prototype and test design limits.</p>
            </div>
            <div ref={addToAnimate} className="bg-white p-6 shadow-sm opacity-0">
              <h4 className="font-serif font-bold text-lg text-[#C5A880] mb-2">German Tech</h4>
              <p className="text-xs text-gray-500 font-sans font-light font-bold">100% automated CNC routing, dust-free lacquer booth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── German Machinery Section ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="text-center mb-16">
          <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
            MACHINERY LIST
          </span>
          <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
            Precision Machineries In Action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MACHINES.map((machine, idx) => (
            <div
              key={idx}
              ref={addToAnimate}
              className="p-8 bg-white border border-gray-100 hover:shadow-md transition-shadow duration-300 opacity-0"
            >
              <h3 className="font-serif text-xl uppercase mb-4 text-black">{machine.name}</h3>
              <p className="font-sans text-gray-500 font-light text-sm leading-relaxed">{machine.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-black text-white px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Build With Us</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Are you an architect or commercial developer? Partner with our factory to construct custom panels, fixtures, and furniture to scale.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Contact B2B Team
          </Link>
        </div>
      </section>
    </div>
  );
}
