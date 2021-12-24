
import { ADD_PERSON } from '../constant'

const initState = [
    { id: '001', name: 'tom', age: 80 }
]

// 纯函数的定义
// 1.一类特别函数:只要是同样的输入,必定得到同样的输出
// 2.必须遵守一些约束
    // 1. 不得改写参数数据
    // 2. 不会产生任何副作用,列如网络请求,输入和输出设备
    // 3. 不能调用Date.now()或者Math.random()等不纯的方法
// 3. redux的reducer函数必须是一个纯函数
export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return initState;
    }
}