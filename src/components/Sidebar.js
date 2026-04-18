// src/components/Sidebar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");

  // Controls mobile sidebar open/close
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");
    navigate("/");
  };

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

  // Hamburger button shown only on mobile
  const hamburgerStyle = {
    display: "block",
    position: "fixed",
    top: "12px",
    left: "12px",
    zIndex: 1000,
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "8px 12px",
    fontSize: "18px",
    cursor: "pointer",
  };

  // Overlay shown behind sidebar on mobile
  const overlayStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 998,
  };

  const sidebarStyle = {
    width: "220px",
    backgroundColor: "#2c3e50",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // On mobile sidebar slides in and out
    position: window.innerWidth <= 768 ? "fixed" : "relative",
    left: window.innerWidth <= 768
      ? isOpen ? "0" : "-220px"
      : "0",
    top: 0,
    zIndex: 999,
    transition: "left 0.3s ease",
    flexShrink: 0,
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
    padding: "12px 16px",
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

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* Hamburger button - only on mobile */}
      {isMobile && (
        <button
          style={hamburgerStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      )}

      {/* Dark overlay behind sidebar on mobile */}
      <div
        style={overlayStyle}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div style={sidebarStyle}>

        {/* Logo */}
        <div style={logoStyle}>
          <p style={logoTextStyle}>📚 APS</p>
          <p style={logoSubStyle}>Academic Performance System</p>
        </div>

        {/* User Info */}
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
              onClick={() => {
                navigate(item.path);
                setIsOpen(false); // close sidebar on mobile after click
              }}
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

        {/* Logout */}
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
    </>
  );
}

export default Sidebar;