"use client";
import i18next from 'i18next';
import {initReactI18next}  from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";

i18next.use(LanguageDetector);

i18next.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: "pt",

    resources: {
        en: en,
        pt: pt,
        es: es,
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
