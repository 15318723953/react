<template>
    <div>
        子集
        <!-- <div>值:{{ title }}</div>
        <div>值:{{ arr }}</div> -->
    </div>
    <!-- <button @click="send">给父组件传值</button> -->
</template>

<script setup lang='ts'>
// 接收父组件传的值
// 非ts模式
// const proprs = defineProps({
//     title:{
//         type:String,
//         default:'默认值',
//     }
// })
//ts模式 ts特有withDefaults
// withDefaults(defineProps<{
//     title: string,
//     arr: number[]
// }>(), {
//     arr: () => [123]
// })
// console.log(proprs)
// 给父组件传值
// const emit = defineEmits(['zzx'])
// const send = () => {
//     emit('zzx','zzx')
// }
// ts方式
// const emit = defineEmits<{
//     (e:'zzx',name:string):void
// }>()
// const send = () => {
//     emit('zzx','zzx')
// }
// 暴露方法
defineExpose({
    name:'zzx',
    open:()=>{
        console.log(1)
    }
})
</script>
<style scoped lang='scss'></style>