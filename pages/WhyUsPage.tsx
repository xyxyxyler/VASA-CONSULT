import React from 'react';
import { WhyUs } from '../components/WhyUs';
import { Stats } from '../components/Stats';
import { Benefits } from '../components/Benefits';
import { Process } from '../components/Process';
import { useSEO } from '../hooks/useSEO';

export const WhyUsPage: React.FC = () => {
    useSEO(
        "Why Choose VASA CONSULT | Top Consulting Firm in Accra",
        "Find out why VASA CONSULT is the leading choice for business advisory, offering unmatched expertise, proven strategy, and tangible results."
    );

    return (
        <div className="pt-32 min-h-screen">
            <WhyUs />
            <Stats />
            <Benefits />
            <Process />
        </div>
    );
};
