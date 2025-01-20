import React from "react";
import { Progress } from "antd";

const CourseProgress = ({ courses }) => (
  <div>
    <h2>Course Progress</h2>
    {courses.map(course => (
      <div key={course.id}>
        <h3>{course.name}</h3>
        <Progress percent={course.progress} status="active" />
      </div>
    ))}
  </div>
);

export default CourseProgress;
