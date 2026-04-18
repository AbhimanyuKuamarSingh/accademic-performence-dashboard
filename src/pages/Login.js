// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      showToast("Password must be at least 4 characters", "warning");
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
        else if (role === "admin") navigate("/admin");
      }, 800);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    width: "380px",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "6px",
    color: "#2c3e50",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const subtitleStyle = {
    textAlign: "center",
    color: "#7f8c8d",
    fontSize: "13px",
    marginBottom: "28px",
    marginTop: "4px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#2c3e50",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "16px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: loading ? "#95a5a6" : "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: loading ? "not-allowed" : "pointer",
    marginTop: "8px",
  };

  const errorStyle = {
    backgroundColor: "#fdecea",
    color: "#c0392b",
    padding: "10px 14px",
    borderRadius: "6px",
    fontSize: "13px",
    marginBottom: "16px",
    borderLeft: "4px solid #c0392b",
  };

  const hintBoxStyle = {
    backgroundColor: "#eaf4fb",
    borderRadius: "8px",
    padding: "12px 16px",
    marginTop: "20px",
    fontSize: "12px",
    color: "#2980b9",
    lineHeight: "1.8",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>📚 Academic Performance</h2>
        <p style={subtitleStyle}>Sign in to access your dashboard</p>

        {error && <div style={errorStyle}>⚠️ {error}</div>}

        <label style={labelStyle}>Select Role</label>
        <select
          style={inputStyle}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">🎓 Student</option>
          <option value="faculty">👨‍🏫 Faculty</option>
          <option value="admin">⚙️ Admin</option>
        </select>

        <label style={labelStyle}>Username</label>
        <input
          style={inputStyle}
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <label style={labelStyle}>Password</label>
        <input
          style={inputStyle}
          type="password"
          placeholder="Enter your password (min 4 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button
          style={buttonStyle}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "⏳ Signing in..." : "Login →"}
        </button>

        <div style={hintBoxStyle}>
          <strong>💡 How to login:</strong><br />
          Enter any username and any password<br />
          (password must be at least 4 characters)<br />
          Select your role and click Login
        </div>
      </div>
    </div>
  );
}

export default Login;