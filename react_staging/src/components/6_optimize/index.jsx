import React, { PureComponent, useState, memo } from 'react';

// class Parent extends PureComponent {
//     // Component的两个问题
//     //  1.只要执行setState(),即使不改变状态数据,组件也会重新render ==>效率低
//     //  2.值要当前组件重新render(),就会自动重新render子组件,纵使子组件没有用到父组件的任何数据 ==>效率低
//     //  效率高的做法
//     // 只有当组件的state或props的数据发生改变是才重新render()
//     // 原因:component中的shouldComponentUpdate总是返回true
//     // PureComponent可以直接将原先阀门里得判断自动处理
//     state = {
//         carName: '奔驰'
//     }
//     changeCar = () => {
//         this.setState({
//             carName: '迈巴赫'
//         })
//     }
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     console.log(nextProps, nextState)  // 接下来要变化的props和要变得state
//     //     console.log(this.props, this.state)  // 目前的props和目前的state

//     //     return nextProps.carName != this.props.carName || nextState.carName != this.state.carName
//     // }
//     render() {
//         console.log('parent')
//         const { carName } = this.state
//         return (
//             <div>
//                 <h2>我的parent组件</h2>
//                 <span>我的车名字是{carName}</span><br />
//                 <button onClick={this.changeCar}>点我换车</button>
//                 <Child></Child>
//             </div>
//         );
//     }
// }
// class Child extends PureComponent {
//     // shouldComponentUpdate(nextProps){
//     //     return nextProps.carName != this.props.carName 
//     // }
//     render() {
//         console.log('child')
//         return (
//             <div>
//                 <h2>我是Child组件</h2>
//                 <span>我接到的车是{this.props.carName}</span>
//             </div>
//         );
//     }
// }


const Parent = () => {
    const [carName, setCarName] = useState('奔驰')
    function changeCar() {
        setCarName((carName) => {
            return carName + 1
        })
    }
    console.log('Parent')
    return (
        <div>
            <div>
                <h2>我的parent组件</h2>
                <span>我的车名字是{carName}</span><br />
                <button onClick={changeCar}>点我换车</button>
                <Child carName='奥拓'></Child>
            </div>
        </div>
    );
}
// 函数式减少render次数的方法,与pureComponent相似
const Child = memo((props) => {
    console.log('Child')
    return (
        <div>
            <h2>我是Child组件</h2>
            <span>我接到的车是{props.carName}</span>             </div>
    );
})

export default Parent;
