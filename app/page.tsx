"use client";

import React, { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen";
import { StarField } from "@/components/StarField/StarField";
import { CustomCursor } from "@/components/CustomCursor/CustomCursor";
import { Navigation } from "@/components/Navigation/Navigation";
import { UniverseModal } from "@/components/UniverseModal/UniverseModal";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Constellation } from "@/components/Constellation/Constellation";
import { Journey } from "@/components/Journey/Journey";
import { Achievements } from "@/components/Achievements/Achievements";
import { MissionLog } from "@/components/MissionLog/MissionLog";
import { ProjectGalaxy } from "@/components/ProjectGalaxy/ProjectGalaxy";
import { Lab } from "@/components/Lab/Lab";
import { CurrentMission } from "@/components/CurrentMission/CurrentMission";
import { UnknownSpace } from "@/components/UnknownSpace/UnknownSpace";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [universeOpen, setUniverseOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Cinematic Loading Experience */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Procedural Stardust & Nebula Canvas */}
      <StarField />

      {/* Subtle Desktop Cursor */}
      <CustomCursor />

      {/* Full-Screen Interactive Universe Modal */}
      <UniverseModal
        isOpen={universeOpen}
        onClose={() => setUniverseOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Fixed Main Navigation */}
      <Navigation
        onOpenUniverse={() => setUniverseOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Primary Page Layout */}
      <main className="relative z-10 space-grain">
        {/* 00. Hero Section */}
        <Hero
          onExploreWork={() => handleNavigate("projects")}
          onViewMissions={() => handleNavigate("missions")}
        />

        {/* 01. About the Observer */}
        <About />

        {/* 02. My Constellation (Skills & Domains) */}
        <Constellation />

        {/* 03. The Journey (Evolutionary Timeline) */}
        <Journey />

        {/* 04. Signal Detected (Featured Achievements) */}
        <Achievements />

        {/* 05. Mission Log (47 Competitions & Dynamic Stats) */}
        <MissionLog />

        {/* 06. Project Galaxy & Modal Case Studies */}
        <ProjectGalaxy />

        {/* 07. The Lab (Research Notebook & Experiments) */}
        <Lab />

        {/* 08. Current Mission (Directives) */}
        <CurrentMission />

        {/* 09. Unknown Space */}
        <UnknownSpace />

        {/* 10. Establish Transmission (Contact) */}
        <Contact />

        {/* 11. Minimal Footer */}
        <Footer />
      </main>
    </>
  );
}
