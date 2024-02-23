<template>
    <div class="zzx-content">
        <el-button @click="show = !show">按钮</el-button>

        <!-- <transition name="fade">
            <div v-if="show" class="zzx-box"></div>
        </transition> -->
        <!-- duration 动画时长 -->
        <!-- transition与第三方动画结合 -->
        <!-- <transition :duration="{ enter: 100, leave: 500 }" leave-active-class="animate__animated animate__fadeOut"
            enter-active-class="animate__animated animate__fadeIn">
            <div v-if="show" class="zzx-box"></div>
        </transition> -->
        <!-- <transition @before-enter="EnterFrom" @enter="EnteActive" @after-enter="EnterTo" @enter-cancelled="EnterCancel"
            @before-leave="LeaveFrom" @leave="Leave" @after-leave="LeaveTo" @levae-canceled="LevaeCancel" duration="1000">
            <div v-if="show" class="zzx-box"></div>
        </transition> -->
        <transition appear appear-from-class="from" appear-active-class="active" appear-to-class="to"  >
            <div v-if="show" class="zzx-box"></div>
        </transition>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import gsap from "gsap";

import { an } from 'vitest/dist/types-b7007192';
const show = ref<boolean>(true)
const EnterFrom = (el: any) => {
    console.log("进入之前")
    gsap.set(el, {
        width: 0,
        height: 0
    })
}
const EnteActive = (el: any, done: gsap.Callback) => {
    gsap.to(el, {
        width: 200,
        height: 200,
        onComplete: done
    })
}
const EnterTo = (el: any) => {
    console.log("过度完成")
}
const EnterCancel = (el: any) => {
    console.log("过度效果被打断")
}
const LeaveFrom = (el: any) => {
    console.log("消失之前")

}
const Leave = (el: any, done: gsap.Callback) => {
    console.log("消失过度")
    gsap.to(el, {
        width: 0,
        height: 0,
        onComplete: done
    })
}
const LeaveTo = () => {
    console.log("消失完成")

}
const LevaeCancel = () => {
    console.log("消失被打断")
}
</script>
<style scoped lang='scss'>

@include b(box) {
    width: 200px;
    height: 200px;
    background: #333;
}
.from{
    width: 0;
    height: 0;
}
.active{
    transition: all 1.5s ease;
}
.to{
    width: 200px;
    height: 200px;
}
.fade-enter-from {
    width: 0;
    height: 0;
}

.fade-enter-active {
    transition: all 1.5s ease;
}

.fade-enter-to {
    width: 200px;
    height: 200px;

}

.fade-leave-from {
    width: 200px;
    height: 200px;
}

.fade-leave-active {
    transition: all 1.5s ease;
}

.fade-leave-to {
    width: 0;
    height: 0;
}
</style>