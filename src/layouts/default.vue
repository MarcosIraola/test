<script setup lang="ts">
const APP_TITLE = import.meta.env.VITE_APP_NAME
const isDark = useDark()
const toggleDark = useToggle(isDark)
const { t, locale } = useI18n()
const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>
<template>
  <el-container class="h-full text-stone-700 bg-stone-50 dark:text-stone-200  dark:bg-stone-700">
    <el-header class="bg-gradient-to-r from-rose-500 to-amber-400 dark:from-rose-800 dark:to-indigo-500 flex justify-center items-center">
      <nav class="flex items-center justify-between max-w-300 mx-auto w-full text-stone-600 dark:text-stone-50">
        <router-link to="/" class="flex items-center flex-shrink-0 py-2">
          <h1 class="font-semibold text-xl tracking-tight flex items-center gap-2">
            <div class="i-heroicons-outline:fire" />
            <strong>{{ APP_TITLE || 'Campfire' }}</strong>
          </h1>
        </router-link>
        <ul class="flex justify-end items-center gap-4 text-2xl">
          <li>
            <button type="button" :title="t('button.toggle_dark')" @click="toggleDark()">
              <i class="i-heroicons-outline:moon dark:i-heroicons-outline:sun"></i>
            </button>
          </li>
          <li>
            <button type="button" :title="t('button.toggle_langs')" @click="toggleLang()">
              <i class="i-heroicons-outline:translate"></i>
            </button>
          </li>
          <li>
            <button type="button" :title="t('button.toggle_langs')" @click="toggleLang()">
              <i class="i-heroicons-outline:user-circle"></i>
            </button>
          </li>
        </ul>
      </nav>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
