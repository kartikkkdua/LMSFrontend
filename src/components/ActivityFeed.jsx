import React from "react";

const ActivityFeed = ({ activities }) => (
  <div>
    <h2>Activity Feed</h2>
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
