import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Team: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 md:px-12 max-w-8xl mx-auto bg-white/5 rounded-[2.5rem] my-12 mx-2 md:mx-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-800">
                        {/* Placeholder for Founder Image */}
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Founder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="md:col-span-7 lg:col-span-8 order-1 md:order-2">
                    <span className="text-brand-beige font-medium tracking-wider uppercase text-sm mb-4 block">{t('team.label')}</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-8">{t('team.founder.name')}</h2>
                    <h3 className="text-xl text-gray-300 mb-6 font-medium">{t('team.founder.role')}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                        {t('team.founder.bio')}
                    </p>

                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/company/vasa-consults" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:vasaconsults@gmail.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
