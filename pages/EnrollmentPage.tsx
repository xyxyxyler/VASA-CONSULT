import React from 'react';
import { EnrollmentForm } from '../components/EnrollmentForm';
import { useLanguage } from '../context/LanguageContext';

export const EnrollmentPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-24 min-h-screen px-6 md:px-12 max-w-4xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                    {t('enroll.title')}
                </h1>
                <p className="text-gray-400 text-lg">
                    {t('enroll.subtitle')}
                </p>
            </div>
            
            <EnrollmentForm />
        </div>
    );
};
