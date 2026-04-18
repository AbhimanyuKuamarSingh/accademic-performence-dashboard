// src/context/ToastContext.js
import React, { createContext, useState, useContext, useCallback } from "react";

const ToastContext = createContext();

const TOAST_COLORS = {
  success: { backgroundColor: "#27ae60", icon: "✅" },
  error: { backgroundColor: "#e74c3c", icon: "❌" },
  warning: { backgroundColor: "#e67e22", icon: "⚠️" },
  info: { backgroundColor: "#3498db", icon: "ℹ️" },
};

function ToastItem({ message, type, onClose }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setVisible(true), 10);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyle = {
    backgroundColor: TOAST_COLORS[type]?.backgroundColor || "#333",
    color: "white",
    padding: "14px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minWidth: "260px",
    maxWidth: "360px",
    marginBottom: "10px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(100px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };

  const closeStyle = {
    backgroundColor: "rgba(255,255,255,0.2)",
    border: "none",
    color: "white",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "12px",
  };

  return (
    <div style={toastStyle}>
      <span style={{ fontSize: "18px" }}>
        {TOAST_COLORS[type]?.icon}
      </span>
      <span style={{ fontSize: "14px", fontWeight: "500", flex: 1 }}>
        {message}
      </span>
      <button style={closeStyle} onClick={onClose}>✕</button>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
      }}>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}