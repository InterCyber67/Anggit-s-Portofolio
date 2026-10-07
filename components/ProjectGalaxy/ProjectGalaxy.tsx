"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, Sparkles, Orbit } from "lucide-react";

export function ProjectGalaxy() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="Project Galaxy"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">06 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            PROJECT GALAXY
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-widest text-text-muted">
          INDEX: 5 ACTIVE & EXPERIMENTAL SYSTEMS
        </div>
      </div>

      <p className="font-body text-base text-text-secondary max-w-2xl mb-16">
        Software architectures, cultural computer vision prototypes, and virtual spaces engineered from curiosity.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => {
          const isPrimary = idx === 0; // KAIROS
          return (
            <div
              key={project.id}
              className={`editorial-card p-6 md:p-8 flex flex-col justify-between group cursor-pointer ${
                isPrimary ? "lg:col-span-2 border-stardust-gold/30 bg-space-900/90" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Top Row: System Codename & Status */}
                <div className="flex items-center justify-between font-mono text-[10px] text-text-muted mb-6 pb-2 border-b border-astro-blue/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-stardust-gold">✦</span>
                    <span className="tracking-widest">{project.codename}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 border text-[9px] uppercase tracking-wider ${
                      project.status === "ACTIVE PROTOTYPE"
                        ? "border-stardust-gold/40 text-stardust-gold bg-stardust-gold/5"
                        : project.status === "PRODUCTION WORLD"
                        ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/5"
                        : "border-astro-blue/30 text-astro-blue bg-astro-blue/5"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category & Name */}
                <div className="font-mono text-[10px] text-astro-blue tracking-astronomic uppercase mb-2">
                  {project.category}
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-light text-text-primary group-hover:text-stardust-gold transition-colors duration-200 mb-4">
                  {project.name}
                </h3>

                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom: Tech Tags & Inspect Trigger */}
              <div className="pt-6 border-t border-astro-blue/10">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] bg-space-950 text-text-muted px-2 py-0.5 border border-astro-blue/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="font-mono text-[10px] text-text-muted/60 px-1 py-0.5">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-stardust-gold group-hover:text-white transition-colors duration-200">
                  <span>INSPECT SYSTEM ARCHITECTURE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
