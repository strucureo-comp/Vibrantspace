"use client";

import { useState } from "react";
import Image from "next/image";

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

const SHOWROOMS = [
  {
    name: "DUCHATEAU Flagship — San Diego",
    address: "8480 Miralani Dr, San Diego, CA 92126",
    phone: "(858) 433-6800",
    hours: "Mon–Fri 9am–5pm",
    type: "showroom",
  },
  {
    name: "DUCHATEAU Los Angeles",
    address: "1933 S Broadway, Los Angeles, CA 90007",
    phone: "(213) 742-1100",
    hours: "Mon–Fri 9am–5pm",
    type: "showroom",
  },
  {
    name: "DUCHATEAU New York",
    address: "200 Lexington Ave, Suite 320, New York, NY 10016",
    phone: "(212) 889-5456",
    hours: "Mon–Fri 9am–5pm",
    type: "showroom",
  },
  {
    name: "DUCHATEAU Chicago",
    address: "222 Merchandise Mart Plaza, Chicago, IL 60654",
    phone: "(312) 467-1234",
    hours: "Mon–Fri 9am–5pm",
    type: "showroom",
  },
];

type TabType = "showrooms" | "retailers" | "reps";

export default function WhereToBuy() {
  const [activeTab, setActiveTab] = useState<TabType>("showrooms");
  const [zipInput, setZipInput] = useState("");
  const [radius, setRadius] = useState("50mi");
  const [selectedState, setSelectedState] = useState("");
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
          src="https://duchateau.com/wp-content/uploads/2025/10/du-wall-covering-motif.webp"
          alt="DUCHATEAU Where to Buy"
          fill
          className="object-cover opacity-40"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16 max-w-4xl">
          <p className="text-[#C5A880] font-semibold text-[0.7rem] tracking-[0.3em] uppercase mb-4">
            GET STARTED
          </p>
          <h1 className="font-serif font-light text-[3rem] md:text-[4.5rem] uppercase leading-none text-white">
            Where to Buy
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-16 text-center">
        <p className="font-serif text-2xl md:text-3xl uppercase mb-6">
          It All Begins With a Plan
        </p>
        <p className="font-sans text-gray-600 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Find DUCHATEAU retailers, designers, builders, and architects to support your design journey. Our network of authorized partners ensures an exceptional experience from selection to installation.
        </p>
      </section>

      {/* ── Tab Navigation ── */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex gap-0">
          {(["showrooms", "retailers", "reps"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-5 px-6 text-xs font-semibold tracking-[0.2em] uppercase border-b-2 transition-all capitalize ${
                activeTab === tab
                  ? "border-black text-black"
                  : "border-transparent text-gray-400 hover:text-black"
              }`}
            >
              {tab === "showrooms" ? "Designer Showrooms" : tab === "retailers" ? "Retailers" : "Sales Reps"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Showrooms Tab ── */}
      {activeTab === "showrooms" && (
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          {/* Search */}
          <form onSubmit={handleSearch} className="bg-gray-50 p-8 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
              Find a Showroom
            </p>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-2">ZIP / Address</label>
                <input
                  type="text"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  placeholder="Enter ZIP code or city"
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-2">Radius</label>
                <select
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                >
                  {["5mi", "10mi", "25mi", "50mi", "100mi", "250mi"].map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-black text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#C5A880] transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Showroom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOWROOMS.map((s) => (
              <div key={s.name} className="border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase block mb-2">
                      Designer Showroom
                    </span>
                    <h3 className="font-serif text-lg uppercase">{s.name}</h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600 font-light font-sans mb-6">
                  <p>{s.address}</p>
                  <p>{s.phone}</p>
                  <p className="text-gray-400">{s.hours}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(s.address)}`}
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

          {searched && zipInput && (
            <div className="mt-8 p-8 bg-gray-50 text-center">
              <p className="font-sans text-gray-500 text-sm">
                No additional results found for &quot;{zipInput}&quot; within {radius}. Please try a different location or contact us directly.
              </p>
            </div>
          )}
        </section>
      )}

      {/* ── Retailers Tab ── */}
      {activeTab === "retailers" && (
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <form onSubmit={handleSearch} className="bg-gray-50 p-8 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
              Find a Retailer
            </p>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-2">ZIP / Address</label>
                <input
                  type="text"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  placeholder="Enter ZIP code or city"
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-2">Radius</label>
                <select
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                >
                  {["5mi", "10mi", "25mi", "50mi", "100mi", "250mi"].map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-black text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#C5A880] transition-colors"
              >
                Search
              </button>
            </div>
          </form>
          <div className="p-12 bg-gray-50 text-center">
            <p className="font-sans text-gray-500 text-sm mb-2">
              Search above to find authorized DUCHATEAU retailers in your area.
            </p>
            <p className="font-sans text-gray-400 text-xs">
              Over 1,200 retailers across North America carry our flooring and wall covering collections.
            </p>
          </div>
        </section>
      )}

      {/* ── Sales Reps Tab ── */}
      {activeTab === "reps" && (
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <div className="bg-gray-50 p-8 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
              Find Your Sales Representative
            </p>
            <form onSubmit={handleSearch} className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a State</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-black text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#C5A880] transition-colors"
              >
                Find Rep
              </button>
            </form>
          </div>
          {searched && selectedState ? (
            <div className="border border-gray-100 p-8">
              <span className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase block mb-2">
                Sales Representative
              </span>
              <h3 className="font-serif text-xl uppercase mb-4">DUCHATEAU — {selectedState} Region</h3>
              <p className="font-sans text-gray-600 text-sm mb-2">Contact our headquarters to be connected with your regional representative.</p>
              <p className="font-sans text-gray-600 text-sm">Phone: (858) 433-6800</p>
              <p className="font-sans text-gray-600 text-sm">Email: sales@duchateau.com</p>
            </div>
          ) : searched ? (
            <div className="p-8 bg-gray-50 text-center">
              <p className="text-gray-500 text-sm">Please select a state to find your sales representative.</p>
            </div>
          ) : (
            <div className="p-12 bg-gray-50 text-center">
              <p className="font-sans text-gray-500 text-sm">
                Our regional sales representatives provide personalized support for trade professionals, retailers, and designers.
              </p>
            </div>
          )}
        </section>
      )}

      {/* ── Contact Info Strip ── */}
      <section className="bg-black text-white py-16 mt-8">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase mb-3">
              Headquarters
            </p>
            <p className="font-serif text-lg uppercase mb-2">San Diego, California</p>
            <p className="font-sans text-white/60 text-sm font-light">8480 Miralani Dr<br />San Diego, CA 92126</p>
          </div>
          <div>
            <p className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase mb-3">
              Contact
            </p>
            <p className="font-sans text-white/80 text-sm font-light mb-1">(858) 433-6800</p>
            <p className="font-sans text-white/80 text-sm font-light">info@duchateau.com</p>
          </div>
          <div>
            <p className="text-[#C5A880] text-[0.65rem] font-semibold tracking-widest uppercase mb-3">
              Trade Program
            </p>
            <p className="font-sans text-white/60 text-sm font-light leading-relaxed">
              Architects, designers, and builders can apply for our exclusive trade program for special pricing and dedicated support.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-xs font-semibold tracking-[0.2em] uppercase border-b border-white/40 hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
            >
              Apply for Trade Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
