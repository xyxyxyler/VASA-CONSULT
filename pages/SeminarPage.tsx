import React from 'react';
import { SeminarRegistrationForm } from '../components/SeminarRegistrationForm';
import { useLanguage } from '../context/LanguageContext';

export const SeminarPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-24 min-h-screen px-6 md:px-12 max-w-4xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                    {t('seminar.title')}
                </h1>
                <p className="text-gray-400 text-lg">
                    {t('seminar.subtitle')}
                </p>
                <p className="text-brand-beige text-sm mt-4 p-4 bg-brand-beige/10 rounded-xl border border-brand-beige/20 inline-block">
                    {t('seminar.onetime_notice')}
                </p>
            </div>
            
            <SeminarRegistrationForm />
        </div>
    );
};
