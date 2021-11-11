// 创建外壳组件

import React, { Component } from 'react'

// 创建并暴露app组件

export default class App extends Component {
    getStudentData = () => {
        axios.get('').then(res =>{

        }).catch(err =>[
            
        ])
    }
    render() {
        return (
            <div className='todoList'>
                <button onClock={this.getStudentData}>
                    点我获取学生数据
                </button>
            </div>
        )
    }
}

