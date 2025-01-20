import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Simulating data fetching for courses and events
  useEffect(() => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      setFeaturedCourses([
        { id: 1, title: 'Introduction to React', description: 'Learn the basics of React and start building your first app.', link: '/courses/react' },
        { id: 2, title: 'JavaScript for Beginners', description: 'Understand JavaScript concepts with practical examples and exercises.', link: '/courses/javascript' },
        { id: 3, title: 'Advanced CSS Techniques', description: 'Take your web design skills to the next level with advanced CSS concepts.', link: '/courses/css' },
      ]);
      setUpcomingEvents([
        { id: 1, title: 'Web Development Workshop', date: '2025-01-25', location: 'Online' },
        { id: 2, title: 'ReactJS Bootcamp', date: '2025-02-10', location: 'UPES Campus' },
        { id: 3, title: 'JavaScript Mastery Event', date: '2025-02-20', location: 'Online' },
      ]);
      setLoading(false); // Set loading to false after data is loaded
    }, 2000); // Simulating a delay for data fetching
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Display loading spinner while fetching data
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Your Learning Journey</h1>
          <p className="text-xl mb-6">Unlock your potential with top-notch courses and expert-led events.</p>
          <button className="bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-screen-lg mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-700">Explore our curated list of top courses designed to boost your skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {featuredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <a href={course.link} className="text-blue-600 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-lg mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-700">Stay updated with our exciting upcoming events.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.date} | {event.location}</p>
              <a href="#" className="text-blue-600 hover:underline">RSVP Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to start your learning journey?</h2>
        <p className="text-lg mb-6">Sign up today and access all our courses and events!</p>
        <button className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default Home;
