import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ConsultationPage: React.FC = () => {
    const { t } = useLanguage();

    // Ensure the calendly widget script runs if it hasn't already
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="pt-32 pb-24 min-h-[100vh] px-6 md:px-12 max-w-5xl mx-auto flex flex-col">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                    {t('consultation.title')}
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                    {t('consultation.subtitle')}
                </p>
            </div>
            
            <div className="flex-1 w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative min-h-[700px]">
                {/* 
                  We use an iframe directly to ensure it loads reliably inside the React component 
                  without completely relying on Calendly's inline-widget class script manipulation 
                  which sometimes conflicts with React Router navigations.
                */}
                <iframe
                    src="https://calendly.com/akuasasu123/book-a-call-with-me?embed_domain=vasaconsultancy.com&embed_type=Inline"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a Consultation with VASA"
                    className="absolute inset-0"
                ></iframe>
            </div>
        </div>
    );
};
