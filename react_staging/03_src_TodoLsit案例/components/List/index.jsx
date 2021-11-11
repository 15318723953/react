import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Item from '../Item'
class List extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired
}
  render() {
    const {todos,updateTodo} = this.props
    return (
      <div className='list'>
        <ul>
        {
          todos.map(todo =>{
            return  <Item key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} updateTodo={updateTodo}></Item>
          })
        }
         
        </ul>
      </div>
    );
  }
}

export default List;