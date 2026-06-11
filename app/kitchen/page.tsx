"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FINISHES = [
  { name: "PU Finish", desc: "Premium high-gloss paint finish that gives a seamless, luxury aesthetic." },
  { name: "Glass Finish", desc: "Sleek lacquered glass doors reflecting contemporary modern elegance." },
  { name: "Laminate Finish", desc: "Highly durable, scratch-resistant, and cost-effective daily-use solution." },
  { name: "Acrylic Finish", desc: "Mirrored reflection, scratch-resistant acrylic layers for bold kitchens." },
  { name: "Veneer Finish", desc: "Real wood veneers for organic, earthy, and traditional warmth." }
];

const ACCESSORIES = [
  {
    title: "Kitchen Working Triangle",
    desc: "A time-tested guideline connecting the cooktop, sink, and refrigerator. Each leg is meticulously planned between 4 and 9 feet to enable optimal flow with zero crowding."
  },
  {
    title: "Tandem Box Systems",
    desc: "Pro-motion drawers replacing traditional cabinets. Heavy-weight metal sides glide out fully to show all items, avoiding shifts and sliding smoothly even under max loads."
  },
  {
    title: "Tall Units & Larders",
    desc: "Pantry pull-out solutions utilizing vertical space (up to floor-to-ceiling) to store seasonings, dry goods, and appliances in a dry, dark, and cool environment."
  },
  {
    title: "Pocket Doors",
    desc: "Sliding doors that disappear into compartments inside adjacent walls. Ideal for space efficiency and hidden kitchen counters or bar units."
  },
  {
    title: "Utility Pull-outs",
    desc: "Designed for narrow, otherwise wasted spaces next to the sink or stove. Perfect for oil bottles, spices, cleaning agents, and broom pull-outs."
  },
  {
    title: "Corner Carousel Unit",
    desc: "Maximize redundant corner cabinets with advanced kidney-shaped LeMans pull-out shelves, Magic Corner systems, or Dee-Tray carousels."
  },
  {
    title: "Under-Sink Purifier",
    desc: "An RO water purifier tucked neatly beneath the sink, plumbed directly to a designer countertop tap, keeping work surfaces clean and clutter-free."
  }
];

export default function KitchenPage() {
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
          src="https://vibrantspaces.in/wp-content/uploads/2024/04/03.jpg"
          alt="Modular Kitchen"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Lavish Modular Kitchen
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Ergonomic Designs Suited for Indian Homes
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              THE HEART OF THE HOME
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              Modular | Renovation | Traditional
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              The kitchen is the seat of the life force in any home. For some it is a culinary atelier, while for other families, it is simply a space to bond. We design inspired spaces that deliver the best modular kitchen in Chennai with intelligent use of space, ergonomic design, and a healthy flow of natural light.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              Even the most complicated recipes can be made easy when everything is within reach. Our designs encourage your family to cook, eat and bond together. You get to enjoy the best modular kitchen in Chennai at a fair and affordable cost.
            </p>
          </div>

          {/* Key Indicators */}
          <div className="grid grid-cols-2 gap-6">
            <div ref={addToAnimate} className="p-6 bg-gray-50 border-t-2 border-[#C5A880] opacity-0">
              <h3 className="font-serif text-3xl font-light text-black mb-2">75 Checks</h3>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Quality checks ensuring perfection in delivery</p>
            </div>
            <div ref={addToAnimate} className="p-6 bg-gray-50 border-t-2 border-black opacity-0">
              <h3 className="font-serif text-3xl font-light text-black mb-2">5 Years</h3>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Vibrant guarantee against manufacturing/installation defects</p>
            </div>
            <div ref={addToAnimate} className="p-6 bg-gray-50 border-t-2 border-black opacity-0">
              <h3 className="font-serif text-3xl font-light text-black mb-2">30 Days</h3>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Turnaround delivery utilizing tech & supply chains</p>
            </div>
            <div ref={addToAnimate} className="p-6 bg-gray-50 border-t-2 border-[#C5A880] opacity-0">
              <h3 className="font-serif text-3xl font-light text-black mb-2">10 Days</h3>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Direct modular assembly phase at site</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Finishes Section ── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
              FINISHES
            </span>
            <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
              Pick Your Kitchen Finish
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {FINISHES.map((f, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:border-[#C5A880] transition-colors opacity-0"
              >
                <h3 className="font-serif text-lg uppercase text-black mb-4">{f.name}</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Accessories & Solutions ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="text-center mb-16">
          <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
            TECHNOLOGY & FITOUTS
          </span>
          <h2 ref={addToAnimate} className="font-serif text-3xl md:text-5xl uppercase opacity-0">
            Intelligent Kitchen Systems
          </h2>
          <p ref={addToAnimate} className="font-sans text-gray-500 text-sm max-w-2xl mx-auto mt-4 font-light opacity-0">
            Optimized spacing and modern solutions leave no dead corners, transforming traditional spaces into ergonomic systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCESSORIES.map((acc, idx) => (
            <div
              key={idx}
              ref={addToAnimate}
              className="p-8 border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 opacity-0"
            >
              <h3 className="font-serif text-xl uppercase mb-4 text-[#C5A880]">{acc.title}</h3>
              <p className="font-sans text-gray-600 font-light text-sm leading-relaxed">{acc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── AMC & Remodel Section ── */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center gap-12">
          <div ref={addToAnimate} className="flex-1 opacity-0">
            <h2 className="font-serif text-3xl md:text-4xl uppercase mb-6">Kitchen Renovation & AMC</h2>
            <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-6">
              Vibrant Spaces creates perfection in place of old kitchens. With expert personnel handling everything from planning and manufacturing to installation, see your dream kitchen interiors come to life, completely hassle-free.
            </p>
            <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed">
              We also provide <strong>Annual Maintenance Contracts (AMC) for 10 years</strong> with full warranty coverage, assuring the lowest cost and highest security for modular kitchen renovations in Chennai.
            </p>
          </div>
          <div ref={addToAnimate} className="relative h-[300px] w-full md:w-[450px] bg-neutral-900 border border-white/5 opacity-0">
            <Image
              src="https://vibrantspaces.in/wp-content/uploads/photo-gallery/thumb/12_(1).jpeg?bwg=1604492390"
              alt="Kitchen Remodel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-gray-50 px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Get Inspired Today</h2>
          <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Schedule a session with our world-class experts to choose layouts, select textures, and configure your dream kitchen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] transition-colors rounded-none"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
