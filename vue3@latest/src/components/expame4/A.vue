<template>
  <div>
    <h1>父组件</h1>
    <div class="zzx-box"></div>
  </div>
  <B></B>
</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue';
import type { Ref } from 'vue';
const color = inject<Ref<string>>("color")
import B from "./B.vue";
</script>
<style scoped lang='scss'>
@include b(box){
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}</style>