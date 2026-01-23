import React from 'react';
import { Target, Users, Zap, Globe, ShieldCheck, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Benefits: React.FC = () => {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: Target,
            title: t('benefits.tailored.title'),
            desc: t('benefits.tailored.desc')
        },
        {
            icon: Users,
            title: t('benefits.network.title'),
            desc: t('benefits.network.desc')
        },
        {
            icon: Globe,
            title: t('benefits.global.title'),
            desc: t('benefits.global.desc')
        },
        {
            icon: Zap,
            title: t('benefits.fast.title'),
            desc: t('benefits.fast.desc')
        },
        {
            icon: ShieldCheck,
            title: t('benefits.reliable.title'),
            desc: t('benefits.reliable.desc')
        },
        {
            icon: GraduationCap,
            title: t('benefits.expert.title'),
            desc: t('benefits.expert.desc')
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 max-w-8xl mx-auto">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">{t('benefits.title')}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{t('benefits.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-beige/30 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-brand-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6 text-brand-beige" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
