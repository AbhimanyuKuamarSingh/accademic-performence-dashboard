import React, { useState, useEffect } from "react";

function AnimatedStatCard({ title, value, suffix, prefix, color, icon }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const targetValue = parseInt(value) || 0;
    if (targetValue === 0) return;
    const duration = 1500;
    const steps = 60;
    const increment = targetValue / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setDisplayValue(targetValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [value]);

  const cardStyle = {
    flex: "1 1 140px",
    backgroundColor: color || "#3b82f6",
    borderRadius: "12px",
    padding: "18px 16px",
    color: "white",
    position: "relative",
    overflow: "hidden",
    animation: "fadeInUp 0.5s ease forwards",
  };

  const circleStyle = {
    position: "absolute",
    right: "-15px",
    top: "-15px",
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.1)",
  };

  const circle2Style = {
    position: "absolute",
    right: "20px",
    bottom: "-25px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.07)",
  };

  return (
    <div style={cardStyle}>
      <div style={circleStyle} />
      <div style={circle2Style} />
      {icon && (
        <span style={{ fontSize: "22px", marginBottom: "8px", display: "block" }}>
          {icon}
        </span>
      )}
      <p style={{ fontSize: "30px", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: 1 }}>
        {prefix}{displayValue}{suffix}
      </p>
      <p style={{ fontSize: "12px", opacity: 0.9, margin: 0 }}>{title}</p>
    </div>
  );
}

export default AnimatedStatCard;