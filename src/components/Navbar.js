import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useToast } from "../context/ToastContext";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role") || "Guest";
  const user = localStorage.getItem("user") || "User";
  const { isDark, toggleDark } = useTheme();
  const { showToast } = useToast();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navColor =
    role === "student" ? "#3b82f6" :
    role === "faculty" ? "#4f86c6" :
    "#10b981";

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");
    setDropdownOpen(false);
    showToast("Logged out successfully 👋", "info");
    setTimeout(() => navigate("/"), 800);
  };

  const getRoleLabel = () => {
    if (role === "student") return "🎓 Student";
    if (role === "faculty") return "👨‍🏫 Faculty";
    return "⚙️ Admin";
  };

  return (
    <>
      <div
        className="no-print"
        style={{
          backgroundColor: navColor,
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          position: "relative",
          zIndex: 100,
        }}
      >
        {/* Left - Single clean title */}
        <h1 style={{
          color: "white",
          fontSize: "15px",
          fontWeight: "bold",
          margin: 0,
          flex: 1,
          letterSpacing: "0.3px",
        }}>
          Academic Performance System
        </h1>

        {/* Right side */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>

          {/* Dark mode toggle */}
          <button
            onClick={() => {
              toggleDark();
              showToast(
                isDark
                  ? "Light mode activated ☀️"
                  : "Dark mode activated 🌙",
                "info"
              );
            }}
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              padding: "6px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* User avatar with dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "25px",
                padding: "5px 12px 5px 6px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.15)";
              }}
            >
              {/* Avatar */}
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "13px",
                fontWeight: "bold",
                flexShrink: 0,
              }}>
                {user.charAt(0).toUpperCase()}
              </div>

              {/* Username */}
              <span style={{
                color: "white",
                fontSize: "13px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}>
                {user}
              </span>

              {/* Arrow */}
              <span style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "10px",
                transform: dropdownOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.2s",
              }}>
                ▼
              </span>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                right: 0,
                backgroundColor: isDark ? "#1e293b" : "white",
                border: `0.5px solid ${isDark ? "#334155" : "#e2e8f0"}`,
                borderRadius: "12px",
                minWidth: "210px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                overflow: "hidden",
                zIndex: 9999,
              }}>

                {/* User info */}
                <div style={{
                  padding: "14px 16px",
                  borderBottom: `0.5px solid ${isDark ? "#334155" : "#f1f5f9"}`,
                  backgroundColor: isDark ? "#0f172a" : "#f8fafc",
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                    <div style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: navColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}>
                      {user.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: isDark ? "#f1f5f9" : "#1e293b",
                        margin: 0,
                        textTransform: "capitalize",
                      }}>
                        {user}
                      </p>
                      <p style={{
                        fontSize: "11px",
                        color: isDark ? "#94a3b8" : "#64748b",
                        margin: 0,
                      }}>
                        {getRoleLabel()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu items */}
                {[
                  {
                    icon: "👤",
                    label: "My Profile",
                    action: () => {
                      navigate("/profile");
                      setDropdownOpen(false);
                    },
                  },
                  {
                    icon: "🏠",
                    label: "Dashboard",
                    action: () => {
                      if (role === "student") navigate("/student");
                      else if (role === "faculty") navigate("/faculty");
                      else navigate("/admin");
                      setDropdownOpen(false);
                    },
                  },
                  {
                    icon: isDark ? "☀️" : "🌙",
                    label: isDark ? "Light Mode" : "Dark Mode",
                    action: () => {
                      toggleDark();
                      showToast(
                        isDark
                          ? "Light mode ☀️"
                          : "Dark mode 🌙",
                        "info"
                      );
                      setDropdownOpen(false);
                    },
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    onClick={item.action}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "11px 16px",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: isDark ? "#cbd5e0" : "#475569",
                      borderBottom: `0.5px solid ${isDark ? "#1e293b" : "#f8fafc"}`,
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        isDark ? "#0f172a" : "#f1f5f9";
                      e.currentTarget.style.color =
                        isDark ? "white" : "#1e293b";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "transparent";
                      e.currentTarget.style.color =
                        isDark ? "#cbd5e0" : "#475569";
                    }}
                  >
                    <span style={{ fontSize: "15px" }}>{item.icon}</span>
                    {item.label}
                  </div>
                ))}

                {/* Logout */}
                <div
                  onClick={handleLogout}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "11px 16px",
                    cursor: "pointer",
                    fontSize: "13px",
                    color: "#ef4444",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#fef2f2";
                    e.currentTarget.style.color = "#b91c1c";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#ef4444";
                  }}
                >
                  <span style={{ fontSize: "15px" }}>🚪</span>
                  Sign Out
                </div>

              </div>
            )}
          </div>

        </div>
      </div>

      {/* Close dropdown on outside click */}
      {dropdownOpen && (
        <div
          onClick={() => setDropdownOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 98,
          }}
        />
      )}
    </>
  );
}

export default Navbar;