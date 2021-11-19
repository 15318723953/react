import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
    go = ()=>{
        this.props.history.goForward()
    }
    back = ()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <h2>切换路由</h2>
                <button onClick = {this.go}>前进</button>
                <button onClick = {this.back}>后退</button>
            </div>
        );
    }
}
// withRouter可以加工一般组件,让一般组件具备路由组件特有的API
// withRouter的返回值是一个新组件
export default withRouter(Header);