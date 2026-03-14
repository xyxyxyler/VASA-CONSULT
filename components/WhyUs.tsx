import React from 'react';
import { Asterisk, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyUs: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="why-us" className="px-6 md:px-12 py-16 max-w-8xl mx-auto border-t border-white/5">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
                <div className="md:w-1/3">
                    <div className="sticky top-32">
                        <div className="w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center mb-6">
                            <Asterisk className="w-5 h-5 text-black animate-spin-slow" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-4">
                            {t('whyus.title')}
                        </h2>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
                            {t('whyus.subtitle')}
                        </p>
                        <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hidden md:block">
                            <div className="text-2xl font-bold text-white mb-1">Global</div>
                            <div className="text-xs text-gray-400">Connecting businesses and learners across Africa and the world.</div>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 content-start">
                    {[
                        { title: t('whyus.point1.title'), desc: t('whyus.point1.desc') },
                        { title: t('whyus.point2.title'), desc: t('whyus.point2.desc') },
                        { title: t('whyus.point3.title'), desc: t('whyus.point3.desc') },
                        { title: t('whyus.point4.title'), desc: t('whyus.point4.desc') },
                        { title: t('whyus.point5.title'), desc: t('whyus.point5.desc') }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start group">
                            <div className="w-8 h-8 rounded-full bg-brand-beige/10 flex items-center justify-center shrink-0 group-hover:bg-brand-beige transition-colors mt-0.5">
                                <CheckCircle2 className="w-4 h-4 text-brand-beige group-hover:text-black transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-white mb-2 group-hover:text-brand-beige transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};