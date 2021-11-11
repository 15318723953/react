import React, { Component } from 'react';

class Item extends Component {

  state = {mouse:false}
   
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
  }

  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleDelete = (id)=>{
    return ()=>{
      if(window.confirm('确定删除么')){
        this.props.deleteTodo(id)
      }
     
    }
  }

  render() {
    const {todo} = this.props
    return (
      <div>
        <li style={{background:this.state.mouse?'#add':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
          <label htmlFor="">
            <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)}/>
            <span>{todo.name}</span>
          </label>
          <button style={{display:this.state.mouse?'block':'none'}} onClick = {this.handleDelete(todo.id)}>删除</button>
        </li>
      </div>
    );
  }
}

export default Item;