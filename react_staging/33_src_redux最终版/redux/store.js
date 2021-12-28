

// 改文件专门用于暴露一个store对象,整个应用只有一个store对象
// 引入createStore 用于创建store
import { createStore, applyMiddleware } from 'redux'
// 引入汇总后的reducer
import allReducer from './reducers'
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'
// 汇总reducer
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// redux 开发者工具
// 需要先下载一个库 redux-devtools-extension

// 暴露store 
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
// 不使用redux开发者工具版本
// export default createStore(allReducer, applyMiddleware(thunk))
