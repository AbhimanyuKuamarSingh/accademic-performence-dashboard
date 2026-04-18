// src/components/Navbar.js
import React, { useState } from "react";

function Navbar() {
  const role = localStorage.getItem("role") || "Guest";
  const user = localStorage.getItem("user") || "User";
  const [menuOpen, setMenuOpen] = useState(false);

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
    cursor: "pointer",
  };

  return (
    <div style={navStyle}>
      <h1 style={titleStyle}>
        📚 Academic Performance System
      </h1>
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