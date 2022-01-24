# Campfire

Basado en [Vitesse](https://github.com/antfu/vitesse)

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)

- 🗂 [Rutas de carpetas](./src/pages)

- 📦 [auto-import de Componentes](./src/components)

- 🍍 [Pinia para estados](https://pinia.esm.dev/)

- 📑 [Layouts](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [Tailwind 3](https://tailwindcss.com/)

- ✨ [Uno CSS](https://github.com/antfu/unocss) con [iconos](https://github.com/antfu/unocss/tree/main/packages/preset-icons/)

- 🌍 [I18n](./locales)

- 🗒 [Markdown Nativo](https://github.com/antfu/vite-plugin-md)

- 🔥 [`<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [auto-import de APIs](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🖨 (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- ⚙️ Testing via [vitest](https://vitest.dev/)

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🦾 TypeScript

- 📑 Server incluido

<br>

## Pre-packed

### UI Frameworks

- [Tailwind CSS 3](https://tailwindcss.com/) + [UnoCss](https://unocss.antfu.me/)

### Iconos

- [Iconify](https://iconify.design) [🔍Icônes](https://icones.netlify.app/)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) for syntax highlighting
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - customizable Prism.js theme using CSS variables
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### Official

- [**vitesse-lite**](https://github.com/antfu/vitesse-lite) - Lightweight version of Vitesse
- [**vitesse-webext**](https://github.com/antfu/vitesse-webext) - WebExtension Vite starter template
- [vitesse-nuxt](https://github.com/antfu/vitesse-nuxt) - Vitesse experience for Nuxt 2


## Apro Barlo

### GitHub Template

[Crear un proyecto con esto como base](https://github.com/Gatobuho/campfire/generate).

```bash
pnpm i
```

## Cosas a hacer

Cuando usas este template recomiendo que sigas estos pasos;

- [ ] Cambiar `name` en `package.json`
- [ ] Cambiar un poco el `App.vue`
- [ ] Cambiar el favicon en `public`
- [ ] Borrar este README

```bash
pnpm run dev
```


### Mantener el template base actualizado

```bash
git remote add template https://github.com/Gatobuho/campfire.git

git fetch --all

git rebase template/main
```

[https://stackoverflow.com/questions/56577184/github-pull-changes-from-a-template-repository](https://stackoverflow.com/questions/56577184/github-pull-changes-from-a-template-repository)

A disfrutat (:

### Build

Construir el App

```bash
pnpm build
```

y despues servis el `dist`.
