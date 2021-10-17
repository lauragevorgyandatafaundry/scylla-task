import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./localization/english.json";

const resources = {
  en: {
    translation: en
  },
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    resources,
    debug: false,
  });

export default i18n;
