"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Search } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
  {
    name: "Dr. Yugraj Singh Yadava",
    role: "Director, Bay of Bengal Programme, World Bank Ocean Partnership",
    text: "Vibrant Interiors completed turnkey interiors for our sea-facing luxury apartment in Marina Bay. The journey from concept to implementation was seamless and professional.",
    featured: true
  },
  {
    name: "Akshay & Sudharma",
    role: "Classical Dancer & Mridangam Artist",
    text: "Our home was designed around our artistic lives, beliefs, and inspirations. Vibrant Spaces created a space that truly supports our art forms and spiritual satisfaction.",
    featured: true
  },
  {
    name: "Padma Bhushan AR. Rahman",
    role: "Oscar-Winning Music Director",
    text: "Our home has come out very well. God bless the entire Vibrant Team. Keep it up!",
    featured: true
  },
  {
    name: "Mr. Shiv Das Meena",
    role: "Chief Secretary of Tamil Nadu & Chairman – TNRERA",
    text: "Working with The Vibrant Spaces team was an absolute pleasure. Every step of the process, from planning and drawing to design and execution, was handled with the utmost professionalism and immaculate attention to detail. Great results within committed time frame.",
    featured: true
  },
  {
    name: "Mr. Badrinivas Chakravathi",
    role: "MD – Global Markets, Citi Bank",
    text: "Vibrant Spaces took on the whole designing phase very well. And then the execution, I must say it's been a wow experience. The overall journey has been very fulfilling because we did it in a very methodical way. They understood what we wanted and then delivered for me.",
    featured: true
  },
  {
    name: "Mr. Selva Kumar",
    role: "TNPL – Cricket team, Salem Spartans",
    text: "We wanted it to be as luxurious and as functional as possible. They did a great job in satisfying every single one of our desires. They are very responsive and highly dependable. Highly recommend them for a premium home.",
    featured: false
  },
  {
    name: "Mrs. Varsha",
    role: "Founder – Ensens Perfumery",
    text: "Vibrant Spaces designed a minimal home penthouse in Alwarpet that serves as the perfect backdrop for my vibrant family. Simple, efficient, safe, and functional. Complete with a custom-made bar cabinet, walk-in closet, and a sublime private garden.",
    featured: false
  },
  {
    name: "Mr. Prabhakar",
    role: "Executive Director – JP Morgan Chase",
    text: "I bought a home at Azure – The Oceanic and chose Vibrant Spaces for providing end to end interior solutions. I was very happy with the overall outcome. Me, along with my family and friends, were quite impressed with their attention to details and wonderful execution.",
    featured: false
  },
  {
    name: "Mr. Moses",
    role: "Managing Director – Allison Transmission, India",
    text: "Redesigning the interior spaces was a remarkable milestone that showcased their commitment to quality and precision. Excellent cost-effectiveness, on-time delivery despite heavy rains, and flexibility in understanding our corporate vision.",
    featured: false
  },
  {
    name: "Dr M A Raja",
    role: "Medical Oncology Director – MGM Cancer Institute",
    text: "Professional but friendly, always accessible, quality work, no overselling or pressure. They offer wide choices to suit our budget, and excellent execution of what was promised. I would definitely recommend them.",
    featured: false
  },
  {
    name: "Mr. Sanjay Chugh",
    role: "City Head & Director, Anarock Property, Chennai",
    text: "Vibrant Spaces took the time to truly understand our vision, transforming our space into a beautiful, functional haven that perfectly reflects our lifestyle. They balanced aesthetics with practicality, ensuring that each room looks stunning.",
    featured: false
  },
  {
    name: "Mrs. Sudha Sriram",
    role: "Director – Flex, India",
    text: "Vibrant Spaces has been the most professional and customer-oriented team that we have worked with so far. Meticulous and organized, completing the project successfully without rework. Exemplary site coordination and smooth handoff.",
    featured: false
  },
  {
    name: "Mr. Deepak Khanna",
    role: "Vice President – MRF Limited",
    text: "I would like to thank you for the design upgrade you gave our flat and compliment your team for the dedication and integrity. Not only the designing but the high quality of material used has been appreciated by my friends.",
    featured: false
  },
  {
    name: "Mr. Raj Shankar",
    role: "MD & Director, Reddington – India",
    text: "Right from the stage of preparing the design to the negotiations and execution, Team Vibrant has been very professional, prompt, disciplined, honest, and transparent. Highly recommended.",
    featured: false
  },
  {
    name: "Mr. Raman Nurani",
    role: "Sr Director, Applied Materials",
    text: "Vibrant Spaces designed our house in the most perfect way by incorporating all our wishes and diverse family tastes into a workable, harmonious flow. We are forever grateful.",
    featured: false
  },
  {
    name: "Mr. Veeraraghavan",
    role: "Senior Advocate, Fmr. Addl. Advocate General",
    text: "Vibrant transformed my home in Anna Nagar. They created a beautiful TV unit, customized rattan sofas, foyer layout with polished Aathangudi tiles, and a custom Lord Krishna statue. Excellent 3D design presentations gave absolute clarity.",
    featured: false
  },
  {
    name: "Dr. C. Velan",
    role: "CEO – Ascendas IT Parks & Chairman – IGBC Chennai",
    text: "As somebody who must prioritize his time, collaborating with Vibrant was the best decision. The young and dynamic team showed incredible experience. They worked like a well-oiled machine, ensuring prompt delivery and legitimate pricing.",
    featured: true
  },
  {
    name: "Mr. Shaik Kaleem",
    role: "Senior Director, Internet of Things (IoT) – Cisco",
    text: "We live in Chicago and they handled the turnkey project for my three Nungambakkam flats remotely. Design team shared various layouts over Webex/WhatsApp and implemented wardrobes, ceilings, and European kitchens efficiently.",
    featured: false
  },
  {
    name: "Commander Rahul Sitaraman",
    role: "Head of Administration & Operations – Shiv Nadar School",
    text: "The interior transformation executed by Vibrant Spaces at the Shiv Nadar School campus while maintaining the local educational ethos is an incredible feat! Creativity is unlocked by their design work.",
    featured: false
  }
];

