'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Play,
  Thermometer,
  BarChart3,
  Wrench,
  Bot,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  Zap,
  FlaskConical,
  Smartphone,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Database,
  Users
} from 'lucide-react';


// Section 1: Hero with Video (Cinematic Animation)
const HeroVideo = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black perspective-1000">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/50 via-black to-black" />

      {/* Animated Grid Background (3D Perspective) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{ transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)' }} />

      {/* Fullscreen Cinematic Animation Background (Low Opacity Elements) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Holographic Globe Wireframe */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full absolute border border-purple-500/20 opacity-30"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(60deg)" }}
        >
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute inset-0 rounded-full border border-purple-500/10" style={{ transform: `rotateX(${i * 30}deg)` }} />
          ))}
        </motion.div>

        {/* Rotating Data Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] border border-purple-500/30 rounded-full absolute border-dashed shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-cyan-500/30 rounded-full absolute border-dotted opacity-70 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] border-2 border-purple-500/40 rounded-full absolute border-t-transparent border-l-transparent shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        />

        {/* Particle System */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full box-shadow-[0_0_5px_white]"
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Scanning Beam */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[1000px] h-[1000px] bg-gradient-to-t from-purple-500/20 to-transparent rounded-full pointer-events-none"
          style={{ maskImage: 'linear-gradient(to right, transparent 50%, black 50%)' }}
        />
      </div>

      {/* Floating UI Cards (High Visibility Layer - Front Most) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* 1. Temperature (Top Left) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute left-[5%] top-[15%] bg-gray-900/95 border border-cyan-400/30 p-4 rounded-lg w-56 hidden md:block shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <Thermometer size={16} className="text-cyan-400" />
            <span className="text-xs text-white font-bold">Temperature Monitor</span>
          </div>
          <div className="flex items-end gap-2 h-12 mb-2">
            {/* Fake Line Chart */}
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.path
                d="M0,40 Q10,35 20,38 T40,36 T60,40 T80,35 T100,38 T120,36 T140,40"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </svg>
          </div>
          <div className="flex justify-between items-center border-t border-white/10 pt-2">
            <span className="text-[10px] text-gray-400">Refrig A</span>
            <span className="text-cyan-400 font-mono text-sm font-bold">5.0°C</span>
          </div>
        </motion.div>

        {/* 2. Maintenance (Top Right) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-[5%] top-[15%] bg-gray-900/95 border border-orange-400/30 p-4 rounded-lg w-56 hidden md:block shadow-[0_0_30px_rgba(249,115,22,0.4)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <Wrench size={16} className="text-orange-400" />
            <span className="text-xs text-white font-bold">Maintenance</span>
          </div>
          <div className="space-y-2">
            {['Probe Clean', 'Reagent Check', 'Calibration'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 + i * 0.5 }}
                  className="w-3 h-3 rounded-full bg-orange-500 flex items-center justify-center"
                >
                  <CheckCircle2 size={8} className="text-black" />
                </motion.div>
                <span className="text-[10px] text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. Voice Input (Bottom Left) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute left-[5%] bottom-[15%] bg-gray-900/95 border border-purple-400/30 p-4 rounded-lg w-56 hidden md:block shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-white font-bold">Voice Input (STT)</span>
          </div>
          <div className="flex items-center justify-center gap-1 h-8">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-purple-400 rounded-full"
                animate={{ height: [10, 25, 10] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="mt-2 text-[10px] text-gray-400 text-center">
            "検体ID 12345, 溶血あり"
          </div>
        </motion.div>

        {/* 4. Analysis / QC (Bottom Right) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute right-[5%] bottom-[15%] bg-gray-900/95 border border-green-400/30 p-4 rounded-lg w-56 hidden md:block shadow-[0_0_30px_rgba(34,197,94,0.4)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 size={16} className="text-green-400" />
            <span className="text-xs text-white font-bold">Quality Control</span>
          </div>
          <div className="relative h-16 w-full border-b border-l border-white/20">
            {/* Mean Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-green-500/30 border-t border-dashed border-green-500/50" />

            {/* Levy-Jennings Chart Path */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <motion.path
                d="M0,32 L20,20 L40,40 L60,28 L80,32 L100,15 L120,32 L140,35 L160,30"
                fill="none"
                stroke="#4ade80"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              {/* Dots */}
              {[
                [20, 20], [40, 40], [60, 28], [80, 32], [100, 15], [120, 32], [140, 35], [160, 30]
              ].map((pos, i) => (
                <motion.circle
                  key={i}
                  cx={pos[0]}
                  cy={pos[1]}
                  r="2"
                  fill="#fff"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.3 }}
                />
              ))}
            </svg>
          </div>
          <div className="mt-2 text-right text-green-400 font-mono text-xs">Westgard: OK</div>
        </motion.div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-30 text-center px-6 w-full max-w-6xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="backdrop-blur-sm bg-black/20 p-8 md:p-16 rounded-3xl border border-white/5 shadow-2xl w-full max-w-5xl"
        >
          <span className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-6 block font-medium">
            Concept Movie
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight mx-auto">
            <span className="whitespace-nowrap">検査室の未来を</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient-x inline-block mt-2">
              今、始めよう。
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            臨床検査技師の専門性を最大限に活かすための<br />
            次世代プラットフォーム
          </p>

          {/* Play Button (Visual only) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Play size={40} className="text-white ml-2 group-hover:text-purple-400 transition-colors relative z-10" fill="currentColor" />

            {/* Button Pulse */}
            <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20" />
          </motion.div>
        </motion.div>
      </div>

      {/* System Status Overlay */}
      <div className="absolute bottom-6 left-6 text-xs font-mono text-white/30 z-20">
        SYSTEM STATUS: ONLINE<br />
        SYNC: ACTIVE
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase flex flex-col items-center gap-4 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

