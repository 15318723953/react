
// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom'
//引入app页面
import App from './app.jsx'
import store from './redux/store'


ReactDOM.render(<App />, document.querySelector('#root'))
//渲染组件到页面

// 检测redux种状态的改变,如果redux的状态改变,那么重新渲染app组件
store.subscribe(()=>{
    ReactDOM.render(<App />, document.querySelector('#root'))
})