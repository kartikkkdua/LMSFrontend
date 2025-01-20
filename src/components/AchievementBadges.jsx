import React from "react";

const AchievementBadges = ({ badges }) => (
  <div>
    <h2>Achievements</h2>
    <div className="flex space-x-4">
      {badges.map((badge, index) => (
        <div key={index} className="p-4 border rounded">
          <img src={badge.image} alt={badge.name} width="50" />
          <p>{badge.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AchievementBadges;
