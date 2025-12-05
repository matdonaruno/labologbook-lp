'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Box, Thermometer, LockKeyhole, ArrowUpRight } from 'lucide-react';

export const BentoGrid: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-[#050508] text-white relative">
             <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6"
                    >
                        All-in-One Platform
                    </motion.h2>
                    <p className="text-gray-400 text-base md:text-lg">必要な機能は、すべてここに。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">

                    {/* 1. Reagent Control (Large) */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-2 md:row-span-2 bg-[#0a0a0f] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute top-8 right-8 text-white/10 group-hover:text-cyan-500/20 transition-colors duration-500">
                             <QrCode size={180} />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="bg-cyan-500/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-cyan-400">
                                    <QrCode size={20} />
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">Reagent Control</h3>
                                <p className="text-gray-400 text-sm">試薬管理システム</p>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-gray-300 leading-relaxed max-w-sm">
                                    バーコードスキャンによる入出庫、ロット管理、有効期限アラート。
                                    棚卸し時間を<span className="text-cyan-400 font-bold">90%削減</span>します。
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs border border-white/10 bg-white/5 px-3 py-1 rounded-full text-gray-400">JAN/GS1対応</span>
                                    <span className="text-xs border border-white/10 bg-white/5 px-3 py-1 rounded-full text-gray-400">Excel出力</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight className="text-cyan-400" />
                        </div>
                    </motion.div>

                    {/* 2. Equipment (Tall) */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-1 md:row-span-2 bg-[#0a0a0f] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer"
                    >
                         <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors" />
                         
                         <Box className="mb-6 text-purple-400" size={40} />
                         <h3 className="text-xl font-bold mb-1">Equipment</h3>
                         <p className="text-gray-500 text-sm mb-8">機器管理 & メンテナンス</p>

                         <div className="space-y-4 relative z-10">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4 transition-colors hover:bg-white/10">
                                    <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : i === 2 ? 'bg-yellow-500' : 'bg-gray-500'}`} />
                                    <div className="flex-1">
                                        <div className="h-2 w-20 bg-gray-700 rounded mb-2" />
                                        <div className="h-1.5 w-12 bg-gray-800 rounded" />
                                    </div>
                                </div>
                            ))}
                         </div>
                    </motion.div>

                    {/* 3. Temp Check (Small) */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="bg-[#0a0a0f] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer overflow-hidden min-h-[140px]"
                    >
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex justify-between items-start relative z-10">
                             <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                                <Thermometer size={24} />
                             </div>
                             <span className="text-red-400 font-bold text-lg animate-pulse">Alert</span>
                        </div>
                        <div className="relative z-10">
                             <div className="text-3xl font-bold text-white mb-1">24.5°C</div>
                             <p className="text-xs text-gray-500">24h Monitoring</p>
                        </div>
                    </motion.div>

                    {/* 4. Security (Small) */}
                    <motion.div
                         whileHover={{ scale: 0.98 }}
                         className="bg-[#0a0a0f] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer overflow-hidden min-h-[140px]"
                    >
                        <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex justify-between items-start relative z-10">
                             <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                <LockKeyhole size={24} />
                             </div>
                             <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-[10px] font-mono border border-green-500/30">ACTIVE</div>
                        </div>
                        <div className="relative z-10">
                             <h3 className="font-bold text-lg">Face Auth</h3>
                             <p className="text-xs text-gray-500">生体認証セキュリティ</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
