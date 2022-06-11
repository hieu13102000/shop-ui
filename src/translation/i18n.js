import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation';
import translationVI from '../locales/vi/translation';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
};

i18n
.use(detector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: 'vi',
    debug: true,
    interpolation: {
        escapeValue: false // not needed for react as it escapes by default
    }
});

export default i18n;
