'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, Brain, Thermometer, Box } from 'lucide-react';

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 shadow-2xl transition-all hover:bg-white/[0.05] ${className}`}>
    {children}
  </div>
);

const NeonText = ({ children, color = "cyan" }: { children: React.ReactNode; color?: "cyan" | "pink" | "purple" }) => {
  const colors = {
    cyan: "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]",
    pink: "text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]",
    purple: "text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]",
  };
  return <span className={`font-bold ${colors[color]}`}>{children}</span>;
};

export const FeatureHighlight: React.FC = () => {
  return (
    <section className="py-32 relative bg-[#050508] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-[#050508] via-[#0a0a10] to-[#050508] -z-10" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                複雑な業務を、<br />
                <NeonText>圧倒的シンプル</NeonText>に。
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                毎日の試薬在庫チェック、機器のメンテナンス記録、温度計の目視確認。<br />
                それらの「見えないコスト」を、Labo Logbookはゼロにします。<br />
                直感的なUIと強力な自動化で、あなたは検査そのものに集中できます。
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: QrCode, title: "Smart Inventory", desc: "バーコードをかざすだけで、入出庫と有効期限を自動管理。", color: "text-cyan-400", bg: "bg-cyan-400/10" },
                  { icon: ShieldCheck, title: "Face ID Security", desc: "顔認証によるセキュアでスムーズなログイン体験。", color: "text-green-400", bg: "bg-green-400/10" },
                  { icon: Brain, title: "AI SOP Assistant", desc: "業務の疑問はAIへ。マニュアル検索の時間をゼロに。", color: "text-purple-400", bg: "bg-purple-400/10" }
                ].map((item, idx) => (
                  <GlassCard key={idx} className="flex items-start gap-5 p-6 border-white/5 !bg-transparent hover:!bg-white/[0.03]">
                    <div className={`p-3 rounded-xl ${item.color} ${item.bg}`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual (Abstract UI) */}
          <div className="lg:w-1/2 relative w-full">
             <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Main UI Card */}
                <div className="bg-[#0f0f13] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 px-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="text-white/20 text-xs font-mono tracking-widest">DASHBOARD_V2</div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Large Chart Area */}
                        <div className="col-span-2 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 h-48 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <Box className="text-white/20" />
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">Total Items</div>
                            <div className="text-4xl font-bold text-cyan-400 mb-4">12,450</div>
                            <div className="w-full h-2 bg-gray-700/30 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-cyan-500" 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "70%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                />
                            </div>
                            <div className="mt-2 text-xs text-gray-400 flex justify-between">
                                <span>Current Stock</span>
                                <span>70% Capacity</span>
                            </div>
                        </div>

                        {/* Temp Card */}
                        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20 rounded-2xl p-5 flex flex-col justify-between h-40">
                            <div className="flex justify-between items-start">
                                <Thermometer className="text-orange-400" />
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">24.5°C</div>
                                <div className="text-orange-300/70 text-xs mt-1">Room A / Incubator</div>
                            </div>
                        </div>

                        {/* Another Card */}
                        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-purple-500/20 rounded-2xl p-5 flex flex-col justify-between h-40">
                             <div className="flex justify-between items-start">
                                <Brain className="text-purple-400" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white mb-1">AI Assistant</div>
                                <div className="text-xs text-purple-300/70 bg-purple-500/20 px-2 py-1 rounded inline-block">Online</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Notification */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-8 -left-8 z-20 bg-[#1a1a20] border border-green-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs"
                >
                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <div className="text-white text-sm font-bold">System Secure</div>
                        <div className="text-gray-400 text-xs">All security checks passed.</div>
                    </div>
                </motion.div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
