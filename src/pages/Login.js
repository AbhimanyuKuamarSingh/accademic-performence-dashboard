import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleLogin = () => {
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields.");
      showToast("Please fill in all fields", "error");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      showToast("Password too short", "warning");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("role", role);
      localStorage.setItem("user", username);
      showToast(`Welcome ${username}! Login successful 🎉`, "success");
      setTimeout(() => {
        if (role === "student") navigate("/student");
        else if (role === "faculty") navigate("/faculty");
        else navigate("/admin");
      }, 800);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  // Role data
  const roles = [
    {
      id: "student",
      label: "Student",
      icon: "🎓",
      desc: "View your results",
      color: "#3b82f6",
      lightColor: "#eff6ff",
      borderColor: "#bfdbfe",
    },
    {
      id: "faculty",
      label: "Faculty",
      icon: "👨‍🏫",
      desc: "Manage your classes",
      color: "#ef4444",
      lightColor: "#fef2f2",
      borderColor: "#fecaca",
    },
    {
      id: "admin",
      label: "Admin",
      icon: "⚙️",
      desc: "System management",
      color: "#10b981",
      lightColor: "#f0fdf4",
      borderColor: "#bbf7d0",
    },
  ];

  const selectedRole = roles.find((r) => r.id === role);

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#f1f5f9",
      fontFamily: "Arial, sans-serif",
    }}>

      {/* Left Panel - Decorative */}
      <div style={{
        flex: 1,
        background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        color: "white",
      }}
        className="login-left-panel"
      >
        {/* Logo */}
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
          marginBottom: "24px",
          border: "2px solid rgba(255,255,255,0.3)",
        }}>
          📚
        </div>

        <h1 style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: "0 0 12px",
          textAlign: "center",
        }}>
          Academic Performance
        </h1>

        <p style={{
          fontSize: "15px",
          opacity: 0.85,
          textAlign: "center",
          margin: "0 0 40px",
          lineHeight: 1.6,
          maxWidth: "320px",
        }}>
          Analysis and Visualization System for Students, Faculty and Admins
        </p>

        {/* Feature list */}
        {[
          { icon: "📊", text: "Track performance with charts" },
          { icon: "🌙", text: "Dark mode support" },
          { icon: "📱", text: "Fully responsive design" },
          { icon: "🖨️", text: "Download PDF reports" },
          { icon: "🔒", text: "Role based access control" },
        ].map((feature, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "14px",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "12px 20px",
              borderRadius: "10px",
              width: "100%",
              maxWidth: "320px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span style={{ fontSize: "18px" }}>{feature.icon}</span>
            <span style={{ fontSize: "13px", opacity: 0.95 }}>{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Right Panel - Login Form */}
      <div style={{
        width: "480px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "white",
        overflowY: "auto",
      }}>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1e293b",
            margin: "0 0 6px",
          }}>
            Welcome back! 👋
          </h2>
          <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
            Sign in to access your dashboard
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            backgroundColor: "#fee2e2",
            color: "#b91c1c",
            padding: "12px 16px",
            borderRadius: "10px",
            fontSize: "13px",
            marginBottom: "20px",
            borderLeft: "4px solid #ef4444",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Role Selection Cards */}
        <div style={{ marginBottom: "24px" }}>
          <p style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#475569",
            marginBottom: "10px",
          }}>
            Select your role
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            {roles.map((r) => (
              <div
                key={r.id}
                onClick={() => setRole(r.id)}
                style={{
                  flex: 1,
                  padding: "12px 10px",
                  borderRadius: "10px",
                  border: role === r.id
                    ? `2px solid ${r.color}`
                    : "2px solid #e2e8f0",
                  backgroundColor: role === r.id ? r.lightColor : "white",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: "22px", marginBottom: "4px" }}>
                  {r.icon}
                </div>
                <div style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: role === r.id ? r.color : "#475569",
                  marginBottom: "2px",
                }}>
                  {r.label}
                </div>
                <div style={{
                  fontSize: "10px",
                  color: role === r.id ? r.color : "#94a3b8",
                  opacity: 0.9,
                }}>
                  {r.desc}
                </div>
                {/* Active indicator dot */}
                {role === r.id && (
                  <div style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: r.color,
                    margin: "6px auto 0",
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Username Input */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontSize: "13px",
            fontWeight: "600",
            color: "#475569",
            marginBottom: "6px",
          }}>
            Username
          </label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
            }}>
              👤
            </span>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                width: "100%",
                padding: "12px 14px 12px 42px",
                border: "1.5px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
                backgroundColor: "#f8fafc",
                color: "#1e293b",
                transition: "border 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.border = `1.5px solid ${selectedRole.color}`;
                e.target.style.backgroundColor = "white";
              }}
              onBlur={(e) => {
                e.target.style.border = "1.5px solid #e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
              }}
            />
          </div>
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{
            display: "block",
            fontSize: "13px",
            fontWeight: "600",
            color: "#475569",
            marginBottom: "6px",
          }}>
            Password
          </label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
            }}>
              🔒
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Minimum 4 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                width: "100%",
                padding: "12px 44px 12px 42px",
                border: "1.5px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
                backgroundColor: "#f8fafc",
                color: "#1e293b",
                transition: "border 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.border = `1.5px solid ${selectedRole.color}`;
                e.target.style.backgroundColor = "white";
              }}
              onBlur={(e) => {
                e.target.style.border = "1.5px solid #e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
              }}
            />
            {/* Show/Hide password button */}
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                padding: 0,
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            backgroundColor: loading ? "#94a3b8" : selectedRole.color,
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "20px",
            transition: "background-color 0.2s, transform 0.1s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            if (!loading) e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {loading ? (
            <>⏳ Signing in...</>
          ) : (
            <>{selectedRole.icon} Sign in as {selectedRole.label}</>
          )}
        </button>

        {/* Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
          <span style={{ fontSize: "12px", color: "#94a3b8" }}>Demo Credentials</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
        </div>

        {/* Demo credentials */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
          marginBottom: "24px",
        }}>
          {roles.map((r) => (
            <div
              key={r.id}
              onClick={() => {
                setRole(r.id);
                setUsername(r.id + "1");
                setPassword(r.id + "1234");
              }}
              style={{
                backgroundColor: r.lightColor,
                border: `1px solid ${r.borderColor}`,
                borderRadius: "8px",
                padding: "10px 8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "16px", marginBottom: "4px" }}>{r.icon}</div>
              <div style={{ fontSize: "11px", fontWeight: "600", color: r.color }}>
                {r.label}
              </div>
              <div style={{ fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
                Click to fill
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p style={{
          fontSize: "12px",
          color: "#94a3b8",
          textAlign: "center",
          margin: 0,
          lineHeight: 1.6,
        }}>
          MCA Final Year Project — Academic Performance<br />
          Analysis and Visualization System
        </p>

      </div>

      {/* Hide left panel on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .login-left-panel { display: none !important; }
        }
      `}</style>

    </div>
  );
}

export default Login;