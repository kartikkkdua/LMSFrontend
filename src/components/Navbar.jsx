import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">LMS</div>
      <div>
        <a href="/" className="px-3 hover:underline">Home</a>
        <a href="/courses" className="px-3 hover:underline">Courses</a>
        <a href="/login" className="px-3 hover:underline">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
