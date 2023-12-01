<template>
    <div>{{ zzx }}</div>
    <br>
    <div>
        {{ like }}
    </div>
    <!-- <div>{{ name }} === {{ age }} === {{ like }}</div> -->
    <br>
    <button @click="change">修改</button>
</template>

<script setup lang='ts'>
import { toRef, reactive, toRaw ,toRefs} from 'vue'
//toRef 只能修改响应式对象的值 非响应式是无效的
const zzx = reactive({ name: 'zzx', age: 23, like: 'jk' })
// toRefs 进行ref的解构
// const toRefs = <T extends object>(object: T) => {
//     const map: any = {}
//     for (let key in object) {
//         map[key] = toRef(object, key)
//     }
//     return map
// }
// const {name,age} = toRefs(zzx)
const like = toRef(zzx, 'like')
const change = () => {
    // zzx.like = '洛丽塔'
    // console.log(zzx)
    // like.value = 'dasd'
    // toRaw 去除ref包装
    console.log(zzx,toRaw(zzx))

}
</script>
<style scoped lang='scss'></style>