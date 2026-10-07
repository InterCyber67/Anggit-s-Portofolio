"use client";

import React, { useState, useEffect, useRef } from "react";

interface CelestialNode {
  id: string;
  name: string;
  domain: string;
  radiusX: number;
  radiusY: number;
  speed: number;
  initialAngle: number;
  color: string;
  metadata: string;
}

const NODES: CelestialNode[] = [
  {
    id: "ai",
    name: "AI",
    domain: "Machine Learning & Vision",
    radiusX: 95,
    radiusY: 55,
    speed: 0.0008,
    initialAngle: 0.8,
    color: "#D8B878",
    metadata: "YOLOv8 // MediaPipe // Ensemble ML",
  },
  {
    id: "robotics",
    name: "ROBOTICS",
    domain: "Embedded & Microcontrollers",
    radiusX: 145,
    radiusY: 82,
    speed: 0.0006,
    initialAngle: 2.4,
    color: "#8297B8",
    metadata: "ESP32 // Kinematics // Competition Builds",
  },
  {
    id: "code",
    name: "CODE",
    domain: "Software Architecture",
    radiusX: 195,
    radiusY: 110,
    speed: 0.00045,
    initialAngle: 4.2,
    color: "#F5F2EA",
    metadata: "TypeScript // Next.js // Systems Design",
  },
  {
    id: "cyber",
    name: "CYBER",
    domain: "Security & Adversarial Probe",
    radiusX: 245,
    radiusY: 138,
    speed: 0.00035,
    initialAngle: 1.6,
    color: "#A7ADBA",
    metadata: "CTF // Bug Bounty // Protocol Audit",
  },
  {
    id: "data",
    name: "DATA",
    domain: "Empirical Analysis",
    radiusX: 295,
    radiusY: 165,
    speed: 0.00028,
    initialAngle: 5.1,
    color: "#8297B8",
    metadata: "High-dim Pipelines // Cross-Validation",
  },
];

export function HeroCelestialSystem() {
  const [hoveredNode, setHoveredNode] = useState<CelestialNode | null>(null);
  const [angles, setAngles] = useState<number[]>(NODES.map((n) => n.initialAngle));
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      setAngles((prev) =>
        prev.map((angle, i) => (angle + NODES[i].speed * delta) % (Math.PI * 2))
      );

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const cx = 320;
  const cy = 200;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto aspect-[16/10] flex items-center justify-center select-none"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.2s cubic-bezier(0.2, 0, 0.4, 1)",
      }}
    >
      <svg
        viewBox="0 0 640 400"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D8B878" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#8297B8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#05070D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background glow */}
        <ellipse
          cx={cx}
          cy={cy}
          rx={200}
          ry={120}
          fill="url(#centerGlow)"
          className="pointer-events-none"
        />

        {/* Orbit paths */}
        {NODES.map((node) => {
          const isSelected = hoveredNode?.id === node.id;
          return (
            <ellipse
              key={node.id}
              cx={cx}
              cy={cy}
              rx={node.radiusX}
              ry={node.radiusY}
              fill="none"
              stroke={isSelected ? "#D8B878" : "rgba(130, 151, 184, 0.18)"}
              strokeWidth={isSelected ? 1.5 : 1}
              strokeDasharray={isSelected ? "none" : "3 5"}
              className="transition-colors duration-300"
            />
          );
        })}

        {/* Center Star: ANGGIT */}
        <g className="cursor-default">
          <circle
            cx={cx}
            cy={cy}
            r={16}
            fill="none"
            stroke="rgba(216, 184, 120, 0.4)"
            strokeWidth="1"
            className="animate-pulse-subtle"
          />
          <circle
            cx={cx}
            cy={cy}
            r={7}
            fill="#D8B878"
            className="shadow-[0_0_12px_rgba(216,184,120,0.8)]"
          />
          <text
            x={cx}
            y={cy + 28}
            textAnchor="middle"
            className="font-mono text-[9px] fill-stardust-gold tracking-widest uppercase pointer-events-none select-none"
          >
            ANGGIT // CORE
          </text>
        </g>

        {/* Orbiting Bodies */}
        {NODES.map((node, i) => {
          const angle = angles[i];
          const px = cx + node.radiusX * Math.cos(angle);
          const py = cy + node.radiusY * Math.sin(angle);
          const isHovered = hoveredNode?.id === node.id;

          return (
            <g
              key={node.id}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => setHoveredNode(node)}
            >
              {/* Invisible larger hover hit zone */}
              <circle cx={px} cy={py} r={18} fill="transparent" />

              {/* Halo when hovered */}
              {isHovered && (
                <circle
                  cx={px}
                  cy={py}
                  r={12}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  className="animate-ping"
                />
              )}

              {/* Node body */}
              <circle
                cx={px}
                cy={py}
                r={isHovered ? 5.5 : 3.5}
                fill={node.color}
                className="transition-all duration-200"
              />

              {/* Text Label */}
              <text
                x={px}
                y={py - 9}
                textAnchor="middle"
                className={`font-mono text-[9px] tracking-widest transition-all duration-200 uppercase select-none ${
                  isHovered ? "fill-stardust-gold font-bold" : "fill-text-secondary/70"
                }`}
              >
                {node.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Active Node Telemetry Card */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 py-2 bg-space-900/90 border border-astro-blue/20 backdrop-blur-md text-center transition-all duration-300 ${
          hoveredNode
            ? "opacity-100 translate-y-0"
            : "opacity-40 translate-y-1 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between font-mono text-[9px] text-text-muted mb-0.5">
          <span>ORBITAL TELEMETRY</span>
          <span className="text-stardust-gold">
            {hoveredNode ? hoveredNode.id.toUpperCase() : "ACTIVE SYSTEM"}
          </span>
        </div>
        <div className="font-heading text-xs tracking-wider text-text-primary">
          {hoveredNode ? hoveredNode.domain : "Subtle personal planetary system"}
        </div>
        <div className="font-mono text-[10px] text-astro-blue truncate mt-0.5">
          {hoveredNode ? hoveredNode.metadata : "Hover nodes to inspect telemetry"}
        </div>
      </div>
    </div>
  );
}
