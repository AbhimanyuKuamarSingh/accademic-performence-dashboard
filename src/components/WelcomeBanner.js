// src/components/WelcomeBanner.js
// ============================================
// PURPOSE:
//   Shows a welcome message at top of dashboard
//   Greeting changes based on time of day
//   Morning / Afternoon / Evening / Night
//   Also shows live clock that updates every second
//   and today's date
// ============================================

import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function WelcomeBanner() {
  const { isDark } = useTheme();

  // currentTime updates every second
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second using setInterval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Get user info from localStorage
  const user = localStorage.getItem("user") || "User";
  const role = localStorage.getItem("role") || "user";

  // ---- Get greeting based on hour ----
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      return { text: "Good Morning", emoji: "🌅" };
    } else if (hour >= 12 && hour < 17) {
      return { text: "Good Afternoon", emoji: "☀️" };
    } else if (hour >= 17 && hour < 21) {
      return { text: "Good Evening", emoji: "🌆" };
    } else {
      return { text: "Good Night", emoji: "🌙" };
    }
  };

  // ---- Format time as HH:MM:SS ----
  const formatTime = () => {
    return currentTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  // ---- Format date as Day, DD Month YYYY ----
  const formatDate = () => {
    return currentTime.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ---- Get role specific message ----
  const getRoleMessage = () => {
    if (role === "student") {
      return "Keep learning and growing every day! 📚";
    } else if (role === "faculty") {
      return "Your dedication shapes the future! 👨‍🏫";
    } else if (role === "admin") {
      return "Managing excellence across the system! ⚙️";
    }
    return "Welcome to Academic Performance System!";
  };

  // ---- Get banner color based on role ----
  const getBannerColor = () => {
    if (role === "student") {
      return isDark
        ? "linear-gradient(135deg, #1a237e, #1565c0)"
        : "linear-gradient(135deg, #3a86ff, #60a5fa)";
    } else if (role === "faculty") {
      return isDark
        ? "linear-gradient(135deg, #7f1d1d, #991b1b)"
        : "linear-gradient(135deg, #e74c3c, #f87171)";
    } else {
      return isDark
        ? "linear-gradient(135deg, #064e3b, #065f46)"
        : "linear-gradient(135deg, #1abc9c, #34d399)";
    }
  };

  const greeting = getGreeting();

  // ---- Styles ----
  const bannerStyle = {
    background: getBannerColor(),
    borderRadius: "12px",
    padding: "20px 24px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
    color: "white",
    // Slide in animation
    animation: "fadeInUp 0.5s ease forwards",
  };

  const leftStyle = {
    flex: 1,
  };

  const greetingStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "0 0 4px 0",
  };

  const nameStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    margin: "0 0 6px 0",
    textTransform: "capitalize",
  };

  const messageStyle = {
    fontSize: "13px",
    opacity: 0.9,
    margin: 0,
  };

  const rightStyle = {
    textAlign: "right",
  };

  const timeStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 4px 0",
    fontFamily: "monospace",
    letterSpacing: "2px",
  };

  const dateStyle = {
    fontSize: "13px",
    opacity: 0.9,
    margin: 0,
  };

  const roleBadgeStyle = {
    display: "inline-block",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    marginTop: "8px",
    textTransform: "capitalize",
  };

  return (
    <div style={bannerStyle}>

      {/* Left side - greeting and name */}
      <div style={leftStyle}>
        <p style={greetingStyle}>
          {greeting.emoji} {greeting.text},
        </p>
        <p style={nameStyle}>
          {user}! 👋
        </p>
        <p style={messageStyle}>
          {getRoleMessage()}
        </p>
        <span style={roleBadgeStyle}>
          {role === "student" ? "🎓" :
           role === "faculty" ? "👨‍🏫" : "⚙️"} {role}
        </span>
      </div>

      {/* Right side - live clock and date */}
      <div style={rightStyle}>
        <p style={timeStyle}>{formatTime()}</p>
        <p style={dateStyle}>{formatDate()}</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;