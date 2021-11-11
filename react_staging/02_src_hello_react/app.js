// 创建外壳组件

import React,{Component} from 'react'

import Hello from './components/Hello/hello.jsx'
import Welcome from './components/Welcome/Welcome.jsx'
// 创建并暴露app组件

export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome></Welcome>
            </div>
        )
    }
}

