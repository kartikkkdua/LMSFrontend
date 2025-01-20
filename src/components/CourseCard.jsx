import React from 'react';

const CourseCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button 
        onClick={() => alert('Enrolling in course...')} 
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
