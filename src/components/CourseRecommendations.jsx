import React from "react";
import courses from "../data/courses";

const CourseRecommendations = ({ userInterests }) => {
  const recommendedCourses = courses.filter(course =>
    userInterests.some(interest => course.tags.includes(interest))
  );

  return (
    <div>
      <h2>Recommended Courses</h2>
      <ul>
        {recommendedCourses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRecommendations;
