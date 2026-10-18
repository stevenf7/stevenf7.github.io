export const LANGUAGE_EVENT = "languagechange";
export const SUPPORTED_LANGUAGES = ["en", "zh"];

export const readLanguage = () => {
  if (typeof document === "undefined") return "en";
  return document.documentElement.lang === "zh" ? "zh" : "en";
};

export const getLanguageUrl = (targetLanguage, pathname = "/", hash = "") => {
  const cleanPath = pathname || "/";
  const normalizedHash = hash
    ? hash.startsWith("#")
      ? hash
      : `#${hash}`
    : "";
  return `${cleanPath}?lang=${targetLanguage}${normalizedHash}`;
};