export default function OurClientsPage() {
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
  }, [searchTerm]); // Re-run triggers if items filter and redraw

  const addToAnimate = (el: HTMLElement | null) => {
    if (el && !elementsToAnimate.current.includes(el)) {
      elementsToAnimate.current.push(el);
    }
  };

  const filteredTestimonials = TESTIMONIALS.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen pt-20">
      {/* ── Hero ── */}
      <section className="bg-black text-white py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-[2.5rem] md:text-[4.5rem] leading-tight uppercase mb-6 animate-fadeInUp">
            Client Testimonials
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.2em] text-xs md:text-sm uppercase max-w-2xl mx-auto animate-fadeInUp anim-delay-200">
            What Our Customers Have to Say About Their Vibrant Journey
          </p>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section className="max-w-xl mx-auto px-8 py-10">
        <div className="relative flex items-center border border-gray-200 focus-within:border-black transition-colors px-4 py-3 bg-gray-50">
          <Search size={18} className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search testimonials by client, role or keywords..."
            className="w-full bg-transparent outline-none font-sans text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* ── Featured Testimonials ── */}
      {searchTerm === "" && (
        <section className="max-w-7xl mx-auto px-8 md:px-16 pb-16">
          <div className="text-center mb-12">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-2 block opacity-0">
              FEATURED VOICES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.filter((t) => t.featured).map((t, idx) => (
              <div
                key={idx}
                ref={addToAnimate}
                className="bg-[#F5F5F7] p-8 md:p-12 relative flex flex-col justify-between border-t-4 border-[#C5A880] opacity-0 shadow-sm"
              >
                <Quote className="absolute top-8 right-8 text-[#C5A880]/15 w-20 h-20" />
                <div className="relative z-10">
                  <p className="font-sans text-gray-700 italic text-sm md:text-lg leading-relaxed mb-8 font-light">
                    "{t.text}"
                  </p>
                  <div>
                    <h3 className="font-serif text-xl uppercase text-black font-semibold">{t.name}</h3>
                    <p className="font-sans text-xs tracking-widest text-[#C5A880] uppercase mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── All Reviews Masonry Grid ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
        {searchTerm !== "" && (
          <div className="text-sm font-sans text-gray-500 mb-6 uppercase tracking-wider">
            Found {filteredTestimonials.length} reviews matching your search query
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((t, idx) => (
            <div
              key={idx}
              ref={addToAnimate}
              className="bg-white p-8 border border-gray-100 hover:border-black hover:shadow-sm transition-all duration-300 flex flex-col justify-between opacity-0"
            >
              <div>
                <Quote className="text-[#C5A880]/10 w-8 h-8 mb-6" />
                <p className="font-sans text-gray-600 font-light text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>
              <div className="border-t border-gray-50 pt-4 mt-4">
                <h4 className="font-serif text-base uppercase text-black font-bold">{t.name}</h4>
                <p className="font-sans text-[0.7rem] tracking-wider text-gray-500 uppercase mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-black text-white px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6">Become a Happy Client</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Experience our transparent, client-first interior execution. Let's design and manufacture your dream home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
