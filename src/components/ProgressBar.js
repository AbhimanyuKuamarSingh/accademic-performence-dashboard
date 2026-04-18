// src/components/ProgressBar.js
// ============================================
// PURPOSE:
//   Shows a animated progress bar for each subject
//   Bar fills from 0 to actual percentage on load
//   Color changes based on score
//   Green = high, Orange = medium, Red = low
// ============================================

import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function ProgressBar({ label, value, maxValue, color }) {
  const { isDark } = useTheme();

  // percentage starts at 0 and animates to actual value
  const [width, setWidth] = useState(0);

  // Calculate percentage
  const percentage = Math.round((value / maxValue) * 100);

  useEffect(() => {
    // Small delay before animation starts
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  // Color based on score
  const getColor = () => {
    if (color) return color;
    if (percentage >= 75) return "#27ae60"; // green
    if (percentage >= 50) return "#e67e22"; // orange
    return "#e74c3c"; // red
  };

  const containerStyle = {
    marginBottom: "16px",
  };

  const labelRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: isDark ? "#ffffff" : "#2c3e50",
  };

  const valueStyle = {
    fontSize: "13px",
    fontWeight: "bold",
    color: getColor(),
  };

  const trackStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: isDark ? "#2d3748" : "#ecf0f1",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const fillStyle = {
    height: "100%",
    width: `${width}%`,
    backgroundColor: getColor(),
    borderRadius: "10px",
    // Smooth animation
    transition: "width 1s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      {/* Label and value row */}
      <div style={labelRowStyle}>
        <span style={labelStyle}>{label}</span>
        <span style={valueStyle}>
          {value}/{maxValue} ({percentage}%)
        </span>
      </div>

      {/* Progress track and fill */}
      <div style={trackStyle}>
        <div style={fillStyle} />
      </div>
    </div>
  );
}

export default ProgressBar;