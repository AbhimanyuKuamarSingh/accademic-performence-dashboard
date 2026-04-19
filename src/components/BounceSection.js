// src/components/BounceSection.js
import React, { useState, useEffect } from "react";

function BounceSection({ children, delay = 0, style = {} }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        animation: visible
          ? "bounceDrop 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both"
          : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default BounceSection;