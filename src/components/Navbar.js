// src/components/Navbar.js
// This component shows the top navigation bar
// It changes color based on the user role

import React from "react";

function Navbar() {
  // Get role and username from localStorage
  const role = localStorage.getItem("role") || "Guest";
  const user = localStorage.getItem("user") || "User";

  // Navbar color changes based on role
  // Student = Blue, Faculty = Red, Admin = Teal
  const navStyle = {
    backgroundColor:
      role === "student" ? "#3a86ff" :
      role === "faculty" ? "#e74c3c" :
      "#1abc9c",
    color: "white",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
  };

  const titleStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    margin: 0,
    flex: 1,
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
  };

  const avatarStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  };

  return (
    <div style={navStyle}>
      {/* App title */}
      <h1 style={titleStyle}>
        📚 Academic Performance System
      </h1>

      {/* Right side - user info */}
      <div style={rightStyle}>
        <span style={{ fontSize: "12px" }}>👤 {user}</span>
        <div style={avatarStyle}>
          {role === "student" ? "🎓" :
           role === "faculty" ? "👨‍🏫" : "⚙️"}
        </div>
      </div>
    </div>
  );
}

export default Navbar;