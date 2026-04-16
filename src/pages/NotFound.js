// ============================================
// NotFound.js
// ============================================
// PURPOSE:
//   Shows a 404 error page when user visits
//   a URL that does not exist in the app
//
// EXAMPLE:
//   If user visits http://localhost:3000/xyz
//   This page will be shown
// ============================================

import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  // Get role to send user back to correct dashboard
  const role = localStorage.getItem("role");

  // Go back to correct page based on role
  const handleGoBack = () => {
    if (role === "student") navigate("/student");
    else if (role === "faculty") navigate("/faculty");
    else if (role === "admin") navigate("/admin");
    else navigate("/");
  };

  // ---- Styles ----
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "60px 40px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    maxWidth: "480px",
    width: "100%",
  };

  const errorCodeStyle = {
    fontSize: "100px",
    fontWeight: "bold",
    color: "#3a86ff",
    margin: "0 0 10px 0",
    lineHeight: 1,
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0 0 12px 0",
  };

  const messageStyle = {
    fontSize: "15px",
    color: "#7f8c8d",
    margin: "0 0 32px 0",
    lineHeight: 1.6,
  };

  const buttonRowStyle = {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const primaryButtonStyle = {
    backgroundColor: "#3a86ff",
    color: "white",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const secondaryButtonStyle = {
    backgroundColor: "white",
    color: "#3a86ff",
    border: "2px solid #3a86ff",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>

        {/* Big 404 number */}
        <p style={errorCodeStyle}>404</p>

        {/* Sad emoji */}
        <p style={{ fontSize: "50px", margin: "0 0 16px 0" }}>😕</p>

        {/* Title */}
        <h2 style={titleStyle}>Page Not Found</h2>

        {/* Message */}
        <p style={messageStyle}>
          Oops! The page you are looking for does not exist.
          It may have been moved or deleted.
        </p>

        {/* Buttons */}
        <div style={buttonRowStyle}>
          <button
            style={primaryButtonStyle}
            onClick={handleGoBack}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3a86ff";
            }}
          >
            🏠 Go to Dashboard
          </button>

          <button
            style={secondaryButtonStyle}
            onClick={() => navigate("/")}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#eff6ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            🔑 Go to Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default NotFound;