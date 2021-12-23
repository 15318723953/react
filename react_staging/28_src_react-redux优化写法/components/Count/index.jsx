import React, { Component } from 'react';
import count from '../../containers/count';
// 引入store 用于获取redux中的状态

class index extends Component {

    increment = () => {
        const { value } = this.selectNumber
        // 通知redux
        this.props.jia(value * 1)

    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)

    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const { count } = this.props
        if (count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1,500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
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