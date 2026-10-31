"use client";

import React, { useEffect, useRef } from "react";

interface AtmosphericOverlayProps {
  weather?: "rain" | "fog" | "storm" | "embers" | "clear";
  className?: string;
}

export const AtmosphericOverlay: React.FC<AtmosphericOverlayProps> = ({
  weather = "rain",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle types
    interface Particle {
      x: number;
      y: number;
      length: number;
      speedY: number;
      speedX: number;
      opacity: number;
      size: number;
    }

    const count = weather === "storm" ? 90 : weather === "rain" ? 60 : 35;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 10,
        speedY: weather === "embers" ? -(Math.random() * 1.5 + 0.5) : Math.random() * 8 + 6,
        speedX: weather === "storm" ? -Math.random() * 4 - 2 : Math.random() * 0.8 - 0.4,
        opacity: Math.random() * 0.4 + 0.15,
        size: Math.random() * 2 + 1,
      });
    }

    let lightningTimer = 0;
    let lightningFlash = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Thunder flash in storms
      if (weather === "storm") {
        lightningTimer++;
        if (lightningTimer > 280 && Math.random() < 0.03) {
          lightningFlash = 0.35;
          lightningTimer = 0;
        }
        if (lightningFlash > 0) {
          ctx.fillStyle = `rgba(224, 242, 254, ${lightningFlash})`;
          ctx.fillRect(0, 0, width, height);
          lightningFlash *= 0.82;
        }
      }

      // Draw particles
      particles.forEach((p) => {
        if (weather === "rain" || weather === "storm") {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.speedX * 2, p.y + p.length);
          ctx.strokeStyle = `rgba(186, 230, 253, ${p.opacity})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else if (weather === "embers") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 146, 60, ${p.opacity})`;
          ctx.fill();
        } else if (weather === "fog") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 25, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(203, 213, 225, ${p.opacity * 0.15})`;
          ctx.fill();
        }

        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around bounds
        if (p.y > height) {
          p.y = -20;
          p.x = Math.random() * width;
        } else if (p.y < -20 && weather === "embers") {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [weather]);

  if (weather === "clear") return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-20 ${className}`}
      aria-hidden="true"
    />
  );
};
