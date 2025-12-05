'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Mail, Smartphone } from 'lucide-react';

// Hero images - randomly selected on each page load (optimized JPG)
// position: iPad縦画面で見せたい位置を指定
const HERO_IMAGES = [
  { src: '/images/left_hiro2.jpg', position: 'left' },   // 左側を見せる
  { src: '/images/right_hiro2.jpg', position: 'right' }, // 右側を見せる
];

export const HeroSection: React.FC = () => {
  const containerRef = useRef(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Randomly select hero image on mount (client-side only)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    setHeroIndex(randomIndex);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-[#050508]">

      {/* 1. Cinematic Background (Parallax) */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Hero Image Background - Optimized with Next.js Image */}
        {/* Preload both images, show selected one */}
        {HERO_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt="Hero Background"
            fill
            priority={true}
            quality={85}
            sizes="100vw"
            className={`object-cover transition-opacity duration-500 ${
              index === heroIndex && isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              objectPosition: image.position === 'right' ? 'right center' :
                             image.position === 'left' ? 'left center' : 'center'
            }}
            onLoad={() => {
              if (index === heroIndex) setIsLoaded(true);
            }}
          />
        ))}

        {/* Dimmer overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Bottom gradient for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent z-10" />

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-20"></div>
      </motion.div>

      {/* 2. Content */}
      <div className="relative z-30 container mx-auto px-4 md:px-6 min-h-screen flex flex-col justify-center items-center text-center py-20 md:py-0">

        {/* Floating Label */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
        >
            <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs tracking-[0.3em] text-white uppercase backdrop-blur-md">
                Clinical Laboratory OS
            </span>
        </motion.div>

        {/* Huge Typography */}
        <motion.h1
            style={{ y: textY }}
            className="text-[15vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 mb-4 md:mb-6 select-none"
        >
            L<span className="text-pink-300" style={{ textShadow: '0 0 20px rgba(249,168,212,0.6)' }}>A</span>BO<br />
            LOGBOOK
        </motion.h1>

        {/* Sub Title - v1 style */}
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.2] px-2"
        >
            検査室の「すべて」を、<br className="sm:hidden" /><span className="text-purple-400" style={{ textShadow: '0 0 20px rgba(147,51,234,0.8), 0 0 40px rgba(147,51,234,0.5)' }}>これ１つで。</span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8 font-light tracking-wide leading-relaxed px-2"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.5)' }}
        >
            温度管理、精度管理、機器メンテナンス、AIアシスタント。<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>臨床検査技師の専門性を取り戻す、次世代の統合管理プラットフォーム。
        </motion.p>

        {/* Action Buttons */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-3xl mb-8 lg:mb-0"
        >
            {/* Primary CTA */}
            <a
                href="https://next-crm-coral.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(147,51,234,0.9), 0 0 80px rgba(147,51,234,0.6), 0 0 120px rgba(147,51,234,0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
                <span className="relative z-10">Start Demo</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary buttons row */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                <a
                    href="/concept"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-white hover:text-purple-400 transition-colors text-sm sm:text-base"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                        <Play size={12} className="sm:w-[14px] sm:h-[14px]" fill="currentColor" />
                    </div>
                    <span className="font-medium tracking-wide whitespace-nowrap">Concept</span>
                </a>

                <a
                    href="https://labovoice.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-white hover:text-purple-400 transition-colors text-sm sm:text-base"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                        <Smartphone size={12} className="sm:w-[14px] sm:h-[14px]" />
                    </div>
                    <span className="font-medium tracking-wide whitespace-nowrap">LABO VOICE</span>
                </a>

                <a
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@labovoice.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-white hover:text-purple-400 transition-colors text-sm sm:text-base"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                        <Mail size={12} className="sm:w-[14px] sm:h-[14px]" />
                    </div>
                    <span className="font-medium tracking-wide whitespace-nowrap">お問い合わせ</span>
                </a>
            </div>
        </motion.div>

      </div>

      {/* Scroll Indicator - Only show on large screens to avoid overlap */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase flex-col items-center gap-4 z-30 hidden xl:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>

    </section>
  );
};
