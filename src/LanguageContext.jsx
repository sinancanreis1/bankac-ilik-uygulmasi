import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedSettings = localStorage.getItem('bankAppSettingsData');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      return parsed.language === 'English' ? 'en' : 'tr';
    }
    return 'tr';
  });

  const [currency, setCurrency] = useState(() => {
    const savedSettings = localStorage.getItem('bankAppSettingsData');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      return parsed.currency || 'TRY (₺)';
    }
    return 'TRY (₺)';
  });

  // Profil sayfasından "English" seçilince çalışacak
  const changeLanguage = (langStr) => {
    const code = langStr === 'English' ? 'en' : 'tr';
    setLanguage(code);
    
    // settingsi de güncelleyelim ki tutarlı kalsın
    const savedSettings = localStorage.getItem('bankAppSettingsData');
    const parsed = savedSettings ? JSON.parse(savedSettings) : {};
    parsed.language = langStr;
    localStorage.setItem('bankAppSettingsData', JSON.stringify(parsed));
  };

  const changeCurrency = (currStr) => {
    setCurrency(currStr);
    const savedSettings = localStorage.getItem('bankAppSettingsData');
    const parsed = savedSettings ? JSON.parse(savedSettings) : {};
    parsed.currency = currStr;
    localStorage.setItem('bankAppSettingsData', JSON.stringify(parsed));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const formatCurrency = (amountInTRY) => {
    let value = parseFloat(amountInTRY);
    let symbol = '₺';
    
    if (currency === 'USD ($)') {
      value = value / 32.5;
      symbol = '$';
    } else if (currency === 'EUR (€)') {
      value = value / 35.2;
      symbol = '€';
    }

    return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'tr-TR', {
      style: 'currency',
      currency: currency === 'USD ($)' ? 'USD' : currency === 'EUR (€)' ? 'EUR' : 'TRY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, currency, changeCurrency, t, formatCurrency }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
