// 创建外壳组件

import React, { Component } from 'react'
import Count from './components/Count'
import Person from './components/Person'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递参数 */}
                <Count></Count>
                <hr />
                <Person></Person>
            </div>
        )
    }
}

