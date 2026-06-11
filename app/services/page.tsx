"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: "Modular Kitchen",
    desc: "Compact, ergonomic, and stylish layouts suited for Indian homes with options for high heat and oil resistance.",
    href: "/kitchen",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/04/03.jpg"
  },
  {
    title: "Wardrobes & Lofts",
    desc: "Bespoke sliding, hinged, and bi-fold wardrobes, including floor-to-ceiling Armadio structures (up to 9.5 feet).",
    href: "/wardrobe",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/04/02.jpeg"
  },
  {
    title: "Pooja Room",
    desc: "Traditional detailing, custom carving, and Lord Krishna story themes integrated seamlessly into modern spaces.",
    href: "/pooja-unit",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/04/01.jpg"
  },
  {
    title: "Display & Storage",
    desc: "TV units, bar displays, bookshelves, and creative space separators designed to elevate empty walls.",
    href: "/display",
    img: "https://vibrantspaces.in/wp-content/uploads/2020/12/shutterstock_645138688-2opt.jpg"
  },
  {
    title: "Movable Furniture & Soft Furnishing",
    desc: "Modern, statement sofas, cots with custom headboards, and side tables constructed with durable raw materials.",
    href: "/furniture",
    img: "https://vibrantspaces.in/wp-content/uploads/2019/09/marbel.jpg"
  },
  {
    title: "Bathroom & Wellness Zone",
    desc: "Water-therapeutic spaces with customized vanity counters, high-end tiling, and quiet spa-like isolation setups.",
    href: "/wellness-zones",
    img: "https://vibrantspaces.in/wp-content/uploads/2019/09/oneside-01.png"
  },
  {
    title: "Commercial Interiors",
    desc: "Ergonomic, open-plan workspaces, retail stores, and hospitality environments that translate brand identity into physical spaces.",
    href: "/commercial-interiors",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/04/04.jpg"
  },
  {
    title: "Factory Manufacturing",
    desc: "Turnkey modular production powered by our 30,000 sq. ft facility and advanced German machinery.",
    href: "/factory",
    img: "https://vibrantspaces.in/wp-content/uploads/2024/12/shutterstock_622608683.webp"
  }
];

const STEPS = [
  {
    num: "01",
    title: "Consultation & Visualisation",
    desc: "We simulate your home's layout by understanding your exact preferences and building detailed 3D designs."
  },
  {
    num: "02",
    title: "Core & Shell Designing",
    desc: "We bridge the gap between architecture and interiors to establish the solid base canvas for your space."
  },
  {
    num: "03",
    title: "Fitouts & Furniture",
    desc: "Perfection is in the details, from the handles on your doors to custom-crafted bespoke furniture units."
  },
  {
    num: "04",
    title: "Styling & Decor",
    desc: "Be it mid-century modern or bohemian chic, we style the environment exactly to fit your aesthetic preference."
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsToAnimate = useRef<(HTMLElement | null)[]>([]);

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
      {/* ── Header ── */}
      <section className="bg-black text-white py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-[2.5rem] md:text-[4.5rem] leading-tight uppercase mb-6 animate-fadeInUp">
            Our Services
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.2em] text-xs md:text-sm uppercase max-w-2xl mx-auto animate-fadeInUp anim-delay-200">
            Interiors that drive your lifestyle by the best interior designers in Chennai.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-5xl mx-auto px-8 py-16 text-center">
        <h2 ref={addToAnimate} className="font-serif text-2xl md:text-4xl uppercase mb-6 opacity-0">
          Creating Home Interior Magic
        </h2>
        <p ref={addToAnimate} className="font-sans text-gray-600 font-light text-sm md:text-lg leading-relaxed max-w-3xl mx-auto opacity-0">
          From a quick retrofit to bespoke furniture suited to your tastes, Vibrant Spaces undertakes end-to-end execution of your interiors. We design and install interiors completely customised for you, including modular wardrobes and kitchens in Chennai.
        </p>
      </section>

      {/* ── Services Grid ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <Link
              href={s.href}
              key={idx}
              ref={addToAnimate}
              className="group flex flex-col bg-gray-50 border border-gray-100 hover:border-black transition-all duration-300 select-none opacity-0"
            >
              <div className="relative h-[250px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl uppercase mb-3 text-black group-hover:text-[#C5A880] transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans text-gray-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {s.desc}
                </p>
                <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-black underline underline-offset-4 decoration-black/20 group-hover:decoration-black">
                  Explore Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
              OUR WORKFLOW
            </span>
            <h2 ref={addToAnimate} className="font-serif text-[2.2rem] md:text-[3.5rem] uppercase opacity-0">
              Simple Steps to the Perfect Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-neutral-900 p-8 border border-white/5 hover:border-[#C5A880]/30 transition-all duration-300 opacity-0"
              >
                <span className="font-serif text-3xl md:text-4xl text-[#C5A880] font-bold block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg uppercase text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-gray-400 font-light text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
