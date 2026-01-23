import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Reviews: React.FC = () => {
    const { t } = useLanguage();
    const reviews = [
        {
            quote: "VASA's seminars gave me the confidence to speak French fluently in my business negotiation. Highly recommended!",
            author: "Kwame A.",
            role: "Entrepreneur",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "We found the perfect bilingual candidate for our team thanks to their recruitment support.",
            author: "Sarah J.",
            role: "HR Manager",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "The interpretation services at our regional conference were flawless. Cultural nuance was spot on.",
            author: "Dr. K. Osei",
            role: "Conference Organizer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        }
    ];

    return (
        <section id="reviews" className="px-6 md:px-12 py-24 max-w-8xl mx-auto border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">{t('reviews.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <div key={i} className="flex flex-col justify-between p-8 rounded-3xl bg-[#151515] hover:bg-[#1a1a1a] transition-colors relative">
                        <div className="mb-8">
                            <svg className="w-8 h-8 text-brand-beige/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                            </svg>
                            <p className="text-gray-300 leading-relaxed">"{review.quote}"</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={review.image} alt={review.author} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <h4 className="text-white font-medium text-sm">{review.author}</h4>
                                <p className="text-xs text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};