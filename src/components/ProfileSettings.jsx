import React, { useState } from "react";

const ProfileSettings = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
