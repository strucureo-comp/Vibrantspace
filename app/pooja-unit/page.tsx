"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ChevronUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const KRISHNA_STORIES = [
  {
    title: "The Birth of Krishna",
    desc: "Lord Vishnu planted a black hair into the womb of princess Devaki of Mathura. Thus, Lord Krishna was born to Devaki and Vasudeva, destined to bring light to the world and overcome the tyranny of Kamsa."
  },
  {
    title: "Vasuki's Protection",
    desc: "To save newborn Krishna from Kamsa, Vasudeva escaped on a dark, stormy night to Gokul. The many-headed serpent snake Vasuki spread his hood over them, shielding the divine infant from torrential rains."
  },
  {
    title: "Nanda & Yashoda's Home",
    desc: "Vasudeva switched baby Krishna with Yashoda's newborn daughter in Gokul. When Kamsa attempted to kill the girl, she transformed into a goddess, warning Kamsa that his slayer was growing up in Gokul."
  },
  {
    title: "Putana's Demise",
    desc: "Kamsa sent the demoness Putana to poison baby Krishna. However, Krishna sucked the life out of her, absorbing the poison. The blue skin tone of Krishna represents this victory over toxic forces."
  },
  {
    title: "The Twin Trees",
    desc: "Tied to a heavy wooden mortar, child Krishna crawled between two massive Arjuna trees. The mortar wedged horizontally, and with divine strength, Krishna pulled it down, freeing two cursed demigods."
  },
  {
    title: "The Universe Inside His Mouth",
    desc: "Accused of eating mud, young Krishna opened his mouth for mother Yashoda. Instead of mud, Yashoda saw the entire cosmos—planets, stars, oceans, and galaxies—realizing her son was the Supreme Lord Vishnu."
  },
  {
    title: "Krishna & Govardhan Hill",
    desc: "Krishna instructed the villagers to worship Mount Govardhan instead of Indra. An enraged Indra unleashed massive storms, but Krishna lifted the entire mountain on his little finger, sheltering Gokul."
  },
  {
    title: "Dancing on Kaliya",
    desc: "The multi-headed serpent Kaliya poisoned the Yamuna river. Krishna leapt in, wrestled the snake, grew to massive weight, and danced on Kaliya's heads while playing his flute, purifying the river."
  },
  {
    title: "The Loveable Butter Thief",
    desc: "Krishna and his friends planned elaborate schemes to steal butter from pots hung high. The village gopis complained to Yashoda, only to relish talking about his endearing innocence and charm."
  },
  {
    title: "Pledge of Non-Violence",
    desc: "During Mahabharata, Bheeshma vowed to make Krishna break his weaponless pledge. Seeing Arjuna in danger, Krishna charged Bheeshma with a chariot wheel, showing that his love for his devotee trumps his own vow."
  }
];

export default function PoojaUnitPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsToAnimate = useRef<(HTMLElement | null)[]>([]);
  const [openStoryIdx, setOpenStoryIdx] = useState<number | null>(null);

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

  const toggleStory = (idx: number) => {
    setOpenStoryIdx(openStoryIdx === idx ? null : idx);
  };

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen pt-20">
      {/* ── Hero ── */}
      <section className="relative w-full h-[60vh] bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="https://vibrantspaces.in/wp-content/uploads/2024/04/01.jpg"
          alt="Spiritual Pooja Units"
          fill
          className="object-cover opacity-60 animate-kenBurnsOut"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif font-light text-[3rem] md:text-[5rem] uppercase tracking-[0.05em] text-white mb-4">
            Pooja Unit Designs
          </h1>
          <p className="font-sans text-[#C5A880] tracking-[0.25em] text-xs md:text-sm uppercase">
            Spiritual Harmony Meets Custom Artistry
          </p>
        </div>
      </section>

      {/* ── Sacred Spaces ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToAnimate} className="opacity-0">
            <span className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block">
              SACRED HAVEN
            </span>
            <h2 className="font-serif text-[2.2rem] md:text-[3.2rem] leading-none text-du-dark uppercase mb-8">
              Tranquility in Daily Worship
            </h2>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-6">
              Start your day with positivity and spiritual energy by creating a Pooja room tailored to your unique preferences. A Pooja room is not just a space in your home; it is a sacred haven that brings peace, tranquility, and divine blessings into your daily routine. Whether you are moving into a new home or looking to redesign your existing space, we offer a wide variety of Pooja room designs.
            </p>
            <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed mb-8">
              From traditional designs rich in intricate carvings and brass embellishments to modern, minimalist styles that blend seamlessly with contemporary interiors, we provide a diverse selection to help you craft a space that truly resonates with you.
            </p>
          </div>

          <div ref={addToAnimate} className="relative h-[350px] md:h-[500px] w-full bg-gray-100 overflow-hidden opacity-0">
            <Image
              src="https://vibrantspaces.in/wp-content/uploads/2019/09/marbel.jpg"
              alt="Intricate Pooja Room Door Carving"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Anecdotes and Custom Carving ── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span ref={addToAnimate} className="text-[#C5A880] font-sans font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-4 block opacity-0">
              TRADITIONAL ARTISANSHIP
            </span>
            <h2 ref={addToAnimate} className="font-serif text-2xl md:text-4xl uppercase text-black mb-6 opacity-0">
              The Story of Lord Krishna Doors
            </h2>
            <p ref={addToAnimate} className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed opacity-0">
              At Vibrant Spaces, we carve intricate anecdotes of Lord Krishna directly into premium wood door frames for Pooja rooms. These detailed reliefs depict his divine play (Lilas), enriching the spiritual atmosphere of your home.
            </p>
          </div>

          <div className="space-y-4">
            {KRISHNA_STORIES.map((story, idx) => {
              const isOpen = openStoryIdx === idx;
              return (
                <div
                  key={idx}
                  ref={addToAnimate}
                  className="bg-white border border-gray-100 hover:border-[#C5A880] transition-colors rounded-none opacity-0"
                >
                  <button
                    onClick={() => toggleStory(idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif text-lg uppercase text-black font-medium">{story.title}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[#C5A880]" /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-50">
                      <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed pt-4">
                        {story.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Harmony Section ── */}
      <section className="bg-black text-white py-20 text-center px-8">
        <div ref={addToAnimate} className="max-w-3xl mx-auto opacity-0">
          <h2 className="font-serif text-2xl md:text-4xl uppercase mb-6 text-white">Vastu & Spiritual Adherence</h2>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-10">
            Our team of experts is here to guide you in creating a Pooja room that reflects your personal taste while ensuring it adheres to traditional principles of Vastu and spirituality, enhancing energy and peaceful meditation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-xs tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#C5A880] hover:text-white transition-colors duration-300 rounded-none"
          >
            Design Your Pooja Room
          </Link>
        </div>
      </section>
    </div>
  );
}
