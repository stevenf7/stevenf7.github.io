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
      <span className="active-lang">
        {language === 'en' ? 'EN' : '中'}
      </span>
      <span className="inactive-lang">
        {language === 'en' ? '中' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;