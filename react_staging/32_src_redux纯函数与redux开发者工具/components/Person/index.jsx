import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addRerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {

        return (
            <div>
                <h2>我是person组件</h2>
                <h2>上方求和为{this.props.he}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addRerson}>添加</button>

                <ul>
                    {
                        this.props.personArr.map((item) => {
                            return <li key={item.id}>{item.name} --- {item.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default connect(
    state => ({ personArr: state.personReducer, he: state.countReducer }),
    {
        addPerson: createAddPersonAction
    }
)(Person)