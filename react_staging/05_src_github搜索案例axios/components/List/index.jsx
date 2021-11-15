import React, { Component } from 'react';

class List extends Component {
  jump = (url) => {
    return () => {
      window.location.href = url
    }
  }
  render() {
    const { list, isFirst, isLoading, err } = this.props
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