import React from 'react';

const Dashboard = () => {
  // Sample Data (can be replaced with dynamic data from your backend)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    completedCourses: 5,
    totalCourses: 10,
    upcomingEvents: 3,
    totalEvents: 5,
  };

  const progress = Math.round((user.completedCourses / user.totalCourses) * 100);
  const eventProgress = Math.round((user.upcomingEvents / user.totalEvents) * 100);

  const recentActivities = [
    { id: 1, text: 'Completed Course: React Basics', date: '2025-01-18' },
    { id: 2, text: 'Upcoming Event: Web Development Workshop', date: '2025-01-20' },
    { id: 3, text: 'Completed Course: JavaScript Essentials', date: '2025-01-16' },
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Welcome, {user.name}!</h1>

      {/* Profile Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold text-gray-600">Email:</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold text-gray-600">Completed Courses:</p>
          <p className="text-gray-500">{user.completedCourses} of {user.totalCourses}</p>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="space-y-6 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-700">Course Progress</span>
          <span className="text-xl font-bold text-blue-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-700">Event Progress</span>
          <span className="text-xl font-bold text-blue-600">{eventProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${eventProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">{activity.text}</p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Course Recommendations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Advanced React</h3>
            <p className="text-gray-700 mb-4">Take your React skills to the next level with advanced patterns and techniques.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">Enroll Now</button>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">JavaScript Mastery</h3>
            <p className="text-gray-700 mb-4">Master JavaScript with hands-on projects and deep understanding of concepts.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
