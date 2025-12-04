'use client';

import React from 'react';
import { HeroSection } from './components/landing/HeroSection';
import { CoreFeatures } from './components/landing/CoreFeatures';
import { ProblemSolution } from './components/landing/ProblemSolution';
import { AiShowcase } from './components/landing/AiShowcase';
import { FloatingMenuHighlight } from './components/landing/FloatingMenuHighlight';
import { Footer } from './components/landing/Footer';

export default function Home() {
  const handleLogin = () => {
    // Redirect to the App URL (Vercel)
    window.location.href = 'https://app.labologbook.app/login';
  };

  return (
    <main className="bg-[#050508] min-h-screen text-white selection:bg-purple-500/30 font-sans">
      <HeroSection onLogin={handleLogin} />
      <ProblemSolution />
      <CoreFeatures />
      <AiShowcase />
      <FloatingMenuHighlight />
      <Footer />
    </main>
  );
}
