import React from 'react';
import { Asterisk } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Values } from '../components/Values';
import { Team } from '../components/Team';

export const AboutPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-40 px-6 md:px-12 max-w-8xl mx-auto min-h-screen">
            <div className="mb-24">
                <div className="flex items-center gap-2 text-brand-beige mb-6">
                    <Asterisk className="w-8 h-8 animate-spin-slow" />
                    <span className="text-xl font-bold text-white tracking-tight">{t('about.title')}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-8">
                    {t('about.headline').split('\n')[0]} <br />
                    <span className="text-gray-500">{t('about.headline').split('\n')[1]}</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-12 whitespace-pre-line">
                    {t('about.description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 mb-20">
                    <div>
                        <h3 className="text-white text-xl font-medium mb-4">{t('about.mission.title')}</h3>
                        <p>{t('about.mission.desc')}</p>
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-medium mb-4">{t('about.vision.title')}</h3>
                        <p>{t('about.vision.desc')}</p>
                    </div>
                </div>
            </div>

            <Team />
            <Values />
        </section>
    );
};
