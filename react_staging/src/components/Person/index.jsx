import React, { Component } from 'react';

class Person extends Component {

    addRerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name,age)
    }

    render() {
        return (
            <div>
            <h2>我是person组件</h2>
                <input ref={ c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={ c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addRerson}>添加</button>

                <ul>
                    <li>名字--年龄</li>
                </ul>
            </div>
        );
    }
}

export default Person;