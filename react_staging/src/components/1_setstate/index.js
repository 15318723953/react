import React, { Component } from 'react';

class index extends Component {
    state = {
        count: 0
    }
    add = () => {
        // 1.获取原来的值
        const { count } = this.state
        // 2. 更新状态 
        // 对象式的setState
        // this.setState({
        //     count: count + 1
        // },()=>{
        //     // 在状态更新完毕,并且视图发生变化后调用
        //     console.log(this.state.count)
        // })
        // // react setState更新状态是一个异步的方法
        // console.log(this.state.count)
        // 函数式的setState
        this.setState((state,props) => {
            console.log(state,props)
            return { count: state.count+1 }
        })
        // 对象式的setState是函数式的setState简写方式
        // 如果新状态不依赖原状态 ==> 使用对象式
        // 如果新状态依赖原状态 ==> 使用函数式
    }
    render() {

        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default index;