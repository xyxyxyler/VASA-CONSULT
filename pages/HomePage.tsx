import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PartnerLogos } from '../components/PartnerLogos';
import { WhyUs } from '../components/WhyUs';
import { Reviews } from '../components/Reviews';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { EventsWidget } from '../components/EventsWidget';

export const HomePage: React.FC = () => {
    return (
        <div className="pt-20">
            <Hero />
            <PartnerLogos />
            <Services />
            <EventsWidget />
            <Process />
            <WhyUs />
            <Reviews />
            <FAQ />
        </div>
    );
};
