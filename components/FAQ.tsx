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
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-16 text-center">{t('faq.title')}</h2>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={`rounded-2xl overflow-hidden border transition-all duration-300 ${openIndex === i ? 'bg-white/5 border-brand-beige/30' : 'bg-transparent border-white/10 hover:border-white/20'}`}
                    >
                        <button
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <span className={`text-lg md:text-xl font-medium transition-colors ${openIndex === i ? 'text-white' : 'text-gray-300'}`}>
                                {faq.q}
                            </span>
                            <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${openIndex === i ? 'bg-brand-beige text-black border-brand-beige' : 'border-white/20 text-white'}`}>
                                {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? 'grid-rows-[1fr] pb-6 md:pb-8 px-6 md:px-8' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <p className="text-gray-400 leading-relaxed">
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
