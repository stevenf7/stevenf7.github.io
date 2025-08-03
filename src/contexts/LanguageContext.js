import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  // Check URL parameters on mount and set language accordingly
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang');
      
      if (langParam === 'zh' || langParam === 'en') {
        setLanguage(langParam);
      }
    }
  }, []);

  // Update URL when language changes (optional - keeps URL in sync)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const currentLangParam = urlParams.get('lang');
      
      if (currentLangParam !== language) {
        urlParams.set('lang', language);
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  // Utility function to generate URLs with language parameter
  const getLanguageUrl = (targetLanguage, pathname = '') => {
    if (typeof window === 'undefined') return '';
    
    const urlParams = new URLSearchParams();
    urlParams.set('lang', targetLanguage);
    const basePath = pathname || window.location.pathname;
    return `${basePath}?${urlParams.toString()}`;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      getLanguageUrl,
      isEnglish: language === 'en',
      isChinese: language === 'zh'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};