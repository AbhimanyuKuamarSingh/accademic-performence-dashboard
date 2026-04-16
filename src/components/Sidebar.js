// src/components/Sidebar.js
// This component shows the sidebar navigation menu
// It shows different menu items based on the user's role
// It also handles logout

import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  // Get role and username from localStorage
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");

  // ---- Logout Function ----
  const handleLogout = () => {
    // Remove everything from localStorage
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");

    // Go back to login page
    navigate("/");
  };

  // ---- Menu Items based on Role ----
  // Each role gets different menu items
  const getMenuItems = () => {
    if (role === "student") {
      return [
        { label: "🏠 Dashboard", path: "/student" },
        { label: "📊 My Results", path: "/student" },
        { label: "📈 Performance", path: "/student" },
        { label: "👤 My Profile", path: "/profile" },
      ];
    } else if (role === "faculty") {
      return [
        { label: "🏠 Dashboard", path: "/faculty" },
        { label: "📋 Class Results", path: "/faculty" },
        { label: "📊 Analytics", path: "/faculty" },
        { label: "👤 My Profile", path: "/profile" },
      ];
    } else if (role === "admin") {
      return [
        { label: "🏠 Dashboard", path: "/admin" },
        { label: "👥 All Students", path: "/admin" },
        { label: "📊 Reports", path: "/admin" },
        { label: "⚙️ Settings", path: "/admin" },
        { label: "👤 My Profile", path: "/profile" },
      ];
    }
    return [];
  };

  // ---- Styles ----

  const sidebarStyle = {
    width: "220px",
    backgroundColor: "#2c3e50",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const logoStyle = {
    backgroundColor: "#1a252f",
    padding: "20px 16px",
    borderBottom: "1px solid #34495e",
  };

  const logoTextStyle = {
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    margin: 0,
  };

  const logoSubStyle = {
    color: "#95a5a6",
    fontSize: "11px",
    margin: "4px 0 0 0",
  };

  const userBoxStyle = {
    backgroundColor: "#34495e",
    padding: "14px 16px",
    borderBottom: "1px solid #4a6278",
  };

  const userNameStyle = {
    color: "white",
    fontSize: "13px",
    fontWeight: "bold",
    margin: 0,
    textTransform: "capitalize",
  };

  const userRoleStyle = {
    color: "#3498db",
    fontSize: "11px",
    margin: "3px 0 0 0",
    textTransform: "capitalize",
  };

  const menuSectionStyle = {
    padding: "10px 0",
    flex: 1,
  };

  const menuLabelStyle = {
    color: "#7f8c8d",
    fontSize: "10px",
    padding: "10px 16px 4px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const menuItemStyle = {
    color: "#bdc3c7",
    padding: "11px 16px",
    cursor: "pointer",
    fontSize: "13px",
    borderLeft: "3px solid transparent",
  };

  const logoutStyle = {
    color: "#e74c3c",
    padding: "14px 16px",
    cursor: "pointer",
    fontSize: "13px",
    borderTop: "1px solid #34495e",
    backgroundColor: "#1a252f",
  };

  return (
    <div style={sidebarStyle}>

      {/* Logo Section */}
      <div style={logoStyle}>
        <p style={logoTextStyle}>📚 APS</p>
        <p style={logoSubStyle}>Academic Performance System</p>
      </div>

      {/* User Info Section */}
      <div style={userBoxStyle}>
        <p style={userNameStyle}>👤 {user || "User"}</p>
        <p style={userRoleStyle}>● {role || "Guest"}</p>
      </div>

      {/* Menu Items */}
      <div style={menuSectionStyle}>
        <p style={menuLabelStyle}>Navigation</p>

        {getMenuItems().map((item, index) => (
          <div
            key={index}
            style={menuItemStyle}
            onClick={() => navigate(item.path)}
            // Hover effect using onMouseEnter and onMouseLeave
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.backgroundColor = "#34495e";
              e.currentTarget.style.borderLeft = "3px solid #3498db";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#bdc3c7";
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderLeft = "3px solid transparent";
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div
        style={logoutStyle}
        onClick={handleLogout}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#e74c3c";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#1a252f";
          e.currentTarget.style.color = "#e74c3c";
        }}
      >
        🚪 Logout
      </div>

    </div>
  );
}

export default Sidebar;