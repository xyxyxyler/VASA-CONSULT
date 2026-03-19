import { ConsultationEvent } from '../types';

export const mockEvents: ConsultationEvent[] = [
    {
        id: 'evt-sfso-2-3',
        title: 'Speak French Shine Online 2.3',
        description: 'Theme: From Language to Opportunity: Using French Skills to Unlock Global and African Opportunities. Special Guest: Pascal Gaglo (French Language Facilitator & Student Mobility Researcher).',
        date: '2026-03-27T18:00:00Z',
        type: 'upcoming',
        link: '/seminar',
        imageSrc: '/images/events/sfso-2.3.jpeg' // User to place sfso-2.3.jpg in public/images/events
    },
    {
        id: 'evt-sfso-2-2',
        title: 'Speak French Shine Online 2.2',
        description: 'Theme: Teaching, learning and thriving as a Multilingual: Using French beyond the classroom. Special Guest: Ashli Sambaluk (World Languages Coordinator based in Texas, USA).',
        date: '2026-02-28T18:00:00Z',
        type: 'recent',
        link: '/seminar',
        imageSrc: '/images/events/sfso-2.2.jpeg' // User to place sfso-2.2.jpg in public/images/events
    },
    {
        id: 'evt-sfso-2-1',
        title: 'Speak French Shine Online 2.1',
        description: 'Theme: How to self study French (and any language) successfully. Sub-theme: from confusion to clarity: building a simple, sustainable self-study system. Special Guest: Humberto Solórzano.',
        date: '2026-01-19T18:00:00Z',
        type: 'recent',
        link: '/seminar',
        imageSrc: '/images/events/sfso-2.1.jpeg' // User to place sfso-2.1.jpg in public/images/events
    }
];
