"use client";

import React from "react";
import { FEATURED_ACHIEVEMENTS } from "@/data/competitions";
import { Radio, Award } from "lucide-react";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="Signal Detected Featured Achievements"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-14">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">04 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            SIGNAL DETECTED
          </h2>
        </div>
        <div className="flex items-center space-x-2 font-mono text-[11px] text-stardust-gold tracking-widest uppercase">
          <Radio className="w-3.5 h-3.5 animate-pulse-subtle" />
          <span>VERIFIED PODIUMS & SELECTIONS</span>
        </div>
      </div>

      {/* Grid of Verified Podium Finishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_ACHIEVEMENTS.map((item) => {
          const isGold = item.resultTier === "FIRST";
          const isSilver =
            item.resultTier === "SECOND" ||
            item.resultTier === "SECOND_AND_THIRD";
          const isBronze = item.resultTier === "THIRD";

          return (
            <div
              key={item.id}
              className={`editorial-card p-6 flex flex-col justify-between relative group ${
                isGold ? "border-stardust-gold/40 bg-space-900/90" : ""
              }`}
            >
              {/* Top Row: Year & Category */}
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-text-muted mb-4 pb-2 border-b border-astro-blue/10">
                  <span>SIG-0{item.id} // {item.year}</span>
                  <span className="text-astro-blue">{item.category}</span>
                </div>

                {/* Competition Name */}
                <h3 className="font-heading text-xl font-light text-text-primary group-hover:text-stardust-gold transition-colors duration-200 mb-3">
                  {item.name}
                </h3>

                {/* Verified Result Banner */}
                <div className="inline-flex items-center space-x-2 mb-4">
                  <Award
                    className={`w-4 h-4 ${
                      isGold
                        ? "text-stardust-gold"
                        : isSilver
                        ? "text-slate-300"
                        : isBronze
                        ? "text-amber-600"
                        : "text-text-primary"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs tracking-wider font-semibold ${
                      isGold
                        ? "text-stardust-gold"
                        : isSilver
                        ? "text-slate-200"
                        : isBronze
                        ? "text-amber-400"
                        : "text-text-primary"
                    }`}
                  >
                    {item.featuredSubtitle || item.resultLabel}
                  </span>
                </div>

                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  {item.highlightNote}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-4 mt-6 border-t border-astro-blue/10 flex items-center justify-between font-mono text-[10px] text-text-muted">
                <span>VERIFIED SUBMISSION</span>
                <span className="text-emerald-400/80">● LOGGED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
