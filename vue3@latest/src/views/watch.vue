<template>
    <div>
        case1: <input type="text" v-model="message">
        <hr>
        case2: <input type="text" v-model="message2">
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from "vue";
let message = ref<string>('赵增兴')
let message2 = ref<string>('赵ss')
watch([message,message2], (newValue, oldValue) => {
    console.log(newValue, oldValue)
},{
    deep:true, // 要监听深度对象的话要开启deep属性
    immediate:true, // 立即执行一次
    flush:'pre' // pre 组件更新之前调用 sync 同步执行 post组件更新之后执行
})

</script>
<style scoped lang='scss'></style>