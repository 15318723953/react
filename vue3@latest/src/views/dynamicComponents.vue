<template>
    <div>
        <div @click="clickTab(item)" class="zzx-tabs" v-for="item in data">
            <div>
                {{ item.name }}
            </div>
        </div>
        <component :is="comId"></component>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, markRaw, shallowRef } from 'vue';
import A from '../components/expame/A.vue';
import B from '../components/expame/B.vue';
import C from '../components/expame/C.vue';
const clickTab = (item: any) => {
    comId.value = item.com
}
const comId = shallowRef(A)
const data = reactive([
    {
        name: 'A组件',
        com: markRaw(A)
    },
    {
        name: 'B组件',
        com: markRaw(B)
    },
    {
        name: 'C组件',
        com: markRaw(C)
    },
])
</script>

<style scoped lang='scss'>
$border: #ccc;

@include b(tabs) {
    width: 200px;
    border: 1px solid $border;
}
</style>