"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsToAnimate = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsToAnimate.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
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
      {/* ── Hero Section ── */}
      <section className="relative w-full h-[65vh] bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/assets/redesign/about/014-About1.png"
          alt="About Vibrant Spaces"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3.5rem] md:text-[5.5rem] uppercase tracking-[0.05em] leading-[0.9em] text-white mb-4 animate-fadeInUp">
            About Us
          </h1>
          <p className="font-sans uppercase text-[#C5A880] tracking-[0.25em] text-xs md:text-sm animate-fadeInUp anim-delay-200">
            Where Dimensions Take Shape.
          </p>
        </div>
      </section>

      {/* ── Who We Are Section ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={addToAnimate} className="opacity-0">
          <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
            OUR GENESIS
          </span>
          <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-tight text-du-dark uppercase mb-8">
            Multi-disciplinary Design & Architecture Practice
          </h2>
          <div className="font-sans text-gray-600 font-light space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              We are into a multi-disciplinary practice from architecture, interior design, construction and a state of the art production factory with German machineries, a team of professionals drawn from every team. We have a solid base in architecture, building a strong reputation across numerous typologies— including office, education, residential, healthcare, science and retail projects.
            </p>
            <p>
              Over the past ten years we have established an enviable reputation for creating exquisitely crafted homes and interiors, to meet and exceed the expectations of the most discerning clients. Now with the new venture of world class factory set up, our approach seeks to deliver the highest design standards, which encompass the finest aesthetic approach with and instilled longevity. We thrive on providing a personable service that delivers the highest standard of finishes to bring your design to reality.
            </p>
            <p>
              Your vision of how your house should be needs the hands of experts to be sculpted into reality. With over 2500 projects under our belt, we understand your needs and tastes to fulfill what has been a lifelong dream. We go beyond the promise of expertise and also deliver on timeliness, transparency and trustability.
            </p>
          </div>
        </div>
        <div ref={addToAnimate} className="relative h-[400px] md:h-[550px] w-full bg-gray-100 overflow-hidden opacity-0">
          <Image
            src="/assets/redesign/factory/027-1-88.jpg"
            alt="State of the art production factory"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Leadership Section ── */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
              OUR LEADERSHIP
            </span>
            <h2 ref={addToAnimate} className="font-serif text-[2.5rem] md:text-[4rem] text-white uppercase tracking-tight opacity-0">
              MEET OUR MINDS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* CEO Venkat Krishnan */}
            <div ref={addToAnimate} className="flex flex-col items-center text-center opacity-0 group">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 border border-white/10 group-hover:border-[#C5A880]/50 transition-colors duration-500">
                <Image
                  src="/assets/redesign/about/001-1.1-01.png"
                  alt="Venkat Krishnan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl uppercase mb-2">Venkat Krishnan</h3>
              <p className="font-sans text-xs tracking-widest text-[#C5A880] uppercase mb-6">Company Head</p>
              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed max-w-md">
                Leading from the front, Our Head Venkat Krishnan is all about maximising the value that we deliver to our clients. He is tireless in his approach, clinical with his methods, and always available to guide the team when his insights are needed. Sustainability, quality and value are his guiding principles – as is making your space work for you instead of the other way around. A valued colleague and a wonderful friend, Mr. Venkat inspires us all.
              </p>
            </div>

            {/* Dr. Gautami Tadimalla */}
            <div ref={addToAnimate} className="flex flex-col items-center text-center opacity-0 group">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 border border-white/10 group-hover:border-[#C5A880]/50 transition-colors duration-500">
                <Image
                  src="/assets/redesign/about/069-Gauthami-Lanscape-Preview-1-1024x576.png"
                  alt="Dr. Gautami Tadimalla"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl uppercase mb-2">Dr. Gautami Tadimalla</h3>
              <p className="font-sans text-xs tracking-widest text-[#C5A880] uppercase mb-6">Partner & Creative Consultant</p>
              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed max-w-md">
                A prolific presence on the silver screen. A director and photographer. An activist and social worker. An exemplary human being. Smt. Gautami Tadimalla has a long list of achievements to her name. The latest feather in her cap comes from being an interior designer whose creative flair has elevated some of our high-end projects to true perfection. With unmatched expertise and an eye for detail, she is a valuable colleague and an asset to our team!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Team Section ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden order-last lg:order-first opacity-0">
            <Image
              src="/assets/redesign/about/013-About01-18.png"
              alt="Vibrant Spaces Team"
              fill
              className="object-cover"
            />
          </div>
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              THE WORKFORCE
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-tight text-du-dark uppercase mb-8">
              Craftsmanship & Precision Driven
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              Vibrant Spaces is powered by a team of experienced professionals, each bringing a unique skill set to the table. From our skilled carpenters who craft bespoke furniture pieces to our talented artisans who add intricate finishing touches, every project is executed with precision and care.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed">
              Driven by passion and a shared commitment to excellence, our team works seamlessly together, ensuring that each design is not only functional but also a work of art. The company is run like a well-oiled machine, with every member playing a key role in delivering exceptional results, on time and on budget.
            </p>
          </div>
        </div>
      </section>

      {/* ── Go Green / Sustainability Section ── */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div ref={addToAnimate} className="opacity-0">
              <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
                SUSTAINABILITY
              </span>
              <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-tight text-du-dark uppercase mb-8">
                Go Green: IGBC Certified Designs
              </h2>
              <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
                As a proud member of the IGBC, our team of top interior designers in Chennai employ green practices in the building and interior sector. We ensure the optimal use of natural resources and work towards creating spaces that are water and energy-efficient. More importantly, our methods enhance the health, happiness and overall well-being of our occupants. In line with our commitment to a sustainable future, we try to incorporate eco-friendly materials in our interiors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 shadow-sm border-t-2 border-[#C5A880]">
                  <h4 className="font-serif font-bold text-lg uppercase mb-3 text-black">Tangible Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-2 font-sans font-light">
                    <li>• 20% – 30% reduction in energy consumption</li>
                    <li>• 30% – 50% reduction in the amount of water consumed</li>
                  </ul>
                </div>
                <div className="bg-white p-6 shadow-sm border-t-2 border-black">
                  <h4 className="font-serif font-bold text-lg uppercase mb-3 text-black">Intangible Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-2 font-sans font-light">
                    <li>• Ample natural light and ventilation</li>
                    <li>• Significant improvement in air quality</li>
                  </ul>
                </div>
              </div>
            </div>

            <div ref={addToAnimate} className="bg-white p-8 md:p-12 shadow-md opacity-0">
              <h3 className="font-serif text-2xl uppercase mb-6 text-black">Eco-Friendly Home Design</h3>
              <p className="font-sans text-xs text-gray-500 mb-6 font-light uppercase tracking-widest">Materials & Methods</p>
              <ul className="space-y-4 text-sm text-gray-600 font-sans font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A880] font-bold">01</span>
                  <span><strong>Reclaimed Materials:</strong> Reclaimed wood for flooring, kitchen cabinets, and cladding. Recycled glass and ceramic tiles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A880] font-bold">02</span>
                  <span><strong>Natural Treatments:</strong> Water-based paints, natural clay paste, and plant-fiber wall coverings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A880] font-bold">03</span>
                  <span><strong>Renewable Flooring:</strong> Cork, rubber, and bamboo flooring options.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A880] font-bold">04</span>
                  <span><strong>Sustainable Fabrics:</strong> Organic linen, cotton, bamboo, soy fiber, bark cloth, wool, silk, and cashmere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A880] font-bold">05</span>
                  <span><strong>Energy Efficiency:</strong> Energy-efficient windows with ventilation and low-VOC products.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-20 bg-black text-center text-white px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-6">
            Congratulations for buying a new home
          </h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-10">
            Interior designing is so much more than shopping for furniture and decor online. They may all look great on your screen, but how can you tell if they are the best fit for your home? You can use a team of experts for that task. We analyse the colour, lighting, room size, scale, and placement and give you the best solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
