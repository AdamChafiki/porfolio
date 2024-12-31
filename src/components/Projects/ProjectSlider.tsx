import { useState } from "react";
import { ProjectImage } from "./types";
import SlideIndicators from "./SlideIndicators";
import SlideNavButton from "./SlideNavButton";

interface ProjectSliderProps {
  images: ProjectImage[];
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full max-h-52 flex-shrink-0">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <SlideNavButton direction="left" onClick={goToPrev} />
      <SlideNavButton direction="right" onClick={goToNext} />

      {/* Slide Indicators */}
      <SlideIndicators
        total={images.length}
        current={currentIndex}
        onChange={setCurrentIndex}
      />
    </div>
  );
}
