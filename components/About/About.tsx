"use client";

import React from "react";
import { profile } from "@/data/profile";
import { Compass, MapPin, Building, Sparkles } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="About the Observer"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">01 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            ABOUT THE OBSERVER
          </h2>
        </div>
        <div className="font-mono text-[10px] tracking-widest text-text-muted hidden sm:block">
          STATUS: ACTIVE BUILDER
        </div>
      </div>

      {/* Editorial 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Monumental Statement */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <blockquote className="font-heading text-3xl sm:text-4xl font-light text-text-primary leading-tight tracking-tight mb-8">
              &ldquo;{profile.aboutStatement}&rdquo;
            </blockquote>

            <p className="font-body text-text-secondary text-base leading-relaxed mb-8">
              Code is at its most exhilarating when it leaves the abstract screen and controls physical motors, interprets camera sensors, or creates vast virtual worlds that people can explore together.
            </p>
          </div>

          {/* Observer Metadata Box */}
          <div className="bg-space-900 border border-astro-blue/20 p-6 space-y-4">
            <div className="flex items-center space-x-3 text-text-secondary font-mono text-xs">
              <MapPin className="w-4 h-4 text-stardust-gold shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px]">ORIGIN / LOCATION</span>
                <span className="text-text-primary">{profile.location}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-text-secondary font-mono text-xs">
              <Building className="w-4 h-4 text-astro-blue shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px]">ENVIRONMENT</span>
                <span className="text-text-primary">{profile.environment}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-text-secondary font-mono text-xs">
              <Compass className="w-4 h-4 text-stardust-gold shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px]">PHILOSOPHY</span>
                <span className="text-text-primary">Direct empirical execution</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Interests */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-6 text-text-secondary font-body text-base leading-relaxed">
            {profile.biography.map((paragraph, index) => (
              <p key={index} className="text-text-secondary/90">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interests Constellation Matrix */}
          <div className="pt-8 border-t border-astro-blue/15">
            <div className="flex items-center space-x-2 font-mono text-[11px] tracking-cosmic text-astro-blue uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-stardust-gold" />
              <span>CORE TECHNICAL HORIZONS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {profile.interests.map((interest) => (
                <div
                  key={interest}
                  className="bg-space-850 border border-astro-blue/15 px-3 py-2.5 hover:border-stardust-gold/40 transition-colors duration-200"
                >
                  <span className="font-mono text-[11px] tracking-wider text-text-primary block truncate">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
