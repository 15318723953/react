// 创建外壳组件

import React, { Component } from 'react'
import './app.css'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
// 创建并暴露app组件

export default class App extends Component {
    // 初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛吃', done: true },
        ]
    }
    // 用于添加一个tudo
    add = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({
            todos: newTodos
        })
    }
    // 用于更新一个对象
    updateTodo = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })
        this.setState({
            todos: newTodos
        })
    }
    // 删除已完成
    del = () => {

    }
    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        console.log(newTodos)
        this.setState({
            todos: newTodos
        })
    }
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({
            todos: newTodos
        })
    }
    clearAll = () => {
        const { todos } = this.state;
        const newTodos = todos.filter(todoObj => {
            return !todoObj.done
        })
        this.setState({
            todos: newTodos
        })
    }
    render() {
        return (
            <div className='todoList'>
                <Header add={this.add}></Header>
                <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                <Footer todos={this.state.todos} del={this.del} checkAllTodo={this.checkAllTodo} clearAll={this.clearAll}></Footer>
            </div>
        )
    }
}

