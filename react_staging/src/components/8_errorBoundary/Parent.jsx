import React, { Component } from 'react';
import Child from './child'
class Parent extends Component {
    state = {
        hasError:'' // 用于标识子组件是否产生错误
    }
    // 当parent的子组件出现报错时候,会触发getDerivedStateFromError调用,并携带错误信息
    // 只是用于生产环境
    // 只能捕获后代组件生命周期的错误
    static getDerivedStateFromError(error){
        console.log(error)
        return {hanError:error}
    }
    // 当组件出现报错是触发
    componentDidCatch(){
        console.log('渲染组件时储存')
    }

    render() {
        return (
            <div>
                <h2>我是parent组件</h2>
                {this.state.hasError?<h2>当前网络不稳定,请稍后再试</h2>:<Child></Child>}
                
            </div>
        );
    }
}

export default Parent;