import React from 'react';
import { ArrowRight, Lightbulb, Target, Rocket, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: Lightbulb,
            title: t('process.step1.title'),
            desc: t('process.step1.desc')
        },
        {
            icon: Target,
            title: t('process.step2.title'),
            desc: t('process.step2.desc')
        },
        {
            icon: Rocket,
            title: t('process.step3.title'),
            desc: t('process.step3.desc')
        },
        {
            icon: HeartHandshake,
            title: t('process.step4.title'),
            desc: t('process.step4.desc')
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 max-w-8xl mx-auto">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="text-brand-beige font-medium tracking-wider uppercase text-sm mb-4 block">{t('process.label')}</span>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">{t('process.title')}</h2>
                <p className="text-gray-400 text-lg">{t('process.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 group">
                        <div className="w-24 h-24 rounded-3xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center mb-8 mx-auto group-hover:border-brand-beige/50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <step.icon className="w-8 h-8 text-brand-beige" />
                        </div>
                        <div className="text-center px-4">
                            <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 mb-4 border border-white/5 font-mono">0{i + 1}</div>
                            <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
