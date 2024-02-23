<template>
    <div @click.stop="clickTap(item,$event)" v-for="item in data" class="zzx-tree">
        <input v-model="item.checked" type="checkbox">
        <span>{{ item.checked }}</span>
        <Tree v-if="item?.children?.length" :data="item?.children"></Tree>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}
defineProps<{
    data?: Tree[]
}>()
const clickTap = (item:any,event:any)=>{
    console.log(item,event)
}
</script>
<style scoped lang='scss'>
@include b(tree){
    margin-left:10px;
}
</style>