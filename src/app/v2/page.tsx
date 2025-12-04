'use client';

import React from 'react';
import { HeroSection } from '../components/v2/HeroSection';
import { AiShowcase } from '../components/v2/AiShowcase';
import { BentoGrid } from '../components/landing/BentoGrid';
import { Footer } from '../components/landing/Footer';

export default function HomeV2() {
  const handleLogin = () => {
    window.location.href = 'https://app.labologbook.app/login';
  };

  return (
    <main className="bg-[#050508] min-h-screen text-white selection:bg-cyan-500/30 font-sans">
      <HeroSection onLogin={handleLogin} />
      <AiShowcase />
      <BentoGrid />
      <Footer />
    </main>
  );
}
