'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, FileCheck, Send, Bot, User, Calendar, Clock, MessageSquare } from 'lucide-react';

// SOP Chat UI Mockup
const SopChatMockup = () => (
  <div className="bg-[#0a0a0f] rounded-xl p-4 h-80 flex flex-col">
    {/* Header */}
    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
        <Bot size={16} className="text-purple-400" />
      </div>
      <div>
        <div className="text-white text-sm font-medium">SOP Assistant</div>
        <div className="text-green-400 text-xs flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          Online
        </div>
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 py-4 space-y-3 overflow-hidden">
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
          <User size={12} className="text-gray-400" />
        </div>
        <div className="bg-white/5 rounded-lg rounded-tl-none px-3 py-2 text-sm text-gray-300 max-w-[80%]">
          HbA1c試薬の保管条件を教えて
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <div className="bg-purple-500/20 rounded-lg rounded-tr-none px-3 py-2 text-sm text-purple-100 max-w-[80%]">
          HbA1c試薬の保管条件：<br />
          ・温度: 2〜8℃（冷蔵保管）<br />
          ・遮光保管が必要<br />
          ・開封後は30日以内に使用
        </div>
      </div>
    </div>

    {/* Input */}
    <div className="flex gap-2 pt-3 border-t border-white/10">
      <input
        type="text"
        placeholder="SOPについて質問..."
        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none"
        readOnly
      />
      <button className="bg-purple-500 p-2 rounded-lg">
        <Send size={16} className="text-white" />
      </button>
    </div>
  </div>
);

// Meeting Minutes UI Mockup
const MinutesMockup = () => (
  <div className="bg-[#0a0a0f] rounded-xl p-4 h-80 flex flex-col">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Mic size={16} className="text-blue-400" />
        <span className="text-white text-sm font-medium">検査部定例会議</span>
      </div>
      <div className="text-xs text-gray-500">2024/12/03</div>
    </div>

    {/* Content */}
    <div className="flex-1 py-4 space-y-4 overflow-hidden">
      {/* Summary */}
      <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
        <div className="text-blue-400 text-xs font-bold mb-1">AI要約</div>
        <div className="text-gray-300 text-sm">
          新規導入機器の運用開始日を来月1日に決定。担当者のトレーニングは今週中に完了予定。
        </div>
      </div>

      {/* Transcript */}
      <div className="space-y-2">
        <div className="text-xs text-gray-500">文字起こし</div>
        <div className="flex gap-2 items-start">
          <div className="text-cyan-400 text-xs font-medium w-16 flex-shrink-0">田中:</div>
          <div className="text-gray-400 text-sm">新しい分析機器ですが、来月から本格稼働で...</div>
        </div>
        <div className="flex gap-2 items-start">
          <div className="text-pink-400 text-xs font-medium w-16 flex-shrink-0">佐藤:</div>
          <div className="text-gray-400 text-sm">トレーニングの日程は確保できていますか？</div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex gap-2 pt-3 border-t border-white/10">
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <Clock size={12} />
        <span>45:32</span>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <MessageSquare size={12} />
        <span>128発言</span>
      </div>
    </div>
  </div>
);

// Shift Manager UI Mockup
const ShiftMockup = () => (
  <div className="bg-[#0a0a0f] rounded-xl p-4 h-80 flex flex-col">
    {/* Header */}
    <div className="flex items-center justify-between pb-3 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-pink-400" />
        <span className="text-white text-sm font-medium">12月シフト</span>
      </div>
      <div className="bg-pink-500/20 text-pink-400 text-xs px-2 py-1 rounded">AI生成</div>
    </div>

    {/* Calendar Grid */}
    <div className="flex-1 py-4">
      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
        {['日', '月', '火', '水', '木', '金', '土'].map((d, i) => (
          <div key={d} className={`${i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-gray-500'}`}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {[...Array(31)].map((_, i) => (
          <div key={i} className={`aspect-square rounded text-xs flex items-center justify-center ${
            i === 2 ? 'bg-pink-500/30 text-pink-300' :
            i === 5 || i === 12 || i === 19 ? 'bg-blue-500/30 text-blue-300' :
            i === 8 || i === 15 ? 'bg-green-500/30 text-green-300' :
            'bg-white/5 text-gray-500'
          }`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>

    {/* Legend */}
    <div className="flex gap-4 pt-3 border-t border-white/10 text-xs">
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-pink-500 rounded" />
        <span className="text-gray-400">日勤</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-blue-500 rounded" />
        <span className="text-gray-400">夜勤</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-green-500 rounded" />
        <span className="text-gray-400">休日</span>
      </div>
    </div>
  </div>
);

export const AiShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050508] to-[#0a0a12] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <span className="text-purple-400 font-bold tracking-widest text-sm uppercase mb-2 block">AI Assistant</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                AIが、あなたの時間を<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">「貴重な時間」</span>に変える。
            </h2>
        </div>

        <div className="space-y-24">
            {/* 1. SOP AI */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row items-center gap-12"
            >
                <div className="lg:w-1/2">
                    <div className="bg-purple-500/10 p-3 rounded-xl inline-block mb-6">
                        <FileCheck className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">SOP AI Assistant</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        作成義務がある標準作業手順書（SOP）。AIと共に作成することで負担を劇的に軽減します。<br />
                        さらに、作成したSOPはRAG技術により、チャットで質問可能に。「この試薬の保管方法は？」と聞くだけで、マニュアルから即座に回答が得られます。
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <div className="bg-[#0f0f13] border border-white/10 rounded-2xl p-2 shadow-2xl relative group overflow-hidden">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur rounded-2xl group-hover:opacity-30 transition-opacity" />
                        <div className="relative z-10">
                            <SopChatMockup />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Minutes AI */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
                <div className="lg:w-1/2">
                    <div className="bg-blue-500/10 p-3 rounded-xl inline-block mb-6">
                        <Mic className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Smart Meeting Minutes</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        録音するだけで、文字起こしと要約が完了。議事録作成時間はゼロへ。<br />
                        最も重要なのは「検索性」です。「誰が」「どんな意図で」発言したか。デジタルベースで履歴を管理することで、過去の決定事項を瞬時に呼び出せます。
                    </p>
                </div>
                <div className="lg:w-1/2">
                     <div className="bg-[#0f0f13] border border-white/10 rounded-2xl p-2 shadow-2xl relative group overflow-hidden">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur rounded-2xl group-hover:opacity-30 transition-opacity" />
                        <div className="relative z-10">
                            <MinutesMockup />
                        </div>
                     </div>
                </div>
            </motion.div>

            {/* 3. Shift AI */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row items-center gap-12"
            >
                <div className="lg:w-1/2">
                    <div className="bg-pink-500/10 p-3 rounded-xl inline-block mb-6">
                        <Users className="text-pink-400" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Shift AI Manager</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        管理者にとって頭の痛いシフト作成をサポート。シフト表をアップロードするだけで、明日の勤務通知や未来のシフト作成補助を行います。<br />
                        スタッフへの通知はSlackやLINE等のツールと連携し、誰もが便利に自分の勤務を確認できます。
                    </p>
                </div>
                <div className="lg:w-1/2">
                     <div className="bg-[#0f0f13] border border-white/10 rounded-2xl p-2 shadow-2xl relative group overflow-hidden">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur rounded-2xl group-hover:opacity-30 transition-opacity" />
                        <div className="relative z-10">
                            <ShiftMockup />
                        </div>
                     </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};
