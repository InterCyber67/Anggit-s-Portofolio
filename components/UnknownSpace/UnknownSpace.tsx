"use client";

import React, { useState } from "react";

export function UnknownSpace() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.08;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.08;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="unknown-space"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-astro-blue/15 text-center flex flex-col items-center justify-center select-none"
      aria-label="Unknown Space"
    >
      <div className="font-mono text-xs text-stardust-gold tracking-cosmic uppercase mb-4">
        09 // UNKNOWN SPACE
      </div>

      <div className="font-heading text-3xl sm:text-5xl font-light text-text-primary tracking-tight leading-tight max-w-2xl mb-12">
        <p>&ldquo;There is still a lot I don&apos;t know.</p>
        <p className="text-text-secondary mt-2">That&apos;s the point.&rdquo;</p>
      </div>

      {/* Next destination reacting gently to cursor */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className="font-mono text-[11px] tracking-astronomic text-astro-blue uppercase mb-4">
          NEXT DESTINATION
        </div>

        <div
          className="font-heading text-8xl sm:text-9xl font-extralight text-stardust-gold transition-transform duration-200 ease-out cursor-default"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            textShadow: "0 0 35px rgba(216, 184, 120, 0.35)",
          }}
          aria-hidden="true"
        >
          ?
        </div>
      </div>

      <div className="font-mono text-[10px] tracking-cosmic text-text-muted uppercase mt-8">
        UNMAPPED COSMIC COORDINATES // FUTURE EXPLORATION
      </div>
    </section>
  );
}
