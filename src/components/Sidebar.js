import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

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
  const menuItemColor = isDark ? "#cbd5e0" : "#94a3b8";

  const getRoleColor = () => {
    if (role === "student") return "#3b82f6";
    if (role === "faculty") return "#ef4444";
    return "#10b981";
  };

  return (
    <>
      {/* Hamburger button - mobile only */}
      {isMobile && (
        <button
          className="no-print"
          onClick={() => setIsOpen(!isOpen)}
          style={{
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
          }}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 998,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className="no-print"
        style={{
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
        }}
      >

        {/* Logo Section */}
        <div style={{
          backgroundColor: logoBg,
          padding: "20px 16px",
          borderBottom: "0.5px solid #1e293b",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <div style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              backgroundColor: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              flexShrink: 0,
            }}>
              📚
            </div>
            <div>
              <p style={{
                color: "#f8fafc",
                fontSize: "13px",
                fontWeight: "bold",
                margin: 0,
              }}>
                APS
              </p>
              <p style={{
                color: "#64748b",
                fontSize: "10px",
                margin: "1px 0 0 0",
              }}>
                Academic Performance
              </p>
            </div>
          </div>
        </div>

        {/* User Info Section */}
        <div style={{
          backgroundColor: userBg,
          padding: "14px 16px",
          borderBottom: "0.5px solid #1e293b",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            {/* Avatar */}
            <div style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: getRoleColor(),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "15px",
              fontWeight: "bold",
              flexShrink: 0,
              border: "2px solid rgba(255,255,255,0.1)",
            }}>
              {user ? user.charAt(0).toUpperCase() : "U"}
            </div>

            <div style={{ overflow: "hidden" }}>
              <p style={{
                color: "#f1f5f9",
                fontSize: "13px",
                fontWeight: "600",
                margin: 0,
                textTransform: "capitalize",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
                {user || "User"}
              </p>
              <p style={{
                color: getRoleColor(),
                fontSize: "11px",
                margin: "2px 0 0 0",
                textTransform: "capitalize",
              }}>
                ● {role || "Guest"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div style={{ padding: "12px 0", flex: 1 }}>
          <p style={{
            color: "#475569",
            fontSize: "10px",
            padding: "0 16px 8px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: "600",
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
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "11px 16px",
                  cursor: "pointer",
                  fontSize: "13px",
                  color: isActive ? "#f1f5f9" : menuItemColor,
                  backgroundColor: isActive ? activeBg : "transparent",
                  borderLeft: isActive
                    ? `3px solid ${getRoleColor()}`
                    : "3px solid transparent",
                  transition: "all 0.15s",
                  marginBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#f1f5f9";
                    e.currentTarget.style.backgroundColor = activeBg;
                    e.currentTarget.style.borderLeft =
                      `3px solid ${getRoleColor()}50`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = menuItemColor;
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderLeft =
                      "3px solid transparent";
                  }
                }}
              >
                <span style={{ fontSize: "15px" }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Bottom Info - version and college name */}
        <div style={{
          padding: "14px 16px",
          borderTop: "0.5px solid #1e293b",
          backgroundColor: logoBg,
        }}>
          <p style={{
            color: "#475569",
            fontSize: "10px",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.6,
          }}>
            LNCT Campus Bhopal
            <br />
            MCA Final Year Project 2026
          </p>
        </div>

      </div>
    </>
  );
}

export default Sidebar;