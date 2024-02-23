<template>
    <div>
        <card></card>
        <Tree :data="data"></Tree>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
// import card from '../components/expame/card.vue';
import  Tree from '../components/expame/Tree.vue'
interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}
const data = reactive<Tree[]>([
    {
        name: '1',
        checked: false,
        children: [
            {
                name: '1-1',
                checked: false
            }
        ]
    },
    {
        name: '2',
        checked: false
    },
    {
        name: '3',
        checked: false,
        children: [
            {
                name: '3-1',
                checked: false,
                children: [
                    {
                        name: '3-1-1',
                        checked: false,
                    },
                    {
                        name: '3-1-2',
                        checked: false,
                    }
                ]
            }
        ]
    },
])
</script>
<style scoped lang='scss'></style>