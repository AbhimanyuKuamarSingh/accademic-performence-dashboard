// src/context/ThemeContext.js
// ============================================
// PURPOSE:
//   This file creates a Theme Context
//   Context allows ALL components to access
//   dark mode state without passing props
//   This is called "Global State Management"
// ============================================

import React, { createContext, useState, useContext } from "react";

// Step 1 - Create the context
const ThemeContext = createContext();

// Step 2 - Create the Provider component
// This wraps the whole app and shares dark mode state
export function ThemeProvider({ children }) {
  // Check if user had dark mode on before
  const savedTheme = localStorage.getItem("darkMode") === "true";
  const [isDark, setIsDark] = useState(savedTheme);

  // Toggle between dark and light mode
  const toggleDark = () => {
    const newValue = !isDark;
    setIsDark(newValue);

    // Save preference to localStorage
    localStorage.setItem("darkMode", newValue);

    // Add or remove dark class on body
    if (newValue) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3 - Custom hook to use theme anywhere
// Instead of writing useContext(ThemeContext) every time
// just write useTheme()
export function useTheme() {
  return useContext(ThemeContext);
}