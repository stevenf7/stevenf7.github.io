import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/languageToggle.scss';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      type="button"
      aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
    >
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
        EN
      </span>
      <span className="divider">|</span>
      <span className={`lang-option ${language === 'zh' ? 'active' : ''}`}>
        中
      </span>
    </button>
  );
};

export default LanguageToggle;