import React, { Component } from 'react';
import C from '../1_setstate'
class Parent extends Component {
    render() {
        // 在组件中可以传入函数叫做 renderProps
        return (
            <div>
                <h2>我是父组件</h2>
                <C render={(name) => <B name={name} />}></C>
            </div>
        );
    }
}
class A extends Component {
    state = { name: 'Tom' }

    render() {
        const { name } = this.state
        console.log(this)
        return (
            <div>
                <h2>我是A组件</h2>
                {this.props.render(name)}
            </div>
        );
    }
}
class B extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <h2>我是B组件,{this.props.name}</h2>
            </div>
        );
    }
}

export default Parent;