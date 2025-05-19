import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import tmTranslation from './locales/tm/translation.json';
import ruTranslation from './locales/ru/translation.json';

// the translations
const resources = {
  en: {
    translation: enTranslation
  },
  tm: {
    translation: tmTranslation
  },
  ru: {
    translation: ruTranslation
  }
};

i18n
  // detect user language
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;