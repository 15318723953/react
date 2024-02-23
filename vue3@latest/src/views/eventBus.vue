<template>

<div>
    <A @on-click="getFlag"></A>
    <B :flag="Flag"></B>
</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import A from '../components/expame5/A.vue';
import B from '../components/expame5/B.vue';
// 通过父组件当做桥梁传参
let Flag = ref(false)
const getFlag = (data:boolean)=>{
    Flag.value = data
    console.log(Flag)
}
</script>
<style scoped lang='scss'>

</style>