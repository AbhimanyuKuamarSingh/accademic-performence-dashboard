// src/components/Navbar.js
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useToast } from "../context/ToastContext";

function Navbar() {
  const role = localStorage.getItem("role") || "Guest";
  const user = localStorage.getItem("user") || "User";
  const { isDark, toggleDark } = useTheme();
  const { showToast } = useToast();

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
    gap: "12px",
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

  const toggleStyle = {
    backgroundColor: "rgba(255,255,255,0.2)",
    border: "1px solid rgba(255,255,255,0.4)",
    color: "white",
    padding: "6px 12px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  return (
    <div style={navStyle}>
      <h1 style={titleStyle}>
        📚 Academic Performance System
      </h1>
      <div style={rightStyle}>
        <button
          style={toggleStyle}
          onClick={() => {
            toggleDark();
            showToast(
              isDark
                ? "Light mode activated ☀️"
                : "Dark mode activated 🌙",
              "info"
            );
          }}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
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