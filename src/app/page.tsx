import React from 'react';
import { HeroSection } from './components/v2/HeroSection';
import { AiShowcase } from './components/v2/AiShowcase';
import { BentoGrid } from './components/landing/BentoGrid';
import { LaboVoiceSection } from './components/landing/LaboVoiceSection';
import { Footer } from './components/landing/Footer';

export default function Home() {
  return (
    <main className="bg-[#050508] min-h-screen text-white selection:bg-cyan-500/30 font-sans">
      <HeroSection />
      <AiShowcase />
      <BentoGrid />
      <LaboVoiceSection />
      <Footer />
    </main>
  );
}
