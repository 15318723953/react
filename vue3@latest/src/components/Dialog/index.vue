<template>
    <div>
        <header class="zzx-header">
            <slot name="herder"></slot>
        </header>
        <main class="zzx-main">
            <div v-for="item in data"> 
                <slot :data="item"></slot>
            </div>
            
        </main>
        <footer class="zzx-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
    
<script setup lang='ts'>

import { ref, reactive } from 'vue';

type names = {
    name: string,
    age: number
};

const data = reactive<names[]>([
    {
        name: 'zzx1',
        age: 1231
    },
    {
        name: 'zzx2',
        age: 1232
    },
    {
        name: 'zzx3',
        age: 1233
    },
])

</script>
<style scoped lang='scss'>
@include b(header) {
    height: 200px;
    background: red;
    color: #fff;
}

@include b(main) {
    height: 200px;
    background: rgb(0, 162, 255);
    color: #fff;
}

@include b(footer) {
    height: 200px;
    background: rgb(123, 255, 0);
    color: #fff;
}
</style>