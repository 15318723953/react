// 该文件用于汇总所有的reducer为一个总的reducer

// 引入为count组件服务的reducer
import { combineReducers } from 'redux'
import countReducer from './count'
import personReducer from './person'


const allReducer = combineReducers({
    countReducer,
    personReducer
})

export default allReducer