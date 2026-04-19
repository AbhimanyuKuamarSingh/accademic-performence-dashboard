import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useToast } from "../context/ToastContext";

function Navbar() {
  const role = localStorage.getItem("role") || "Guest";
  const user = localStorage.getItem("user") || "User";
  const { isDark, toggleDark } = useTheme();
  const { showToast } = useToast();

  const navColor =
    role === "student" ? "#3b82f6" :
    role === "faculty" ? "#ef4444" :
    "#10b981";

  const navStyle = {
    backgroundColor: navColor,
    padding: "12px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
  };

  const titleStyle = {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    margin: 0,
    flex: 1,
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const toggleStyle = {
    backgroundColor: "rgba(255,255,255,0.2)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "white",
    padding: "6px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
  };

  const userNameStyle = {
    color: "rgba(255,255,255,0.9)",
    fontSize: "12px",
  };

  const avatarStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
  };

  return (
    <div style={navStyle}>
      <h1 style={titleStyle}>Academic Performance System</h1>
      <div style={rightStyle}>
        <button
          style={toggleStyle}
          onClick={() => {
            toggleDark();
            showToast(
              isDark ? "Light mode activated ☀️" : "Dark mode activated 🌙",
              "info"
            );
          }}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
        <span style={userNameStyle}>{user}</span>
        <div style={avatarStyle}>
          {user.charAt(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;