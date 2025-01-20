import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "A passionate developer who loves to learn new technologies and build cool stuff.",
    profilePic: "https://via.placeholder.com/150", // Placeholder image
    bannerImage: "https://via.placeholder.com/1200x400", // Placeholder banner
    coursesCompleted: 25,
    totalPoints: 350,
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // You can save the updated user info here (e.g., via an API call)
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Banner Section */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        <img src={user.bannerImage} alt="Banner" className="w-full h-full object-cover rounded-xl" />
      </div>

      {/* Profile Info Section */}
      <div className="flex flex-col lg:flex-row mt-[-100px] lg:mt-[-120px] px-6">
        {/* Profile Picture */}
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Profile Details */}
        <div className="ml-0 lg:ml-6 flex flex-col items-start mt-4 lg:mt-0">
          <h1 className="text-3xl font-semibold">{user.name}</h1>
          <p className="text-gray-600 mt-2">{user.bio}</p>

          {isEditing ? (
            <div className="w-full mt-4">
              <textarea
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
                className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSave}
                className="mt-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="mt-4 flex space-x-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold">{user.coursesCompleted}</h3>
                <p className="text-gray-500">Courses Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{user.totalPoints}</h3>
                <p className="text-gray-500">Total Points</p>
              </div>
            </div>
          )}

          <button
            onClick={handleEditClick}
            className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 focus:outline-none"
          >
            <FaEdit className="mr-2" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
