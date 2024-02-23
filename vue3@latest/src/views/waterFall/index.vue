<template>
    <div>
        父级

    </div>
    <!-- <A :title="name" ref="waterFall" :arr="[1, 2, 3]" @zzx="getName"></A> -->
    <pubu :list="list"></pubu>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
// import A from './a.vue'
import pubu from './pubu.vue'
const list = [
    {
        height: 300,
        background: '#cac'
    },
    {
        height: 500,
        background: '#cbc'
    },
    {
        height: 400,
        background: '#123'
    },
    {
        height: 200,
        background: '#133'
    },
    {
        height: 400,
        background: '#143'
    },
    {
        height: 500,
        background: '#153'
    },
    {
        height: 900,
        background: '#163'
    },
    {
        height: 200,
        background: '#173'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 300,
        background: '#cac'
    },
    {
        height: 500,
        background: '#cbc'
    },
    {
        height: 400,
        background: '#123'
    },
    {
        height: 200,
        background: '#133'
    },
    {
        height: 400,
        background: '#143'
    },
    {
        height: 500,
        background: '#153'
    },
    {
        height: 900,
        background: '#163'
    },
    {
        height: 200,
        background: '#173'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 300,
        background: '#cac'
    },
    {
        height: 500,
        background: '#cbc'
    },
    {
        height: 400,
        background: '#123'
    },
    {
        height: 200,
        background: '#133'
    },
    {
        height: 400,
        background: '#143'
    },
    {
        height: 500,
        background: '#153'
    },
    {
        height: 900,
        background: '#163'
    },
    {
        height: 200,
        background: '#173'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 300,
        background: '#cac'
    },
    {
        height: 500,
        background: '#cbc'
    },
    {
        height: 400,
        background: '#123'
    },
    {
        height: 200,
        background: '#133'
    },
    {
        height: 400,
        background: '#143'
    },
    {
        height: 500,
        background: '#153'
    },
    {
        height: 900,
        background: '#163'
    },
    {
        height: 200,
        background: '#173'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 300,
        background: '#cac'
    },
    {
        height: 500,
        background: '#cbc'
    },
    {
        height: 400,
        background: '#123'
    },
    {
        height: 200,
        background: '#133'
    },
    {
        height: 400,
        background: '#143'
    },
    {
        height: 500,
        background: '#153'
    },
    {
        height: 900,
        background: '#163'
    },
    {
        height: 200,
        background: '#173'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 300,
        background: '#cac'
    },
    {
        height: 500,
        background: '#cbc'
    },
    {
        height: 400,
        background: '#123'
    },
    {
        height: 200,
        background: '#133'
    },
    {
        height: 400,
        background: '#143'
    },
    {
        height: 500,
        background: '#153'
    },
    {
        height: 900,
        background: '#163'
    },
    {
        height: 200,
        background: '#173'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
    {
        height: 300,
        background: '#cac'
    },
    {
        height: 500,
        background: '#cbc'
    },
    {
        height: 400,
        background: '#123'
    },
    {
        height: 200,
        background: '#133'
    },
    {
        height: 400,
        background: '#143'
    },
    {
        height: 500,
        background: '#153'
    },
    {
        height: 900,
        background: '#163'
    },
    {
        height: 200,
        background: '#173'
    },
    {
        height: 600,
        background: '#183'
    },
    {
        height: 300,
        background: '#193'
    },
]
// let name = 'zzx'
// const getName = (name) => {
//     console.log(name)
// }
// const waterFall = ref<InstanceType<typeof A>>()
onMounted(() => {
    // console.log(waterFall.value?.name)
    // waterFall.value?.open()
})



</script>
<style scoped lang='scss'></style>