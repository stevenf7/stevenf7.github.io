import React, { createContext, useContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get("lang");

      if (langParam === "zh" || langParam === "en") {
        setLanguage(langParam);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const currentLangParam = urlParams.get("lang");

      if (currentLangParam !== language) {
        urlParams.set("lang", language);
        const hash = window.location.hash || "";
        const newUrl = `${window.location.pathname}?${urlParams.toString()}${hash}`;
        window.history.replaceState({}, "", newUrl);
      }
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  };

  const getLanguageUrl = (targetLanguage, pathname = "/", hash = "") => {
    const cleanPath = pathname || "/";
    const normalizedHash = hash
      ? hash.startsWith("#")
        ? hash
        : `#${hash}`
      : "";
    return `${cleanPath}?lang=${targetLanguage}${normalizedHash}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        getLanguageUrl,
        isEnglish: language === "en",
        isChinese: language === "zh",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
