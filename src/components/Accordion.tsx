'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({ 
  title, 
  children, 
  defaultOpen = true, 
  className = '' 
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center py-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {isOpen && (
          <button
            onClick={toggleAccordion}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-md transition-colors"
            aria-label="섹션 닫기"
          >
            <div className="w-4 h-4 relative">
              <div className="absolute inset-0 w-4 h-0.5 bg-gray-600 rotate-45 top-2" />
              <div className="absolute inset-0 w-4 h-0.5 bg-gray-600 -rotate-45 top-2" />
            </div>
          </button>
        )}
      </div>
      
      {isOpen && (
        <div className="overflow-hidden">
          <div className="pb-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}