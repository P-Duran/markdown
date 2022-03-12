import LanguageDetector from "i18next-browser-languagedetector";
import { en, es } from "./locales";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      es: es,
    },
    ns: ["translations"],
    defaultNS: "translations",
    debug: false,
    fallbackLng: "en",
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
