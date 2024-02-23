<template>

<div>
    {{ Flag }}
</div>

</template>

<script setup lang='ts'>
import { ref, reactive ,inject} from 'vue';
import type { Ref } from 'vue';
import Bus from '../../Bus'
let Flag = ref<boolean>()
// type Props = {
//     flag:boolean
// }
// defineProps<Props>()
    Bus.on("on-click",(data:boolean)=>{
        Flag.value = data
    })
</script>
<style scoped lang='scss'>

</style>