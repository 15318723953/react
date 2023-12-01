<template>
  <div>
    <form action="">
      <input v-model="form.name" type="text">
      <br>
      <input v-model="form.age" type="text">
      <br>
      <il>
        <li v-for="item in list">{{ item }}</li>

      </il>
      <br>
      <div>{{obj2}}</div>
      <button @click.prevent="add">添加</button>
      <button @click.prevent="submit">点击</button>
      <button @click.prevent="show">查看</button>
      <button @click.prevent="edit">修改</button>
    </form>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, triggerRef, readonly ,shallowReactive} from 'vue';
// ref 支持所有类型 取值,赋值都需要.value
// reactive 只支持引用 Array Object Map S类型 不需要.value 不能直接赋值否则会破坏响应对象
type M = {
  name: string,
  age: number
}
const form = reactive<M>({
  name: '123',
  age: 18
})
let list = reactive<string[]>([])
let zzx = reactive({ name: 'zzx' })
const read = readonly(zzx)
form.age = 16
const obj2 = shallowReactive({
  foo:{
    bar:{
      num:1
    }
  }
})
const submit = () => {
  console.log(form)
}
const add = () => {
  list.push('a')
}
const show = ()=>{
  zzx.name = '213'
  // read.name = '123'
  console.log(read,zzx);
  
}
const edit = ()=>{
  obj2.foo.bar.num++
  console.log(obj2)
}
</script>
<style scoped lang='scss'></style>