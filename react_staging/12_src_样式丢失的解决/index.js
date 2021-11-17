
// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom'
//引入app页面
import App from './app'

import { BrowserRouter } from 'react-router-dom'

// 更改index.html 将 ./ 改为 /
// 更改index.html 将 ./ 改为 %PUBLIC_URL%
// 更改为hash模式

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'))
//渲染组件到页面