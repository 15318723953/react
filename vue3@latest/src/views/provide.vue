<template>

<div>
    <h1>根组件</h1>
    <label for="">
        <input type="radio" value="red" name="color" v-model="colorVal">
        红色
    </label>
    <label for="">
        <input type="radio" value="pink" name="color" v-model="colorVal">
        粉色
    </label>
    <label for="">
        <input type="radio" value="yellow" name="color" v-model="colorVal">
        黄色
    </label>
</div>
<div class="zzx-box">

</div>
<hr>
<A></A>
</template>

<script setup lang='ts'>
import { ref, reactive , provide ,readonly} from 'vue';
import A from "../components/expame4/A.vue";
const colorVal = ref("")
// 不想被修改可以添加readonly
provide("color",readonly(colorVal) )
</script>
<style scoped lang='scss'>
@include b(box){
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(colorVal);
}
</style>