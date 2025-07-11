import React from 'react';

interface ImageWithPaddingProps {
  src: string;
  alt: string;
  className?: string;
  padding?: number; // crop amount in pixels, defaults to 0
  offsetX?: number; // horizontal offset in pixels, defaults to 0
  offsetY?: number; // vertical offset in pixels, defaults to 0
}

const ImageWithPadding: React.FC<ImageWithPaddingProps> = ({ 
  src, 
  alt, 
  className = "", 
  padding = 0,
  offsetX = 0,
  offsetY = 0
}) => {
  // Calculate scale factor to zoom the image
  // The more padding (crop), the more we need to scale up to fill the container
  const scale = padding > 0 ? 1 + (padding * 2) / 100 : 1; // Adjust divisor to control zoom intensity
  
  // Calculate position based on offsets
  const positionX = offsetX !== 0 ? `${50 + offsetX}%` : '50%';
  const positionY = offsetY !== 0 ? `${50 + offsetY}%` : '50%';
  
  return (
    <div 
      className={`w-full h-full overflow-hidden hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: `scale(${scale})`,
          objectPosition: `${positionX} ${positionY}`
        }}
      />
    </div>
  );
};

export default ImageWithPadding; 