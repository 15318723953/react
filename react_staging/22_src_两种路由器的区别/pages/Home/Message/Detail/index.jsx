import React, { Component } from 'react';
import qs from 'querystring'

let obj = { name: 'tom', age: 18 } // name=tom&key=18  这种编码格式叫做urlencoded编码
console.log(qs.stringify(obj))

let str = 'name=tom&key=18'
console.log(qs.stringify(str))
const data = [
    { id: 1, content: '你好中国' },
    { id: 2, content: '你好赵增兴' },
    { id: 3, content: '你好阿萨德' },
]

class Detail extends Component {
    render() {
        // 接收params参数 
        // const {id,message} = this.props.match.params

        // 接收search参数,也就是query参数
        // const { search } = this.props.location
        // const { id, message } = qs.parse(search.slice(1))

        // 接收state参数
        console.log(this.props.location)
        const { id , message } = this.props.location.state|| {}
        const findResult = data.find(item =>{
            return +item.id ===  +id
        }) || {}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{message}</li>
                    <li>MESSAGE:{findResult.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;