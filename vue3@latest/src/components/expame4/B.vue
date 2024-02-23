<template>

<div>
    <h1>子组件</h1>
    <div class="zzx-box">

    </div>
    <el-button @click="changeColor">修改颜色</el-button>
</div>

</template>

<script setup lang='ts'>
import { ref, reactive ,inject} from 'vue';
import type { Ref } from 'vue';
const color = inject<Ref<string>>("color")
const changeColor = ()=>{
    color!.value = "yellow"
}
</script>
<style scoped lang='scss'>
@include b(box){
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>