import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Reviews: React.FC = () => {
    const { t } = useLanguage();
    const reviews = [
        {
            quote: "I enjoy my French classes with Veronica because she is patient yet challenges me in a way that encourages me to do more. She provides very helpful learning material, does not overwhelm me with too much information at once and generally tutors with my needs in mind. I Definitely recommend her 1:1 tutoring classes.",
            author: "Dr Priscilla",
            role: "Client"
        },
        {
            quote: "As a French tutor, interpreter, and translator, Veronica consistently demonstrates a deep command of the language and a unique ability to make it engaging and accessible-whether in the classroom or through her content as a French language influencer. She brings creativity, clarity, and cultural sensitivity to everything she does, which makes her an asset in both educational and professional settings.",
            author: "Colleague",
            role: ""
        },
        {
            quote: "Her commitment to helping others learn and love the French language is truly inspiring. I highly recommend Veronica to any institution, brand, or individual looking for a skilled and reliable language expert.",
            author: "Founder of Benash Afrique",
            role: "Partner"
        },
        {
            quote: "Your hard work, professionalism, motivation and positive attitude played a fundamental role in the success of our event, and we are delighted. Thanks to your dedication, we were able to achieve are markable team effort in presenting Ghanaian students with the advantages of studying in France.",
            author: "Campus France Ghana",
            role: "Organization"
        },
        {
            quote: "Ms. Veronica's proficiency in French interpretation was invaluable throughout the task. She accompanied the delegation, which included myself as the Commissioner and other senior staff members, providing real-time translation and interpretation services during high-level meetings, presentations, and formal signing ceremonies. Her professionalism, fluency, and cultural awareness substantially contributed to the smooth progression of discussions and mutual understanding among all parties involved. Thanks in considerable part to her contributions, the objectives of the mission were successfully achieved, culminating in the MoU being signed without any communication barriers.",
            author: "Akwasi Prempeh",
            role: "Former Commissioner, AIB"
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
                            <div>
                                <h4 className="text-white font-medium text-lg">{review.author}</h4>
                                {review.role && <p className="text-sm text-brand-beige mt-1">{review.role}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};