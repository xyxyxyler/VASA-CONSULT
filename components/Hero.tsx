import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
                    className="w-full h-full object-cover opacity-40 transition-transform duration-[20s] ease-linear scale-110 animate-pulse"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/95 via-brand-black/80 to-brand-black" />
            </div>

            <div className="relative z-10 pt-32 pb-12 px-6 md:px-12 max-w-8xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Content (Typography & CTA) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* H1 Heading */}
                        <div className="mb-12">
                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight text-white leading-[1.1]">
                                <span className="block mb-2">{t('hero.headline.part1')}</span>
                                <span className="block text-gray-400 mb-2">{t('hero.headline.part2')}</span>
                                <span className="block text-brand-beige">{t('hero.headline.part3')}</span>
                            </h1>
                        </div>

                        {/* Subtext */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 max-w-2xl">
                            <div className="w-12 h-1 bg-brand-beige mt-3 shrink-0 hidden md:block"></div>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-fade-in">
                                {t('hero.subtext_new')}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link to="/contact">
                                <Button variant="primary" className="pl-6 pr-2 h-14 text-base bg-brand-beige hover:bg-[#e0c085]">
                                    <span className="mr-4">{t('hero.cta.book_call')}</span>
                                    <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" className="h-14 px-8 text-base border-white/20 rounded-full hover:bg-white/5 flex items-center gap-2">
                                    {t('hero.cta.learn_more')}
                                    <ArrowUpRight className="w-4 h-4" />
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