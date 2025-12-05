'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Smartphone, Mic, Search, Heart } from 'lucide-react';

export const LaboVoiceSection: React.FC = () => {
    const features = [
        { icon: Mic, text: '声で記録' },
        { icon: Search, text: '声でSOP検索' },
        { icon: Heart, text: 'いつもあなたのそばに' },
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#050508] to-[#0a0a12] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            <Image
                                src="/images/labovoice_app.jpg"
                                alt="LABO VOICE App"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl shadow-purple-500/20"
                                priority
                            />
                            {/* Floating badge */}
                            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
                                iOS App
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm mb-6">
                            <Smartphone size={16} />
                            <span>iPhone App</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                LABO VOICE
                            </span>
                        </h2>

                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                            臨床検査技師の音声AIパートナー。<br />
                            記録も質問も、声だけで完結。<br />
                            あなたの時間を、もっと大切に。
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                                >
                                    <feature.icon size={14} className="text-purple-400" />
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="https://labovoice.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
                        >
                            <Smartphone size={20} />
                            <span>LABO VOICEへ</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
