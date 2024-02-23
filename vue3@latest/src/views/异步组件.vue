<template>
    <Suspense>
        <template #default>
            <div>
                <SyncVue></SyncVue>
            </div>
        </template>
        <template #fallback>
            <div>
                <skeletonVue></skeletonVue>
            </div>
        </template>
    </Suspense>
</template>

<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue';
import skeletonVue from "../components/expame1/skeleton.vue";
// 第一种书写风格
const SyncVue = defineAsyncComponent(() => import("../components/expame1/sync.vue"))
// 第二种
// const SyncVue = defineAsyncComponent({
//     loadingComponent:() => import("../components/expame1/sync.vue"),
//     errorComponent:'',
// })
</script>
<style scoped lang='scss'></style>