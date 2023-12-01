<template>
  <div class="router">
    <ul>
      <li v-for="item in routerList">
        <button @click="go(item.name)">{{ item.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router';
const dom = ref()
const router = useRouter()
console.log(useRouter())
function go(name:string){
  console.log(name)
  router.push({
    name
  })
}
function MyRef<T>(value: T) {
  let time: any
  return customRef((tark, trigger) => {
    return {
      get() {
        tark()
        return value
      },
      set(newValue) {
        clearTimeout(time)
        time = setTimeout(() => {
          console.log(1111)
          value = newValue
          time = null
          trigger()
        }, 500)

      }
    }
  })
}
const obj = MyRef<string>('赵增兴')
// ref 深层次的
// shallowRef 浅层次的响应
// ref和shallowRef不能一块写 否则会影响shallowRef造成视图的更新
// triggerRef 强制更新收集的依赖
type M = {
  name: string
}

const routerList: Ref = ref(useRouter().options.routes)
console.log(router)
const Man: Ref = ref({ name: 'zzx' })

const ZZX = shallowRef({ name: 'zzx1' })

const change = () => {
  // 判断是不是ref对象
  // console.log(isRef(Man))
  // console.log(isRef(ZZX))
  // Man.value.name = 'zzs'
  // ZZX.value.name = 'zzx2'
  // triggerRef(ZZX)

  obj.value = '修改'
  console.log(obj);
  console.log(dom.value.innerText);
}
</script>
<style scoped lang='scss' >
.router {
  margin: 0 auto;
  width: 800px;

  ul {
    li {
      list-style: none;
      float: left;
      margin-left: 2%;
      margin-top: 10px;

      button {
        min-width: 200px;
        background: #ffffff;
        line-height: 30px;
        border-radius: 5px;
      }
    }
  }
}
</style>