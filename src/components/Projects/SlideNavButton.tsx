import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export default function SlideNavButton({ direction, onClick }: SlideNavButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  const position = direction === 'left' ? 'left-2' : 'right-2';

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors`}
      aria-label={`${direction} slide`}
    >
      <Icon size={24} />
    </button>
  );
}