export const fetchCourses = async () => {
    try {
      const response = await fetch("https://api.example.com/courses");
      return await response.json();
    } catch (error) {
      console.error("Error fetching courses:", error);
      return [];
    }
  };
  