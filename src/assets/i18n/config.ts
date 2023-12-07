import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import frFR from './fr/fr.json'
import enEN from './en/en.json'

const defaultLanguage = 'fr-FR'
export const defaultNamespace = 'default'

export const resources = {
  'en-EN': {
    [defaultNamespace]: enEN,
  },
  'fr-FR': {
    [defaultNamespace]: frFR,
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    defaultNS: defaultNamespace,
    ns: [defaultNamespace],
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  })
