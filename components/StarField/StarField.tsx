"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number; // depth layer: 1 (far), 2 (mid), 3 (near)
  baseAlpha: number;
  currentAlpha: number;
  twinkleSpeed: number;
  size: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = width < 768;

    // Density
    const starCount = isMobile ? 120 : 320;
    const stars: Star[] = [];

    // Deterministic pseudo-random seed
    let seed = 42;
    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Color palette for stars: mostly pale white-ivory, some astro blue, very rare gold tint
    const starColors = ["#F5F2EA", "#E2E8F0", "#CBD5E1", "#8297B8", "#D8B878"];

    for (let i = 0; i < starCount; i++) {
      const z = pseudoRandom() < 0.6 ? 1 : pseudoRandom() < 0.9 ? 2 : 3;
      const colorChoice =
        pseudoRandom() < 0.05
          ? starColors[4] // rare gold
          : pseudoRandom() < 0.25
          ? starColors[3] // astro blue
          : starColors[Math.floor(pseudoRandom() * 3)];

      stars.push({
        x: pseudoRandom() * width,
        y: pseudoRandom() * height,
        z,
        baseAlpha: 0.15 + pseudoRandom() * 0.6,
        currentAlpha: 0.2 + pseudoRandom() * 0.5,
        twinkleSpeed: 0.005 + pseudoRandom() * 0.015,
        size: z === 1 ? 0.7 : z === 2 ? 1.2 : 1.7,
        color: colorChoice,
      });
    }

    // Rare shooting star
    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 80,
      speed: 12,
      angle: Math.PI / 4,
      opacity: 0,
      active: false,
    };

    let lastShootingStarTime = Date.now();
    // Rare interval: between 18 and 35 seconds
    let nextShootingStarInterval = 20000 + Math.random() * 15000;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // Reposition stars inside bounds
      stars.forEach((s) => {
        if (s.x > width) s.x = Math.random() * width;
        if (s.y > height) s.y = Math.random() * height;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    let time = 0;
    const render = () => {
      time += 1;
      // Smooth mouse interpolation for parallax
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      ctx.clearRect(0, 0, width, height);

      // Draw faint nebula / stardust glow in the background
      const grad1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.3,
        20,
        width * 0.2,
        height * 0.3,
        Math.max(width, height) * 0.6
      );
      grad1.addColorStop(0, "rgba(13, 22, 45, 0.25)");
      grad1.addColorStop(1, "rgba(5, 7, 13, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Draw Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          // Slow subtle twinkle
          s.currentAlpha =
            s.baseAlpha + Math.sin(time * s.twinkleSpeed + i) * 0.2;
          s.currentAlpha = Math.max(0.08, Math.min(0.95, s.currentAlpha));

          // Subtle drift
          s.y -= 0.04 * s.z;
          if (s.y < 0) {
            s.y = height;
            s.x = Math.random() * width;
          }
        }

        const parallaxX = s.x - offsetX * s.z * 1.5;
        const parallaxY = s.y - offsetY * s.z * 1.5;

        ctx.beginPath();
        ctx.arc(parallaxX, parallaxY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.currentAlpha;
        ctx.fill();

        // Extra soft glow for near/gold stars
        if (s.z === 3 && s.color === "#D8B878") {
          ctx.beginPath();
          ctx.arc(parallaxX, parallaxY, s.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(216, 184, 120, 0.15)";
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;

      // Rare shooting star
      const now = Date.now();
      if (
        !prefersReducedMotion &&
        !shootingStar.active &&
        now - lastShootingStarTime > nextShootingStarInterval
      ) {
        shootingStar.active = true;
        shootingStar.x = Math.random() * (width * 0.7);
        shootingStar.y = Math.random() * (height * 0.3);
        shootingStar.opacity = 1.0;
        shootingStar.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
        lastShootingStarTime = now;
        nextShootingStarInterval = 22000 + Math.random() * 20000;
      }

      if (shootingStar.active) {
        ctx.save();
        ctx.beginPath();
        const tailX =
          shootingStar.x -
          Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY =
          shootingStar.y -
          Math.sin(shootingStar.angle) * shootingStar.length;

        const grad = ctx.createLinearGradient(
          tailX,
          tailY,
          shootingStar.x,
          shootingStar.y
        );
        grad.addColorStop(0, "rgba(245, 242, 234, 0)");
        grad.addColorStop(0.7, "rgba(216, 184, 120, 0.3)");
        grad.addColorStop(1, `rgba(245, 242, 234, ${shootingStar.opacity * 0.7})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();
        ctx.restore();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.015;

        if (
          shootingStar.opacity <= 0 ||
          shootingStar.x > width ||
          shootingStar.y > height
        ) {
          shootingStar.active = false;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
