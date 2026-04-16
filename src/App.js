// ============================================
// App.js
// ============================================
// PURPOSE:
//   Main file of the app
//   Sets up all routes using React Router
//   ProtectedRoute checks if user is logged in
//   before allowing access to dashboards
// ============================================

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

// ---- ProtectedRoute Component ----
// This component wraps protected pages
// If user is not logged in — redirect to login
// If user has wrong role — redirect to unauthorized page
function ProtectedRoute({ children, allowedRole }) {
  // Get role saved in localStorage after login
  const role = localStorage.getItem("role");

  // No role means user is not logged in
  if (!role) {
    return <Navigate to="/" replace />;
  }

  // Role does not match — show unauthorized page
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Everything is fine — show the page
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public route — anyone can see login */}
        <Route path="/" element={<Login />} />

        {/* Student dashboard — only for student role */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* Faculty dashboard — only for faculty role */}
        <Route
          path="/faculty"
          element={
            <ProtectedRoute allowedRole="faculty">
              <FacultyDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin dashboard — only for admin role */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Profile page — all logged in roles can access */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Unauthorized page — shown when wrong role */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* 404 page — shown for any unknown URL */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;