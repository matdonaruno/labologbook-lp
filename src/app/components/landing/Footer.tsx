'use client';

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020205] text-white pt-12 md:pt-24 pb-8 md:pb-12 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4 md:px-6">

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center mb-12 md:mb-24 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 relative z-10 leading-tight">
                        まずは、デモで<br className="sm:hidden" />体験してください。
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                        アカウント登録は不要です。<br className="sm:hidden" />今すぐ実際のダッシュボードを触って、<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>Labo Logbookの世界観を感じてください。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a
                            href="https://next-crm-coral.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 relative z-10"
                            style={{ boxShadow: 'none' }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(147,51,234,0.9), 0 0 80px rgba(147,51,234,0.6), 0 0 120px rgba(147,51,234,0.3)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                        >
                            アプリを開く <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@labovoice.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 inline-flex items-center justify-center gap-2 relative z-10"
                        >
                            お問い合わせ <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 md:pt-12">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            LABO LOGBOOK
                        </h2>
                        <p className="text-gray-600 text-xs md:text-sm">Empowering Clinical Laboratories.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-500">
                        <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">Contact Support</a>
                    </div>
                </div>

                <div className="mt-8 md:mt-12 text-center text-gray-800 text-xs">
                    &copy; {new Date().getFullYear()} Labo Logbook. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
