import React from 'react';
import { ArrowDown, MoveHorizontal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BentoGrid } from './BentoGrid';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Global Connection"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/95 via-brand-black/80 to-brand-black" />
            </div>

            <div className="relative z-10 pt-32 pb-12 px-6 md:px-12 max-w-8xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Content (Typography & CTA) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* H1 Heading */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-4 h-4 rounded-full bg-white hidden sm:block"></div>
                                <div className="w-4 h-4 rounded-full border border-white hidden sm:block"></div>
                            </div>
                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight text-white leading-[1.1]">
                                {t('hero.headline').split(',')[0]} <br />
                                <span className="text-gray-400">Language & Business</span> <br />
                                <span className="flex items-center gap-4 flex-wrap">
                                    Solutions
                                    {/* Floating Action Buttons inline */}
                                    <div className="inline-flex items-center gap-2 align-middle ml-2">
                                        <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center">
                                            <MoveHorizontal className="w-5 h-5" />
                                        </span>
                                        <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-beige text-black flex items-center justify-center">
                                            <ArrowDown className="w-5 h-5" />
                                        </span>
                                        <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </span>
                                    </div>
                                </span>
                            </h1>
                        </div>

                        {/* Subtext */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 max-w-2xl">
                            <span className="text-gray-500 font-mono">/001</span>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t('hero.subtext')}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link to="/services">
                                <Button variant="primary" className="pl-8 pr-2 h-14 text-base bg-brand-beige hover:bg-[#e0c085]">
                                    <span className="mr-4">{t('hero.cta.services')}</span>
                                    <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" className="h-14 px-8 text-base border-white/20 rounded-full hover:bg-white/5">
                                    {t('hero.cta.contact')}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content (Bento Grid) */}
                    <div className="lg:col-span-5 h-full">
                        <BentoGrid />
                    </div>
                </div>
            </div>
        </section>
    );
};