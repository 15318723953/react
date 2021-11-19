import React, { Component } from 'react';
import Detail from './Detail';
import { Link, Route } from 'react-router-dom'

class Message extends Component {
    state = {
        messageArr: [
            { id: 1, message: '消息1' },
            { id: 2, message: '消息2' },
            { id: 3, message: '消息3' }
        ]
    }
    replaceShow = (id, message) => {
        return () => {
            this.props.history.replace({
                pathname: '/home/message/detail',
                state: {
                    id, 
                    message
                }
            })
        }

    }
    pushShow = (id, message) => {
        return () => {
            this.props.history.push({
                pathname: '/home/message/detail',
                state: {
                    id, 
                    message
                }
            })
        }

    }
   
    render() {
        console.log(this.props)
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(item => {
                            return <li key={item.id}>
                                {/* 向路由组件传递params */}
                                { /*  
                                     <Link to={`/home/message/detail/${item.id}/${item.message}`}>{item.message}</Link>
                                */}
                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/detail/?id=${item.id}&message=${item.message}`}>{item.message}</Link> */}

                                {/* 向路由组件传递state参数  replace 打开replace模式*/}
                                <Link to={{ pathname: '/home/message/detail', state: { id: item.id, message: item.message } }}>{item.message}</Link>
                                <button onClick={this.pushShow(item.id, item.message)}>push跳转</button>
                                <button onClick={this.replaceShow(item.id, item.message)}>replace跳转</button>

                            </li>
                        })
                    }
                </ul>
                   
                {/* 声明接收params参数*/}
                {/* <Route path='/home/message/detail/:id/:message' component={Detail}></Route> */}

                {/* search参数无需声明,正常注册即可 */}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}

                {/* state参数无需声明,正常注册即可 */}
                <Route path='/home/message/detail' component={Detail}></Route>
            </div>
        );
    }
}

export default Message;