// 创建外壳组件

import React, { Component } from 'react'
import store from './redux/store'
import Count from './containers/count'

export default class App extends Component {
    render() {
        return (
            <div>
            {/* 给容器组件传递参数 */}
                <Count store={store}></Count>
            </div>
        )
    }
}

