"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projects";
import { X, ArrowRight, Layers, Cpu, Compass } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-space-950/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Details`}
    >
      {/* Modal Container */}
      <div className="bg-space-900 border border-astro-blue/25 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl relative">
        {/* Top Header */}
        <div className="sticky top-0 z-20 bg-space-900/95 backdrop-blur-md border-b border-astro-blue/15 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-stardust-gold tracking-cosmic">
              {project.codename}
            </span>
            <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 border border-astro-blue/20">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-text-muted hover:text-stardust-gold p-1 border border-astro-blue/20 hover:border-stardust-gold/40 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Title & Category */}
          <div>
            <div className="font-mono text-xs tracking-astronomic text-astro-blue uppercase mb-2">
              {project.category}
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-light tracking-tight text-text-primary uppercase mb-4">
              {project.name}
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Technical Diagram / Architectural Schematic Visual Placeholder */}
          <div className="bg-space-950 border border-astro-blue/20 p-6">
            <div className="flex items-center justify-between font-mono text-[10px] text-text-muted mb-4 border-b border-astro-blue/10 pb-2">
              <span>SYSTEM SCHEMATIC // ZERO FABRICATION</span>
              <span className="text-stardust-gold">
                STATUS: {project.status}
              </span>
            </div>

            {/* If KAIROS: show the explicit 9-step decision intelligence pipeline */}
            {project.architectureSteps ? (
              <div>
                <div className="font-mono text-xs text-text-secondary uppercase mb-3 flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-stardust-gold" />
                  <span>9-STAGE DETERMINISTIC REASONING PIPELINE:</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 text-center">
                  {project.architectureSteps.map((step, idx) => (
                    <div
                      key={step}
                      className="bg-space-900 border border-astro-blue/20 p-2 flex flex-col items-center justify-center"
                    >
                      <span className="font-mono text-[9px] text-astro-blue mb-1">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] text-text-primary tracking-wider uppercase font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Custom clean visual representation for other projects */
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border border-dashed border-stardust-gold/40 flex items-center justify-center mb-3">
                  <Cpu className="w-7 h-7 text-stardust-gold" />
                </div>
                <div className="font-mono text-xs text-text-primary tracking-wider uppercase mb-1">
                  {project.badge}
                </div>
                <p className="font-mono text-[11px] text-text-muted max-w-md">
                  Modular hardware & software prototype under direct bench testing.
                </p>
              </div>
            )}
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <div className="font-mono text-xs tracking-wider text-stardust-gold uppercase flex items-center space-x-2">
                <span>01 // THE PROBLEM</span>
              </div>
              <p className="font-body text-sm text-text-secondary leading-relaxed bg-space-950/60 p-5 border border-astro-blue/15">
                {project.problem}
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs tracking-wider text-astro-blue uppercase flex items-center space-x-2">
                <span>02 // THE APPROACH</span>
              </div>
              <p className="font-body text-sm text-text-secondary leading-relaxed bg-space-950/60 p-5 border border-astro-blue/15">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <div className="font-mono text-xs tracking-wider text-text-muted uppercase mb-4">
              ARCHITECTURAL HIGHLIGHTS
            </div>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 text-text-secondary text-sm font-mono"
                >
                  <span className="text-stardust-gold mt-0.5">✦</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <div className="font-mono text-xs tracking-wider text-text-muted uppercase mb-3">
              TECHNOLOGIES DEPLOYED
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs bg-space-950 text-text-primary px-3 py-1.5 border border-astro-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Current State & Next Step */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-astro-blue/15">
            <div>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-1">
                CURRENT STATE
              </span>
              <p className="font-mono text-xs text-text-secondary">
                {project.currentState}
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] text-stardust-gold uppercase tracking-widest block mb-1">
                NEXT STEP / EXPANSION
              </span>
              <p className="font-mono text-xs text-text-primary">
                {project.nextStep}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-space-900 border-t border-astro-blue/15 px-6 py-4 flex items-center justify-between font-mono text-[11px] text-text-muted">
          <span>PROJECT ARCHIVE // VERIFIED BUILD</span>
          <button
            onClick={onClose}
            className="text-stardust-gold hover:text-white uppercase tracking-wider"
          >
            [ CLOSE INSPECTOR ]
          </button>
        </div>
      </div>
    </div>
  );
}
