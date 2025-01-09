import React, { useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Projects{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-gray-500 max-w-md text-center mb-8">
        Crafting Spaces, Building Legacies—Explore <br />
        Our Portfolio
      </p>

      {/* Slider Navigation */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
          onClick={handlePrev}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded"
          aria-label="Next Project"
          onClick={handleNext}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Slider Content */}
      <div className="w-full ">
        {projectsData.length > 0 && (
          <div className="flex flex-col items-center">
            <img
              src={projectsData[currentIndex].image}
              alt={projectsData[currentIndex].title || 'Project Image'}
              className="w-1/3 max-w-lg h-1/3 rounded-lg mb-4"
            />
           <div className='bg-gray-400 px-5 py-4  rounded'>
           <h2 className="text-xl font-semibold mb-2">
              {projectsData[currentIndex].title || 'Project Title'}
            </h2>
            <p className="text-white text-center">
              {projectsData[currentIndex].price || 'Project Description'}
            </p>
            <p className="text-white text-center">
              {projectsData[currentIndex].location || 'Project Description'}
            </p>
           </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
