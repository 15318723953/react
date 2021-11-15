import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js';

class Search extends Component {
    search = async () => {
        // 获取用户的输入
        PubSub.publish('getList', { isFirst: false, isLoading: true })
        const { keyWordElement: { value: data } } = this;// 解构赋值的连续写法并且重命名
        // 发送网络请求 --- 使用axios
        // axios.get(`https://api.github.com/search/users?q=${data}`).then(res => {
        //     PubSub.publish('getList',{isLoading:false,list:res.data.items})
        // }).catch(err =>{
        //     PubSub.publish('getList',{isLoading:false,err:err.message})
        // })
        // 发送网络请求 --- 使用axios加async
        // try {
        //     const response = await axios.get(`https://api.github.com/search/users?q=${data}`)
        //     PubSub.publish('getList',{isLoading:false,list:response.data.items})
        // } catch (error) {
        //     PubSub.publish('getList',{isLoading:false,err:error.message})
        // }


        // 发送网络请求 --- 使用fetch
        // fetch(`https://api.github.com/search/users?q=${data}`).then(response => {
        //     return response.json()
        // }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //         console.log(err)
        //     })
        // 发送网络请求 --- 使用fetch加async
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${data}`)
            const data1 = await response.json()
            PubSub.publish('getList', { isLoading: false, list: data1.items })
        } catch (err) {
            console.log(err)
            PubSub.publish('getList', { isLoading: false, err: err.message })
        }

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