import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/i18n';
import './styles/languageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      title={`Switch to ${t.language.switch}`}
    >
      <span className="language-flag">
        {language === 'fr' ? '🇫🇷' : '🇺🇸'}
      </span>
      <span className="language-text">
        {t.language.switch}
      </span>
    </button>
  );
};

export default LanguageToggle;