// Section 2: Vision Statement
const VisionSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section ref={ref} className="relative py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              私たちが<br className="md:hidden" />
              <span className="text-purple-400">Labo Logbook</span>を<br />
              作った理由
            </h2>
          </motion.div>

          <div className="space-y-8 text-left md:text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed"
            >
              臨床検査技師は、医療の最前線で患者さんの命を守る専門家です。<br />
              しかし現実は...
            </motion.p>

            {/* Problem list from v1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 max-w-xl mx-auto"
            >
              <ul className="space-y-3 text-gray-400 text-left">
                <li className="flex gap-3 items-center">
                  <span className="text-red-400">✗</span>
                  膨大な紙の記録簿に手書きしてハンコを押す
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-red-400">✗</span>
                  冷蔵庫の温度計を目視で確認して回る
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-red-400">✗</span>
                  「あの試薬いつ開けたっけ？」とメモを探す
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-red-400">✗</span>
                  記録作業のために残業が発生する
                </li>
              </ul>
            </motion.div>

            {/* Powerful message from v1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                誰でもできる「記録」に<br className="md:hidden" />時間を奪われないでください。<br />
                臨床検査技師であるあなたには、<br />
                <span className="text-purple-400">もっと他に必要な時間</span>があるはずです。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                「検査室のすべてを、これ1つで。」
              </p>
              <p className="text-gray-400 mt-4">
                それが、私たちの答えです。
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { icon: Heart, title: "技師のために", desc: "技師目線で設計された、使いやすいUI" },
              { icon: Target, title: "効率化", desc: "ルーティン業務を自動化し、時間を創出" },
              { icon: Zap, title: "AI活用", desc: "最新技術で、より高度な業務をサポート" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <item.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Section 2.5: Roadmap
const RoadmapSection = () => {
  const milestones = [
    {
      quarter: "2024 Q4",
      title: "ベータ版リリース",
      desc: "基本機能の実装完了。限定ユーザーによるテスト運用開始。",
      status: "current"
    },
    {
      quarter: "2025 Q1",
      title: "正式リリース",
      desc: "クラウド同期機能、マルチデバイス対応。正式サービス開始。",
      status: "upcoming"
    },
    {
      quarter: "2025 Q2",
      title: "AIアシスタント機能拡張",
      desc: "音声入力による記録、異常値のAI予兆検知機能。",
      status: "upcoming"
    },
    {
      quarter: "2025 Q3",
      title: "モバイルアプリ公開",
      desc: "iOS/Androidネイティブアプリ公開。プッシュ通知対応。",
      status: "upcoming"
    },
    {
      quarter: "2025 Q4",
      title: "外部システム連携",
      desc: "電子カルテ(HIS)、検査システム(LIS)とのAPI連携。",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 bg-[#050508] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Future Roadmap</h2>
          <p className="text-gray-400">進化し続けるLabo Logbookの未来</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 -translate-x-1 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${item.status === 'current' ? 'bg-purple-400 shadow-[0_0_10px_#a855f7]' : 'bg-gray-700'}`} />
                </div>

                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className={`p-6 rounded-2xl border ${item.status === 'current' ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 border-white/10'}`}>
                    <span className={`text-xs font-mono mb-2 block ${item.status === 'current' ? 'text-purple-400' : 'text-gray-500'}`}>
                      {item.quarter}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 3: Interactive Feature Walkthrough (Sticky Scroll)
const FeatureWalkthrough = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: FlaskConical,
      title: "試薬使用管理",
      subtitle: "Reagent Management",
      description: "ただの在庫管理ではありません。開封日、有効期限、ロット番号。検査機器で使用中の試薬をリアルタイムに把握し、期限切れリスクをゼロにします。",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: Thermometer,
      title: "温度監視システム",
      subtitle: "Temperature Monitoring",
      description: "冷蔵庫の温度を24時間自動記録。5.0℃などの適正値を常時監視し、異常があれば即座に通知。休日や夜間の不安から解放されます。",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      image: "https://images.unsplash.com/photo-1631556097152-c39339174275?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: Wrench,
      title: "機器メンテナンス",
      subtitle: "Equipment Maintenance",
      description: "膨大な紙の点検簿はもう不要。スマホでサクッと記録完了。グラフ表示でトレンドも一目瞭然。監査対応もスムーズに。",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: BarChart3,
      title: "精度管理記録",
      subtitle: "Quality Control",
      description: "患者データの信頼性を支える最重要記録。実施漏れを防ぎ、確実に、簡単に記録。検査の品質をデジタルの力で保証します。",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: Bot,
      title: "AIアシスタント",
      subtitle: "AI Assistant",
      description: "SOP作成支援、議事録自動生成、シフト管理。AIがあなたの時間を「貴重な時間」に変えます。",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
    },
  ];

  return (
    <section className="bg-[#0a0a12] relative">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4 block">
            Core Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            現場の「リアル」に<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              特化した機能
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Image Section */}
          <div className="hidden lg:block w-1/2 sticky top-32 h-[500px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-gray-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Background Gradient based on feature color */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-20 mix-blend-overlay`} />

                  {/* Placeholder Image (Abstract) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

                  {/* Mock UI Element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const Icon = features[activeFeature].icon;
                      return <Icon className="w-32 h-32 text-white/20" />;
                    })()}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{features[activeFeature].title}</h3>
                    <p className="text-white/60">{features[activeFeature].subtitle}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scrollable Text Section */}
          <div className="w-full lg:w-1/2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                onViewportEnter={() => setActiveFeature(index)}
                className="min-h-[80vh] flex flex-col justify-center p-8 border-l border-white/10 ml-4 lg:ml-0"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`} style={{ color: feature.color.includes('blue') ? '#3b82f6' : feature.color.includes('green') ? '#22c55e' : feature.color.includes('orange') ? '#f97316' : '#a855f7' }} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Mobile Image (Visible only on small screens) */}
                <div className="lg:hidden mt-8 aspect-video bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-12 h-12 text-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 4: Quick Actions (かゆいところに手が届く)
const QuickActionsSection = () => {
  const quickActions = [
    {
      icon: Smartphone,
      title: "NFCタグでログイン",
      description: "スマホをかざすだけで即座にログイン。煩わしいパスワード入力から解放されます。",
    },
    {
      icon: Shield,
      title: "毒劇物管理",
      description: "法令に準拠した毒劇物の入出庫記録。使用履歴を完全トレース。",
    },
    {
      icon: ClipboardCheck,
      title: "内部監査対応",
      description: "監査に必要な記録を一括出力。エビデンスの準備時間を大幅削減。",
    },
  ];

  return (
    <section className="py-24 bg-[#050508] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4 block">
            Quick Actions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            かゆい所に手が届く。
          </h2>
          <p className="text-gray-400">
            細かいけど、あると嬉しい機能たち
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="bg-cyan-500/10 p-3 rounded-xl inline-block mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <action.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{action.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{action.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: Use Case Story
const UseCaseStory = () => {
  const timeline = [
    { time: "07:00", title: "出勤・温度確認", desc: "自動記録された温度データをダッシュボードで確認。異常なし。", icon: Thermometer, status: "success" },
    { time: "08:00", title: "QCデータ入力", desc: "分析装置からデータを自動取得。Westgard判定も自動。", icon: BarChart3, status: "success" },
    { time: "09:30", title: "定期メンテナンス", desc: "アラート通知で点検忘れ防止。チェックリストで漏れなく実施。", icon: Wrench, status: "success" },
    { time: "12:00", title: "部内ミーティング", desc: "AI議事録で自動要約。重要決定事項を即座に共有。", icon: Bot, status: "success" },
    { time: "15:00", title: "SOP更新", desc: "AIアシスタントと共同作成。作成時間を大幅短縮。", icon: CheckCircle2, status: "success" },
    { time: "17:00", title: "退勤", desc: "明日のシフトを確認。全員に自動通知済み。", icon: Clock, status: "success" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0a12] to-[#050508] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4 block">
            A Day with Labo Logbook
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            ある1日の<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              検査室風景
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                {/* Time marker */}
                <div className="relative z-10 w-16 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-purple-400 font-mono text-sm">{item.time}</span>
                    <span className="text-green-400 text-xs">● Complete</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8">
            この未来を、今すぐ体験しませんか？
          </p>
          <a
            href='https://next-crm-coral.vercel.app/?from=lp'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
            style={{ boxShadow: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(147,51,234,0.9), 0 0 80px rgba(147,51,234,0.6), 0 0 120px rgba(147,51,234,0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            デモを体験する <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
export default function ConceptPage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-purple-500/30">
      <HeroVideo />
      <VisionSection />
      <RoadmapSection />
      <FeatureWalkthrough />
      <QuickActionsSection />
      <UseCaseStory />

      {/* Back to home link */}
      <div className="bg-[#050508] py-12 text-center border-t border-white/5">
        <a
          href="/v2"
          className="text-gray-500 hover:text-purple-400 transition-colors text-sm"
        >
          ← トップページに戻る
        </a>
      </div>
    </main>
  );
}
