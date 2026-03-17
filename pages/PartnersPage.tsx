import React from 'react';
import { Work } from '../components/Work';
import { useSEO } from '../hooks/useSEO';

export const PartnersPage: React.FC = () => {
    useSEO(
        "Our Partners & Work | VASA CONSULT",
        "Discover the businesses and partners we've worked with at VASA CONSULT to deliver top-tier operational transformation and strategy."
    );

    return (
        <div className="pt-32 min-h-screen">
            <Work />
        </div>
    );
};
