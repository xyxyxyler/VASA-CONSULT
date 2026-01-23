import React from 'react';
import { Asterisk, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyUs: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="why-us" className="px-6 md:px-12 py-24 max-w-8xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <div className="sticky top-32">
                        <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center mb-6">
                            <Asterisk className="w-6 h-6 text-black animate-spin-slow" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                            {t('whyus.title')}
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            {t('whyus.subtitle')}
                        </p>
                        <div className="p-6 bg-[#1c1c1c] rounded-2xl border border-white/10">
                            <div className="text-4xl font-bold text-white mb-2">Global</div>
                            <div className="text-sm text-gray-400">Connecting businesses and learners across Africa and the world.</div>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 flex flex-col gap-8">
                    {[
                        {
                            title: t('whyus.reason1.title'),
                            desc: t('whyus.reason1.desc')
                        },
                        {
                            title: t('whyus.reason2.title'),
                            desc: t('whyus.reason2.desc')
                        },
                        {
                            title: t('whyus.reason2.title'), // Reusing reason2 pattern or needing reason3
                            desc: t('whyus.reason2.desc')
                        }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-brand-gray border border-white/5 hover:border-brand-beige/30 transition-colors">
                            <div className="flex items-start justify-between mb-4">
                                <span className="font-mono text-brand-beige">0{i + 1}</span>
                                <CheckCircle2 className="w-6 h-6 text-brand-gray group-hover:text-brand-beige transition-colors" />
                            </div>
                            <h3 className="text-2xl font-medium mb-3 text-white">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xl">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};