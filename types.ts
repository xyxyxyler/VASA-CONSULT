import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface NavLink {
    label: string;
    href: string;
}

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
}

export interface BentoCardProps {
    title?: string;
    subtitle?: string;
    variant: 'beige' | 'dark' | 'light' | 'image' | 'dark-outline';
    className?: string;
    icon?: LucideIcon;
    imageSrc?: string;
    customContent?: React.ReactNode;
}

export interface ConsultationEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    type: 'upcoming' | 'recent';
    imageSrc?: string;
    link?: string;
}