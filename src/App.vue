<script setup lang="ts">
const APP_TITLE = import.meta.env.VITE_APP_NAME
useHead({
  title: APP_TITLE,
  meta: [
    { name: 'description', content: 'Un template completo basado en Vitesse a todo trapo.' },
  ],
})
</script>

<template>
  <router-view class="min-h-screen" />
</template>
