import { useState } from 'react';

const Carousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="text-4xl text-gray-600 hover:text-gray-800 p-4"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <div className="flex flex-col items-center p-4 min-h-[400px]">
        {testimonials[currentIndex].image && (
          <img
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 object-contain border-3"
            src={testimonials[currentIndex].image}
            alt={`Testimonial by ${testimonials[currentIndex].author}`}
          />
        )}
        <p className="text-lg md:text-xl italic mb-2">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="font-bold">{testimonials[currentIndex].author}</p>
        <p className="text-sm text-gray-500">{testimonials[currentIndex].source}</p>
      </div>
      <button
        className="text-4xl text-gray-600 hover:text-gray-800 p-4"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
