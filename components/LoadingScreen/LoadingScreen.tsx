"use client";

import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const steps = [
    "INITIALIZING OBSERVATORY CORE...",
    "MAPPING PERSONAL UNIVERSE...",
    "INDEXING 47 MISSION LOGS...",
    "CALIBRATING STELLAR NODES...",
    "SYSTEM READY",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 6;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 25) setCurrentStep(0);
    else if (progress < 50) setCurrentStep(1);
    else if (progress < 80) setCurrentStep(2);
    else if (progress < 100) setCurrentStep(3);
    else setCurrentStep(4);

    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        handleFinish();
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  const handleFinish = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-950 px-6 transition-opacity duration-700 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Observatory"
    >
      <div className="max-w-md w-full flex flex-col items-center text-center">
        {/* Subtle coordinate badge */}
        <div className="font-mono text-[11px] tracking-cosmic text-astro-blue/70 uppercase mb-3">
          SEC.07 // PERSONAL OBSERVATORY
        </div>

        {/* Identity typography */}
        <h1 className="font-heading text-3xl sm:text-4xl font-light tracking-[0.25em] text-text-primary mb-1">
          STARDUST
        </h1>
        <div className="font-mono text-xs tracking-astronomic text-text-secondary uppercase mb-8">
          ANGGIT MAULANA ABDI
        </div>

        {/* Minimal Progress Line */}
        <div className="w-full max-w-xs h-[1px] bg-space-800 relative mb-4 overflow-hidden">
          <div
            className="h-full bg-stardust-gold transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Current Telemetry Log */}
        <div className="flex items-center justify-between w-full max-w-xs font-mono text-[11px] text-text-muted">
          <span className="tracking-widest truncate">{steps[currentStep]}</span>
          <span className="text-stardust-gold font-mono ml-4">{progress}%</span>
        </div>

        {/* Skip button for rapid accessibility */}
        <button
          onClick={handleFinish}
          className="mt-8 font-mono text-[10px] tracking-cosmic text-text-muted/60 hover:text-stardust-gold transition-colors duration-200 uppercase py-1 px-3 border border-transparent hover:border-astro-blue/30"
        >
          [ SKIP INITIALIZATION ]
        </button>
      </div>
    </div>
  );
}
