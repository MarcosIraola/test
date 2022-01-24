<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-stone-200 bg-stone-200 dark:bg-stone-800">
    <div class="text-8xl i-mdi:all-inclusive" />
    <router-view />
    <div>
      <button
        class="border rounded-xl shadow shadow-teal-300/50 dark:shadow-stone-200/50 hover:shadow-xl px-8 py-2 m-3 text-sm mt-8 transition"
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
