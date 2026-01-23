import React from 'react';
import { Asterisk, ArrowUpRight, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="px-6 md:px-12 pt-24 pb-12 bg-black mt-12">
            <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <img
                                src="/images/logo-dark-mode.png"
                                alt="VASA Consultancy"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8">
                            {t('footer.ready').split('\n')[0]} <br />
                            <span className="text-gray-500">{t('footer.ready').split('\n')[1]}</span>
                        </h2>
                        <Link to="/contact">
                            <Button variant="primary" hasArrow className="h-14 px-8 text-lg">{t('nav.contact')}</Button>
                        </Link>
                        <div className="mt-8 text-gray-400 space-y-2">
                            <p>Tel: 0543409270</p>
                            <p>Email: vasaconsults@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-white font-medium mb-4">{t('footer.sitemap')}</h4>
                                <ul className="space-y-2 text-gray-500 text-sm">
                                    <li><Link to="/" className="hover:text-brand-beige transition-colors">Home</Link></li>
                                    <li><Link to="/services" className="hover:text-brand-beige transition-colors">{t('nav.services')}</Link></li>
                                    <li><Link to="/partners" className="hover:text-brand-beige transition-colors">{t('nav.partners')}</Link></li>
                                    <li><Link to="/about" className="hover:text-brand-beige transition-colors">{t('nav.about')}</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-4">{t('footer.socials')}</h4>
                                <ul className="space-y-2 text-gray-500 text-sm">
                                    <li><a href="https://www.linkedin.com/company/vasa-consults" target="_blank" rel="noreferrer" className="hover:text-brand-beige transition-colors">LinkedIn</a></li>
                                    <li><a href="https://www.instagram.com/vasaconsults" target="_blank" rel="noreferrer" className="hover:text-brand-beige transition-colors">Instagram</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-4">{t('footer.legal')}</h4>
                                <ul className="space-y-2 text-gray-500 text-sm">
                                    <li><a href="#" className="hover:text-brand-beige transition-colors">{t('footer.privacy')}</a></li>
                                    <li><a href="#" className="hover:text-brand-beige transition-colors">{t('footer.terms')}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">{t('footer.rights')}</p>
                    <div className="flex items-center gap-6">
                        <span className="text-gray-500 text-sm">Accra, Ghana</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};