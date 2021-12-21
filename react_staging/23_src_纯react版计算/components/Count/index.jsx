import React, { Component } from 'react';

class index extends Component {
    state = {
        count: 0
    }

    increment = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({
            count: count + +value
        })
    }
    decrement = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({
            count: count - +value
        })
    }
    // 奇数再加
    incrementIfOdd = () => {

        const { value } = this.selectNumber
        const { count } = this.state
        if (count % 2 !== 0) {
            this.setState({
                count: count + +value
            })
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        setTimeout(() => {
            this.setState({
                count: count + +value
            })
        }, 1000)

    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
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