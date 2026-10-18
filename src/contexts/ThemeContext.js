import React, { createContext, useContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (typeof window === "undefined") return

    const savedTheme = window.localStorage.getItem("theme")
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      const initialTheme = prefersDark ? "dark" : "light"
      setTheme(initialTheme)
      document.documentElement.setAttribute("data-theme", initialTheme)
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = e => {
      const stored = window.localStorage.getItem("theme")
      if (!stored) {
        const nextTheme = e.matches ? "dark" : "light"
        setTheme(nextTheme)
        document.documentElement.setAttribute("data-theme", nextTheme)
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark"
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", next)
        document.documentElement.setAttribute("data-theme", next)
      }
      return next
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
