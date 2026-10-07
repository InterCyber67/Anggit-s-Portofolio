"use client";

import React from "react";
import { LAB_EXPERIMENTS } from "@/data/experiments";
import { BookOpen, FlaskConical } from "lucide-react";

export function Lab() {
  return (
    <section
      id="lab"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="The Lab Experiments"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">07 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            THE LAB
          </h2>
        </div>
        <div className="flex items-center space-x-2 font-mono text-[10px] text-text-muted tracking-widest uppercase">
          <FlaskConical className="w-3.5 h-3.5 text-astro-blue" />
          <span>RESEARCH LOG & EXPERIMENTAL SKETCHES</span>
        </div>
      </div>

      <p className="font-body text-base text-text-secondary max-w-2xl mb-14">
        &ldquo;Not everything here became a finished product.&rdquo;
      </p>

      {/* Lab Notebook Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {LAB_EXPERIMENTS.map((exp) => (
          <div
            key={exp.id}
            className="editorial-card p-5 flex flex-col justify-between bg-space-900/70 border border-astro-blue/15 hover:border-astro-blue/40"
          >
            <div>
              {/* Card Meta: Code & Status */}
              <div className="flex items-center justify-between font-mono text-[10px] text-text-muted mb-3 pb-2 border-b border-astro-blue/10">
                <span className="text-stardust-gold font-medium">
                  {exp.notebookCode}
                </span>
                <span className="text-astro-blue/80">{exp.dateOrEra}</span>
              </div>

              {/* Title & Domain */}
              <div className="font-mono text-[10px] text-astro-blue uppercase tracking-wider mb-1">
                {exp.domain}
              </div>

              <h3 className="font-heading text-base font-light text-text-primary mb-3">
                {exp.title}
              </h3>

              {/* Observation */}
              <p className="font-body text-xs text-text-secondary leading-relaxed mb-4">
                {exp.observation}
              </p>
            </div>

            {/* Bottom Artifact & Takeaway */}
            <div className="pt-3 border-t border-astro-blue/10 space-y-2">
              <div className="font-mono text-[10px] text-text-muted/80 truncate">
                <span className="text-astro-blue">ARTIFACT:</span> {exp.technicalArtifact}
              </div>

              <div className="font-mono text-[10px] text-text-primary/90 italic bg-space-950 p-2 border-l border-stardust-gold/50">
                &ldquo;{exp.keyTakeaway}&rdquo;
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lab Note Footer */}
      <div className="mt-8 pt-4 border-t border-astro-blue/10 flex items-center justify-between font-mono text-[10px] text-text-muted">
        <span>ARCHIVE: 8 UNFILTERED BENCHMARKS</span>
        <span>CONTINUOUS EXPERIMENTATION CYCLE</span>
      </div>
    </section>
  );
}
