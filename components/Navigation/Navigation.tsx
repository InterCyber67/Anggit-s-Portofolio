"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenUniverse: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Navigation({ onOpenUniverse, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "CONSTELLATION", id: "constellation" },
    { label: "JOURNEY", id: "journey" },
    { label: "MISSIONS", id: "missions" },
    { label: "PROJECTS", id: "projects" },
    { label: "LAB", id: "lab" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-space-950/85 backdrop-blur-md border-b border-astro-blue/15 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Left */}
          <button
            onClick={() => handleNavClick("hero")}
            className="group flex items-center space-x-3 text-left focus:outline-none"
            aria-label="STARDUST Home"
          >
            <span className="font-heading text-lg font-light tracking-[0.25em] text-text-primary group-hover:text-stardust-gold transition-colors duration-200">
              STARDUST
            </span>
            <span className="font-mono text-[10px] text-astro-blue/60 tracking-widest hidden sm:inline-block">
              / 2026
            </span>
          </button>

          {/* Center Links (Desktop) */}
          <nav
            className="hidden lg:flex items-center space-x-8 font-mono text-[11px] tracking-widest text-text-secondary"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-stardust-gold transition-colors duration-150 py-1 relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stardust-gold transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Status & Universe Trigger */}
          <div className="flex items-center space-x-4">
            {/* Status indicator */}
            <div className="hidden sm:flex items-center space-x-2 font-mono text-[10px] tracking-widest text-text-muted px-2.5 py-1 border border-astro-blue/15 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-subtle" />
              <span>EXPLORING</span>
            </div>

            {/* Signature Universe Trigger */}
            <button
              onClick={onOpenUniverse}
              className="flex items-center space-x-2 text-[11px] font-mono tracking-widest text-stardust-gold hover:text-white bg-stardust-gold/10 hover:bg-stardust-gold/20 border border-stardust-gold/30 hover:border-stardust-gold px-3 py-1.5 transition-all duration-200 shadow-[0_0_12px_rgba(216,184,120,0.12)]"
              aria-label="Open Full Universe Constellation"
            >
              <Sparkles className="w-3.5 h-3.5 text-stardust-gold" />
              <span>UNIVERSE</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-text-secondary hover:text-text-primary p-1.5 border border-astro-blue/20"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-space-950/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-8 pb-12 border-b border-astro-blue/20">
          <div className="font-mono text-[10px] tracking-cosmic text-astro-blue/70 mb-6 uppercase">
            // STELLAR SECTORS
          </div>
          <nav className="flex flex-col space-y-5 font-heading text-lg tracking-[0.2em] text-text-primary">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left hover:text-stardust-gold transition-colors py-1 flex items-center justify-between border-b border-astro-blue/10"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-text-muted">→</span>
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-astro-blue/15 flex items-center justify-between font-mono text-[11px] text-text-muted">
            <span>ANGGIT MAULANA ABDI</span>
            <span className="text-stardust-gold">● ONLINE</span>
          </div>
        </div>
      )}
    </>
  );
}
