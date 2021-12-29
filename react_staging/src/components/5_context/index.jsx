import React, { Component } from 'react';

const MyContext = React.createContext()
const { Provider , Consumer} = MyContext
class A extends Component {
    state = { userName: 'tom', age: '18' }
    render() {
        const { userName, age } = this.state
        return (
            <div>
                <h3>我是A组件</h3>
                <p>我的用户名是{userName}</p>
                <Provider value={{userName:userName,age:age}}>
                    <B userName={userName} />
                </Provider>

            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h3>我是B组件</h3>
                <p>我从A组件接受到的用户名{this.props.userName}</p>
                <C />
            </div>
        );
    }
}
// 第一种方式只能适用于类式组件
class C extends Component {
    static contextType = MyContext  // 使用context是需要先声明接收
    render() {
        return (
            <div>
                <h3>我是C组件</h3>
                <p>我从A组件接受到的用户名{this.context.userName}</p>

            </div>
        );
    }
}
// 第二种,类式和函数式都可以使用
// function C() {
//     return (
//         <div>
//             <h3>我是C组件</h3>
//             <p>我从A组件接受到的用户名
//             <Consumer>
//             {
//                 value =>{
//                     return `${value.userName}我的年龄是${value.age}`
//                 }
//             }
//             </Consumer>
//             </p>

//         </div>
//     );
// }
export default A;