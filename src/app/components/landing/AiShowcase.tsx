'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mic, Users, Search, FileCheck } from 'lucide-react';

export const AiShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050508] to-[#0a0a12] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <span className="text-purple-400 font-bold tracking-widest text-sm uppercase mb-2 block">AI Assistant</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                AIが、あなたの時間を<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">「考える時間」</span>に変える。
            </h2>
        </div>

        <div className="space-y-24">
            {/* 1. SOP AI */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <div className="bg-purple-500/10 p-3 rounded-xl inline-block mb-6">
                        <FileCheck className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">SOP AI Assistant</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        作成義務がある標準作業手順書（SOP）。AIと共に作成することで負担を劇的に軽減します。<br />
                        さらに、作成したSOPはRAG（検索拡張生成）技術により、チャットで質問可能に。「この試薬の保管方法は？」と聞くだけで、マニュアルから即座に回答が得られます。
                    </p>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />作成アシスト・承認プロセス完備</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />マニュアル即時検索 (RAG)</li>
                    </ul>
                </div>
                <div className="lg:w-1/2">
                    {/* Mockup for Chat UI */}
                    <div className="bg-[#0f0f13] border border-white/10 rounded-2xl p-6 shadow-2xl">
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" />
                                <div className="bg-gray-800 p-3 rounded-r-xl rounded-bl-xl text-sm text-gray-200">
                                    ヘモグロビンA1c試薬の保管温度を教えて。
                                </div>
                            </div>
                            <div className="flex gap-4 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center"><Brain size={16} /></div>
                                <div className="bg-purple-900/30 border border-purple-500/30 p-3 rounded-l-xl rounded-br-xl text-sm text-gray-200">
                                    SOP「HbA1c測定手順書 (Ver.2.1)」によると、<span className="text-purple-300 font-bold">2〜8℃（冷蔵）</span>での保管が必要です。開封後は1ヶ月以内に使用してください。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Minutes AI */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                    <div className="bg-blue-500/10 p-3 rounded-xl inline-block mb-6">
                        <Mic className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Smart Meeting Minutes</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        録音するだけで、文字起こしと要約が完了。議事録作成時間はゼロへ。<br />
                        最も重要なのは「検索性」です。「誰が」「どんな意図で」発言したか。デジタルベースで履歴を管理することで、過去の決定事項を瞬時に呼び出せます。
                    </p>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />自動文字起こし・要約</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />発言者ごとの意図検索</li>
                    </ul>
                </div>
                <div className="lg:w-1/2">
                     <div className="bg-[#0f0f13] border border-white/10 rounded-2xl p-6 shadow-2xl relative">
                        <div className="absolute top-4 right-4 animate-pulse"><div className="w-3 h-3 bg-red-500 rounded-full" /></div>
                        <div className="space-y-4 opacity-70">
                             <div className="h-4 w-3/4 bg-gray-800 rounded" />
                             <div className="h-4 w-full bg-gray-800 rounded" />
                             <div className="h-4 w-5/6 bg-gray-800 rounded" />
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <h4 className="text-white font-bold mb-2">AI Summary</h4>
                            <p className="text-gray-400 text-sm">次期自動分析装置の導入について、A社とB社を比較検討。コスト面でA社が優位だが、保守体制で懸念あり。来週までに詳細な保守見積もりを取り寄せることで合意。</p>
                        </div>
                     </div>
                </div>
            </div>

            {/* 3. Shift AI */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
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
                    {/* Calendar / Notification Mock */}
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1a1a20] p-4 rounded-xl border border-white/5">
                            <div className="text-gray-500 text-xs mb-1">TOMORROW</div>
                            <div className="text-white font-bold">日勤 (Leader)</div>
                            <div className="text-gray-400 text-sm mt-2">08:30 - 17:15</div>
                        </div>
                        <div className="bg-[#1a1a20] p-4 rounded-xl border border-white/5 opacity-50">
                            <div className="text-gray-500 text-xs mb-1">DAY AFTER</div>
                            <div className="text-white font-bold">当直</div>
                            <div className="text-gray-400 text-sm mt-2">17:00 - 09:00</div>
                        </div>
                     </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
