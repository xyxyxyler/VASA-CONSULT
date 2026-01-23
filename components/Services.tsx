import React from 'react';
import { ArrowUpRight, BarChart3, Users, Zap, Globe } from 'lucide-react';
import { BentoCard } from './BentoGrid';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="px-6 md:px-12 py-24 max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
                <div className="lg:col-span-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-gray-500">
                        {t('services.subtitle')}
                    </h2>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                    <button className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300">
                        <span className="text-lg">All Services</span>
                        <span className="w-8 h-8 rounded-full bg-transparent border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <BentoCard
                    variant="dark"
                    title={t('bento.seminars.title')}
                    subtitle={t('bento.seminars.desc')}
                    className="min-h-[320px] lg:col-span-3"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-brand-beige" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">{t('bento.seminars.title')}</h3>
                                <p className="text-sm text-gray-400">Monthly interactive sessions designed to immerse learners in the French language and culture.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="text-xs text-brand-beige">Join next session</span>
                                <ArrowUpRight className="w-4 h-4 text-brand-beige" />
                            </div>
                        </div>
                    }
                />

                <BentoCard
                    variant="light"
                    title={t('bento.education.title')}
                    subtitle={t('bento.education.desc')}
                    className="min-h-[320px] lg:col-span-3"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-black mb-2">{t('bento.education.title')}</h3>
                                <p className="text-sm text-gray-600">Structured curriculum for all proficiency levels, accessible from anywhere.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-black/10 flex justify-between items-center">
                                <span className="text-xs text-black font-medium">Start learning</span>
                                <ArrowUpRight className="w-4 h-4 text-black" />
                            </div>
                        </div>
                    }
                />

                <BentoCard
                    variant="dark"
                    title={t('bento.liaison.title')}
                    subtitle={t('bento.liaison.desc')}
                    className="min-h-[320px] lg:col-span-2"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-brand-beige" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">{t('bento.liaison.title')}</h3>
                                <p className="text-sm text-gray-400">Professional interpretation and translation services for conferences and meetings.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="text-xs text-brand-beige">Learn more</span>
                                <ArrowUpRight className="w-4 h-4 text-brand-beige" />
                            </div>
                        </div>
                    }
                />

                <BentoCard
                    variant="dark"
                    title={t('bento.business.title')}
                    subtitle={t('bento.business.desc')}
                    className="min-h-[320px] bg-[#252525] lg:col-span-2"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <BarChart3 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">{t('bento.business.title')}</h3>
                                <p className="text-sm text-gray-400">Helping businesses navigate international markets and cross-cultural challenges.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="text-xs text-white">Learn more</span>
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    }
                />

                <BentoCard
                    variant="light"
                    title={t('bento.branding.title')}
                    subtitle={t('bento.branding.desc')}
                    className="min-h-[320px] lg:col-span-2"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-black mb-2">{t('bento.branding.title')}</h3>
                                <p className="text-sm text-gray-600">Leverage your language skills to build a powerful personal brand.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-black/10 flex justify-between items-center">
                                <span className="text-xs text-black">Learn more</span>
                                <ArrowUpRight className="w-4 h-4 text-black" />
                            </div>
                        </div>
                    }
                />
            </div>
        </section>
    );
};