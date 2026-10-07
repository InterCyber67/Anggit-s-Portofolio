"use client";

import React from "react";
import { profile } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-astro-blue/15 bg-space-950/90 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-astro-blue/10">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.25em] text-text-primary uppercase mb-2">
              {profile.name}
            </h2>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase">
              {profile.location} // 2026
            </p>
          </div>

          {/* Socials & Outlets */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs tracking-widest uppercase">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-stardust-gold transition-colors duration-150 relative group"
              >
                <span>{social.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stardust-gold transition-all duration-200 group-hover:w-full" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-text-muted hover:text-stardust-gold transition-colors duration-150 ml-auto md:ml-4"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Closing Philosophy */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-text-muted">
          <div>
            &ldquo;BUILDING IN PUBLIC. EXPLORING IN PRIVATE.&rdquo;
          </div>
          <div>
            STARDUST OBSERVATORY // DESIGNED FOR THE UNIVERSE
          </div>
        </div>
      </div>
    </footer>
  );
}
