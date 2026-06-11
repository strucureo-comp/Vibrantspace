"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const FLOORING_COLS = [
  {
    title: "Hardwood Flooring",
    items: [
      { name: "Guild", href: "https://duchateau.com/floors/guild/" },
      { name: "Signature", href: "https://duchateau.com/floors/signature/" },
      { name: "Martyn Lawrence Bullard", href: "https://duchateau.com/martyn-lawrence-bullard-collection/" },
      { name: "Atelier", href: "https://duchateau.com/atelier-series/" },
    ],
  },
  {
    title: "Composite Flooring",
    items: [
      { name: "Guild", href: "https://duchateau.com/floors/guild/" },
      { name: "Collections", href: "https://duchateau.com/floors/guild/composite/portfolio/" },
    ],
  },
];

const WALL_COLS = [
  {
    title: "Wall Covering Collections",
    items: [
      { name: "Zen Collection", href: "https://duchateau.com/zen-collection/" },
      { name: "Motif Collection", href: "https://duchateau.com/motif-collection/" },
      { name: "Ligne Collection", href: "https://duchateau.com/ligne-collection/" },
      { name: "Inceptiv Collection", href: "https://duchateau.com/inceptiv-collection/" },
      { name: "Moderne Collection", href: "https://duchateau.com/moderne-collection/" },
      { name: "Pictura Collection", href: "https://duchateau.com/pictura-collection/" },
      { name: "Intervals Collection", href: "https://duchateau.com/intervals-collection/" },
      { name: "Celestio Collection", href: "https://duchateau.com/celestio-collection/" },
      { name: "Celestio Legno Collection", href: "https://duchateau.com/celestio-legno-collection/" },
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
                href="https://duchateau.com/floors/guild/"
                onMouseEnter={() => handleTabHover("flooring")}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Flooring
              </Link>
              <Link
                href="https://duchateau.com/walls-ceilings/"
                onMouseEnter={() => handleTabHover("wall-covering")}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Wall Covering
              </Link>
              <Link
                href="https://duchateau.com/kitchens-baths/"
                onMouseEnter={() => handleTabHover(null)}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Kitchen + Bath
              </Link>
              <Link
                href="https://duchateau.com/wardrobe/"
                onMouseEnter={() => handleTabHover(null)}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Wardrobe
              </Link>
              <Link
                href="https://duchateau.com/outdoor/"
                onMouseEnter={() => handleTabHover(null)}
                className="py-2 hover:opacity-60 transition-opacity"
              >
                Outdoor
              </Link>
            </div>
          </div>

          {/* Center: Brand Shield Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <img
                src={isLightNav ? "/assets/du-logo-mark.svg" : "/assets/du-logo-mark-white.svg"}
                alt="Duchateau"
                className="h-[24px] w-[22px] transition-all duration-300"
              />
            </Link>
          </div>

          {/* Right: Actions / Utilities */}
          <div className="flex items-center justify-end space-x-6">
            <div className="hidden xl:flex items-center space-x-6 font-heading text-[11px] tracking-[0.2em] uppercase">
              <a
                href="https://duchateau.com/get-started/"
                className="hover:opacity-60 transition-opacity"
              >
                Where to Buy
              </a>
              <a
                href="https://duchateau.com/care-products/"
                className="hover:opacity-60 transition-opacity"
              >
                Shop Care Products
              </a>
            </div>

            {/* Icon buttons */}
            <div className="flex items-center space-x-4">
              <a href="https://duchateau.com/?s=" aria-label="Search" className="hover:opacity-60 transition-opacity">
                <img
                  src={isLightNav ? "/assets/search.svg" : "/assets/search-white.svg"}
                  alt="Search"
                  className="w-3.5 h-3.5"
                />
              </a>
              <a href="https://duchateau.com/my-account/" aria-label="Account" className="hover:opacity-60 transition-opacity">
                <img
                  src={isLightNav ? "/assets/du-account-icon.svg" : "/assets/du-account-icon-white.svg"}
                  alt="Account"
                  className="w-3.5 h-3.5"
                />
              </a>
              <a href="https://duchateau.com/cart/" aria-label="Cart" className="hover:opacity-60 transition-opacity">
                <img
                  src={isLightNav ? "/assets/du-shopping-cart-icon.svg" : "/assets/du-shopping-cart-icon-white.svg"}
                  alt="Cart"
                  className="w-[12px] h-[13px]"
                />
              </a>
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
                            <a
                              href={item.href}
                              className="font-serif text-lg text-black hover:text-black/60 transition-colors"
                            >
                              {item.name}
                            </a>
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
                            <a
                              href={item.href}
                              className="font-serif text-lg text-black hover:text-black/60 transition-colors"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {/* Promotional side panel - Duchateau style */}
                <div className="col-span-2 lg:col-span-1 flex flex-col justify-between p-6 bg-beige/40 rounded-sm">
                  <div className="space-y-2">
                    <span className="font-heading text-[9px] tracking-widest uppercase text-black/45">Featured Selection</span>
                    <h5 className="font-serif text-xl tracking-wide leading-tight">The Doorway Into Duchateau</h5>
                    <p className="font-sans text-xs text-black/60 font-light leading-relaxed">
                      Discover the Guild Series, hand-crafted flooring details engineered for modern luxury.
                    </p>
                  </div>
                  <a
                    href="https://duchateau.com/floors/guild/"
                    className="font-heading text-[10px] tracking-widest uppercase underline underline-offset-4 mt-6 hover:opacity-75"
                  >
                    Explore Guild
                  </a>
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
                { name: "Flooring", href: "https://duchateau.com/floors/guild/" },
                { name: "Wall Covering", href: "https://duchateau.com/walls-ceilings/" },
                { name: "Kitchen + Bath", href: "https://duchateau.com/kitchens-baths/" },
                { name: "Wardrobe", href: "https://duchateau.com/wardrobe/" },
                { name: "Outdoor", href: "https://duchateau.com/outdoor/" },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-black/5 pb-4">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl font-light tracking-wide hover:opacity-60 transition-opacity"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-12">
              <a
                href="https://duchateau.com/get-started/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
              >
                Where to Buy
              </a>
              <a
                href="https://duchateau.com/care-products/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
              >
                Shop Care Products
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
