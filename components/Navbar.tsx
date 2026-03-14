import React, { useState } from 'react';
import { Asterisk, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { label: t('nav.services'), href: '/services' },
        { label: t('nav.partners'), href: '/partners' },
        { label: t('nav.whyUs'), href: '/why-us' },
        { label: t('nav.reviews'), href: '/reviews' },
        { label: t('nav.about'), href: '/about' },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarClasses = isScrolled
        ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-4 shadow-sm"
        : "bg-transparent py-6";

    const textColorClass = isScrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${navbarClasses}`}>
            <div className="flex items-center justify-between max-w-8xl mx-auto">
                {/* Logo */}
                <div className="z-50">
                    <Link to="/">
                        <img
                            src="/images/vasa-logo.svg"
                            alt="VASA Consultancy"
                            className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                        />
                        {/* Mobile Menu Logo (Always Dark/White for Contrast on Black Overlay) */}
                        <img
                            src="/images/vasa-logo.svg"
                            alt="VASA Consultancy"
                            className={`absolute top-0 left-0 h-10 md:h-12 w-auto object-contain transition-all duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-colors ${isScrolled ? "bg-black/5 border border-black/5" : "bg-black/40 border border-white/10 shadow-lg"}`}>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm ${isActive ? (isScrolled ? "text-brand-beige font-medium" : "text-white font-medium") : textColorClass} transition-colors flex items-center gap-1 group`}
                            >
                                {link.label}
                                {link.href === '/services' && (
                                    <span className="text-xs opacity-50 group-hover:-translate-y-0.5 transition-transform">↗</span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className={`flex items-center rounded-full p-1 border backdrop-blur-sm transition-colors ${isScrolled ? "bg-black/5 border-black/5" : "bg-white/10 border-white/10"}`}>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === 'en' ? "bg-white text-black shadow-sm" : (isScrolled ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white")}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === 'fr' ? "bg-white text-black shadow-sm" : (isScrolled ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white")}`}
                        >
                            FR
                        </button>
                    </div>

                    <Link to="/contact">
                        <Button variant={isScrolled ? "primary" : "white"} hasArrow>{t('nav.contact')}</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden z-50 p-2 transition-colors ${isScrolled && !isMenuOpen ? "text-black" : "text-white"}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-200">
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/10 mb-8">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${language === 'en' ? "bg-white text-black shadow-sm" : "text-gray-400"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${language === 'fr' ? "bg-white text-black shadow-sm" : "text-gray-400"}`}
                        >
                            FR
                        </button>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="text-2xl text-white font-medium hover:text-brand-beige transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="white" hasArrow className="mt-8">{t('nav.contact')}</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};