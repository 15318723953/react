import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
    search = () => {
        // 获取用户的输入
        this.props.updataAppState({isFirst:false,isLoading:true})
        // const {keyWordElement:{value}} = this;// 解构赋值的连续写法
        const { keyWordElement: { value: data } } = this;// 解构赋值的连续写法并且重命名
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${data}`).then(res => {
            this.props.updataAppState({isLoading:false,list:res.data.items})
        }).catch(err =>{
            this.props.updataAppState({isLoading:false,err:err.message})
        })

    }


    render() {
        return (
            <div>
                <input ref={c => this.keyWordElement = c} type="text" placeholder='输入关键字进行搜索' />
                <button onClick={this.search}>查询</button>
            </div>
        );
    }
}

export default Search;