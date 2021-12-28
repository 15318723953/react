import React, { Component } from 'react';
// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// 定义UI组件
class Count extends Component {

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
        this.props.jiaAsync(value * 1, 500)
    }
    render() {
        return (
            <div>
                <h2>我的count组件</h2>
                <h4>当前求和为:{this.props.count}</h4>
                <h4>当前下方人数为:{this.props.renshu.length}</h4>
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
//创建并暴露一个Count组件
export default connect(
    state => ({ count: state.countReducer, renshu: state.personReducer }),
    // mapDispatchToProps的精简写法
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(Count)