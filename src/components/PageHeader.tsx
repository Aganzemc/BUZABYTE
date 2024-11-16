import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className = '' }: PageHeaderProps) {
  return (
    <div className={`relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-blue-100 px-4 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-white transform -skew-y-3 origin-bottom-right"></div>
    </div>
  );
}