import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function ProgressBar({ label, value, maxValue }) {
  const { isDark } = useTheme();
  const [width, setWidth] = useState(0);
  const percentage = Math.round((value / maxValue) * 100);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getColor = () => {
    if (percentage >= 75) return "#10b981";
    if (percentage >= 50) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ fontSize: "12px", fontWeight: "500", color: isDark ? "#f1f5f9" : "#1e293b" }}>
          {label}
        </span>
        <span style={{ fontSize: "12px", fontWeight: "bold", color: getColor() }}>
          {value}/{maxValue} ({percentage}%)
        </span>
      </div>
      <div style={{
        width: "100%",
        height: "8px",
        backgroundColor: isDark ? "#1e293b" : "#e2e8f0",
        borderRadius: "8px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${width}%`,
          backgroundColor: getColor(),
          borderRadius: "8px",
          transition: "width 1s ease-in-out",
        }} />
      </div>
    </div>
  );
}

export default ProgressBar;