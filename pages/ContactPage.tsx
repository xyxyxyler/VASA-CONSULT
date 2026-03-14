import React, { useState } from 'react';
import { Asterisk, Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { BookingSection } from '../components/BookingSection';

export const ContactPage: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="pt-40 px-6 md:px-12 max-w-8xl mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">

                {/* Contact Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-brand-beige mb-6">
                        <Asterisk className="w-8 h-8 animate-spin-slow" />
                        <span className="text-xl font-bold text-white tracking-tight">Get in touch.</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-8">
                        Let's start a <br />
                        <span className="text-gray-500">conversation.</span>
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-12">
                        Whether you're looking to expand your business, learn a new language, or need interpretation services, we're here to help.
                    </p>

                    <div className="space-y-8 text-gray-300">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-brand-beige" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">{t('contact.info.name')}</h3>
                                <p>Accra, Ghana</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5 text-brand-beige" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Email</h3>
                                <p>vasaconsults@gmail.com</p>
                            </div>
                        </div>

                        <div className="pt-4 mt-4 text-gray-400 leading-relaxed max-w-sm">
                            <p>{t('contact.info.desc')}</p>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/10">
                        <h3 className="text-white font-medium mb-6">Connect with us</h3>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/vasaconsultancy/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-beige hover:border-brand-beige hover:text-black transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/vasaconsults?igsh=MTk5ZGdhZGM5cGdmOQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-beige hover:border-brand-beige hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex-1 lg:max-w-xl">
                    <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-beige transition-colors"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-beige transition-colors"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-beige transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <Button type="submit" variant="primary" hasArrow className="w-full justify-center">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
