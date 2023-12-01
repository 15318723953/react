<template>
    <!-- <div>
    <div>
        姓: <input v-model="firstName" type="text">
    </div>
    <div>
        名: <input v-model="lastName" type="text">
    </div>
    <div>
        姓名 :{{ name }}
    </div>
    <div>
        <button @click="changeName"> 修改名字</button>
    </div>
</div> -->

    <div>
        <input v-model="keyWord" type="text"  placeholder="搜索">
    </div>
    <div style="margin-top: 20xp;"></div>
    <table style="width: 500px;" border cellpadding="0" cellspacing="0">
        <thead>
            <tr style="">
                <th>物品名称</th>
                <th>物品单价</th>
                <th>物品数量</th>
                <th>物品总价</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in searchData">
                <td align="center">{{ item.name }}</td>
                <td align="center">{{ item.price }}</td>
                <td align="center">
                    <button @click="item.num > 1 ? (item.num--) : null">-</button>
                    {{ item.num }}
                    <button @click="item.num < 99 ? (item.num++) : null">+</button>
                </td>
                <td align="center">{{ item.num * item.price }}</td>
                <td align="center"><button @click="del(index)">删除</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">
                    总价: {{ total }}
                </td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup lang='ts'>
import { ref, computed, reactive } from 'vue';
let firstName = ref('张')
let lastName = ref('为')
// 1.选项式写法 支持一个对象传入get函数以及set函数自定义操作
// let name = computed<string>({
//     get(){
//         return firstName.value + lastName.value
//     },
//     set(newValue){
//         // return newValue
//         [firstName.value,lastName.value] = newValue.split('-')
//     }
// })
// const changeName = ()=>{
//     name.value = 'z-zx'
// }
// 2.函数式写法 不允许修改值
// let name = computed(()=>{
//     return firstName.value + lastName.value
// })
let keyWord = ref<string>('')
interface Data {
    name: string,
    price: number,
    num: number
}
let data = reactive<Data[]>([
    {
        name: '阿诗丹顿',
        price: 500,
        num: 1
    },
    {
        name: '发发呆',
        price: 500,
        num: 1
    },
    {
        name: '更舒服的',
        price: 500,
        num: 1
    },
    {
        name: '224啊',
        price: 500,
        num: 1
    },
    {
        name: '阿诗丹顿',
        price: 500,
        num: 1
    },
])
const searchData = computed(()=>{
    return data.filter(item =>{
        // includes判断一个数组是否包含一个指定的值
        return item.name.includes(keyWord.value)
    })
})
const total = computed(()=>{
    return data.reduce((prev: number, next: Data) => {
        return prev + next.num * next.price
    }, 0)
})
const del = (index:number)=>{
    data.splice(index,1)
}
</script>
<style scoped lang='scss'></style>