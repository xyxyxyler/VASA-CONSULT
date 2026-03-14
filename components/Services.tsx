import React from 'react';
import { ArrowUpRight, BarChart3, Users, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BentoCard } from './BentoGrid';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="px-6 md:px-12 py-24 max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white">
                        {t('services.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                        {t('services.intro')}
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                {/* 1. French Language Education */}
                <BentoCard
                    variant="light"
                    title={t('service.edu.title')}
                    subtitle={t('service.edu.desc')}
                    className="min-h-[320px] lg:col-span-3"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-black mb-2">{t('service.edu.title')}</h3>
                                <p className="text-sm text-gray-600">{t('service.edu.desc')}</p>
                            </div>
                            <Link to="/contact" className="mt-4 pt-4 border-t border-black/10 flex justify-between items-center group cursor-pointer hover:opacity-80 transition-opacity">
                                <span className="text-xs text-black font-medium">Start learning</span>
                                <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    }
                />

                {/* 2. Interpretation & Translation Services */}
                <BentoCard
                    variant="dark"
                    title={t('service.interp.title')}
                    subtitle={t('service.interp.desc')}
                    className="min-h-[320px] lg:col-span-3"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-brand-beige" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">{t('service.interp.title')}</h3>
                                <p className="text-sm text-gray-400">{t('service.interp.desc')}</p>
                            </div>
                            <Link to="/contact" className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center group cursor-pointer hover:opacity-80 transition-opacity">
                                <span className="text-xs text-brand-beige">Learn more</span>
                                <ArrowUpRight className="w-4 h-4 text-brand-beige transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    }
                />

                {/* 3. Visibility & Personal Branding Consulting */}
                <BentoCard
                    variant="dark"
                    title={t('service.brand.title')}
                    subtitle={t('service.brand.desc')}
                    className="min-h-[320px] bg-[#252525] lg:col-span-3"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">{t('service.brand.title')}</h3>
                                <p className="text-sm text-gray-400">{t('service.brand.desc')}</p>
                            </div>
                            <Link to="/contact" className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center group cursor-pointer hover:opacity-80 transition-opacity">
                                <span className="text-xs text-white">Learn more</span>
                                <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    }
                />

                {/* 4. International & Cross-Border Support */}
                <BentoCard
                    variant="light"
                    title={t('service.cross.title')}
                    subtitle={t('service.cross.desc')}
                    className="min-h-[320px] lg:col-span-3"
                    customContent={
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-4">
                                <BarChart3 className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-black mb-2">{t('service.cross.title')}</h3>
                                <p className="text-sm text-gray-600">{t('service.cross.desc')}</p>
                            </div>
                            <Link to="/contact" className="mt-4 pt-4 border-t border-black/10 flex justify-between items-center group cursor-pointer hover:opacity-80 transition-opacity">
                                <span className="text-xs text-black">Learn more</span>
                                <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    }
                />
            </div>
        </section>
    );
};