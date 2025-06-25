import React from 'react';
import pikabookLogo from '/img/pikabook-logo.png';

interface PikabookLogoProps {
  className?: string;
  alt?: string;
}

const PikabookLogo: React.FC<PikabookLogoProps> = ({
  className = '',
  alt = 'Pikabook Logo',
}) => {
  return <img src={pikabookLogo} alt={alt} className={className} />;
};

export default PikabookLogo;
