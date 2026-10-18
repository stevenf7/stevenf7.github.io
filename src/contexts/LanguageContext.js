import { useSyncExternalStore } from "react";
import {
  LANGUAGE_EVENT,
  SUPPORTED_LANGUAGES,
  getLanguageUrl,
  readLanguage,
} from "../utils/language";

export { getLanguageUrl };

const subscribe = (callback) => {
  window.addEventListener(LANGUAGE_EVENT, callback);
  return () => window.removeEventListener(LANGUAGE_EVENT, callback);
};

export const setLanguage = (nextLanguage) => {
  if (typeof window === "undefined") return;
  if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) return;
  if (readLanguage() === nextLanguage) return;

  document.documentElement.lang = nextLanguage;

  const url = new URL(window.location.href);
  url.searchParams.set("lang", nextLanguage);
  window.history.replaceState({}, "", url);

  window.dispatchEvent(
    new CustomEvent(LANGUAGE_EVENT, { detail: nextLanguage })
  );
};

// Each Astro island is its own React root, so language lives on
// <html lang> and is broadcast with a window event instead of a provider.
export const useLanguage = () => {
  const language = useSyncExternalStore(subscribe, readLanguage, () => "en");

  return {
    language,
    setLanguage,
    toggleLanguage: () => setLanguage(language === "en" ? "zh" : "en"),
    getLanguageUrl,
    isEnglish: language === "en",
    isChinese: language === "zh",
  };
};
