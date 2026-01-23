import React from 'react';
import { ArrowDown, MoveHorizontal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BentoGrid } from './BentoGrid';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slides = [
        { title: t('hero.slide1.title'), subtext: t('hero.slide1.subtext') },
        { title: t('hero.slide2.title'), subtext: t('hero.slide2.subtext') },
        { title: t('hero.slide3.title'), subtext: t('hero.slide3.subtext') },
    ];

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
                            {/* Slider Indicators */}
                            <div className="flex items-center gap-2 mb-6">
                                {[0, 1, 2].map((i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-brand-beige w-8' : 'bg-white/20 hover:bg-white/40'}`}
                                    />
                                ))}
                            </div>

                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight text-white leading-[1.1] min-h-[3.3em]">
                                {t('hero.prefix')} <br />

                                <div className="relative overflow-hidden">
                                    <div key={currentSlide} className="animate-fade-in-up">
                                        <span className="text-gray-400 block">{slides[currentSlide].title}</span>
                                    </div>
                                </div>

                                <span className="flex items-center gap-4 flex-wrap mt-2">
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
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 max-w-2xl min-h-[5em]">
                            <span className="text-gray-500 font-mono">/00{currentSlide + 1}</span>
                            <p className="text-gray-300 text-lg leading-relaxed animate-fade-in">
                                {slides[currentSlide].subtext} <span className="text-white">Connecting Africa and the diaspora through language.</span>
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