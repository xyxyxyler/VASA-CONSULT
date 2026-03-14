import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: t('faq.q1'),
            a: t('faq.a1')
        },
        {
            q: t('faq.q2'),
            a: t('faq.a2')
        },
        {
            q: t('faq.q3'),
            a: t('faq.a3')
        },
        {
            q: t('faq.q4'),
            a: t('faq.a4')
        }
    ];

    return (
        <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/5">
            <h2 className="text-sm uppercase tracking-widest text-brand-beige mb-8 text-center font-medium">{t('faq.title')}</h2>

            <div className="space-y-2">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={`overflow-hidden transition-all duration-300 border-b border-white/10 ${openIndex === i ? 'pb-2 bg-transparent' : 'bg-transparent'}`}
                    >
                        <button
                            className="w-full flex items-center justify-between py-4 text-left group"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <span className={`text-base md:text-lg font-medium transition-colors ${openIndex === i ? 'text-brand-beige' : 'text-gray-300 group-hover:text-white'}`}>
                                {faq.q}
                            </span>
                            <span className={`flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center transition-all ${openIndex === i ? 'text-brand-beige' : 'text-gray-500 group-hover:text-white'}`}>
                                {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <p className="text-gray-400 text-sm leading-relaxed pr-8">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
