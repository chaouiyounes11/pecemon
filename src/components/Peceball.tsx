import React from 'react';

interface PeceballProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

const Peceball: React.FC<PeceballProps> = ({
  size = 'md',
  className = '',
  onClick,
}) => {
  // Size mapping
  const sizeClasses = {
    xxs: 'w-6 h-6',
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  };

  // Button attributes if onClick is provided
  const buttonProps = onClick
    ? {
        onClick,
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        },
      }
    : {};

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className} cursor-pointer transition-transform hover:scale-105`}
      {...buttonProps}
    >
      {/* Main square container with black border */}
      <div className="absolute inset-0 rounded-full border-[1px] border-black overflow-hidden">
        {/* Top half - red */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-500"></div>

        {/* Bottom half - white */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>

        {/* Middle divider line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black transform -translate-y-1/2"></div>

        {/* Center button container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-md border-[1px] border-black bg-white"></div>

          {/* Inner button */}
          <div className="absolute inset-[15%] rounded-sm bg-white border-1 border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Peceball;
