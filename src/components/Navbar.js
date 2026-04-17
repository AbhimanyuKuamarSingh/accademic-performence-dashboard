// src/components/Navbar.js
import React from "react";

function Navbar() {
  const role = localStorage.getItem("role") || "Guest";
  const user = localStorage.getItem("user") || "User";

  const navStyle = {
    backgroundColor:
      role === "student" ? "#3a86ff" :
      role === "faculty" ? "#e74c3c" :
      "#1abc9c",
    color: "white",
    padding: "12px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    margin: 0,
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
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
      <h1 style={titleStyle}>
        Academic Performance Analysis Visualization System
      </h1>
      <div style={rightStyle}>
        <span>👤 {user}</span>
        <div style={avatarStyle}>
          {role === "student" ? "🎓" : role === "faculty" ? "👨‍🏫" : "⚙️"}
        </div>
      </div>
    </div>
  );
}

export default Navbar;