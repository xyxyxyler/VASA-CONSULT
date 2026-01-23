import React from 'react';
import { InlineWidget } from 'react-calendly';
import { useLanguage } from '../context/LanguageContext';

export const BookingSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 md:px-12 max-w-8xl mx-auto border-t border-white/10">
            <div className="text-center mb-16">
                <span className="text-brand-beige font-medium tracking-wider uppercase text-sm mb-4 block">{t('booking.label')}</span>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">{t('booking.title')}</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('booking.desc')}</p>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-white">
                <InlineWidget
                    url="https://calendly.com/vasaconsults"
                    styles={{
                        height: '700px',
                        width: '100%'
                    }}
                    pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: 'f29e23',
                        textColor: '1a1a1a'
                    }}
                />
            </div>
        </section>
    );
};
