import React, { Component } from 'react';
// 引入store 用于获取redux中的状态
import store from '../../redux/store'

class index extends Component {

    // componentDidMount() {
    //     // 检测redux中的状态变化,只要变化,就调用render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const { value } = this.selectNumber
        // 通知redux
        store.dispatch({
            type: 'increment',
            data: value
        })

    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({
            type: 'decrement',
            data: value
        })
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch({
                type: 'increment',
                data: value
            })
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({
                type: 'increment',
                data: value
            })
        }, 1000)

    }
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={c => this.selectNumber = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>&nbsp;
            </div>
        );
    }
}

export default index;