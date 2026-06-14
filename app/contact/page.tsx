"use client";

import { useState } from "react";
import Image from "next/image";

const LOCATIONS = [
  {
    name: "Chennai Office (Headquarters)",
    address: "D41, 4th Street, Anna Nagar East, Chennai - 600102",
    phone: "+91 95431 95431, 044 43531492",
    hours: "Mon–Sat 9am–7pm",
    type: "office",
    link: "https://maps.app.goo.gl/dCbWT1Lc6ijS9N2d9"
  },
  {
    name: "Production Factory",
    address: "1/121 A, Kamarajar Salai, Mathur, Chennai - 600068",
    phone: "9554096540, 9543195431",
    hours: "Mon–Sat 9am–6pm",
    type: "factory",
    link: "https://maps.google.com/?q=Vibrant+Spaces+Factory+Mathur+Chennai"
  },
  {
    name: "Bengaluru Office",
    address: "No. 8, 3rd floor, Kiran Complex, 15th Cross Rd, MG Layout, 6th phase, J. P. Nagar, Bengaluru, Karnataka 560078",
    phone: "+91 95431 95431",
    hours: "Mon–Sat 9am–7pm",
    type: "office",
    link: "https://maps.google.com/?q=Vibrant+Spaces+JP+Nagar+Bengaluru"
  },
  {
    name: "Mumbai Office",
    address: "4102, Lodha Primo, Dr. Ernest Borges Road, Parel, Mumbai 400012",
    phone: "+91 95431 95431",
    hours: "Mon–Sat 9am–7pm",
    type: "office",
    link: "https://maps.google.com/?q=Vibrant+Spaces+Parel+Mumbai"
  },
];

export default function ContactPage() {
  const [zipInput, setZipInput] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ── Hero ── */}
      <section className="relative w-full h-[45vh] bg-black overflow-hidden flex items-end justify-start pt-20">
        <Image
          src="/assets/redesign/works/060-shutterstock_645138688-2opt.jpg"
          alt="Contact Vibrant Spaces"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16 max-w-4xl">
          <p className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase mb-4">
            GET IN TOUCH
          </p>
          <h1 className="font-serif font-light text-[3rem] md:text-[4.5rem] uppercase leading-none text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-16 text-center">
        <p className="font-serif text-2xl md:text-3xl uppercase mb-6">
          Pan-India Turnkey Interior Design Services
        </p>
        <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          From our headquarters in Chennai to our offices in Bengaluru and Mumbai, we provide expert design and execution services across India. Reach out to schedule a consultation or visit one of our locations.
        </p>
      </section>

      {/* ── Locations Grid ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="border border-gray-100 p-8 hover:shadow-md transition-shadow bg-gray-50/50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase block mb-2">
                    {loc.type === "factory" ? "Production Facility" : "Regional Office"}
                  </span>
                  <h3 className="font-serif text-xl uppercase">{loc.name}</h3>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600 font-light font-sans mb-6">
                <p className="leading-relaxed">{loc.address}</p>
                <p className="font-semibold text-black">{loc.phone}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{loc.hours}</p>
              </div>
              <div className="flex gap-4">
                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-[0.15em] uppercase border-b border-black hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Info Strip ── */}
      <section className="bg-black text-white py-20 mt-8">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
              Headquarters
            </p>
            <p className="font-serif text-xl uppercase mb-3">Chennai, Tamil Nadu</p>
            <p className="font-sans text-white/60 text-sm font-light leading-relaxed">
              D41, 4th Street, Anna Nagar East,<br />
              Chennai - 600102
            </p>
          </div>
          <div>
            <p className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
              General Inquiries
            </p>
            <p className="font-sans text-white/90 text-lg mb-2 font-medium">+91 95431 95431</p>
            <a href="mailto:hello@vibrantspaces.in" className="font-sans text-[#C5A880] text-sm hover:underline">
              hello@vibrantspaces.in
            </a>
          </div>
          <div>
            <p className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
              Factory & Production
            </p>
            <p className="font-sans text-white/60 text-sm font-light leading-relaxed mb-4">
              Our 30,000 sq. ft state-of-the-art production factory with German machinery ensures the highest standards of finish.
            </p>
            <a href="mailto:factory@vibrantspaces.in" className="text-xs font-semibold tracking-[0.2em] uppercase border-b border-white/40 hover:border-[#C5A880] hover:text-[#C5A880] transition-colors">
              Contact Factory
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
