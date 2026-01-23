import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
    [key: string]: {
        en: string;
        fr: string;
    };
}

const translations: Translations = {
    // Nav
    'nav.services': { en: 'Our services', fr: 'Nos services' },
    'nav.partners': { en: 'Partners', fr: 'Partenaires' },
    'nav.whyUs': { en: 'Why us', fr: 'Pourquoi nous' },
    'nav.reviews': { en: 'Reviews', fr: 'Avis' },
    'nav.about': { en: 'About', fr: 'À propos' },
    'nav.contact': { en: 'Contact us', fr: 'Contactez-nous' },

    // Hero
    'hero.prefix': { en: 'Excellence in', fr: 'L\'excellence en' },
    'hero.headline': { en: 'Language Services, Education & Business Support', fr: 'Services Linguistiques, Éducation et Soutien aux Entreprises' },
    'hero.subtext': { en: 'Plan and host monthly virtual seminars for French learners across Africa and the diaspora.', fr: 'Planifiez et organisez des séminaires virtuels mensuels pour les apprenants de français à travers l\'Afrique et la diaspora.' },
    'hero.cta.services': { en: 'Our Services', fr: 'Nos Services' },
    'hero.cta.contact': { en: 'Contact Us', fr: 'Contactez-nous' },

    // BentoGrid / Services
    'bento.seminars.title': { en: 'Virtual Seminars', fr: 'Séminaires Virtuels' },
    'bento.seminars.desc': { en: 'Monthly seminars for French learners.', fr: 'Séminaires mensuels pour apprenants.' },
    'bento.education.title': { en: 'Language Education', fr: 'Éducation Linguistique' },
    'bento.education.desc': { en: 'Comprehensive French language online education.', fr: 'Formation complète en ligne pour la langue française.' },
    'bento.business.title': { en: 'Business Support', fr: 'Soutien aux Entreprises' },
    'bento.business.desc': { en: 'International business support and strategy.', fr: 'Soutien et stratégie pour les affaires internationales.' },
    'bento.liaison.title': { en: 'Cultural Liaison', fr: 'Liaison Culturelle' },
    'bento.liaison.desc': { en: 'Bridging cultural gaps through interpretation.', fr: 'Combler les fossés culturels grâce à l\'interprétation.' },
    'bento.branding.title': { en: 'Personal Branding', fr: 'Image de Marque' },
    'bento.branding.desc': { en: 'Tailored branding for language professionals.', fr: 'Marque sur mesure pour les professionnels.' },

    // Services Page
    'services.title': { en: 'Our Services', fr: 'Nos Services' },
    'services.subtitle': { en: 'Comprehensive solutions for your global needs.', fr: 'Des solutions complètes pour vos besoins mondiaux.' },

    // Partners (Work)
    'partners.title': { en: 'Partners & Clients', fr: 'Partenaires et Clients' },
    'partners.subtitle': { en: 'Trusted by leading organizations.', fr: 'Recommandé par des organisations de premier plan.' },

    // Why Us
    'whyus.title': { en: 'Why Choose VASA?', fr: 'Pourquoi Choisir VASA ?' },
    'whyus.subtitle': { en: 'We bridge the gap between cultures and business.', fr: 'Nous comblons le fossé entre les cultures et les affaires.' },
    'whyus.stat.experience': { en: 'Years Experience', fr: 'Années d\'expérience' },
    'whyus.stat.clients': { en: 'Happy Clients', fr: 'Clients Satisfaits' },
    'whyus.stat.languages': { en: 'Languages', fr: 'Langues' },
    'whyus.reason1.title': { en: 'Cultural Expertise', fr: 'Expertise Culturelle' },
    'whyus.reason1.desc': { en: 'Deep understanding of African and diaspora contexts.', fr: 'Compréhension approfondie des contextes africains et de la diaspora.' },
    'whyus.reason2.title': { en: 'Tailored Solutions', fr: 'Solutions Sur Mesure' },
    'whyus.reason2.desc': { en: 'Strategies designed specifically for your goals.', fr: 'Des stratégies conçues spécifiquement pour vos objectifs.' },

    // Reviews
    'reviews.title': { en: 'What our clients say', fr: 'Ce que disent nos clients' },

    // About Page
    'about.title': { en: 'About VASA.', fr: 'À Propos de VASA.' },
    'about.headline': { en: 'Connecting Africa \nand the Diaspora.', fr: 'Connecter l\'Afrique \net la Diaspora.' },
    'about.description': { en: 'VASA Consultancy is dedicated to bridging cultural and business gaps through language. We provide top-tier language services, online education, interpretation, and international business support to help individuals and organizations thrive in a globalized world.', fr: 'VASA Consultancy se consacre à combler les fossés culturels et commerciaux grâce à la langue. Nous fournissons des services linguistiques de premier plan, une éducation en ligne, de l\'interprétation et un soutien aux entreprises internationales pour aider les individus et les organisations à prospérer dans un monde globalisé.' },
    'about.mission.title': { en: 'Our Mission', fr: 'Notre Mission' },
    'about.mission.desc': { en: 'To empower businesses and individuals with the linguistic tools and cultural insights needed to succeed across borders.', fr: 'Autonomiser les entreprises et les individus avec les outils linguistiques et les connaissances culturelles nécessaires pour réussir au-delà des frontières.' },
    'about.vision.title': { en: 'Our Vision', fr: 'Notre Vision' },
    'about.vision.desc': { en: 'A connected world where language is no longer a barrier but a bridge to opportunity and growth.', fr: 'Un monde connecté où la langue n\'est plus une barrière mais un pont vers l\'opportunité et la croissance.' },

    // Contact Page
    'contact.title': { en: 'Get in touch.', fr: 'Contactez-nous.' },
    'contact.headline': { en: "Let's start a \nconversation.", fr: 'Commençons une \nconversation.' },
    'contact.description': { en: "Whether you're looking to expand your business, learn a new language, or need interpretation services, we're here to help.", fr: "Que vous cherchiez à développer votre entreprise, apprendre une nouvelle langue ou ayez besoin de services d'interprétation, nous sommes là pour vous aider." },
    'contact.form.name': { en: 'Name', fr: 'Nom' },
    'contact.form.email': { en: 'Email', fr: 'Email' },
    'contact.form.message': { en: 'Message', fr: 'Message' },
    'contact.form.submit': { en: 'Send Message', fr: 'Envoyer' },
    'contact.info.phone': { en: 'Phone', fr: 'Téléphone' },
    'contact.info.office': { en: 'Office', fr: 'Bureau' },
    'contact.follow': { en: 'Follow us', fr: 'Suivez-nous' },

    // Footer
    'footer.ready': { en: 'Ready to expand \nyour horizons?', fr: 'Prêt à élargir \nvos horizons ?' },
    'footer.sitemap': { en: 'Sitemap', fr: 'Plan du site' },
    'footer.socials': { en: 'Socials', fr: 'Réseaux sociaux' },
    'footer.legal': { en: 'Legal', fr: 'Légal' },
    'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
    'footer.terms': { en: 'Terms of Service', fr: 'Conditions d\'utilisation' },
    'footer.rights': { en: '© 2026 VASA Consultancy. All rights reserved.', fr: '© 2026 VASA Consultancy. Tous droits réservés.' },

    // Process
    'process.label': { en: 'Our Approach', fr: 'Notre Approche' },
    'process.title': { en: 'How we work', fr: 'Comment nous travaillons' },
    'process.subtitle': { en: 'A streamlined process designed for efficiency and results.', fr: 'Un processus simplifié conçu pour l\'efficacité et les résultats.' },
    'process.step1.title': { en: 'Consultation', fr: 'Consultation' },
    'process.step1.desc': { en: 'We start by understanding your specific needs, goals, and challenges.', fr: 'Nous commençons par comprendre vos besoins spécifiques, vos objectifs et vos défis.' },
    'process.step2.title': { en: 'Strategy', fr: 'Stratégie' },
    'process.step2.desc': { en: 'We develop a tailored plan to address your linguistic or business requirements.', fr: 'Nous élaborons un plan sur mesure pour répondre à vos exigences linguistiques ou commerciales.' },
    'process.step3.title': { en: 'Implementation', fr: 'Mise en œuvre' },
    'process.step3.desc': { en: 'Our experts execute the plan with precision, keeping you informed at every step.', fr: 'Nos experts exécutent le plan avec précision, en vous tenant informé à chaque étape.' },
    'process.step4.title': { en: 'Growth', fr: 'Croissance' },
    'process.step4.desc': { en: 'We review the results and ensure sustainable value for your personal or business growth.', fr: 'Nous examinons les résultats et assurons une valeur durable pour votre croissance personnelle ou professionnelle.' },

    // FAQ
    'faq.title': { en: 'Frequently Asked Questions', fr: 'Questions Fréquemment Posées' },
    'faq.q1': { en: 'How are the virtual seminars conducted?', fr: 'Comment se déroulent les séminaires virtuels ?' },
    'faq.a1': { en: 'Our seminars are held via Zoom/Google Meet on a monthly basis. They are interactive sessions led by native speakers focusing on various cultural and linguistic topics.', fr: 'Nos séminaires ont lieu via Zoom/Google Meet sur une base mensuelle. Ce sont des sessions interactives dirigées par des locuteurs natifs se concentrant sur divers sujets culturels et linguistiques.' },
    'faq.q2': { en: 'Do you offer certified translations?', fr: 'Proposez-vous des traductions certifiées ?' },
    'faq.a2': { en: 'Yes, we provide professional translation services for legal, medical, and business documents suitable for official use.', fr: 'Oui, nous fournissons des services de traduction professionnelle pour des documents juridiques, médicaux et commerciaux adaptés à un usage officiel.' },
    'faq.q3': { en: 'Can you help my business enter the Ghanaian market?', fr: 'Pouvez-vous aider mon entreprise à entrer sur le marché ghanéen ?' },
    'faq.a3': { en: 'Absolutely. We offer comprehensive business support including market research, cultural liaison, and registration assistance.', fr: 'Absolument. Nous offrons un soutien complet aux entreprises, y compris des études de marché, une liaison culturelle et une aide à l\'enregistrement.' },
    'faq.q4': { en: 'What levels of French do you teach?', fr: 'Quels niveaux de français enseignez-vous ?' },
    'faq.a4': { en: 'We cater to all levels from absolute beginners (A1) to advanced speakers (C2), tailoring our curriculum to your specific goals.', fr: 'Nous nous adressons à tous les niveaux, des débutants absolus (A1) aux locuteurs avancés (C2), en adaptant notre programme à vos objectifs spécifiques.' },

    // Values
    'values.title': { en: 'Our Core Values', fr: 'Nos Valeurs Fondamentales' },
    'values.excellence.title': { en: 'Excellence', fr: 'Excellence' },
    'values.excellence.desc': { en: 'We strive for the highest standards in every service we provide, ensuring top-tier quality.', fr: 'Nous visons les normes les plus élevées dans chaque service que nous fournissons, garantissant une qualité de premier ordre.' },
    'values.integrity.title': { en: 'Integrity', fr: 'Intégrité' },
    'values.integrity.desc': { en: 'We conduct our business with honesty, transparency, and a strong ethical foundation.', fr: 'Nous menons nos activités avec honnêteté, transparence et une base éthique solide.' },
    'values.culture.title': { en: 'Cultural Intelligence', fr: 'Intelligence Culturelle' },
    'values.culture.desc': { en: 'We respect and bridge cultural nuances to foster true understanding and connection.', fr: 'Nous respectons et comblons les nuances culturelles pour favoriser une véritable compréhension et connexion.' },
    'values.innovation.title': { en: 'Innovation', fr: 'Innovation' },
    'values.innovation.desc': { en: 'We act as specialized architects, designing creative solutions for complex challenges.', fr: 'Nous agissons comme des architectes spécialisés, concevant des solutions créatives pour des défis complexes.' },

    // Team
    'team.label': { en: 'Leadership', fr: 'Leadership' },
    'team.founder.name': { en: 'Veronica Sasu', fr: 'Veronica Sasu' },
    'team.founder.role': { en: 'Founder & Lead Consultant', fr: 'Fondatrice et Consultante Principale' },
    'team.founder.bio': { en: 'With a passion for languages and a deep understanding of cross-border dynamics, Veronica founded VASA Consultancy to help individuals and businesses unlock their potential through effective communication and cultural strategy.', fr: 'Passionnée par les langues et possédant une compréhension approfondie des dynamiques transfrontalières, Veronica a fondé VASA Consultancy pour aider les individus et les entreprises à libérer leur potentiel grâce à une communication efficace et une stratégie culturelle.' },

    // Booking
    'booking.label': { en: 'Schedule a Meeting', fr: 'Planifier une réunion' },
    'booking.title': { en: 'Book a Consultation', fr: 'Réserver une Consultation' },
    'booking.desc': { en: 'Select a time that works for you to discuss your language or business needs.', fr: 'Choisissez un moment qui vous convient pour discuter de vos besoins linguistiques ou commerciaux.' },

    // Stats
    'stats.years': { en: 'Years Exp.', fr: 'Années d\'Exp.' },
    'stats.clients': { en: 'Clients', fr: 'Clients' },
    'stats.languages': { en: 'Languages', fr: 'Langues' },
    'stats.seminars': { en: 'Seminars', fr: 'Séminaires' },

    // Benefits
    'benefits.title': { en: 'The VASA Advantage', fr: 'L\'Avantage VASA' },
    'benefits.subtitle': { en: 'Why leading organizations and ambitious individuals choose us for their growth.', fr: 'Pourquoi les grandes organisations et les individus ambitieux nous choisissent pour leur croissance.' },
    'benefits.tailored.title': { en: 'Tailored Strategies', fr: 'Stratégies Sur Mesure' },
    'benefits.tailored.desc': { en: 'We customize every solution to fit your specific goals and market context.', fr: 'Nous personnalisons chaque solution pour répondre à vos objectifs spécifiques et au contexte du marché.' },
    'benefits.network.title': { en: 'Extensive Network', fr: 'Réseau Étendu' },
    'benefits.network.desc': { en: 'Access our broad network of professionals across Africa and the Diaspora.', fr: 'Accédez à notre vaste réseau de professionnels à travers l\'Afrique et la diaspora.' },
    'benefits.global.title': { en: 'Global Perspective', fr: 'Perspective Mondiale' },
    'benefits.global.desc': { en: 'We bring international standards and insights to local executions.', fr: 'Nous apportons des normes et des perspectives internationales aux exécutions locales.' },
    'benefits.fast.title': { en: 'Rapid Execution', fr: 'Exécution Rapide' },
    'benefits.fast.desc': { en: 'We value your time and deliver high-quality results efficiently.', fr: 'Nous valorisons votre temps et fournissons des résultats de haute qualité efficacement.' },
    'benefits.reliable.title': { en: 'Reliable Support', fr: 'Soutien Fiable' },
    'benefits.reliable.desc': { en: 'Count on us as your dedicated partner through every step of the journey.', fr: 'Comptez sur nous comme votre partenaire dédié à chaque étape du voyage.' },
    'benefits.expert.title': { en: 'Certified Experts', fr: 'Experts Certifiés' },
    'benefits.expert.desc': { en: 'Our team comprises certified linguists and experienced business consultants.', fr: 'Notre équipe est composée de linguistes certifiés et de consultants commerciaux expérimentés.' },

    // Sliders
    'hero.slide1.title': { en: 'Language & Business', fr: 'Langue et Affaires' },
    'hero.slide2.title': { en: 'Cultural & Global', fr: 'Culturel et Mondial' },
    'hero.slide3.title': { en: 'Education & Growth', fr: 'Éducation et Croissance' },
    'hero.slide1.subtext': { en: 'Language services, online education, interpretation, and international business support.', fr: 'Services linguistiques, éducation en ligne, interprétation et soutien aux entreprises internationales.' },
    'hero.slide2.subtext': { en: 'Connecting Africa and the diaspora through language, culture, and strategic partnerships.', fr: 'Connecter l\'Afrique et la diaspora à travers la langue, la culture et des partenariats stratégiques.' },
    'hero.slide3.subtext': { en: 'Empowering you with the skills and strategies needed to succeed in a globalized world.', fr: 'Vous donner les compétences et les stratégies nécessaires pour réussir dans un monde globalisé.' },

    'bento.welcome.title1': { en: 'Welcome to VASA Consults', fr: 'Bienvenue chez VASA Consults' },
    'bento.welcome.title2': { en: 'Your Gateway to Africa', fr: 'Votre Porte d\'entrée vers l\'Afrique' },

    'bento.ready.title1': { en: 'Ready to expand?', fr: 'Prêt à vous développer ?' },
    'bento.ready.title2': { en: 'Join our seminars', fr: 'Rejoignez nos séminaires' },

    'bento.expertise.title': { en: 'Core Expertise', fr: 'Expertise Principale' },
    'bento.expertise.edu': { en: 'Language Education', fr: 'Éducation Linguistique' },
    'bento.expertise.biz': { en: 'Business Support', fr: 'Soutien aux Entreprises' },
    'bento.expertise.liaison': { en: 'Cultural Liaison', fr: 'Liaison Culturelle' },

    'bento.expertise.legal': { en: 'Legal Translation', fr: 'Traduction Juridique' },
    'bento.expertise.medical': { en: 'Medical Interpretation', fr: 'Interprétation Médicale' },
    'bento.expertise.recruit': { en: 'Bilingual Recruitment', fr: 'Recrutement Bilingue' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
