<template>
  <div class="home-logo">
    <router-link :to="{ name: data.path }" class="home-link">
      <img src="../../assets/images/logo.png" alt="logo" />
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const data = reactive({
  path: "home",
}) 
</script>
<style lang="scss" scoped>
.home-logo {
  margin-top: 8px;
}

.home-link img {
  width: 188px;
}
</style>