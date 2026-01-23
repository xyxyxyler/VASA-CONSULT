import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Stats: React.FC = () => {
    const { t } = useLanguage();

    const stats = [
        { label: t('stats.years'), value: '5+' },
        { label: t('stats.clients'), value: '50+' },
        { label: t('stats.languages'), value: '2' }, // EN/FR primary, maybe more?
        { label: t('stats.seminars'), value: '20+' }
    ];

    return (
        <section className="py-20 px-6 md:px-12 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-gray-400 uppercase tracking-widest font-mono">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
