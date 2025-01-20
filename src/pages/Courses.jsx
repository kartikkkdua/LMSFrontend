import React from 'react';

// Sample courses data
const coursesData = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React and start building your first app.',
    imageUrl: 'https://via.placeholder.com/300x200?text=React',
    link: '/courses/react',
  },
  {
    id: 2,
    title: 'JavaScript for Beginners',
    description: 'Understand JavaScript concepts with practical examples and exercises.',
    imageUrl: 'https://via.placeholder.com/300x200?text=JavaScript',
    link: '/courses/javascript',
  },
  {
    id: 3,
    title: 'Advanced CSS Techniques',
    description: 'Take your web design skills to the next level with advanced CSS concepts.',
    imageUrl: 'https://via.placeholder.com/300x200?text=CSS',
    link: '/courses/css',
  },
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Courses Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Explore Our Courses</h1>
          <p className="text-lg mb-6">Discover the best online courses to enhance your skills.</p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="max-w-screen-lg mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Top Courses</h2>
          <p className="text-lg text-gray-700">Handpicked courses designed for all skill levels.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <a
                href={course.link}
                className="inline-block text-blue-600 hover:underline font-semibold transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-6">Join our community and start your journey today!</p>
        <a
          href="/signup"
          className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Sign Up Now
        </a>
      </section>

    </div>
  );
};

export default Courses;
