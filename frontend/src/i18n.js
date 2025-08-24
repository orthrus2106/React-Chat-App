import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './locales'

const i18n = i18next.createInstance()

export const initI18n = async (language = 'en') => {
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: language,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })

  return i18n
}

export default i18n
