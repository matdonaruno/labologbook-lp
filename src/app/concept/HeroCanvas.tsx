'use client';

import React, { useEffect, useRef } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Particles
    const particles: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; life: number }[] = [];
    const particleCount = 100;

    const createParticle = (x?: number, y?: number) => {
      return {
        x: x ?? Math.random() * width,
        y: y ?? Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        life: Math.random() * 100 + 100,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    // Radar
    let angle = 0;

    const render = () => {
      // Fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Center
      const cx = width / 2;
      const cy = height / 2;

      // Radar Sweep
      angle += 0.02;
      const radarRadius = Math.min(width, height) * 0.35;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      // Radar Beam
      const gradient = ctx.createLinearGradient(0, 0, radarRadius, 0);
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.1)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0.5)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radarRadius, 0, 0.5);
      ctx.lineTo(0, 0);
      ctx.fill();

      // Radar Line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(radarRadius, 0);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#06b6d4';
      ctx.stroke();

      ctx.restore();

      // Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        // Reset if dead or out of bounds
        if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          particles[i] = createParticle();
        }

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'white';
        ctx.fill();

        // Connect to radar if close
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Calculate angle of particle
        let pAngle = Math.atan2(dy, dx);
        if (pAngle < 0) pAngle += Math.PI * 2;

        // Normalize radar angle
        let rAngle = angle % (Math.PI * 2);

        // Check if radar is passing (simple check)
        // This is a visual trick, not perfect math
        if (Math.abs(pAngle - rAngle) < 0.2 && dist < radarRadius) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(6, 182, 212, 0.8)`;
          ctx.fill();
        }
      });

      // Rings
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radarRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.beginPath();
      ctx.arc(cx, cy, radarRadius * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      ctx.setLineDash([5, 15]);
      ctx.beginPath();
      ctx.arc(cx, cy, radarRadius * 1.3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default HeroCanvas;
