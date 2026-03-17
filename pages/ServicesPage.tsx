import React from 'react';
import { Services } from '../components/Services';
import { useSEO } from '../hooks/useSEO';

export const ServicesPage: React.FC = () => {
    useSEO(
        "Our Consulting Services | VASA CONSULT Accra",
        "Explore our range of services including strategic operations, financial advisory, and CX transformation designed for businesses in Ghana."
    );

    return (
        <div className="pt-32 min-h-screen">
            <Services />
        </div>
    );
};
