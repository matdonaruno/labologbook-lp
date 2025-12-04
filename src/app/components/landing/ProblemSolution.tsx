'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-[#050508] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Problem Side */}
            <div className="md:w-1/2 opacity-70">
                <div className="bg-[#15151a] p-8 rounded-3xl border border-white/5 relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/50">
                        <X className="text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-400 mb-6">これまでの日常</h3>
                    <ul className="space-y-4 text-gray-500">
                        <li className="flex gap-3">
                            <span className="w-6 shrink-0">❌</span>
                            膨大な紙の記録簿に手書きしてハンコを押す
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 shrink-0">❌</span>
                            冷蔵庫の温度計を目視で確認して回る
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 shrink-0">❌</span>
                            「あの試薬いつ開けたっけ？」とメモを探す
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 shrink-0">❌</span>
                            記録作業のために残業が発生する
                        </li>
                    </ul>
                </div>
            </div>

            {/* Solution Side */}
            <div className="md:w-1/2">
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8 rounded-3xl border border-purple-500/30 relative shadow-[0_0_50px_rgba(168,85,247,0.15)]"
                >
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        <Check className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">Labo Logbookの未来</h3>
                    <ul className="space-y-4 text-gray-200">
                        <li className="flex gap-3 items-center">
                            <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
                            <span className="font-bold">スマホでタップするだけ、秒で記録完了</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
                            <span className="font-bold">温度データは24時間自動収集 & 異常通知</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
                            <span className="font-bold">試薬バーコードスキャンで全自動管理</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
                            <span className="font-bold text-cyan-300">空いた時間で、本来の検査業務や研究へ</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
        
        <div className="text-center mt-16">
            <p className="text-xl md:text-3xl font-bold text-white leading-relaxed">
                誰でもできる「記録」に時間を奪われないでください。<br />
                臨床検査技師であるあなたには、<br />
                <span className="text-purple-400">もっと他に必要な時間</span>があるはずです。
            </p>
        </div>
      </div>
    </section>
  );
};
