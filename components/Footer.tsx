"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("Designer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="w-full bg-beige text-black/70 font-sans py-20 px-8 lg:px-16 border-t border-black/5 relative overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* ── Top Grid: Links + Form ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Services */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Services
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li><Link href="/flooring" className="hover:text-black transition-colors">Full Home Interiors</Link></li>
              <li><Link href="/wardrobe" className="hover:text-black transition-colors">Kitchen & Wardrobes</Link></li>
              <li><Link href="/display" className="hover:text-black transition-colors">Construction & Renovation</Link></li>
              <li><Link href="/commercial-interiors" className="hover:text-black transition-colors">Commercial Interiors</Link></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Landscape & Solar</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Contact
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li><a href="mailto:hello@vibrantspaces.in" className="hover:text-black transition-colors">hello@vibrantspaces.in</a></li>
              <li><a href="tel:+919543195431" className="hover:text-black transition-colors">+91 95431 95431</a></li>
              <li className="pt-2 text-[10px] opacity-60">CHENNAI | BENGALURU | MUMBAI</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Company
            </h3>
            <ul className="space-y-3 text-xs font-light">
              {[
                { label: "About", href: "/about" },
                { label: "Our Clients", href: "/our-clients" },
                { label: "Our Homes", href: "/our-homes" },
                { label: "Factory", href: "/factory" },
                { label: "Sustainability", href: "/about#sustainability" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-black transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Legal
            </h3>
            <ul className="space-y-3 text-xs font-light">
              {[
                { label: "Terms of Use", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms and Conditions", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-black transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Our Community — Newsletter */}
          <div className="flex flex-col space-y-4 text-left col-span-2 md:col-span-1">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Join Our Community
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-xs">
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-black/25 focus:border-black text-black text-xs py-2.5 outline-none transition-colors w-full placeholder-black/40"
              />
              <select
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent border-b border-black/25 focus:border-black text-black/50 focus:text-black text-xs py-2.5 outline-none cursor-pointer w-full transition-colors"
              >
                <option value="Designer">Designer</option>
                <option value="Architect">Architect</option>
                <option value="Builder">Builder</option>
                <option value="Homeowner">Homeowner</option>
                <option value="Other">Other</option>
              </select>
              <button
                type="submit"
                aria-label="Subscribe"
                className="self-start mt-2 w-9 h-9 rounded-full border border-black/15 hover:border-black text-black flex items-center justify-center transition-colors duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* ── Bottom Bar & Logo Watermark ── */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col justify-start items-start gap-4 w-full">
          <p className="text-black/55 font-sans text-[12px] font-normal leading-[1.3em] text-left">
            © 2026 Vibrant Spaces.&nbsp;All rights reserved.
          </p>

          <span className="font-serif italic text-[16px] text-black text-left pb-1 select-none pointer-events-none">
            Where Dimensions Take Shape
          </span>
        </div>
      </div>

      {/* Giant Logo Watermark at bottom - Moved outside max-w container and sized to fit screen */}
      <div className="w-full flex justify-center mt-12 pointer-events-none select-none">
        <h2 className="text-[9.5vw] font-sans font-black uppercase tracking-[-0.02em] leading-none text-black whitespace-nowrap opacity-100">
          Vibrant Spaces
        </h2>
      </div>
    </footer>
  );
}