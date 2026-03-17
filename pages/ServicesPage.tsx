import React from 'react';
import { Services } from '../components/Services';
import { useSEO } from '../hooks/useSEO';

export const ServicesPage: React.FC = () => {
    useSEO(
        "CX Transformation & Strategic Operations | VASA CONSULT",
        "VASA CONSULT delivers expert guidance in customer experience (CX) transformation, digital innovation, and strategic operations management to scale your business."
    );

    return (
        <div className="pt-32 min-h-screen">
            <Services />
        </div>
    );
};
