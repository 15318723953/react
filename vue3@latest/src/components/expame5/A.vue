<template>
  <div>
    <h1>a组件</h1>
    <button type="button" @click="emitB">派发一个事件</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue';
import Bus from "../../Bus.ts";
// const emit = defineEmits(["on-click"]);
let flag = false;
// const emitB = () => {
//   flag = !flag
//   emit("on-click", flag)
// }
const emitB = ()=>{
  flag = !flag
  Bus.emit('on-click',flag)
}
</script>
<style scoped lang='scss'></style>