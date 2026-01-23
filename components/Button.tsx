import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'white' | 'ghost';
    hasArrow?: boolean;
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    hasArrow = false, 
    className = '',
    onClick 
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer";
    
    const variants = {
        primary: "bg-brand-beige text-black hover:bg-[#dec195] border border-transparent",
        outline: "bg-transparent text-white border border-white/20 hover:bg-white/10",
        white: "bg-white text-black hover:bg-gray-100 border border-transparent",
        ghost: "bg-transparent text-white hover:text-brand-beige p-0"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
            {hasArrow && <ArrowUpRight className="ml-2 w-4 h-4" />}
        </button>
    );
};