import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// אופציונלי: ייבוא קבצי תרגום ישיר
import enCommon from './locales/en/common.json';
import heCommon from './locales/he/common.json';

i18n
  // ➊ מחבר את ה‑detector
  .use(LanguageDetector)
  // ➋ מחבר את react‑i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      he: { common: heCommon }
    },
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    debug: false
  });

export default i18n;
