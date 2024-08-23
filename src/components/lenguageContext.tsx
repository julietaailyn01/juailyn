import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../locales/en.json';
import esMessages from '../locales/es.json';

type Locale = 'en' | 'es';

const messages: Record<Locale, Record<string, string>> = {
  en: enMessages as Record<string, string>,
  es: esMessages as Record<string, string>,
};

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('es');

  const switchLanguage = (language: Locale) => {
    setLocale(language);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
