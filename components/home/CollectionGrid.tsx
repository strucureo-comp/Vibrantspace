"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PANELS = [
  {
    id: "guild",
    title: "Guild",
    href: "https://duchateau.com/floors/guild/",
    linkText: "Discover More",
    type: "image" as const,
    bg: "https://duchateau.com/wp-content/uploads/2026/01/Flooring-Beaujou-Collection-Coteu-Color-render-web-scaled.webp",
  },
  {
    id: "signature",
    title: "Signature",
    href: "https://duchateau.com/floors/signature/",
    linkText: "Discover More",
    type: "video" as const,
    bg: "https://duchateau.com/wp-content/uploads/2025/10/GettyImages-1453128070-1080p.mp4",
  },
  {
    id: "atelier",
    title: "Atelier",
    href: "https://duchateau.com/atelier-series/",
    linkText: "Discover More",
    type: "video" as const,
    bg: "https://duchateau.com/wp-content/uploads/2026/02/Atelier-Square-loop-for-home-page2.mp4",
  },
  {
    id: "bespoke",
    title: "Bespoke",
    href: "#",
    linkText: "COMING SOON",
    type: "image" as const,
    bg: "https://duchateau.com/wp-content/uploads/2025/10/P_Chaumont_Vernal_Luganno_1.jpg",
    comingSoon: true,
  },
];

function CollectionPanel({ panel }: { panel: (typeof PANELS)[number] }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panelEl = panelRef.current;
    const titleEl = titleRef.current;
    const linkEl = linkRef.current;
    if (!panelEl || !titleEl || !linkEl) return;

    const ctx = gsap.context(() => {
      // Title animates up first
      gsap.fromTo(
        titleEl,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panelEl,
            start: "top 80%",
            once: true,
          },
        }
      );
      // Link animates up after title (slight delay)
      gsap.fromTo(
        linkEl,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panelEl,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, panelEl);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id={panel.id}
      ref={panelRef}
      className="relative overflow-hidden group cursor-pointer"
      style={{ height: "100vh" }}
    >
      {/* Clickable overlay */}
      {!panel.comingSoon && (
        <a
          href={panel.href}
          className="absolute inset-0 z-20"
          aria-label={`Discover ${panel.title}`}
        />
      )}

      {/* Background media */}
      {panel.type === "video" ? (
        <div className="absolute inset-0 z-0">
          <video
            src={panel.bg}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <img
            src={panel.bg}
            alt={panel.title}
            className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-105"
          />
        </div>
      )}

      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Bottom-left text — exactly matching reference */}
      <div className="absolute bottom-0 left-0 z-10 p-10 flex flex-col space-y-2.5">
        <h2
          ref={titleRef}
          className="text-white font-serif font-light text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] uppercase leading-none tracking-wide opacity-0"
        >
          {panel.title}
        </h2>

        {panel.comingSoon ? (
          <span
            ref={linkRef}
            className="self-start inline-block border border-white/40 text-white/60 text-[10px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full opacity-0"
          >
            {panel.linkText}
          </span>
        ) : (
          <span
            ref={linkRef}
            className="text-white text-[11px] font-semibold tracking-widest uppercase underline underline-offset-[5px] decoration-[1.5px] decoration-white hover:opacity-70 transition-opacity opacity-0 cursor-pointer"
          >
            {panel.linkText}
          </span>
        )}
      </div>
    </div>
  );
}

export default function CollectionGrid() {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {PANELS.map((panel) => (
          <CollectionPanel key={panel.id} panel={panel} />
        ))}
      </div>
    </section>
  );
}
