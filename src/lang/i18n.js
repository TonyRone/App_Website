import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './en.json';
import PT from './pt.json';

const resources = {
  US: EN,
  BR: PT,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "BR",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
