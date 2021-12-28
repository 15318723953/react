
// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom'
//引入app页面
import App from './app.jsx'
import store from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
//渲染组件到页面

// 检测redux种状态的改变,如果redux的状态改变,那么重新渲染app组件
// 当在用react-redux不需要 store.subscribe去监听reducer的数据变化
// store.subscribe(()=>{
//     ReactDOM.render(<App />, document.querySelector('#root'))
// })