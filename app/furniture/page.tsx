"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = [
  {
    title: "Bespoke Furniture",
    desc: "Custom-made furniture built specifically to your requirements. Made specifically based on how you want to use it and how you want it to look. Highly useful for unusual spaces or specific dimension limits so everything fits just right."
  },
  {
    title: "Solid Wood Furniture",
    desc: "Long-lasting solid teak, walnut, or oak hardwood structures meticulously engineered and finished in our state-of-the-art facility to offer ultimate stability and traditional warmth."
  },
  {
    title: "Movable & Soft Furnishing",
    desc: "Sophisticated sofas, dining chairs, accent chairs, and custom upholstery items sourced globally or manufactured in-house with highly durable fabrics."
  }
];

export default function FurniturePage() {
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
          src="https://vibrantspaces.in/wp-content/uploads/2019/09/marbel.jpg"
          alt="Bespoke Custom Furniture"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Bespoke Furniture
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Modern | Statement | Comfortable
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              STATEMENT PIECES
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              A House Becomes a Home
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              Furniture is what makes a house a home, and lends aesthetic appeal while completing the function of a room. Your room might be one statement piece away from perfection, or an elegant sofa set away from homey.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              We bring your space with all the right pieces that turn a house into a home. Having something made to your requirements means that you don’t have to worry about your furniture looking too big or small for your space; something tailored is always going to fit just right.
            </p>
          </div>

          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden opacity-0">
            <Image
              src="https://vibrantspaces.in/wp-content/uploads/2019/09/oneside-01.png"
              alt="Custom Furniture Design"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Sourcing & Manufacturing ── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <h3 className="font-serif text-2xl md:text-3xl uppercase mb-6 text-black">In-house Production & Sourcing</h3>
            <p className="font-sans text-gray-600 font-light text-sm leading-relaxed mb-6">
              At our in-house manufacturing factory, we produce custom-made furniture and upholstery using highly durable, premium-grade raw materials for special projects based on client specifications.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm leading-relaxed">
              Additionally, our team taps into a global sourcing network to import exclusive decor items and premium fabrics from around the world, giving your home a unique character.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-white p-6 shadow-sm border-l-4 border-[#C5A880] opacity-0"
              >
                <h4 className="font-serif font-bold text-lg text-black mb-2 uppercase">{cat.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-black text-white px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Elevate Your Living Space</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Collaborate with our in-house designers to sketch, size, and construct furniture that fits your home perfectly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Schedule Furniture Session
          </Link>
        </div>
      </section>
    </div>
  );
}
