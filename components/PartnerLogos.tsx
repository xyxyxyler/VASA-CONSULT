import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PartnerLogos: React.FC = () => {
    const { t } = useLanguage();

    const partners = [
        { name: "The Skills Atelier", color: "text-white" },
        { name: "Aircraft Incident Bureau", color: "text-white" },
        { name: "Eduwatch", color: "text-white" },
        { name: "3treegroup", color: "text-white" }
    ];

    return (
        <section className="py-16 px-6 md:px-12 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-8xl mx-auto text-center">
                <p className="text-sm font-mono text-gray-500 mb-10 uppercase tracking-widest">{t('partners.title')}</p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, i) => (
                        <div key={i} className="group">
                            {/* Placeholder for actual Logo - using stylized text for now */}
                            <h3 className={`text-2xl md:text-3xl font-bold tracking-tighter ${partner.color} hover:text-brand-beige transition-colors cursor-default`}>
                                {partner.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
