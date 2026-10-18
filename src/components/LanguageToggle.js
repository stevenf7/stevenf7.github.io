import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/languageToggle.scss";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      type="button"
      aria-label={
        language === "en" ? "Switch language to Chinese" : "切换语言为英文"
      }
    >
      <span className="active-lang">{language === "en" ? "中文" : "EN"}</span>
    </button>
  );
};

export default LanguageToggle;
