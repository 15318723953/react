<template>
    <div>
        我是组件
        <div ref="div">{{ str }}</div>
        <button ref="sss" @click="change">修改str</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, onBeforeMount, onUnmounted, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount , onRenderTracked, onRenderTriggered } from 'vue'
// beforeCreate created setup语法糖模式是没有这两个生命周期的 setup去代替
// onBeforeMount 读不到dom onUnmounted可以读到dom
// onBeforeUpdate 获取的是更新之前的dom  onUpdated 获取的是更新之后的dom
console.log('setup')
// 创建
const str = ref<string>('zzx')
const div = ref()
const sss = ref()
const change = () => {
    str.value = 'ssss'
}
onBeforeMount(() => {
    console.log('创建之前')
})
onMounted(() => {
    console.log('创建完成', div, sss)
})
onBeforeUpdate(() => {
    console.log('更新之前',div.value?.innerText)
})
onUpdated(() => {
    console.log('更新完成',div.value?.innerText)
})
onBeforeUnmount(() => {
    console.log('销毁之前')
})
onUnmounted(() => {
    console.log('创建完成')
})
onRenderTracked((e)=>{
    console.log(e)
    // 调试
})
onRenderTriggered((e)=>{
    console.log(e)
})
</script>
<style scoped lang='scss'></style>