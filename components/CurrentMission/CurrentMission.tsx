"use client";

import React from "react";
import { profile } from "@/data/profile";
import { Target, Compass } from "lucide-react";

export function CurrentMission() {
  return (
    <section
      id="current-mission"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="Current Mission"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">08 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            CURRENT MISSION
          </h2>
        </div>
        <div className="flex items-center space-x-2 font-mono text-[10px] text-text-muted tracking-widest uppercase">
          <Target className="w-3.5 h-3.5 text-stardust-gold" />
          <span>ACTIVE STRATEGIC DIRECTIVES</span>
        </div>
      </div>

      {/* 5 Numbered Directives */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {profile.currentMissions.map((item) => (
          <div
            key={item.number}
            className="editorial-card p-6 flex flex-col justify-between border-t-2 border-t-astro-blue/30 hover:border-t-stardust-gold transition-all duration-200"
          >
            <div>
              <span className="font-mono text-2xl font-light text-stardust-gold block mb-4">
                {item.number}
              </span>

              <h3 className="font-heading text-lg font-light text-text-primary mb-3 leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="font-body text-xs text-text-secondary leading-relaxed pt-4 border-t border-astro-blue/10">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
