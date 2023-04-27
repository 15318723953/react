<script setup lang="ts">
  import {reactive , ref} from 'vue'
  import type {Ref} from 'vue'
  interface Data {
    count:number,
    message:string
  }
  const data:Data = reactive({
    count:1,
    message:'123'
  })
  const data1: Ref<string | number>= ref(0)
 
</script>

<template>
  <main>
    <button @click="data.count++">{{ data.count }}</button>
  </main>
</template>
