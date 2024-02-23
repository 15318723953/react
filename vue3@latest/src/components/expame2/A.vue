<template>
    <div class="zzx-box1">
        我是子集
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>
<style scoped lang='scss'>
    @include b(box1) {
    width: 400px;
    height: 400px;
    background: #000;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-200px) translateY(-200px);
    
}
</style>
