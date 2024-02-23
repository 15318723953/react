<template>
    <!-- <div class="zzx-content">
        <el-button @click="Add">ADD</el-button>
        <el-button @click="Pop">POP</el-button>
        <div class="zzx-warp"> -->
            <!-- tag="section" 可以在transition多套一层 -->
            <!-- 使用方法与transition一致 -->
            <!-- <transition-group :duration="1000" leave-active-class="animate__animated animate__fadeOut"
                enter-active-class="animate__animated animate__fadeIn">
                <div class="zzx-item" v-for="item in list" :key="item">{{ item }}</div>
            </transition-group>
        </div>
    </div> -->
    <!-- <div>
        <el-button @click="random">随机排列</el-button>
        <transition-group move-class="mmm" tag="div" class="zzx-warp">
            <div class="zzx-item" v-for="item in list" :key="item.id">
            {{ item.number }}</div>
        </transition-group>
    </div> -->
    <div>
        <el-input type="number" step="20" v-model="num.current"></el-input>
        <div>
            {{ num.tweenedNumber.toFixed() }}
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive ,watch} from 'vue';

// const list = reactive<number[]>([1, 2, 3, 4, 5, 6, 7, 8])
// const Add = () => {
//     list.push(list.length + 1)
// }
// const Pop = () => {
//     list.pop()
// }
// import _ from 'lodash'
// let list = ref(Array.apply(null,{length:81} as number[]).map((_,index) =>{
//     return {
//         id:index,
//         number:(index % 9) + 1
//     }
// }))
// const random = ()=>{
//     list.value = _.shuffle(list.value)
// }
// console.log(list)
import gsap from 'gsap';
const num = reactive({
    current:0,
    tweenedNumber:0
})
watch(()=>num.current,(newV,oldV)=>{
    gsap.to(num,{
        tweenedNumber:newV,
        duration:1
    })
})
</script>
<style scoped lang='scss'>
// @include b(warp) {
//     display: flex;
//     flex-wrap: wrap;
//     word-break: break-all;
//     border: 1px solid #ccc;

//     @include b(item) {
//         margin: 10px;
//         font-size: 30px;
//     }
// }
// @include b(warp){
//     display: flex;
//     flex-wrap: wrap;
//     width: calc(25px*9 + 9px);
//     @include b(item){
//         width: 25px;
//         height: 25px;
//         border: 1px solid #ccc;
//         text-align: center;
//     }
// }
// .mmm{
//     transition: all 1s;
// }
</style>