

// 改文件专门用于暴露一个store对象,整个应用只有一个store对象
// 引入createStore 用于创建store
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'
// 汇总reducer
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// redux 开发者工具
// 需要先下载一个库 redux-devtools-extension

const allReducer = combineReducers({
    countReducer,
    personReducer
})
// 暴露store 
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
