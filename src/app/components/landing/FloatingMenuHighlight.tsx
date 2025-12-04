'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Zap, Calculator, Clock } from 'lucide-react';

export const FloatingMenuHighlight: React.FC = () => {
  return (
    <section className="py-20 bg-[#050508] border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            かゆい所に手が届く。<br />
            <span className="text-cyan-400">クイックアクション</span>機能
        </h2>

        <div className="relative max-w-lg mx-auto h-64 flex items-center justify-center">
            {/* Center Button */}
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] z-20 relative">
                <Menu className="text-white" size={32} />
            </div>

            {/* Orbiting Items */}
            {[
                { icon: Calculator, label: "希釈計算", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-4" },
                { icon: Clock, label: "タイマー", pos: "bottom-0 left-1/4 translate-y-4" },
                { icon: Zap, label: "緊急連絡", pos: "bottom-0 right-1/4 translate-y-4" },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className={`absolute ${item.pos} flex flex-col items-center gap-2`}
                >
                    <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-cyan-400">
                        <item.icon size={20} />
                    </div>
                    <span className="text-xs text-gray-400 font-bold">{item.label}</span>
                </motion.div>
            ))}

            {/* Connecting Lines (Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 300">
                 <path d="M200 150 L200 60" stroke="white" strokeDasharray="4 4" />
                 <path d="M200 150 L120 220" stroke="white" strokeDasharray="4 4" />
                 <path d="M200 150 L280 220" stroke="white" strokeDasharray="4 4" />
            </svg>
        </div>
        
        <p className="text-gray-400 mt-8 text-sm">
            画面右下のフローティングボタンから、計算機やタイマーなど、<br />
            検査業務中に「ちょっと欲しい」ツールへ瞬時にアクセスできます。
        </p>
      </div>
    </section>
  );
};
