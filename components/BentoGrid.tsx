import React from 'react';
import { Asterisk, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BentoCardProps } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const BentoCard: React.FC<BentoCardProps> = ({ title, subtitle, variant, className = '', customContent, imageSrc }) => {
    const baseStyles = "relative p-6 rounded-3xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] flex flex-col justify-between group";

    const variants = {
        beige: "bg-brand-beige text-black",
        dark: "bg-brand-gray text-white",
        light: "bg-brand-light-gray text-black",
        image: "text-white min-h-[300px]",
        'dark-outline': "bg-transparent border border-white/20 text-white hover:border-white/40"
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {variant === 'image' && imageSrc && (
                <>
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-colors" />
                    <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                </>
            )}

            <div className="relative z-20 h-full flex flex-col justify-between">
                {customContent ? customContent : (
                    <>
                        <div className="flex justify-between items-start">
                            {variant === 'beige' && <Asterisk className="w-10 h-10 mb-4 animate-spin-slow" />}
                            {variant !== 'beige' && <div className="w-2 h-2 rounded-full bg-current mb-4" />}

                            {variant === 'image' && (
                                <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform">
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        <div>
                            {title && <h3 className={`text-xl font-medium leading-tight mb-2 ${variant === 'beige' ? 'text-black' : ''}`}>{title}</h3>}
                            {subtitle && <p className={`text-sm ${variant === 'beige' ? 'text-black/70' : 'text-gray-400'}`}>{subtitle}</p>}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export const BentoGrid: React.FC = () => {
    const { t } = useLanguage();
    // Independent sliders for cards
    const [welcomeSlide, setWelcomeSlide] = React.useState(0);
    const [imageSlide, setImageSlide] = React.useState(0);
    const [expertiseSlide, setExpertiseSlide] = React.useState(0);

    React.useEffect(() => {
        const timer1 = setInterval(() => setWelcomeSlide(p => (p + 1) % 2), 4000);
        const timer2 = setInterval(() => setImageSlide(p => (p + 1) % 2), 6000);
        const timer3 = setInterval(() => setExpertiseSlide(p => (p + 1) % 2), 5000);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
        };
    }, []);

    const welcomeTitles = [t('bento.welcome.title1'), t('bento.welcome.title2')];
    const imageTitles = [t('bento.ready.title1'), t('bento.ready.title2')];
    const images = [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
                {/* Welcome Card - Sliding Title */}
                <BentoCard
                    variant="beige"
                    title={welcomeTitles[welcomeSlide]}
                    className="aspect-square transition-all duration-500"
                    customContent={
                        <div className="h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <Asterisk className="w-10 h-10 mb-4 animate-spin-slow" />
                                <div className="flex gap-1">
                                    {[0, 1].map(i => (
                                        <div key={i} className={`w-2 h-2 rounded-full transition-colors ${welcomeSlide === i ? 'bg-black' : 'bg-black/30'}`} />
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-medium leading-tight mb-2 text-black key={welcomeSlide} animate-fade-in">{welcomeTitles[welcomeSlide]}</h3>
                        </div>
                    }
                />

                {/* Global Reach Card */}
                <BentoCard
                    variant="light"
                    className="aspect-square"
                    customContent={
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex gap-1">
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-2">4+</h3>
                                <p className="text-sm text-gray-600 leading-snug">
                                    Continents reached through our global network of consultants.
                                </p>
                            </div>
                            <div className="w-full h-16 mt-4 overflow-hidden relative">
                                {/* Abstract line decoration */}
                                <svg className="absolute bottom-0 left-0 w-full h-full text-gray-300" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <path d="M0,40 Q20,10 40,30 T80,20 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <path d="M0,45 Q20,15 40,35 T80,25 T100,10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                                </svg>
                            </div>
                        </div>
                    }
                />

                {/* Why Choose Card */}
                <BentoCard
                    variant="dark-outline"
                    title="Why choose VASA?"
                    className="aspect-video md:aspect-auto"
                    customContent={
                        <div className="flex flex-col justify-end h-full">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-4 h-4 rounded-full border border-white"></div>
                                <div className="w-4 h-4 rounded-full bg-white"></div>
                            </div>
                            <h3 className="text-lg font-medium">Why choose <span className="underline decoration-1 underline-offset-4">VASA?</span></h3>
                        </div>
                    }
                />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
                {/* Experience Card */}
                <BentoCard
                    variant="dark"
                    className="bg-[#1c1c1c] aspect-square"
                    customContent={
                        <div className="flex flex-col h-full">
                            <div className="flex gap-1 mb-6">
                                {[0, 1].map(i => (
                                    <div key={i} className={`h-1 rounded-full transition-all duration-500 ${expertiseSlide === i ? 'w-12 bg-white' : 'w-4 bg-white/20'}`} />
                                ))}
                            </div>

                            <h3 className="text-lg text-gray-400 mb-4">{t('bento.expertise.title')}</h3>

                            <div className="space-y-3 relative overflow-hidden flex-grow">
                                {expertiseSlide === 0 ? (
                                    <div className="animate-fade-in absolute inset-0 w-full space-y-3">
                                        <Link to="/services" className="flex items-center justify-between p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
                                            <span className="text-sm px-2">{t('bento.expertise.edu')}</span>
                                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" />
                                        </Link>
                                        <Link to="/services" className="flex items-center justify-between p-2 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
                                            <span className="text-sm px-2 text-gray-400 group-hover/item:text-white transition-colors">{t('bento.expertise.biz')}</span>
                                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" />
                                        </Link>
                                        <Link to="/services" className="flex items-center justify-between p-2 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
                                            <span className="text-sm px-2 text-gray-400 group-hover/item:text-white transition-colors">{t('bento.expertise.liaison')}</span>
                                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" />
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="animate-fade-in absolute inset-0 w-full space-y-3">
                                        <Link to="/services" className="flex items-center justify-between p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
                                            <span className="text-sm px-2">{t('bento.expertise.legal')}</span>
                                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" />
                                        </Link>
                                        <Link to="/services" className="flex items-center justify-between p-2 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
                                            <span className="text-sm px-2 text-gray-400 group-hover/item:text-white transition-colors">{t('bento.expertise.medical')}</span>
                                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" />
                                        </Link>
                                        <Link to="/services" className="flex items-center justify-between p-2 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
                                            <span className="text-sm px-2 text-gray-400 group-hover/item:text-white transition-colors">{t('bento.expertise.recruit')}</span>
                                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                />

                {/* Ready to get started Card - Sliding Image/Text */}
                <BentoCard
                    variant="image"
                    imageSrc={images[imageSlide]}
                    title={imageTitles[imageSlide]}
                    className="flex-grow min-h-[300px] transition-all duration-700"
                    customContent={
                        <div className="h-full flex flex-col justify-between relative z-20">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-1">
                                    {[0, 1].map(i => (
                                        <div key={i} className={`w-2 h-2 rounded-full transition-colors ${imageSlide === i ? 'bg-white' : 'bg-white/30'}`} />
                                    ))}
                                </div>
                                <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform">
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                            <h3 className="text-2xl font-medium text-white key={imageSlide} animate-fade-in">{imageTitles[imageSlide]}</h3>
                        </div>
                    }
                />
            </div>
        </div>
    );
};