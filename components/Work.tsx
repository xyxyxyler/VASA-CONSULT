import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Work: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="partners" className="py-24 px-6 md:px-12 bg-zinc-900 border-y border-white/5">
            <div className="max-w-8xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">{t('partners.title')}</h2>
                        <p className="text-lg text-gray-400 max-w-xl">{t('partners.subtitle')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Partner 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="The Skills Atelier"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="flex justify-between items-start border-b border-black/10 pb-6">
                            <div>
                                <h3 className="text-2xl font-medium mb-1">The Skills Atelier</h3>
                                <p className="text-gray-500">Recruitment of bilinguals</p>
                            </div>
                        </div>
                    </div>

                    {/* Partner 2 */}
                    <div className="group cursor-pointer md:mt-24">
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Aircraft Incident and Accident Bureau"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-6 right-6 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex justify-between items-start border-b border-black/10 pb-6">
                            <div>
                                <h3 className="text-2xl font-medium mb-1">Aircraft Incident Bureau</h3>
                                <p className="text-gray-500">High level conference interpretation (Togo & Benin)</p>
                            </div>
                        </div>
                    </div>

                    {/* Partner 3 */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Eduwatch"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-6 right-6 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex justify-between items-start border-b border-black/10 pb-6">
                            <div>
                                <h3 className="text-2xl font-medium mb-1">Eduwatch</h3>
                                <p className="text-gray-500">West Africa civil society conference (Ghana)</p>
                            </div>
                        </div>
                    </div>

                    {/* Partner 4 */}
                    <div className="group cursor-pointer md:mt-24">
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="3treegroup"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-6 right-6 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex justify-between items-start border-b border-black/10 pb-6">
                            <div>
                                <h3 className="text-2xl font-medium mb-1">3treegroup</h3>
                                <p className="text-gray-500">Bilingual recruitment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};