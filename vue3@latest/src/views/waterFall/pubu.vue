<template>
    <div class="zzx-wraps">
        <div v-for="item in waterList"
            :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px' }"
            class="zzx-wraps__content">

        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive } from 'vue';
const proprs = defineProps<{
    list: any[]
}>()
const waterList = reactive<any[]>([])
const heightList:number[] = []
const init = () => {
    const width = 130;
    const x = document.body.clientWidth
    const column = Math.floor(x / width)
    for (let i = 0; i < proprs.list.length; i++) {
        if (i < column) {
            proprs.list[i].left = i * width
            proprs.list[i].top = 20
            waterList.push(proprs.list[i])
            heightList.push(proprs.list[i].height)
        }else{
            let current = heightList[0]
            let index = 0;
            heightList.forEach((h,i) =>{
                if(current > h){
                    current = h,
                    index = i
                }
            })
            proprs.list[i].top = current + 40
            proprs.list[i].left = index * width
            heightList[index] = heightList[index] + proprs.list[i].height + 20
            waterList.push(proprs.list[i])
        }
    }
}
onMounted(() => {
    init()
})
</script>
<style scoped lang='scss'>
@include b(wraps) {
    @include bfc;
    overflow: auto;
    @include e(content) {
        position: absolute;
        width: 120px;
    }
}
</style>