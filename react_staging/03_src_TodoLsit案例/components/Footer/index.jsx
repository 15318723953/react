import React, { Component } from 'react';

class Footer extends Component {

    handleCheckAll = (event) =>{
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAll = ()=>{
        this.props.clearAll()
    }
    render() {
        const { todos } = this.props
        //已完成
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        //中个数
        const total = todos.length
        return (
            <div>
                <label >
                    <input type="checkbox" checked = {doneCount === total && total !== 0} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;