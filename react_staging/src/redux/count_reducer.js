
//  1.该文件是创建一个为count组件服务的reducer,reducer的本质就是一个函数
//  2.reducer函数会接收两个参数,分别为:之前的状态(preState)现在的对象(action)
import { INCREMENT, DECREMENT } from './constant'
const initState = 0
export default function countReducer(preState = initState, action) {
    // 从action中获取对象type,data
    console.log(preState, action)
    const { type, data } = action;

    // 根据type决定如何加工对象
    switch (type) {
        case INCREMENT: { // 如果是加
            return preState + +data
        };
        case DECREMENT: {  // 如何是减
            return preState - +data
        };
        default:
            return preState
    }
}