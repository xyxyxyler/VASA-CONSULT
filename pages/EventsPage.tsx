import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockEvents } from '../data/events';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventsPage: React.FC = () => {
    const { t, language } = useLanguage();

    const upcomingEvents = mockEvents.filter(e => e.type === 'upcoming');
    const recentEvents = mockEvents.filter(e => e.type === 'recent');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', options).format(date);
    };

    return (
        <div className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-beige/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Calendar className="w-6 h-6 text-brand-beige" />
                        <span className="text-brand-beige font-medium tracking-wider uppercase">
                            {t('nav.events')}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light mb-6">
                        {t('events.widget.title')}
                    </h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        {t('events.widget.subtitle')}
                    </p>
                </div>

                {/* Upcoming Events Section */}
                {upcomingEvents.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
                            <span className="w-8 h-px bg-brand-beige/50"></span>
                            {t('events.type.upcoming')}
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {upcomingEvents.map((evt) => (
                                <div key={evt.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-beige/30 transition-all group flex flex-col h-full">
                                    <div className="aspect-[16/9] w-full relative overflow-hidden">
                                        {evt.imageSrc ? (
                                            <img 
                                                src={evt.imageSrc} 
                                                alt={evt.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-black/30" />
                                        )}
                                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs text-brand-beige font-medium flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {formatDate(evt.date)}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-medium mb-4 group-hover:text-brand-beige transition-colors">{evt.title}</h3>
                                        <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{evt.description}</p>
                                        
                                        {evt.link ? (
                                            <Link to={evt.link} className="inline-flex items-center justify-center w-full py-3 rounded-full bg-white/10 hover:bg-brand-beige hover:text-black text-white font-medium transition-colors gap-2 group/btn mt-auto">
                                                {t('events.btn.learn_more')}
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        ) : (
                                            <div className="inline-flex items-center justify-center w-full py-3 rounded-full bg-white/5 text-gray-400 font-medium mt-auto cursor-not-allowed">
                                                Details Coming Soon
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Recent Events Section */}
                {recentEvents.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
                            <span className="w-8 h-px bg-white/20"></span>
                            {t('events.type.recent')}
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recentEvents.map((evt) => (
                                <div key={evt.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all group flex flex-col h-full">
                                    <div className="aspect-video w-full relative overflow-hidden">
                                        {evt.imageSrc ? (
                                            <img 
                                                src={evt.imageSrc} 
                                                alt={evt.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-black/30" />
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-4 px-4">
                                            <div className="text-sm text-gray-300 font-medium">
                                                {formatDate(evt.date)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">{evt.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">{evt.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
