import React from 'react';

interface SlideIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function SlideIndicators({ total, current, onChange }: SlideIndicatorsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === current ? 'bg-blue-500 w-4' : 'bg-blue-200'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}