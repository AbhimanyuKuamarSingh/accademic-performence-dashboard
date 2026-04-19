import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function WelcomeBanner() {
  const { isDark } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const user = localStorage.getItem("user") || "User";
  const role = localStorage.getItem("role") || "user";

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return { text: "Good Morning", emoji: "🌅" };
    if (hour >= 12 && hour < 17) return { text: "Good Afternoon", emoji: "☀️" };
    if (hour >= 17 && hour < 21) return { text: "Good Evening", emoji: "🌆" };
    return { text: "Good Night", emoji: "🌙" };
  };

  const getRoleMessage = () => {
    if (role === "student") return "Keep learning and growing every day! 📚";
    if (role === "faculty") return "Your dedication shapes the future! 👨‍🏫";
    return "Managing excellence across the system! ⚙️";
  };

  const getBannerColor = () => {
    if (role === "student") return "linear-gradient(135deg, #1d4ed8, #3b82f6)";
    if (role === "faculty") return "linear-gradient(135deg, #b91c1c, #ef4444)";
    return "linear-gradient(135deg, #065f46, #10b981)";
  };

  const greeting = getGreeting();

  return (
    <div style={{
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
      animation: "fadeInUp 0.5s ease forwards",
    }}>
      <div>
        <p style={{ fontSize: "14px", opacity: 0.85, margin: "0 0 2px 0" }}>
          {greeting.emoji} {greeting.text},
        </p>
        <p style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 4px 0", textTransform: "capitalize" }}>
          {user}! 👋
        </p>
        <p style={{ fontSize: "13px", opacity: 0.85, margin: "0 0 8px 0" }}>
          {getRoleMessage()}
        </p>
        <span style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          padding: "4px 12px",
          borderRadius: "20px",
          fontSize: "11px",
          textTransform: "capitalize",
        }}>
          {role === "student" ? "🎓" : role === "faculty" ? "👨‍🏫" : "⚙️"} {role}
        </span>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 4px 0", fontFamily: "monospace", letterSpacing: "2px" }}>
          {currentTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}
        </p>
        <p style={{ fontSize: "12px", opacity: 0.85, margin: 0 }}>
          {currentTime.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;