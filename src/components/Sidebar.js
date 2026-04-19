import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useToast } from "../context/ToastContext";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();
  const { showToast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");
    showToast("Logged out successfully 👋", "info");
    setTimeout(() => navigate("/"), 800);
  };

  const getMenuItems = () => {
    if (role === "student") {
      return [
        { label: "Dashboard", path: "/student", icon: "🏠" },
        { label: "My Results", path: "/student", icon: "📊" },
        { label: "Performance", path: "/student", icon: "📈" },
        { label: "My Profile", path: "/profile", icon: "👤" },
      ];
    } else if (role === "faculty") {
      return [
        { label: "Dashboard", path: "/faculty", icon: "🏠" },
        { label: "Class Results", path: "/faculty", icon: "📋" },
        { label: "Analytics", path: "/faculty", icon: "📊" },
        { label: "My Profile", path: "/profile", icon: "👤" },
      ];
    } else if (role === "admin") {
      return [
        { label: "Dashboard", path: "/admin", icon: "🏠" },
        { label: "All Students", path: "/admin", icon: "👥" },
        { label: "Reports", path: "/admin", icon: "📊" },
        { label: "Settings", path: "/admin", icon: "⚙️" },
        { label: "My Profile", path: "/profile", icon: "👤" },
      ];
    }
    return [];
  };

  const isMobile = window.innerWidth <= 768;

  const sidebarBg = isDark ? "#0a0f1e" : "#0f172a";
  const logoBg = isDark ? "#060912" : "#0a0f1e";
  const userBg = isDark ? "#111827" : "#1e293b";
  const activeBg = isDark ? "#1e3a5f" : "#1e293b";

  const sidebarStyle = {
    width: "220px",
    backgroundColor: sidebarBg,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: isMobile ? "fixed" : "relative",
    left: isMobile ? (isOpen ? "0" : "-220px") : "0",
    top: 0,
    zIndex: 999,
    transition: "left 0.3s ease",
    flexShrink: 0,
  };

  const hamburgerStyle = {
    display: "block",
    position: "fixed",
    top: "14px",
    left: "14px",
    zIndex: 1000,
    backgroundColor: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const overlayStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 998,
  };

  return (
    <>
      {isMobile && (
        <button style={hamburgerStyle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      )}
      <div style={overlayStyle} onClick={() => setIsOpen(false)} />
      <div style={sidebarStyle}>

        {/* Logo */}
        <div style={{
          backgroundColor: logoBg,
          padding: "20px 16px",
          borderBottom: "0.5px solid #1e293b",
        }}>
          <p style={{
            color: "#f8fafc",
            fontSize: "15px",
            fontWeight: "bold",
            margin: 0,
          }}>
            APS
          </p>
          <p style={{
            color: "#64748b",
            fontSize: "11px",
            margin: "3px 0 0 0",
          }}>
            Academic Performance System
          </p>
        </div>

        {/* User info */}
        <div style={{
          backgroundColor: userBg,
          padding: "14px 16px",
          borderBottom: "0.5px solid #1e293b",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            flexShrink: 0,
          }}>
            {user ? user.charAt(0).toUpperCase() : "U"}
          </div>
          <div>
            <p style={{
              color: "#f1f5f9",
              fontSize: "13px",
              fontWeight: "bold",
              margin: 0,
              textTransform: "capitalize",
            }}>
              {user || "User"}
            </p>
            <p style={{
              color: "#3b82f6",
              fontSize: "11px",
              margin: "2px 0 0 0",
              textTransform: "capitalize",
            }}>
              ● {role || "Guest"}
            </p>
          </div>
        </div>

        {/* Menu */}
        <div style={{ padding: "10px 0", flex: 1 }}>
          <p style={{
            color: "#475569",
            fontSize: "10px",
            padding: "10px 16px 6px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}>
            Navigation
          </p>
          {getMenuItems().map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                  showToast(`Navigating to ${item.label}`, "info");
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "11px 16px",
                  cursor: "pointer",
                  fontSize: "13px",
                  color: isActive ? "#f1f5f9" : "#94a3b8",
                  backgroundColor: isActive ? activeBg : "transparent",
                  borderLeft: isActive
                    ? "3px solid #3b82f6"
                    : "3px solid transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#f1f5f9";
                    e.currentTarget.style.backgroundColor = activeBg;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <span style={{ fontSize: "14px" }}>{item.icon}</span>
                {item.label}
              </div>
            );
          })}
        </div>

        {/* Logout */}
        <div
          onClick={handleLogout}
          style={{
            padding: "14px 16px",
            cursor: "pointer",
            fontSize: "13px",
            color: "#ef4444",
            borderTop: "0.5px solid #1e293b",
            backgroundColor: logoBg,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ef4444";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = logoBg;
            e.currentTarget.style.color = "#ef4444";
          }}
        >
          🚪 Logout
        </div>
      </div>
    </>
  );
}

export default Sidebar;