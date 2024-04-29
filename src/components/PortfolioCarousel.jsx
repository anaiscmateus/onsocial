import { useState } from "react";

const PortfolioCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="relative flex items-center justify-center bg-gray-100">
      {/* This div has the background image */}
      <div
        className="w-full h-[800px] bg-[#e4e2dd] bg-contain bg-no-repeat bg-center flex flex-col items-center justify-center p-4"
        style={{ backgroundImage: `url(${data[currentIndex].image})` }}
      >
        {/* Optionally, you could have content here overlaying the background image */}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-0 left-0 p-4 m-4 flex space-x-2">
        <button
          className="text-2xl text-gray-600 hover:text-gray-800 p-2 bg-white rounded-full shadow"
          onClick={goToPrevious}
        >
          &lt;
        </button>
        <button
          className="text-2xl text-gray-600 hover:text-gray-800 p-2 bg-white rounded-full shadow"
          onClick={goToNext}
        >
          &gt;
        </button>
      </div>

      {/* Page indicator */}
      <div className="absolute bottom-0 right-0 p-4 m-4">
        <span className="text-lg text-black bg-white rounded-full px-3 py-1 shadow">
          {currentIndex + 1}/{data.length}
        </span>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
