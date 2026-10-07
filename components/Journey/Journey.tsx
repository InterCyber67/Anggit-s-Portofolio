"use client";

import React, { useState } from "react";
import { JOURNEY_STAGES } from "@/data/journey";
import { ArrowRight, Sparkles, Milestone } from "lucide-react";

export function Journey() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = JOURNEY_STAGES[activeStageIndex];

  return (
    <section
      id="journey"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="The Journey"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">03 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            THE JOURNEY
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-widest text-text-muted">
          TRAJECTORY: 2024 → 2026 & BEYOND
        </div>
      </div>

      {/* Trajectory Navigation Ribbon */}
      <div className="relative mb-12">
        <div className="flex items-center overflow-x-auto pb-4 scrollbar-none border-b border-astro-blue/15 gap-2 sm:gap-4">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex-shrink-0 flex items-center space-x-2.5 px-4 py-2 border transition-all duration-200 text-left ${
                  isActive
                    ? "bg-space-850 border-stardust-gold text-stardust-gold shadow-[0_0_12px_rgba(216,184,120,0.15)]"
                    : "bg-space-950/60 border-astro-blue/15 text-text-muted hover:text-text-primary hover:border-astro-blue/30"
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">
                  {stage.step}
                </span>
                <span className="font-mono text-xs tracking-wider uppercase font-medium">
                  {stage.stageName}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-stardust-gold" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cinematic Spotlight Display */}
      <div className="bg-space-900 border border-astro-blue/20 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Stage Metadata & Headline */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 font-mono text-xs text-astro-blue mb-3">
                <Milestone className="w-4 h-4 text-stardust-gold" />
                <span>PHASE {activeStage.step} // {activeStage.temporalRange}</span>
              </div>

              <h3 className="font-heading text-3xl md:text-4xl font-light text-text-primary tracking-tight leading-tight mb-6">
                {activeStage.stageName}
              </h3>

              <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
                {activeStage.headline}
              </p>
            </div>

            <div className="bg-space-950 p-4 border border-astro-blue/15 mt-4">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-1">
                COMPETITIVE CATALYST
              </span>
              <p className="font-mono text-xs text-stardust-gold">
                {activeStage.catalyst}
              </p>
            </div>
          </div>

          {/* Right Column: Deep Narrative & Concrete Outputs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <p className="font-body text-base text-text-secondary leading-relaxed">
              {activeStage.narrative}
            </p>

            <div className="pt-6 border-t border-astro-blue/15">
              <div className="flex items-center space-x-2 font-mono text-[11px] text-astro-blue uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-stardust-gold" />
                <span>KEY ARTIFACTS & MILESTONES</span>
              </div>

              <div className="space-y-2">
                {activeStage.keyOutputs.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 text-text-secondary text-sm font-mono"
                  >
                    <span className="text-stardust-gold mt-0.5">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step navigation controls */}
            <div className="pt-6 flex items-center justify-between border-t border-astro-blue/10">
              <button
                disabled={activeStageIndex === 0}
                onClick={() =>
                  setActiveStageIndex((prev) => Math.max(0, prev - 1))
                }
                className="font-mono text-xs text-text-muted hover:text-text-primary disabled:opacity-30 disabled:pointer-events-none tracking-widest uppercase transition-colors"
              >
                ← PREVIOUS PHASE
              </button>

              <div className="font-mono text-xs text-text-muted">
                {activeStageIndex + 1} / {JOURNEY_STAGES.length}
              </div>

              <button
                disabled={activeStageIndex === JOURNEY_STAGES.length - 1}
                onClick={() =>
                  setActiveStageIndex((prev) =>
                    Math.min(JOURNEY_STAGES.length - 1, prev + 1)
                  )
                }
                className="font-mono text-xs text-stardust-gold hover:text-white disabled:opacity-30 disabled:pointer-events-none tracking-widest uppercase flex items-center space-x-1 transition-colors"
              >
                <span>NEXT PHASE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
