import { createI18n } from 'vue-i18n'
import { UserModule } from '~/types'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)
// const messages = Object.fromEntries(
//   Object.entries(
//     import.meta.globEager('../../locales/*.json'))
//     .map(([key, value]) => {
//       return [key.slice(14, -5), value.default]
//     }),
// )

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_LANG || 'en',
    messages,
  })

  app.use(i18n)
}
