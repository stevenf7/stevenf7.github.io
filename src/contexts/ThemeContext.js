import { useSyncExternalStore } from "react"

export const THEME_EVENT = "themechange"

const readTheme = () => {
  if (typeof document === "undefined") return "light"
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light"
}

const subscribe = callback => {
  window.addEventListener(THEME_EVENT, callback)
  return () => window.removeEventListener(THEME_EVENT, callback)
}

const applyTheme = (nextTheme, { persist }) => {
  document.documentElement.setAttribute("data-theme", nextTheme)
  if (persist) {
    try {
      window.localStorage.setItem("theme", nextTheme)
    } catch (e) {}
  }
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: nextTheme }))
}

if (typeof window !== "undefined" && window.matchMedia) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const handleSystemChange = event => {
    let stored = null
    try {
      stored = window.localStorage.getItem("theme")
    } catch (e) {}
    if (!stored) {
      applyTheme(event.matches ? "dark" : "light", { persist: false })
    }
  }
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleSystemChange)
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(handleSystemChange)
  }
}

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light")

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme: () =>
      applyTheme(theme === "dark" ? "light" : "dark", { persist: true }),
  }
}
