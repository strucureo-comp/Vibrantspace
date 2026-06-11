"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const FLOORING_COLS = [
  {
    title: "Residential Interiors",
    items: [
      { name: "Full Home Interiors", href: "/flooring" },
      { name: "Luxury Interiors", href: "/our-homes" },
      { name: "Kitchens", href: "/kitchen" },
      { name: "Wardrobes", href: "/wardrobe" },
    ],
  },
  {
    title: "Construction & More",
    items: [
      { name: "Home Construction", href: "/display" },
      { name: "Transformation", href: "/display" },
    ],
  },
];

const WALL_COLS = [
  {
    title: "Commercial & Specialized",
    items: [
      { name: "Commercial Interiors", href: "/commercial-interiors" },
      { name: "Retail Interiors", href: "/services" },
      { name: "Hospitality", href: "/services" },
      { name: "Solar Solutions", href: "/services" },
      { name: "Landscape Design", href: "/services" },
      { name: "Online Design Studio", href: "/contact" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleTabHover = (tabName: string | null) => {
    setHoveredTab(tabName);
  };

  const isLightNav = isScrolled || hoveredTab !== null || mobileMenuOpen;

  return (
    <>
      <nav
        onMouseLeave={() => handleTabHover(null)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isLightNav
            ? "bg-white border-black/5 text-black"
            : "bg-transparent border-transparent text-white"
        }`}
      >
        {/* Main Navbar Bar */}
        <div className="max-w-[1600px] mx-auto px-6 h-[40px] grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: Navigation links */}
          <div className="flex items-center space-x-8">
            {/* Hamburger menu icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col space-y-1.5 justify-center items-center w-6 h-6 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-[1px] w-6 transition-all duration-300 ${
                  isLightNav ? "bg-black" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-[1px] w-6 transition-all duration-300 ${
                  isLightNav ? "bg-black" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[1px] w-6 transition-all duration-300 ${
                  isLightNav ? "bg-black" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-7 font-heading text-[11px] tracking-[0.2em] uppercase font-normal">
              <Link
                href="/our-homes"
                onMouseEnter={() => handleTabHover("flooring")}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Our Homes
              </Link>
              <Link
                href="/services"
                onMouseEnter={() => handleTabHover("wall-covering")}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Services
              </Link>
              <Link
                href="/factory"
                onMouseEnter={() => handleTabHover(null)}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Factory
              </Link>
              <Link
                href="/commercial-interiors"
                onMouseEnter={() => handleTabHover(null)}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Commercial
              </Link>
              <Link
                href="/about"
                onMouseEnter={() => handleTabHover(null)}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                About
              </Link>
            </div>
          </div>

          {/* Center: Brand Shield Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <img
                src={isLightNav ? "/assets/du-logo-mark.svg" : "/assets/du-logo-mark-white.svg"}
                alt="Vibrant Spaces"
                className="h-[24px] w-[22px] transition-all duration-300"
              />
            </Link>
          </div>

          {/* Right: Actions / Utilities */}
          <div className="flex items-center justify-end space-x-6">
            <div className="hidden xl:flex items-center space-x-6 font-heading text-[11px] tracking-[0.2em] uppercase">
              <Link
                href="/contact"
                className="hover:opacity-60 transition-opacity"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Icon buttons */}
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="hover:opacity-60 transition-opacity">
                <img
                  src={isLightNav ? "/assets/search.svg" : "/assets/search-white.svg"}
                  alt="Search"
                  className="w-3.5 h-3.5"
                />
              </button>
              <Link href="/contact" aria-label="Account" className="hover:opacity-60 transition-opacity">
                <img
                  src={isLightNav ? "/assets/du-account-icon.svg" : "/assets/du-account-icon-white.svg"}
                  alt="Account"
                  className="w-3.5 h-3.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Megamenu Dropdown Drawer */}
        <AnimatePresence>
          {hoveredTab !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[40px] left-0 w-full bg-white text-black shadow-lg overflow-hidden border-t border-black/5"
            >
              <div className="max-w-[1600px] mx-auto px-16 py-12 grid grid-cols-4 gap-8">
                {/* Column Render */}
                {hoveredTab === "flooring" &&
                  FLOORING_COLS.map((col, idx) => (
                    <div key={idx} className="flex flex-col space-y-4">
                      <h4 className="font-heading text-xs tracking-widest text-black/55 uppercase border-b border-black/5 pb-2">
                        {col.title}
                      </h4>
                      <ul className="flex flex-col space-y-2.5">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="font-serif text-lg text-black hover:text-black/60 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {hoveredTab === "wall-covering" &&
                  WALL_COLS.map((col, idx) => (
                    <div key={idx} className="col-span-2 flex flex-col space-y-4">
                      <h4 className="font-heading text-xs tracking-widest text-black/55 uppercase border-b border-black/5 pb-2">
                        {col.title}
                      </h4>
                      <ul className="grid grid-cols-2 gap-y-2.5 gap-x-8">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="font-serif text-lg text-black hover:text-black/60 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {/* Promotional side panel - Vibrant style */}
                <div className="col-span-2 lg:col-span-1 flex flex-col justify-between p-6 bg-beige/40 rounded-sm">
                  <div className="space-y-2">
                    <span className="font-heading text-[9px] tracking-widest uppercase text-black/45">Bespoke Design</span>
                    <h5 className="font-serif text-xl tracking-wide leading-tight">Crafting Your Dream Home</h5>
                    <p className="font-sans text-xs text-black/60 font-light leading-relaxed">
                      Experience luxury home interiors in Chennai with a team that blends elegance, style, and craftsmanship.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="font-heading text-[10px] tracking-widest uppercase underline underline-offset-4 mt-6 hover:opacity-75"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white text-black pt-24 px-6 overflow-y-auto flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col space-y-6">
              {[
                { name: "Our Homes", href: "/our-homes" },
                { name: "Services", href: "/services" },
                { name: "Factory", href: "/factory" },
                { name: "Commercial", href: "/commercial-interiors" },
                { name: "About", href: "/about" },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-black/5 pb-4">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl font-light tracking-wide hover:opacity-60 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-12">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
