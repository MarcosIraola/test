<script setup lang="ts">
const data = ref(null)
fetch('/api/hello')
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((json) => {
    console.log(json)
    data.value = json
  })
const { t } = useI18n()
</script>

<template>
  <header v-if="data?.hello" class="text-yellow-600 font-black text-4xl text-center mb-4 uppercase">
    <h1>Hello {{ data?.hello }}</h1>
  </header>
  <section class="grid grid-minmax-15rem gap-4 max-w-300 mx-auto">
    <router-link to="/blogs/main" class="rounded bg-gradient-to-tr from-rose-400 to-rose-500 dark:from-indigo-400 dark:to-indigo-300 h-20 shadow-xl shadow-rose-500/50 dark:shadow-indigo-500/75 text-rose-900 dark:text-indigo-50 px-4 pt-3">
      <h2 class="text-xl font-bold">
        Articulo
      </h2>
      <p> Un pequeño articulo de prueba</p>
    </router-link>

    <div v-for="i in 10" :key="i" class="rounded bg-gradient-to-tr from-rose-400 to-rose-500 dark:from-indigo-400 dark:to-indigo-300 h-20 shadow-xl shadow-rose-500/50 dark:shadow-indigo-500/75" />
    <button
      class="text-sm rounded cursor-pointer hover:bg-slate-50 hover:bg-opacity-25 hover:shadow-md hover:shadow-amber-500/50"
      @click="router.back()"
    >
      {{ t('button.back') }}
    </button>
  </section>
</template>
