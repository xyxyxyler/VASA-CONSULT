import React from 'react';
import { WhyUs } from '../components/WhyUs';
import { Stats } from '../components/Stats';
import { Benefits } from '../components/Benefits';
import { Process } from '../components/Process';

export const WhyUsPage: React.FC = () => {
    return (
        <div className="pt-32 min-h-screen">
            <WhyUs />
            <Stats />
            <Benefits />
            <Process />
        </div>
    );
};
