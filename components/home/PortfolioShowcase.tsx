"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IG_IMAGES = [
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/1-Flooring-MLB-Jeanneret-IG-picture-hallway.webp",
    alt: "MLB Jeanneret hallway flooring",
    link: "https://www.instagram.com/p/DTLlV5rEmQ1/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/2-kalamazoo-grill-in-snow-environment.webp",
    alt: "Kalamazoo grill in snow",
    link: "https://www.instagram.com/p/DSK8i2PD5cy/",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/3-MLB-Jeanneret-cottage-room-scene.webp",
    alt: "MLB Jeanneret cottage room",
    link: "https://www.instagram.com/p/DTgPQIwFx-o/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/4-kitchen-room-scene-with-John-Lennon-picture.webp",
    alt: "Kitchen room scene",
    link: "https://www.instagram.com/p/DTQto9jEt1t/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/5-Wall-Coverings-Moderne-curved-room.webp",
    alt: "Wall Coverings Moderne curved room",
    link: "https://www.instagram.com/p/DQhX0T3iUMb/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/6-Flooring-Ru-Paul-Residence-MLB-Couture.webp",
    alt: "RuPaul Residence MLB Couture flooring",
    link: "https://www.instagram.com/p/DQevobBE6Lf/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/7-Pool-table-medallion-flooring-Palais.webp",
    alt: "Pool table medallion flooring Palais",
    link: "https://www.instagram.com/p/DOrQfAdgZyd/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/10-San-Diego-HQ-Showroom-Kitchen.webp",
    alt: "San Diego HQ Showroom Kitchen",
    link: "https://www.instagram.com/p/DRVOzVggQjo/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/11-flooring-bedroom-scene-picture.webp",
    alt: "Flooring bedroom scene",
    link: "https://www.instagram.com/p/DMGWPFWu-Ix/?img_index=1",
  },
  {
    src: "https://duchateau.com/wp-content/uploads/2026/01/12-Wall-Covering-Kitchen-picture.webp",
    alt: "Wall Covering Kitchen",
    link: "https://www.instagram.com/p/DLVGZzexjne/",
  },
];

export default function PortfolioShowcase() {
  const flagshipRef = useRef<HTMLElement>(null);
  const flagshipBgRef = useRef<HTMLDivElement>(null);
  const flagshipContentRef = useRef<HTMLDivElement>(null);
  const locationBarRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bgEl = flagshipBgRef.current;
    const container = flagshipRef.current;
    if (!bgEl || !container) return;

      const ctx = gsap.context(() => {
      // Parallax zoom effect for Showroom background
      gsap.to(bgEl, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Showroom content reveal
      if (flagshipContentRef.current) {
        gsap.fromTo(
          flagshipContentRef.current,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
            },
          }
        );
      }

      // Location details bar reveal
      if (locationBarRef.current) {
        gsap.fromTo(
          locationBarRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: locationBarRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // Social / Instagram header reveal
      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current.querySelector(".social-header"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: socialRef.current,
              start: "top 80%",
            },
          }
        );

        // Instagram items reveal sequence
        const items = socialRef.current.querySelectorAll(".ig-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: socialRef.current.querySelector(".ig-grid"),
              start: "top 85%",
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Flagship Showroom Section ── */}
      <section
        ref={flagshipRef}
        className="relative w-full h-[75vh] overflow-hidden select-none flex flex-col items-center justify-center text-center px-6"
      >
        {/* Parallax Background */}
        <div
          ref={flagshipBgRef}
          className="absolute z-0"
          style={{
            backgroundImage:
              "url(https://duchateau.com/wp-content/uploads/2025/10/showroom-sunglint.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "-12%",
            height: "135%",
            left: 0,
            right: 0,
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        {/* Content details */}
        <div ref={flagshipContentRef} className="relative z-10 flex flex-col items-center space-y-4 max-w-xl">
          <img
            src="/assets/du-logo-mark-white.svg"
            alt="Vibrant Spaces Logo Mark"
            className="h-10 w-auto mb-4 opacity-90"
          />
          
          <p className="text-white font-serif font-normal text-[22px] md:text-[1.8em] leading-[1.3em] tracking-normal mb-1">
            Where Dimensions Take Shape
          </p>

          <h2 className="text-white font-sans font-normal text-[2.5em] md:text-[3em] xl:text-[5em] uppercase tracking-[-0.2rem] leading-[0.9em] mb-1">
            Chennai Office
          </h2>

          <h3 className="text-white font-serif font-normal text-[2.5em] md:text-[3em] xl:text-[5.6em] uppercase tracking-[-0.2rem] leading-[0.9em] mb-2">
            Anna Nagar
          </h3>

          <Link
            href="/contact"
            className="font-heading text-[0.9em] uppercase underline underline-offset-[5px] text-white hover:opacity-60 transition-opacity mt-4"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* ── Location Bar ── */}
      <section
        ref={locationBarRef}
        className="w-full bg-black text-white py-10 px-8 lg:px-16 border-t border-white/5 select-none"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/about"
            className="font-heading text-[0.9em] uppercase underline underline-offset-[5px] text-white hover:opacity-60 transition-opacity"
          >
            Explore More
          </Link>
          
          <div className="flex flex-row items-center gap-6">
            <span className="text-white/40 font-heading text-[10px] tracking-[0.2em] uppercase hidden md:inline">
              Location
            </span>
            <span className="text-white font-sans text-[0.9em] font-semibold leading-[1.3em] text-center md:text-left">
              D41, 4th Street, Anna Nagar East, Chennai - 600102
            </span>
          </div>
          
          <a
            href="https://maps.app.goo.gl/dCbWT1Lc6ijS9N2d9"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-[0.9em] uppercase underline underline-offset-[5px] text-white hover:opacity-60 transition-opacity"
          >
            Directions
          </a>
        </div>
      </section>

      {/* ── Social Links + Instagram Grid Section ── */}
      <section ref={socialRef} className="w-full bg-black text-white py-20 px-6 lg:px-16 overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto flex flex-col space-y-12">
          {/* Header */}
          <div className="social-header flex flex-col items-center justify-center text-center gap-3">
            <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/45">
              Inspiration is everywhere
            </p>
            <div className="flex items-center justify-center gap-6 font-heading text-[10px] tracking-[0.2em] uppercase">
              <a
                href="https://www.instagram.com/vibrantspaces/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/vibrantspaces"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                Linkedin
              </a>
              <a
                href="https://www.pinterest.com/vibrantspaces/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                Pinterest
              </a>
            </div>
          </div>

          {/* Grid of 10 items */}
          <div className="ig-grid grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {IG_IMAGES.map((img, idx) => (
              <a
                key={idx}
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-item relative aspect-square overflow-hidden group rounded-none"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}