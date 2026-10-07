"use client";

import React, { useState, useMemo } from "react";
import {
  COMPETITIONS,
  getMissionStatistics,
  MissionCategory,
} from "@/data/competitions";
import { Search, Filter, Sparkles, Orbit } from "lucide-react";

export function MissionLog() {
  const [selectedCategory, setSelectedCategory] =
    useState<MissionCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const stats = useMemo(() => getMissionStatistics(), []);

  const categories: MissionCategory[] = [
    "ALL",
    "AI",
    "ROBOTICS",
    "CYBERSECURITY",
    "COMPUTER SCIENCE",
    "RESEARCH / INNOVATION",
  ];

  const filteredCompetitions = useMemo(() => {
    return COMPETITIONS.filter((item) => {
      const matchesCategory =
        selectedCategory === "ALL" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.resultLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="missions"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="Mission Log"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">05 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            MISSION LOG
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-widest text-text-muted">
          INDEX: 47 RECORDED ATTEMPTS
        </div>
      </div>

      <p className="font-body text-base text-text-secondary max-w-2xl mb-12">
        &ldquo;47 competitions, experiments, and attempts to go further.&rdquo;
      </p>

      {/* Dynamic Statistics Bar (Section 17) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="bg-space-900 border border-astro-blue/15 p-5">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
            TOTAL MISSIONS
          </div>
          <div className="font-heading text-3xl font-light text-text-primary">
            {stats.total}
          </div>
          <div className="font-mono text-[10px] text-astro-blue mt-1">
            All documented challenges
          </div>
        </div>

        <div className="bg-space-900 border border-stardust-gold/30 p-5">
          <div className="font-mono text-[10px] text-stardust-gold uppercase tracking-widest mb-1">
            PODIUM FINISHES
          </div>
          <div className="font-heading text-3xl font-light text-stardust-gold">
            {stats.podium}
          </div>
          <div className="font-mono text-[10px] text-stardust-gold/70 mt-1">
            1st, 2nd & 3rd places
          </div>
        </div>

        <div className="bg-space-900 border border-astro-blue/15 p-5">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
            FINALIST / SELECTED
          </div>
          <div className="font-heading text-3xl font-light text-text-primary">
            {stats.finalistOrSelected}
          </div>
          <div className="font-mono text-[10px] text-astro-blue mt-1">
            OSMA & OPSI selections
          </div>
        </div>

        <div className="bg-space-900 border border-astro-blue/15 p-5">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
            ACTIVE TIMELINE
          </div>
          <div className="font-heading text-3xl font-light text-text-primary">
            {stats.activeYears}
          </div>
          <div className="font-mono text-[10px] text-astro-blue mt-1">
            Continuous participation
          </div>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-astro-blue/15">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-[11px] tracking-wider uppercase px-3 py-1.5 border transition-all duration-150 ${
                  isSelected
                    ? "bg-stardust-gold/15 border-stardust-gold text-stardust-gold font-medium"
                    : "bg-space-950/60 border-astro-blue/15 text-text-muted hover:text-text-primary hover:border-astro-blue/30"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Real-time Search Box */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search missions..."
            className="w-full bg-space-900 border border-astro-blue/20 text-xs text-text-primary placeholder:text-text-muted pl-9 pr-3 py-2 font-mono focus:border-stardust-gold focus:outline-none"
          />
        </div>
      </div>

      {/* Status Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-text-muted mb-6 bg-space-950/80 p-3 border border-astro-blue/10">
        <span className="uppercase text-astro-blue">STELLAR TIER LEGEND:</span>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-stardust-gold" />
            <span className="text-stardust-gold">GOLD = 1ST</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="text-slate-300">SILVER = 2ND</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            <span className="text-amber-500">BRONZE = 3RD</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-white">WHITE = FINALIST / SELECTED</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-space-700" />
            <span className="text-text-muted">DIM = PARTICIPATION</span>
          </span>
        </div>
      </div>

      {/* Competition Table / Entries */}
      <div className="border border-astro-blue/15 divide-y divide-astro-blue/10">
        {filteredCompetitions.length === 0 ? (
          <div className="p-8 text-center font-mono text-xs text-text-muted">
            NO MISSIONS MATCHING CRITERIA
          </div>
        ) : (
          filteredCompetitions.map((item) => {
            const isGold = item.resultTier === "FIRST";
            const isSilver =
              item.resultTier === "SECOND" ||
              item.resultTier === "SECOND_AND_THIRD";
            const isBronze = item.resultTier === "THIRD";
            const isSelectedOrFinalist =
              item.resultTier === "FINALIST" ||
              item.resultTier === "PROPOSAL_SELECTED";
            const isPodium = isGold || isSilver || isBronze;

            return (
              <div
                key={item.id}
                className={`p-4 md:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-150 ${
                  isGold
                    ? "bg-stardust-gold/5 hover:bg-stardust-gold/10"
                    : isPodium
                    ? "bg-space-900/60 hover:bg-space-900"
                    : "bg-space-950/40 hover:bg-space-900/40"
                }`}
              >
                {/* Left: Star Badge & ID + Name */}
                <div className="flex items-center space-x-4">
                  {/* Status Indicator Star */}
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isGold
                        ? "bg-stardust-gold shadow-[0_0_8px_rgba(216,184,120,0.8)]"
                        : isSilver
                        ? "bg-slate-300 shadow-[0_0_6px_rgba(203,213,225,0.6)]"
                        : isBronze
                        ? "bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.5)]"
                        : isSelectedOrFinalist
                        ? "bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                        : "bg-space-700"
                    }`}
                  />

                  {/* ID */}
                  <span className="font-mono text-[11px] text-text-muted w-8 shrink-0">
                    #{item.id < 10 ? `0${item.id}` : item.id}
                  </span>

                  {/* Competition Title */}
                  <span
                    className={`font-heading text-sm md:text-base font-normal tracking-wide ${
                      isGold
                        ? "text-stardust-gold font-medium"
                        : isPodium || isSelectedOrFinalist
                        ? "text-text-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>

                {/* Right: Year, Category Badge & Result */}
                <div className="flex items-center space-x-4 sm:space-x-6 justify-between sm:justify-end pl-8 sm:pl-0">
                  <span className="font-mono text-[10px] bg-space-850 px-2 py-0.5 border border-astro-blue/15 text-astro-blue hidden md:inline-block">
                    {item.category}
                  </span>

                  <span className="font-mono text-xs text-text-muted">
                    {item.year}
                  </span>

                  {/* Result Badge */}
                  <div className="min-w-[120px] text-right">
                    <span
                      className={`font-mono text-xs tracking-wider inline-block ${
                        isGold
                          ? "text-stardust-gold font-bold"
                          : isSilver
                          ? "text-slate-200 font-semibold"
                          : isBronze
                          ? "text-amber-400 font-semibold"
                          : isSelectedOrFinalist
                          ? "text-white font-medium underline underline-offset-4 decoration-astro-blue"
                          : "text-text-muted/60"
                      }`}
                    >
                      {item.rawResult === "-"
                        ? "—"
                        : item.rawResult}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Telemetry Footer */}
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-text-muted px-2">
        <span>SHOWING {filteredCompetitions.length} OF {COMPETITIONS.length} MISSIONS</span>
        <span>VERIFIED RAW ARCHIVE 2024–2026</span>
      </div>
    </section>
  );
}
