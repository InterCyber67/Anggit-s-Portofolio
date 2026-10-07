"use client";

import React from "react";
import { ArrowDown, Compass } from "lucide-react";
import { HeroCelestialSystem } from "./HeroCelestialSystem";

interface HeroProps {
  onExploreWork: () => void;
  onViewMissions: () => void;
}

export function Hero({ onExploreWork, onViewMissions }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 max-w-7xl mx-auto"
      aria-label="Hero Section"
    >
      {/* Top Editorial Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-astro-blue/15 pb-4">
        <div className="flex items-center space-x-3">
          <span className="w-1.5 h-1.5 rounded-full bg-stardust-gold" />
          <span className="font-mono text-[11px] tracking-cosmic text-text-secondary uppercase">
            PERSONAL UNIVERSE / 2026
          </span>
        </div>
        <div className="font-mono text-[11px] tracking-widest text-text-muted flex items-center space-x-4">
          <span>LAT 07°21&apos;S // LON 109°54&apos;E</span>
          <span className="text-astro-blue/40">|</span>
          <span className="text-stardust-gold">WONOSOBO, ID</span>
        </div>
      </div>

      {/* Main Hero Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8">
        {/* Left Column: Monumental Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="font-mono text-xs tracking-astronomic text-astro-blue uppercase mb-4">
            BUILDER / AI / ROBOTICS / SOFTWARE
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.92] text-text-primary uppercase mb-8">
            <span className="block">ANGGIT</span>
            <span className="block text-text-primary/95">MAULANA</span>
            <span className="block text-stardust-gold/90 font-normal">ABDI</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-text-secondary font-light max-w-xl leading-relaxed mb-4">
            &ldquo;I build things somewhere between code, curiosity, and chaos.&rdquo;
          </p>

          <p className="font-mono text-xs sm:text-sm text-text-muted max-w-lg leading-relaxed mb-10">
            Exploring artificial intelligence, robotics, software, cybersecurity, and creative technology.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreWork}
              className="group flex items-center space-x-3 bg-stardust-gold text-space-950 font-mono text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-white transition-all duration-200 font-medium"
            >
              <span>EXPLORE MY WORK</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={onViewMissions}
              className="flex items-center space-x-3 border border-astro-blue/30 text-text-primary font-mono text-xs tracking-widest uppercase px-6 py-3.5 hover:border-stardust-gold hover:text-stardust-gold transition-colors duration-200"
            >
              <Compass className="w-3.5 h-3.5 text-astro-blue" />
              <span>VIEW MISSION LOG</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Celestial System */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full relative">
            <div className="font-mono text-[10px] tracking-cosmic text-text-muted/60 text-right uppercase mb-2">
              STELLAR TRAJECTORY // 5 ORBITALS
            </div>
            <HeroCelestialSystem />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="pt-6 border-t border-astro-blue/15 flex flex-wrap items-center justify-between text-text-muted font-mono text-[11px] gap-4">
        <div className="flex items-center space-x-6">
          <div>
            <span className="text-text-secondary">SYSTEM:</span> STARDUST OBSERVATORY
          </div>
          <div>
            <span className="text-text-secondary">ENV:</span> MAN 2 WONOSOBO
          </div>
        </div>

        <button
          onClick={onExploreWork}
          className="flex items-center space-x-2 text-text-secondary hover:text-stardust-gold transition-colors duration-200 group"
        >
          <span>DESCEND INTO UNIVERSE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
}
