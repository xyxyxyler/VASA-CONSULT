import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Team: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 md:px-12 max-w-8xl mx-auto bg-white/5 rounded-[2.5rem] my-12 mx-2 md:mx-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#1a1a1a] shadow-2xl shadow-black/50 border border-white/5">
                        <img
                            src="/images/founder.jpg"
                            alt="Veronica - Founder of VASA Consults"
                            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                        />
                    </div>
                </div>
                <div className="md:col-span-7 lg:col-span-8 order-1 md:order-2">
                    <span className="text-brand-beige font-medium tracking-wider uppercase text-sm mb-4 block">{t('team.label')}</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-2">{t('team.founder.name')}</h2>
                    <h3 className="text-xl text-brand-beige mb-6 font-medium">{t('team.founder.role')}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl whitespace-pre-line">
                        {t('team.founder.bio')}
                    </p>

                    <div className="mb-10">
                        <h4 className="text-white text-xl font-medium mb-4">{t('impact.title')}</h4>
                        <ul className="text-gray-400 space-y-3 leading-relaxed">
                            <li className="flex gap-3 items-start"><span className="text-brand-beige mt-1">•</span>{t('impact.p1')}</li>
                            <li className="flex gap-3 items-start"><span className="text-brand-beige mt-1">•</span>{t('impact.p2')}</li>
                            <li className="flex gap-3 items-start"><span className="text-brand-beige mt-1">•</span>{t('impact.p3')}</li>
                            <li className="flex gap-3 items-start"><span className="text-brand-beige mt-1">•</span>{t('impact.p4')}</li>
                            <li className="flex gap-3 items-start"><span className="text-brand-beige mt-1">•</span>{t('impact.p5')}</li>
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/company/vasa-consults" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-beige hover:border-brand-beige hover:text-black transition-all" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.whatsapp.com/channel/0029Vakif7AKAwElgHDJuu20" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-beige hover:border-brand-beige hover:text-black transition-all" aria-label="WhatsApp Channel">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                        </a>
                        <a href="mailto:vasaconsults@gmail.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-beige hover:border-brand-beige hover:text-black transition-all" aria-label="Email">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
