import React, { Component } from 'react';

const data = [
    {id:1,content:'你好中国'},
    {id:2,content:'你好赵增兴'},
    {id:3,content:'你好阿萨德'},
]

class Detail extends Component {
    render() {
        const {id,message} = this.props.match.params
        const findResult = data.find(item =>{
            return +item.id ===  +id
        })
        console.log(findResult)
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