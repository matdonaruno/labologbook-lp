'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onLogin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLogin }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background with Purple Theme */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050508]" />
        {/* Main Gradient Ball */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px]" />
        
        {/* Grid & Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-5 mb-8 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-purple-300 text-sm tracking-widest font-bold">
              CLINICAL LABORATORY OS
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            検査室の「すべて」を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              これ１つで。
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            <span className="font-semibold text-white">精度管理</span>、
            <span className="font-semibold text-white">機器メンテナンス</span>、
            <span className="font-semibold text-white">AIアシスタント</span>。<br />
            臨床検査技師の専門性を取り戻す、次世代の統合管理プラットフォーム。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
            <button 
              onClick={onLogin}
              className="group relative px-10 py-4 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                デモを体験する <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-10 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 transition-all backdrop-blur-sm">
              資料ダウンロード
            </button>
          </div>

          {/* Hero Visual (Mockup) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-2xl blur opacity-30 animate-pulse" />
            <div className="relative bg-[#0f0f13] border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center group">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
              
              {/* Mock App UI Elements (Abstract representation of Dashboard) */}
              <div className="relative w-full h-full p-8 flex flex-col">
                {/* Header Mock */}
                <div className="h-16 border-b border-white/5 flex items-center justify-between px-4 mb-8">
                  <div className="w-32 h-6 bg-white/10 rounded" />
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-white/10" />
                     <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                </div>
                {/* Dashboard Grid Mock */}
                <div className="grid grid-cols-3 gap-6 flex-1">
                   <div className="col-span-2 bg-white/5 rounded-xl border border-white/5 p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4"><Activity className="text-purple-500/50" size={40} /></div>
                      <div className="w-24 h-4 bg-purple-500/20 rounded mb-4" />
                      <div className="w-full h-32 bg-gradient-to-t from-purple-500/10 to-transparent rounded flex items-end pb-2 gap-2">
                          {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                              <div key={i} className="flex-1 bg-purple-500/40 rounded-t" style={{ height: `${h}%` }} />
                          ))}
                      </div>
                   </div>
                   <div className="col-span-1 flex flex-col gap-6">
                      <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-6">
                          <div className="flex justify-between items-center mb-4">
                              <span className="text-cyan-400 font-bold">Fridge A</span>
                              <span className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded">Normal</span>
                          </div>
                          <div className="text-4xl font-bold text-white">5.0°C</div>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-6">
                          <div className="flex justify-between items-center mb-4">
                              <span className="text-pink-400 font-bold">Tasks</span>
                              <span className="text-white text-xs bg-white/10 px-2 py-1 rounded">3 Pending</span>
                          </div>
                          <div className="space-y-2">
                              <div className="h-2 w-full bg-white/10 rounded" />
                              <div className="h-2 w-2/3 bg-white/10 rounded" />
                          </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Overlay Text when no image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <p className="text-white/20 font-bold text-2xl tracking-[1em]">DASHBOARD PREVIEW</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
