import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar component
import Footer from './components/Footer'; // Footer component
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home'; // Ensure Home.jsx is in the pages folder
import Courses from './pages/Courses'; // Courses page component
import Login from './pages/Login'; // Login page component
import Signup from './pages/Signup';
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/Profile";
import ResetPassword from './pages/ResetPassword';
import ErrorPage from './components/ErrorPage';
const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', margin: '0', padding: '0' }}>
        {/* Navbar Section */}
        <Navbar />

        {/* Main Content Section */}
        <main style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '80vh' }}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            {<Route path="/courses" element={<Courses />} />}
            {<Route path="/login" element={<Login />} />}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile/update" element={<UpdateProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<ErrorPage errorType="404" />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
