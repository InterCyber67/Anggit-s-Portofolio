"use client";

import React, { useState } from "react";
import { CONSTELLATION_NODES, SkillNode } from "@/data/skills";
import { Sparkles, Terminal, Cpu } from "lucide-react";

export function Constellation() {
  const [selectedNode, setSelectedNode] = useState<SkillNode>(
    CONSTELLATION_NODES[0]
  );

  return (
    <section
      id="constellation"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="My Constellation"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">02 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            MY CONSTELLATION
          </h2>
        </div>
        <div className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
          [ INTERACTIVE STELLAR DOMAINS — NO FAKE PERCENTAGES ]
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Constellation Star Map */}
        <div className="lg:col-span-6 bg-space-900 border border-astro-blue/15 p-6 relative aspect-square sm:aspect-[4/3] lg:aspect-square flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between font-mono text-[10px] text-astro-blue/70">
            <span>SECTOR: KNOWLEDGE GRAPH</span>
            <span>7 NODAL HUBS</span>
          </div>

          {/* SVG Constellation Network */}
          <div className="relative w-full h-full my-4">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              {/* Connection Lines */}
              {CONSTELLATION_NODES.map((node) =>
                node.connections.map((targetId) => {
                  const target = CONSTELLATION_NODES.find(
                    (n) => n.id === targetId
                  );
                  if (!target) return null;
                  const isConnectedToSelected =
                    selectedNode.id === node.id ||
                    selectedNode.id === target.id;

                  return (
                    <line
                      key={`${node.id}-${target.id}`}
                      x1={node.coordinates.x}
                      y1={node.coordinates.y}
                      x2={target.coordinates.x}
                      y2={target.coordinates.y}
                      stroke={
                        isConnectedToSelected
                          ? "rgba(216, 184, 120, 0.45)"
                          : "rgba(130, 151, 184, 0.15)"
                      }
                      strokeWidth={isConnectedToSelected ? 0.7 : 0.4}
                      strokeDasharray={isConnectedToSelected ? "none" : "2 2"}
                      className="transition-colors duration-300"
                    />
                  );
                })
              )}

              {/* Star Nodes */}
              {CONSTELLATION_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedNode(node)}
                  >
                    {/* Pulsing ring around selected node */}
                    {isSelected && (
                      <circle
                        cx={node.coordinates.x}
                        cy={node.coordinates.y}
                        r={4.5}
                        fill="none"
                        stroke="#D8B878"
                        strokeWidth={0.5}
                        className="animate-pulse-subtle"
                      />
                    )}

                    {/* Outer hover ring */}
                    <circle
                      cx={node.coordinates.x}
                      cy={node.coordinates.y}
                      r={3.2}
                      fill="transparent"
                      stroke={
                        isSelected ? "#D8B878" : "rgba(130, 151, 184, 0.3)"
                      }
                      strokeWidth={0.3}
                      className="group-hover:stroke-stardust-gold transition-colors duration-200"
                    />

                    {/* Star core */}
                    <circle
                      cx={node.coordinates.x}
                      cy={node.coordinates.y}
                      r={isSelected ? 2 : 1.4}
                      fill={isSelected ? "#D8B878" : "#F5F2EA"}
                      className="transition-all duration-200"
                    />

                    {/* Node label */}
                    <text
                      x={node.coordinates.x}
                      y={node.coordinates.y + 4.2}
                      textAnchor="middle"
                      className={`font-mono text-[2.6px] tracking-wider uppercase select-none transition-colors duration-200 ${
                        isSelected
                          ? "fill-stardust-gold font-bold"
                          : "fill-text-secondary/70 group-hover:fill-text-primary"
                      }`}
                    >
                      {node.name.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="font-mono text-[10px] text-text-muted flex items-center justify-between">
            <span>CLICK STAR TO INSPECT FACETS</span>
            <span className="text-stardust-gold">
              ACTIVE: {selectedNode.categoryCode}
            </span>
          </div>
        </div>

        {/* Right Column: Clean Technical Information Panel */}
        <div className="lg:col-span-6 bg-space-900 border border-astro-blue/20 p-8 flex flex-col justify-between min-h-[480px]">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-astro-blue/15 pb-4 mb-6">
              <div>
                <span className="font-mono text-xs text-stardust-gold tracking-cosmic block">
                  {selectedNode.categoryCode}
                </span>
                <h3 className="font-heading text-2xl font-light tracking-wide text-text-primary mt-1">
                  {selectedNode.name}
                </h3>
              </div>
              <Cpu className="w-5 h-5 text-astro-blue" />
            </div>

            <p className="font-body text-sm text-text-secondary mb-6">
              {selectedNode.tagline}
            </p>

            {/* Facets Accordion / Detailed Breakdown */}
            <div className="space-y-4 mb-8">
              {selectedNode.facets.map((facet, i) => (
                <div
                  key={i}
                  className="bg-space-950/60 border border-astro-blue/10 p-4"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs tracking-wider text-stardust-gold font-medium">
                      {facet.area}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      FACET 0{i + 1}
                    </span>
                  </div>
                  <p className="font-body text-xs text-text-secondary mb-2.5">
                    {facet.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {facet.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] bg-space-850 text-text-muted px-2 py-0.5 border border-astro-blue/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Tooling & Philosophical Note */}
          <div className="pt-6 border-t border-astro-blue/15 space-y-4">
            <div>
              <div className="flex items-center space-x-2 font-mono text-[10px] text-astro-blue uppercase tracking-widest mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>PRIMARY TOOLCHAIN</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedNode.activeTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs text-text-primary bg-space-800 border border-astro-blue/20 px-2.5 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-space-950 p-3 border-l-2 border-stardust-gold/60">
              <span className="font-mono text-[10px] text-text-muted block uppercase tracking-widest mb-1">
                ENGINEERING INVARIANT
              </span>
              <p className="font-body text-xs italic text-text-secondary">
                &ldquo;{selectedNode.philosophicalNote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
