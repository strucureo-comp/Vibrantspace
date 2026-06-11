"use client";

import { useState } from "react";

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
          
          {/* Customer */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Customer
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a
                  href="https://3739054.extforms.netsuite.com/app/site/crm/externalleadpage.nl/compid.3739054/.f?formid=18&h=AAFdikaIqz7SPlYpZyIF3GnXsglsyMVTYhLH4-IAIjYMNMzKJOQ&redirect_count=1&did_javascript_redirect=T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Register Your Floor
                </a>
              </li>
              <li>
                <a href="https://duchateau.com/contact-information/" className="hover:text-black transition-colors">
                  Information
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Social
            </h3>
            <ul className="space-y-3 text-xs font-light">
              {[
                { label: "Instagram", href: "https://www.instagram.com/duchateauofficial/" },
                { label: "Facebook", href: "https://www.facebook.com/duchateaufloors" },
                { label: "Linkedin", href: "https://www.linkedin.com/company/duchateau" },
                { label: "Pinterest", href: "https://www.pinterest.com/duchateaufloors/" },
                { label: "Vimeo", href: "https://vimeo.com/duchateau" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-black font-heading text-[10px] tracking-[0.2em] uppercase mb-1">
              Company
            </h3>
            <ul className="space-y-3 text-xs font-light">
              {[
                { label: "Designer Collective", href: "https://duchateau.com/designer-collective/" },
                { label: "Collaborations", href: "https://duchateau.com/collaborations/" },
                { label: "DuGood", href: "https://duchateau.com/dugood/" },
                { label: "Inspiration", href: "https://duchateau.com/inspiration/" },
                { label: "Contact Information", href: "https://duchateau.com/contact-information/" },
                { label: "Visit Our Showroom", href: "https://calendly.com/duchateau-showroom/showroom-tour", external: true },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-black transition-colors"
                  >
                    {label}
                  </a>
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
                { label: "Terms of Use", href: "https://duchateau.com/terms-of-use/" },
                { label: "Sales Policy", href: "https://duchateau.com/internet-sales-policy/" },
                { label: "Terms and Conditions", href: "https://duchateau.com/terms-and-conditions-of-use/" },
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
            © 2026 DUCHATEAU.&nbsp;All rights reserved.
          </p>

          <span className="font-serif italic text-[16px] text-black text-left pb-1 select-none pointer-events-none">
            The Tailored Space
          </span>
        </div>

        {/* Giant Logo Watermark at bottom */}
        <div className="w-full flex justify-center mt-6 opacity-100 pointer-events-none select-none">
          <img
            src="/assets/du-logo-large.svg"
            alt="Duchateau Large Logo"
            className="w-full h-auto"
          />
        </div>

      </div>
    </footer>
  );
}