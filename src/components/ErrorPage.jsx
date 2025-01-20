import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="text-center bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <h1 className="text-7xl font-extrabold text-red-500 mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          It seems like the page you're looking for has gone missing. Don't worry, we can help you get back on track!
        </p>

        {/* Illustration */}
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/200x200.png?text=404"
            alt="404 Error"
            className="mx-auto mb-4 animate-pulse"
          />
        </div>

        {/* Call to Action */}
        <div>
          <Link
            to="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
