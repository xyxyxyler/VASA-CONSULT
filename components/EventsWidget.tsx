import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockEvents } from '../data/events';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const EventsWidget: React.FC = () => {
    const { t, language } = useLanguage();

    // Take the first 3 events to show in the widget (mix of upcoming and recent ideally)
    const displayEvents = mockEvents.slice(0, 3);

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
        <section className="py-24 bg-brand-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-beige/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-brand-beige" />
                            <span className="text-brand-beige text-sm font-medium tracking-wider uppercase">
                                {t('nav.events')}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                            {t('events.widget.title')}
                        </h2>
                        <p className="text-xl text-gray-400 font-light">
                            {t('events.widget.subtitle')}
                        </p>
                    </div>
                    <div>
                        <Link to="/events">
                            <Button variant="white" className="w-full md:w-auto">
                                {t('events.btn.view_all')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayEvents.map((evt) => (
                        <div 
                            key={evt.id} 
                            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-beige/30 transition-all group flex flex-col h-full"
                        >
                            <div className="aspect-video w-full overflow-hidden relative">
                                {evt.imageSrc ? (
                                    <img 
                                        src={evt.imageSrc} 
                                        alt={evt.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-black/20" />
                                )}
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs text-white font-medium flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-brand-beige" />
                                    {evt.type === 'upcoming' ? t('events.type.upcoming') : t('events.type.recent')}
                                </div>
                            </div>
                            
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="text-brand-beige text-sm font-medium mb-3">
                                    {formatDate(evt.date)}
                                </div>
                                <h3 className="text-xl text-white font-medium mb-4 group-hover:text-brand-beige transition-colors line-clamp-2">
                                    {evt.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                                    {evt.description}
                                </p>
                                
                                <div className="pt-4 border-t border-white/10 mt-auto">
                                    {evt.link ? (
                                        <Link 
                                            to={evt.link} 
                                            className="inline-flex items-center text-sm text-white hover:text-brand-beige transition-colors font-medium group/link"
                                        >
                                            {t('events.btn.learn_more')}
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex items-center text-sm text-gray-500 font-medium">
                                            {evt.type === 'upcoming' ? 'Details Coming Soon' : 'Event Concluded'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
