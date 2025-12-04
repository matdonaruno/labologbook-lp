'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Thermometer, ShieldCheck, ClipboardCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors group"
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color.bg} ${color.text} group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export const CoreFeatures: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#050508]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                現場の「リアル」に特化した機能
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                汎用的な在庫管理ソフトではありません。<br />
                臨床検査室特有のワークフローを熟知した、プロフェッショナルのためのツールです。
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={FlaskConical}
            title="試薬使用管理"
            desc="ただの在庫管理ではありません。開封日、有効期限、ロット番号。検査機器で使用中の試薬をリアルタイムに把握し、期限切れリスクをゼロにします。"
            color={{ bg: "bg-cyan-500/10", text: "text-cyan-400" }}
            delay={0}
          />
          <FeatureCard 
            icon={Thermometer}
            title="温度監視システム"
            desc="冷蔵庫の温度を24時間自動記録。5.0℃などの適正値を常時監視し、異常があれば即座に通知。休日や夜間の不安から解放されます。"
            color={{ bg: "bg-orange-500/10", text: "text-orange-400" }}
            delay={0.1}
          />
          <FeatureCard 
            icon={ClipboardCheck}
            title="機器メンテナンス"
            desc="膨大な紙の点検簿はもう不要。スマホでサクッと記録完了。グラフ表示でトレンドも一目瞭然。監査対応もスムーズに。"
            color={{ bg: "bg-purple-500/10", text: "text-purple-400" }}
            delay={0.2}
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="精度管理記録"
            desc="患者データの信頼性を支える最重要記録。実施漏れを防ぎ、確実に、簡単に記録。検査の品質をデジタルの力で保証します。"
            color={{ bg: "bg-green-500/10", text: "text-green-400" }}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
