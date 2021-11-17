
// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom'
//引入app页面
import App from './app'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'))
//渲染组件到页面