// ============================================
// Unauthorized.js
// ============================================
// PURPOSE:
//   Shows an error page when a user tries to
//   access a page they do not have permission for
//
// EXAMPLE:
//   Student trying to access /admin URL
//   will see this page
// ============================================

import React from "react";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  // Get role to redirect to correct dashboard
  const role = localStorage.getItem("role");

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
    color: "#e74c3c",
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

  const roleBoxStyle = {
    backgroundColor: "#fdecea",
    border: "1px solid #f5c6cb",
    borderRadius: "8px",
    padding: "12px 20px",
    marginBottom: "28px",
    fontSize: "14px",
    color: "#c0392b",
  };

  const buttonRowStyle = {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const primaryButtonStyle = {
    backgroundColor: "#e74c3c",
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
    color: "#e74c3c",
    border: "2px solid #e74c3c",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>

        {/* Big 403 number */}
        <p style={errorCodeStyle}>403</p>

        {/* Lock emoji */}
        <p style={{ fontSize: "50px", margin: "0 0 16px 0" }}>🔒</p>

        {/* Title */}
        <h2 style={titleStyle}>Access Denied</h2>

        {/* Message */}
        <p style={messageStyle}>
          You do not have permission to access this page.
          Please contact your administrator if you think
          this is a mistake.
        </p>

        {/* Show current role */}
        {role && (
          <div style={roleBoxStyle}>
            ⚠️ You are logged in as <strong>{role}</strong>.
            This page is not accessible for your role.
          </div>
        )}

        {/* Buttons */}
        <div style={buttonRowStyle}>
          <button
            style={primaryButtonStyle}
            onClick={handleGoBack}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c0392b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e74c3c";
            }}
          >
            🏠 Go to My Dashboard
          </button>

          <button
            style={secondaryButtonStyle}
            onClick={() => {
              localStorage.removeItem("role");
              localStorage.removeItem("user");
              navigate("/");
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff5f5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            🔑 Login with Different Role
          </button>
        </div>

      </div>
    </div>
  );
}

export default Unauthorized;