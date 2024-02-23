<template>

<div>
    <Dialog>
        <!-- <template v-slot="{data}">
            <div>
                匿名插槽
                {{data}}
            </div>
        </template> -->
        <!-- <template #default="{data}">
            <div>
                匿名插槽
                {{data}}
            </div>
        </template>
        <template #herder>
            <div>
                具名插槽
            </div>
        </template>
        <template #footer>
            <div>
                具名插槽
            </div>
        </template> -->
        <!-- 动态插槽 -->
        <template #[name]>
            <div>
                我在那
            </div>
        </template>
    </Dialog>
</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import Dialog from '../components/Dialog/index.vue';
let name = ref('footer')
</script>
<style scoped lang='scss'>

</style>