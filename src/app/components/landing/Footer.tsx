'use client';

import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020205] text-white py-12 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-tighter mb-2">LABO LOGBOOK</h2>
                        <p className="text-gray-600 text-sm">Empowering Clinical Laboratories with Advanced Technology.</p>
                    </div>
                    
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Contact Support</a>
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-700 text-xs">
                    &copy; {new Date().getFullYear()} Labo Logbook. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
