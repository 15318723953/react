// 创建外壳组件

import React, { Component } from 'react'
// import SetState from './components/1_setstate'
// import LazyLoda from './components/2_lazyLoad'
// import Hooks from './components/3-Hooks'
// import Fragment from './components//4_fragment'
import Context from './components/5_context' 
export default class App extends Component {
    render() {
        return (
            <div>
                {/* <SetState x={101}></SetState> */}
                {/* <LazyLoda></LazyLoda>*/}
                { /* <Hooks></Hooks> */}
                {/* <Fragment /> */} 
                <Context></Context>
            </div>
        )
    }
}
