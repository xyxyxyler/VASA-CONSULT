import React from 'react';
import { Award, Shield, Globe, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Values: React.FC = () => {
    const { t } = useLanguage();

    const values = [
        {
            icon: Award,
            title: t('values.excellence.title'),
            desc: t('values.excellence.desc')
        },
        {
            icon: Shield,
            title: t('values.integrity.title'),
            desc: t('values.integrity.desc')
        },
        {
            icon: Globe,
            title: t('values.culture.title'),
            desc: t('values.culture.desc')
        },
        {
            icon: Zap,
            title: t('values.innovation.title'),
            desc: t('values.innovation.desc')
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 max-w-8xl mx-auto border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">{t('values.title')}</h2>
                </div>

                {values.map((value, i) => (
                    <div key={i} className="group">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-beige group-hover:text-black transition-all duration-300">
                            <value.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
