import React, { Component } from 'react';


import List from './components/List'
import Search from './components/Search';

import './app.css'
class App extends Component {
    state = {
        list:[],
        isFirst:true, //是否为第一次打开页面
        isLoading:false, //标识是否处于加载中
        err:'', //储存请求相关的错误信息
    }
    // 更新app的state
    updataAppState = (data)=>{
        this.setState(data)
    }
    
    render() {
        return (
            <div className='app'>
                <Search updataAppState = {this.updataAppState}></Search>
                <List {...this.state}></List>
            </div>
        );
    }
}

export default App;