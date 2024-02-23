<template>
    <div>
        <el-button @click="flag = !flag">切换组件</el-button>
        <keep-alive>
            <A v-if="flag"></A>
            <B v-else></B>
        </keep-alive>

    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onActivated ,onDeactivated } from 'vue';
import A from "../components/expame3/A.vue"
import B from "../components/expame3/B.vue"
let flag = ref<boolean>(true)
    onActivated(()=>{
        // keep-allve初始化
    })
    onDeactivated(() =>{
         // keep-allve卸载
    })
</script>
<style scoped lang='scss'></style>