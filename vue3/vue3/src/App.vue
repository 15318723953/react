<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderIndex from './components/headerIndex.vue'
</script>

<template>
  
  <main>
    <HeaderIndex></HeaderIndex>
    <RouterView />
  </main>

  
</template>

<style scoped>

</style>
