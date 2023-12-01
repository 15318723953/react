<template>
    <div>
        case1: <input id="ipt" type="text" v-model="message">
        <hr>
        case2: <input type="text" v-model="message2">
        <br>
        <button @click='stopWatch'>停止监听</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from "vue";
let message = ref<string>('赵增兴')
let message2 = ref<string>('赵ss')
// 一进页面就会调用
const stopWatch = ()=>{
    stop()
}
const stop = watchEffect((oninvalidate)=>{
    console.log(message.value)
    oninvalidate(()=>{
        // 先调用方法后触发 可以先处理一些事物
        console.log('before')
    })
},{
    flush:'post',  // dom加载完之后触发
    onTrigger(e){  // 帮助调试
        debugger  
    }
})

</script>
<style scoped lang='scss'></style>