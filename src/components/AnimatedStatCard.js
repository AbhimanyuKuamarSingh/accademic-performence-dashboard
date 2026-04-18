// src/components/AnimatedStatCard.js
// ============================================
// PURPOSE:
//   Shows a stat card where the number
//   counts up from 0 to the target value
//   when the page loads
//
// PROPS:
//   title = label text
//   value = target number to count up to
//   prefix = text before number like "$"
//   suffix = text after number like "%" or "+"
//   color = background color
//   icon = emoji icon
// ============================================

import React, { useState, useEffect } from "react";

function AnimatedStatCard({ title, value, prefix, suffix, color, icon }) {

  // displayValue starts at 0 and counts up to value
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Make sure value is a number
    const targetValue = parseInt(value) || 0;

    // If value is 0 no need to animate
    if (targetValue === 0) return;

    // How long the animation takes in ms
    const duration = 1500;

    // How many steps to count
    const steps = 60;

    // How much to increase each step
    const increment = targetValue / steps;

    // How long each step takes
    const stepDuration = duration / steps;

    let current = 0;

    // setInterval runs the function every stepDuration ms
    const timer = setInterval(() => {
      current += increment;

      if (current >= targetValue) {
        // Stop at exact target value
        setDisplayValue(targetValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    // Cleanup - stop the interval when component unmounts
    return () => clearInterval(timer);
  }, [value]);

  // ---- Styles ----
  const cardStyle = {
    flex: "1 1 140px",
    backgroundColor: color || "#3498db",
    borderRadius: "12px",
    padding: "20px 16px",
    color: "white",
    position: "relative",
    overflow: "hidden",
    // Fade in animation when card appears
    animation: "fadeInUp 0.5s ease forwards",
  };

  const iconStyle = {
    fontSize: "32px",
    marginBottom: "8px",
    display: "block",
  };

  const valueStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0 0 4px 0",
    lineHeight: 1,
  };

  const titleStyle = {
    fontSize: "12px",
    opacity: 0.9,
    margin: 0,
    fontWeight: "500",
  };

  // Decorative circle in background
  const circleStyle = {
    position: "absolute",
    right: "-20px",
    top: "-20px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.1)",
  };

  const circle2Style = {
    position: "absolute",
    right: "20px",
    bottom: "-30px",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.08)",
  };

  return (
    <div style={cardStyle}>
      {/* Decorative circles */}
      <div style={circleStyle} />
      <div style={circle2Style} />

      {/* Icon */}
      {icon && <span style={iconStyle}>{icon}</span>}

      {/* Animated number */}
      <p style={valueStyle}>
        {prefix}{displayValue}{suffix}
      </p>

      {/* Title */}
      <p style={titleStyle}>{title}</p>
    </div>
  );
}

export default AnimatedStatCard;