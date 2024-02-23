<template>
    <div class="zzx-box">
        我是父级
        <Teleport to="body">
            <A></A>
        </Teleport>
        
    </div>
    
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import A from '../components/expame2/A.vue';

</script>
<style scoped lang='scss'>
@include b(box){
    width: 100%;
    height: 300px;
    background: #888;
    position: relative;
}
</style>