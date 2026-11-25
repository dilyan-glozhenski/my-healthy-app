import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import en from "./locales/en.json";
import bg from "./locales/bg.json";

const supported = ["en", "bg"];
const deviceLang = getLocales()[0]?.languageCode ?? "en";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, bg: { translation: bg } },
  lng: supported.includes(deviceLang) ? deviceLang : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

console.log("i18n initialized:", i18n.isInitialized);