import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import fr from '@/locales/fr.json'
import es from '@/locales/es.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'es',
    messages: {
      en,
      fr,
      es
    }
  })

  vueApp.use(i18n)
})