import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class List extends Component {
  state = {
    list: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: '', //储存请求相关的错误信息
  }

  componentDidMount(){
    this.token = PubSub.subscribe('getList',(msg,data)=>{
      console.log(data)
      this.setState(data)
    })
  }
  componentWillUnmount
  jump = (url) => {
    return () => {
      window.location.href = url
    }
  }
  render() {
    const { list, isFirst, isLoading, err } = this.state
    return (

      <div>
        {
          isFirst ? <h2>欢迎使用,输入关键字,随后点击搜索</h2> :
            isLoading ? <h2>loading.... </h2> :
              err ? <h2>{err}</h2> :
                <ul>
                  {
                    list.map((item) => {
                      return <li key={item.id} onClick={this.jump(item.html_url)}>
                        <img src={item.avatar_url} alt="图片链接已失效" />
                        <span>{item.login}</span>
                      </li>
                    })
                  }

                </ul>
        }

      </div>
    );
  }
}

export default List;