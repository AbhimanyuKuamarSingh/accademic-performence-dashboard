import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProgressBar from "./ProgressBar";

function ProgressCard({ title, data }) {
  const { isDark } = useTheme();

  const average = Math.round(
    data.reduce((sum, item) => sum + item.value, 0) / data.length
  );

  const avgColor =
    average >= 75 ? "#10b981" :
    average >= 50 ? "#f59e0b" :
    "#ef4444";

  return (
    <div style={{
      backgroundColor: isDark ? "#111827" : "white",
      borderRadius: "12px",
      padding: "18px 20px",
      marginBottom: "16px",
      border: `0.5px solid ${isDark ? "#1e293b" : "#e2e8f0"}`,
      animation: "fadeInUp 0.6s ease forwards",
    }}>
      <p style={{
        fontSize: "14px",
        fontWeight: "bold",
        color: isDark ? "#f1f5f9" : "#1e293b",
        marginBottom: "14px",
        paddingBottom: "10px",
        borderBottom: `0.5px solid ${isDark ? "#1e293b" : "#e2e8f0"}`,
      }}>
        {title}
      </p>

      {/* Average box */}
      <div style={{
        backgroundColor: isDark ? "#1e293b" : "#f8fafc",
        borderRadius: "8px",
        padding: "10px 14px",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: `0.5px solid ${isDark ? "#2d3748" : "#e2e8f0"}`,
      }}>
        <span style={{ fontSize: "12px", color: isDark ? "#94a3b8" : "#64748b" }}>
          Overall Average
        </span>
        <span style={{ fontSize: "20px", fontWeight: "bold", color: avgColor }}>
          {average}%
        </span>
      </div>

      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          value={item.value}
          maxValue={item.maxValue || 100}
        />
      ))}
    </div>
  );
}

export default ProgressCard;