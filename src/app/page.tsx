'use client';

import React from 'react';
import { HeroSection } from './components/landing/HeroSection';
import { FeatureHighlight } from './components/landing/FeatureHighlight';
import { BentoGrid } from './components/landing/BentoGrid';
import { Footer } from './components/landing/Footer';

export default function Home() {
  const handleLogin = () => {
    // Redirect to the App URL (Vercel)
    window.location.href = 'https://app.labologbook.app/login';
  };

  return (
    <main className="bg-[#050508] min-h-screen text-white selection:bg-cyan-500/30 font-sans">
      <HeroSection onLogin={handleLogin} />
      <FeatureHighlight />
      <BentoGrid />
      <Footer />
    </main>
  );
}
