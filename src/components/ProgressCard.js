// src/components/ProgressCard.js
// ============================================
// PURPOSE:
//   A card that shows multiple progress bars
//   Used in all 3 dashboards
//   Shows subject wise performance visually
// ============================================

import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProgressBar from "./ProgressBar";

function ProgressCard({ title, data }) {
  const { isDark } = useTheme();

  const cardStyle = {
    backgroundColor: isDark ? "#16213e" : "white",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "16px",
    boxShadow: isDark
      ? "0 2px 6px rgba(0,0,0,0.4)"
      : "0 2px 6px rgba(0,0,0,0.06)",
    animation: "fadeInUp 0.6s ease forwards",
  };

  const titleStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    color: isDark ? "#ffffff" : "#1a1a2e",
    marginBottom: "20px",
    paddingBottom: "10px",
    borderBottom: `1px solid ${isDark ? "#2d3748" : "#ecf0f1"}`,
  };

  // Overall average calculation
  const average = Math.round(
    data.reduce((sum, item) => sum + item.value, 0) / data.length
  );

  const averageColor =
    average >= 75 ? "#27ae60" :
    average >= 50 ? "#e67e22" :
    "#e74c3c";

  const averageBoxStyle = {
    backgroundColor: isDark ? "#0f3460" : "#f8f9fa",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const averageLabelStyle = {
    fontSize: "13px",
    color: isDark ? "#a0aec0" : "#7f8c8d",
  };

  const averageValueStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: averageColor,
  };

  return (
    <div style={cardStyle}>
      <p style={titleStyle}>{title}</p>

      {/* Overall average box */}
      <div style={averageBoxStyle}>
        <span style={averageLabelStyle}>Overall Average</span>
        <span style={averageValueStyle}>{average}%</span>
      </div>

      {/* Progress bars for each subject */}
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          value={item.value}
          maxValue={item.maxValue || 100}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default ProgressCard;