<template>
    <div class="zzx-sync">
        sadaa
        <div class="zzx-sync-content">
            <div><img :src="data.data.url" alt=""></div>
            <div class="zzx-sync-pop">
                <div>{{ data.data.name }}</div>
                <div>{{ data.data.age }}</div>
            </div>
        </div>
        <hr>
        <div>{{ data.data.desc }}</div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { axios } from '@/server/axios';

interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string
    }
}

const data = await axios.get<Data>('./data.json')
console.log(data)
</script>
<style scoped lang='scss'>
@include b(sync) {
    width: 700px;
    height: 100px;
    background: #333;
}
</style>