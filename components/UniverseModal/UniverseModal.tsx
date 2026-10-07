"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface UniverseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

interface NavStar {
  id: string;
  name: string;
  subtitle: string;
  coord: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
}

const UNIVERSE_NODES: NavStar[] = [
  {
    id: "about",
    name: "ABOUT",
    subtitle: "The Observer & Philosophy",
    coord: "RA 04h 35m",
    x: 28,
    y: 28,
  },
  {
    id: "constellation",
    name: "CONSTELLATION",
    subtitle: "Core Technical Domains",
    coord: "RA 05h 14m",
    x: 68,
    y: 24,
  },
  {
    id: "journey",
    name: "JOURNEY",
    subtitle: "Evolution Timeline",
    coord: "RA 05h 55m",
    x: 82,
    y: 54,
  },
  {
    id: "missions",
    name: "MISSIONS",
    subtitle: "47 Competition Archives",
    coord: "RA 06h 40m",
    x: 52,
    y: 50,
  },
  {
    id: "projects",
    name: "PROJECTS",
    subtitle: "Planetary Systems & Systems",
    coord: "RA 07h 12m",
    x: 22,
    y: 62,
  },
  {
    id: "lab",
    name: "THE LAB",
    subtitle: "Research Notebook & Probes",
    coord: "RA 07h 58m",
    x: 42,
    y: 78,
  },
  {
    id: "contact",
    name: "TRANSMISSION",
    subtitle: "Establish Communication",
    coord: "RA 08h 30m",
    x: 75,
    y: 82,
  },
];

export function UniverseModal({ isOpen, onClose, onNavigate }: UniverseModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (id: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(id);
    }, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-space-950/95 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Universe Constellation Navigation"
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-20 px-6 md:px-12 flex items-center justify-between border-b border-astro-blue/10">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-stardust-gold animate-pulse-subtle" />
          <span className="font-mono text-xs tracking-astronomic text-text-primary uppercase">
            UNIVERSE NAVIGATION MAP
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-text-muted">
            // STELLAR SECTOR SELECTOR
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-text-secondary hover:text-stardust-gold text-xs font-mono tracking-widest uppercase transition-colors px-3 py-1.5 border border-astro-blue/20 hover:border-stardust-gold/40"
          aria-label="Close Universe Map"
        >
          <span>CLOSE</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Center Interactive Constellation Map */}
      <div className="relative w-full max-w-5xl h-[75vh] px-4 select-none">
        {/* SVG Constellation lines connecting the nodes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle connecting lines */}
          <line
            x1="28%"
            y1="28%"
            x2="52%"
            y2="50%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="52%"
            y1="50%"
            x2="68%"
            y2="24%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="68%"
            y1="24%"
            x2="82%"
            y2="54%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="52%"
            y1="50%"
            x2="82%"
            y2="54%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
          />
          <line
            x1="28%"
            y1="28%"
            x2="22%"
            y2="62%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
          />
          <line
            x1="22%"
            y1="62%"
            x2="42%"
            y2="78%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="52%"
            y1="50%"
            x2="42%"
            y2="78%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
          />
          <line
            x1="42%"
            y1="78%"
            x2="75%"
            y2="82%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="82%"
            y1="54%"
            x2="75%"
            y2="82%"
            stroke="rgba(130, 151, 184, 0.2)"
            strokeWidth="1"
          />
        </svg>

        {/* Nodes */}
        {UNIVERSE_NODES.map((node) => (
          <div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onClick={() => handleSelect(node.id)}
          >
            {/* Pulsing Star Core */}
            <div className="relative flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-astro-blue/20 flex items-center justify-center group-hover:border-stardust-gold transition-colors duration-300 group-hover:scale-125">
                <div className="w-2.5 h-2.5 rounded-full bg-text-primary group-hover:bg-stardust-gold transition-all duration-300 shadow-[0_0_8px_rgba(245,242,234,0.4)] group-hover:shadow-[0_0_12px_rgba(216,184,120,0.8)]" />
              </div>
            </div>

            {/* Label Card */}
            <div className="mt-2 text-center transition-transform duration-300 group-hover:-translate-y-1">
              <div className="font-mono text-[9px] text-astro-blue/80 tracking-widest">
                {node.coord}
              </div>
              <div className="font-heading text-sm md:text-base tracking-[0.2em] font-medium text-text-primary group-hover:text-stardust-gold transition-colors duration-200">
                {node.name}
              </div>
              <div className="font-mono text-[10px] text-text-muted opacity-80 whitespace-nowrap hidden sm:block">
                {node.subtitle}
              </div>
            </div>
          </div>
        ))}

        {/* Subtitle / Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-widest text-text-muted/60 text-center uppercase">
          Select any node to warp navigation
        </div>
      </div>
    </div>
  );
}
