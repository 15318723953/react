<template>
    <div>
      <h1>生命周期</h1>
      <A v-if="flag"></A>
      <button @click="unmounted">销毁</button>
    </div>
</template>

<script setup lang='ts'>
import {ref , reactive} from 'vue'
import A from '../components/A.vue'
const flag = ref<Boolean>(false)
const unmounted = ()=>{
  flag.value = !flag.value
}
</script>
<style scoped lang='scss'></style>