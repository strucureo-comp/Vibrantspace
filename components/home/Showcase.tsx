"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import styles from "./Showcase.module.css";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  {
    title: "Guild",
    img: "https://duchateau.com/wp-content/uploads/2025/11/Guild-lifestyle-couple-on-couch-no-carpet-smaller.jpg",
    link: "https://duchateau.com/floors/guild/",
    text: "Discover More"
  },
  {
    title: "Signature",
    video: "https://duchateau.com/wp-content/uploads/2025/10/GettyImages-1453128070-1080p.mp4",
    link: "https://duchateau.com/floors/signature/",
    text: "Discover More"
  },
  {
    title: "Atelier",
    video: "https://duchateau.com/wp-content/uploads/2026/02/Atelier-Square-loop-for-home-page2.mp4",
    link: "https://duchateau.com/atelier-series/",
    text: "Discover More"
  },
  {
    title: "Bespoke",
    img: "https://duchateau.com/wp-content/uploads/2025/10/P_Chaumont_Vernal_Luganno_1.jpg",
    link: "#",
    text: "COMING SOON",
    isBespoke: true
  },
];


export default function Showcase() {
  const containerRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<(HTMLAnchorElement | HTMLDivElement)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, i) => {
        if (!panel) return;
        const bg = panel.querySelector(`.${styles.bgLayer}`);
        const content = panel.querySelector(`.${styles.content}`);

        gsap.fromTo(
          panel,
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, duration: 1.1, delay: i * 0.12, ease: "power3.out" }
        );

        if (content) {
          const contentInner = content.querySelector(".content-inner");
          if (contentInner) {
            gsap.fromTo(
              contentInner,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: panel,
                  start: "top 80%",
                },
              }
            );
          }

          // Scroll-based vertical translation to replicate the Elementor sticky-lag parallax effect
          if (typeof window !== "undefined" && window.innerWidth >= 768) {
            gsap.to(content, {
              y: 180, // Smooth vertical shift downwards as page scrolls down
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom", // Starts as soon as column enters bottom of viewport
                end: "bottom top",    // Ends when column leaves top of viewport
                scrub: true,
              },
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.row}>
        {PANELS.map((p, i) => {
          const content = (
            <>
              <div className={styles.bgContainer}>
                {p.video ? (
                  <video src={p.video} className={styles.bgLayer} autoPlay loop muted playsInline />
                ) : (
                  <div className={styles.bgLayer} style={{ backgroundImage: `url(${p.img})` }} />
                )}
                {/* Overlay darkening */}
                <div className={styles.overlayLayer} />
              </div>
              
              <div className={styles.content}>
                <div className="content-inner w-full flex flex-col items-center text-center">
                  <h2 className={styles.title}>{p.title}</h2>
                  {p.text && <p className={styles.text}><span className={p.isBespoke ? "" : styles.underline}>{p.text}</span></p>}
                </div>
              </div>
            </>
          );

          return p.isBespoke ? (
             <div 
               key={i} 
               ref={el => { if (el) panelsRef.current[i] = el; }} 
               className={styles.col}
             >
                {content}
             </div>
          ) : (
            <Link 
              key={i} 
              href={p.link} 
              ref={el => { if (el) panelsRef.current[i] = el; }} 
              className={styles.col}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
