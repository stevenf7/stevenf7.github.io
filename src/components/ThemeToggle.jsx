import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import "../styles/themeToggle.scss"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-icon" role="img" aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  )
}

export default ThemeToggle
