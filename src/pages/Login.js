import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

function Login() {
  // Controls which tab is active - login or signup
  const [activeTab, setActiveTab] = useState("login");

  // Login form state
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: "student",
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { showToast } = useToast();

  // Role options
  const roles = [
    {
      id: "student",
      label: "Student",
      icon: "🎓",
      desc: "View your results",
      color: "#3b82f6",
      light: "#eff6ff",
      border: "#bfdbfe",
    },
    {
      id: "faculty",
      label: "Faculty",
      icon: "👨‍🏫",
      desc: "Manage classes",
      color: "#ef4444",
      light: "#fef2f2",
      border: "#fecaca",
    },
    {
      id: "admin",
      label: "Admin",
      icon: "⚙️",
      desc: "System control",
      color: "#10b981",
      light: "#f0fdf4",
      border: "#bbf7d0",
    },
  ];

  const selectedRole = roles.find((r) => r.id === loginData.role)
    || roles[0];
  const selectedSignupRole = roles.find((r) => r.id === signupData.role)
    || roles[0];

  // ---- Validate Login ----
  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!loginData.password) {
      newErrors.password = "Password is required";
    } else if (loginData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---- Validate Signup ----
  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!signupData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (signupData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!signupData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!signupData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    if (!signupData.password) {
      newErrors.password = "Password is required";
    } else if (signupData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }
    if (!signupData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---- Handle Login ----
  const handleLogin = () => {
    if (!validateLogin()) {
      showToast("Please fix the errors", "error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("role", loginData.role);
      localStorage.setItem("user", loginData.username);
      showToast(`Welcome back ${loginData.username}! 🎉`, "success");
      setTimeout(() => {
        if (loginData.role === "student") navigate("/student");
        else if (loginData.role === "faculty") navigate("/faculty");
        else navigate("/admin");
      }, 800);
    }, 1200);
  };

  // ---- Handle Signup ----
  const handleSignup = () => {
    if (!validateSignup()) {
      showToast("Please fix the errors", "error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Save user data and redirect
      localStorage.setItem("role", signupData.role);
      localStorage.setItem("user", signupData.username);
      localStorage.setItem("email", signupData.email);
      showToast(`Account created successfully! Welcome ${signupData.fullName}! 🎉`, "success");
      setTimeout(() => {
        if (signupData.role === "student") navigate("/student");
        else if (signupData.role === "faculty") navigate("/faculty");
        else navigate("/admin");
      }, 800);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (activeTab === "login") handleLogin();
      else handleSignup();
    }
  };

  // ---- Styles ----
  const inputContainerStyle = {
    position: "relative",
    marginBottom: "4px",
  };

  const inputStyle = (hasError, focusColor) => ({
    width: "100%",
    padding: "12px 14px 12px 42px",
    border: hasError
      ? "1.5px solid #ef4444"
      : "1.5px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "14px",
    boxSizing: "border-box",
    outline: "none",
    backgroundColor: "#f8fafc",
    color: "#1e293b",
    transition: "border 0.2s, background 0.2s",
  });

  const iconStyle = {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "15px",
    pointerEvents: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569",
    marginBottom: "6px",
  };

  const errorTextStyle = {
    fontSize: "11px",
    color: "#ef4444",
    margin: "4px 0 10px",
  };

  const eyeButtonStyle = {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    padding: 0,
    color: "#94a3b8",
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#f1f5f9",
      fontFamily: "Arial, sans-serif",
    }}>

      {/* ===== LEFT PANEL ===== */}
      <div
        className="login-left"
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          color: "white",
        }}
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
          margin: "0 0 10px",
          textAlign: "center",
        }}>
          Academic Performance
        </h1>

        <p style={{
          fontSize: "15px",
          opacity: 0.85,
          textAlign: "center",
          margin: "0 0 36px",
          lineHeight: 1.6,
          maxWidth: "300px",
        }}>
          Your complete academic analysis and visualization platform
        </p>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          width: "100%",
          maxWidth: "300px",
          marginBottom: "32px",
        }}>
          {[
            { value: "500+", label: "Students" },
            { value: "50+", label: "Faculty" },
            { value: "10+", label: "Departments" },
            { value: "99%", label: "Uptime" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "10px",
                padding: "14px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <p style={{
                fontSize: "22px",
                fontWeight: "bold",
                margin: "0 0 2px",
              }}>
                {stat.value}
              </p>
              <p style={{
                fontSize: "12px",
                opacity: 0.85,
                margin: 0,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        {[
          { icon: "📊", text: "Performance charts and analytics" },
          { icon: "🌙", text: "Dark mode support" },
          { icon: "📱", text: "Fully responsive design" },
          { icon: "🖨️", text: "Download PDF reports" },
        ].map((f, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "10px",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "10px 16px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "300px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span style={{ fontSize: "16px" }}>{f.icon}</span>
            <span style={{ fontSize: "13px", opacity: 0.95 }}>{f.text}</span>
          </div>
        ))}
      </div>

      {/* ===== RIGHT PANEL ===== */}
      <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "white",
        overflowY: "auto",
      }}>

        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1e293b",
            margin: "0 0 4px",
          }}>
            {activeTab === "login" ? "Welcome back! 👋" : "Create account 🚀"}
          </h2>
          <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
            {activeTab === "login"
              ? "Sign in to access your dashboard"
              : "Join the academic performance system"}
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: "flex",
          backgroundColor: "#f1f5f9",
          borderRadius: "10px",
          padding: "4px",
          marginBottom: "24px",
        }}>
          {["login", "signup"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setErrors({});
              }}
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
                backgroundColor: activeTab === tab ? "white" : "transparent",
                color: activeTab === tab ? "#1e293b" : "#94a3b8",
                boxShadow: activeTab === tab
                  ? "0 1px 4px rgba(0,0,0,0.1)"
                  : "none",
              }}
            >
              {tab === "login" ? "🔑 Sign In" : "✨ Sign Up"}
            </button>
          ))}
        </div>

        {/* Role Selection */}
        <div style={{ marginBottom: "20px" }}>
          <p style={labelStyle}>Select your role</p>
          <div style={{ display: "flex", gap: "8px" }}>
            {roles.map((r) => {
              const currentRole = activeTab === "login"
                ? loginData.role
                : signupData.role;
              const isSelected = currentRole === r.id;
              return (
                <div
                  key={r.id}
                  onClick={() => {
                    if (activeTab === "login") {
                      setLoginData({ ...loginData, role: r.id });
                    } else {
                      setSignupData({ ...signupData, role: r.id });
                    }
                  }}
                  style={{
                    flex: 1,
                    padding: "10px 8px",
                    borderRadius: "10px",
                    border: isSelected
                      ? `2px solid ${r.color}`
                      : "2px solid #e2e8f0",
                    backgroundColor: isSelected ? r.light : "white",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "20px", marginBottom: "3px" }}>
                    {r.icon}
                  </div>
                  <div style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: isSelected ? r.color : "#475569",
                  }}>
                    {r.label}
                  </div>
                  <div style={{
                    fontSize: "10px",
                    color: isSelected ? r.color : "#94a3b8",
                  }}>
                    {r.desc}
                  </div>
                  {isSelected && (
                    <div style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: r.color,
                      margin: "5px auto 0",
                    }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== LOGIN FORM ===== */}
        {activeTab === "login" && (
          <div>
            {/* Username */}
            <div style={{ marginBottom: "4px" }}>
              <label style={labelStyle}>Username</label>
              <div style={inputContainerStyle}>
                <span style={iconStyle}>👤</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={loginData.username}
                  onChange={(e) => {
                    setLoginData({ ...loginData, username: e.target.value });
                    setErrors({ ...errors, username: "" });
                  }}
                  onKeyPress={handleKeyPress}
                  style={inputStyle(errors.username, selectedRole.color)}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${selectedRole.color}`;
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = errors.username
                      ? "1.5px solid #ef4444"
                      : "1.5px solid #e2e8f0";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
              </div>
              {errors.username && (
                <p style={errorTextStyle}>⚠️ {errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Password</label>
              <div style={inputContainerStyle}>
                <span style={iconStyle}>🔒</span>
                <input
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) => {
                    setLoginData({ ...loginData, password: e.target.value });
                    setErrors({ ...errors, password: "" });
                  }}
                  onKeyPress={handleKeyPress}
                  style={{
                    ...inputStyle(errors.password, selectedRole.color),
                    paddingRight: "42px",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${selectedRole.color}`;
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = errors.password
                      ? "1.5px solid #ef4444"
                      : "1.5px solid #e2e8f0";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
                <button
                  style={eyeButtonStyle}
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  {showLoginPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && (
                <p style={errorTextStyle}>⚠️ {errors.password}</p>
              )}
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
                marginBottom: "16px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {loading
                ? "⏳ Signing in..."
                : `${selectedRole.icon} Sign in as ${selectedRole.label}`}
            </button>

            {/* Switch to signup */}
            <p style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#64748b",
              margin: "0 0 20px",
            }}>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setActiveTab("signup");
                  setErrors({});
                }}
                style={{
                  color: selectedRole.color,
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Sign up here
              </span>
            </p>

            {/* Divider */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
              <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                Quick Demo Login
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
            </div>

            {/* Quick login cards */}
            <div style={{ display: "flex", gap: "8px" }}>
              {roles.map((r) => (
                <div
                  key={r.id}
                  onClick={() => {
                    setLoginData({
                      username: r.id + "1",
                      password: r.id + "1234",
                      role: r.id,
                    });
                    showToast(`Filled ${r.label} credentials`, "info");
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: r.light,
                    border: `1px solid ${r.border}`,
                    borderRadius: "8px",
                    padding: "10px 6px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "transform 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: "18px", marginBottom: "3px" }}>
                    {r.icon}
                  </div>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    color: r.color,
                  }}>
                    {r.label}
                  </div>
                  <div style={{ fontSize: "10px", color: "#64748b" }}>
                    Click to fill
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== SIGNUP FORM ===== */}
        {activeTab === "signup" && (
          <div>

            {/* Full Name */}
            <div style={{ marginBottom: "4px" }}>
              <label style={labelStyle}>Full Name</label>
              <div style={inputContainerStyle}>
                <span style={iconStyle}>👤</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={signupData.fullName}
                  onChange={(e) => {
                    setSignupData({ ...signupData, fullName: e.target.value });
                    setErrors({ ...errors, fullName: "" });
                  }}
                  onKeyPress={handleKeyPress}
                  style={inputStyle(errors.fullName, selectedSignupRole.color)}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${selectedSignupRole.color}`;
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = errors.fullName
                      ? "1.5px solid #ef4444"
                      : "1.5px solid #e2e8f0";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
              </div>
              {errors.fullName && (
                <p style={errorTextStyle}>⚠️ {errors.fullName}</p>
              )}
            </div>

            {/* Username and Email side by side */}
            <div style={{ display: "flex", gap: "10px" }}>

              {/* Username */}
              <div style={{ flex: 1, marginBottom: "4px" }}>
                <label style={labelStyle}>Username</label>
                <div style={inputContainerStyle}>
                  <span style={iconStyle}>🆔</span>
                  <input
                    type="text"
                    placeholder="Choose username"
                    value={signupData.username}
                    onChange={(e) => {
                      setSignupData({ ...signupData, username: e.target.value });
                      setErrors({ ...errors, username: "" });
                    }}
                    onKeyPress={handleKeyPress}
                    style={inputStyle(errors.username, selectedSignupRole.color)}
                    onFocus={(e) => {
                      e.target.style.border = `1.5px solid ${selectedSignupRole.color}`;
                      e.target.style.backgroundColor = "white";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = errors.username
                        ? "1.5px solid #ef4444"
                        : "1.5px solid #e2e8f0";
                      e.target.style.backgroundColor = "#f8fafc";
                    }}
                  />
                </div>
                {errors.username && (
                  <p style={errorTextStyle}>⚠️ {errors.username}</p>
                )}
              </div>

              {/* Email */}
              <div style={{ flex: 1, marginBottom: "4px" }}>
                <label style={labelStyle}>Email</label>
                <div style={inputContainerStyle}>
                  <span style={iconStyle}>✉️</span>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={signupData.email}
                    onChange={(e) => {
                      setSignupData({ ...signupData, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                    onKeyPress={handleKeyPress}
                    style={inputStyle(errors.email, selectedSignupRole.color)}
                    onFocus={(e) => {
                      e.target.style.border = `1.5px solid ${selectedSignupRole.color}`;
                      e.target.style.backgroundColor = "white";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = errors.email
                        ? "1.5px solid #ef4444"
                        : "1.5px solid #e2e8f0";
                      e.target.style.backgroundColor = "#f8fafc";
                    }}
                  />
                </div>
                {errors.email && (
                  <p style={errorTextStyle}>⚠️ {errors.email}</p>
                )}
              </div>

            </div>

            {/* Password */}
            <div style={{ marginBottom: "4px" }}>
              <label style={labelStyle}>Password</label>
              <div style={inputContainerStyle}>
                <span style={iconStyle}>🔒</span>
                <input
                  type={showSignupPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={signupData.password}
                  onChange={(e) => {
                    setSignupData({ ...signupData, password: e.target.value });
                    setErrors({ ...errors, password: "" });
                  }}
                  onKeyPress={handleKeyPress}
                  style={{
                    ...inputStyle(errors.password, selectedSignupRole.color),
                    paddingRight: "42px",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${selectedSignupRole.color}`;
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = errors.password
                      ? "1.5px solid #ef4444"
                      : "1.5px solid #e2e8f0";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
                <button
                  style={eyeButtonStyle}
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                >
                  {showSignupPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && (
                <p style={errorTextStyle}>⚠️ {errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Confirm Password</label>
              <div style={inputContainerStyle}>
                <span style={iconStyle}>🔐</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={signupData.confirmPassword}
                  onChange={(e) => {
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    });
                    setErrors({ ...errors, confirmPassword: "" });
                  }}
                  onKeyPress={handleKeyPress}
                  style={{
                    ...inputStyle(
                      errors.confirmPassword,
                      selectedSignupRole.color
                    ),
                    paddingRight: "42px",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${selectedSignupRole.color}`;
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = errors.confirmPassword
                      ? "1.5px solid #ef4444"
                      : "1.5px solid #e2e8f0";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                />
                <button
                  style={eyeButtonStyle}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.confirmPassword && (
                <p style={errorTextStyle}>⚠️ {errors.confirmPassword}</p>
              )}
            </div>

            {/* Password strength indicator */}
            {signupData.password && (
              <div style={{ marginBottom: "16px" }}>
                <div style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "4px",
                }}>
                  {[1, 2, 3, 4].map((level) => {
                    const strength = signupData.password.length >= level * 2 ? 1 : 0;
                    const color =
                      signupData.password.length < 4 ? "#ef4444" :
                      signupData.password.length < 7 ? "#f59e0b" :
                      signupData.password.length < 10 ? "#3b82f6" : "#10b981";
                    return (
                      <div
                        key={level}
                        style={{
                          flex: 1,
                          height: "4px",
                          borderRadius: "4px",
                          backgroundColor: strength ? color : "#e2e8f0",
                          transition: "background-color 0.3s",
                        }}
                      />
                    );
                  })}
                </div>
                <p style={{
                  fontSize: "11px",
                  color:
                    signupData.password.length < 4 ? "#ef4444" :
                    signupData.password.length < 7 ? "#f59e0b" :
                    signupData.password.length < 10 ? "#3b82f6" : "#10b981",
                  margin: 0,
                }}>
                  {signupData.password.length < 4
                    ? "Weak password"
                    : signupData.password.length < 7
                    ? "Fair password"
                    : signupData.password.length < 10
                    ? "Good password"
                    : "Strong password ✅"}
                </p>
              </div>
            )}

            {/* Terms */}
            <p style={{
              fontSize: "12px",
              color: "#64748b",
              marginBottom: "16px",
              lineHeight: 1.5,
            }}>
              By creating an account you agree to our{" "}
              <span style={{ color: selectedSignupRole.color, cursor: "pointer" }}>
                Terms of Service
              </span>{" "}
              and{" "}
              <span style={{ color: selectedSignupRole.color, cursor: "pointer" }}>
                Privacy Policy
              </span>
            </p>

            {/* Signup Button */}
            <button
              onClick={handleSignup}
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                backgroundColor: loading
                  ? "#94a3b8"
                  : selectedSignupRole.color,
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: loading ? "not-allowed" : "pointer",
                marginBottom: "16px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {loading
                ? "⏳ Creating account..."
                : `${selectedSignupRole.icon} Create ${selectedSignupRole.label} Account`}
            </button>

            {/* Switch to login */}
            <p style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#64748b",
              margin: 0,
            }}>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setActiveTab("login");
                  setErrors({});
                }}
                style={{
                  color: selectedSignupRole.color,
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Sign in here
              </span>
            </p>
          </div>
        )}

        {/* Footer */}
        <p style={{
          fontSize: "11px",
          color: "#94a3b8",
          textAlign: "center",
          marginTop: "24px",
          lineHeight: 1.6,
        }}>
          MCA Final Year Project<br />
          Academic Performance Analysis and Visualization System
        </p>

      </div>

      {/* Hide left panel on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .login-left { display: none !important; }
        }
      `}</style>

    </div>
  );
}

export default Login;