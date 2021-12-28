import React from 'react';

// class Index extends React.Component {
//     state = {
//         count: 0
//     }
//     // 类式组件实现页面开始就加载
//     componentDidMount(){
//         setInterval(() => {
//             this.setState((state)=>{
//                 return {count:state.count+1}
//             })
//         }, 1000);
//     }
//     add = () => {
//         this.setState((state) => {
//             return { count: state.count + 1 }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我加1</button>
//             </div>
//         );
//     }
// }


const Index = () => {
    const [count, setCount] = React.useState(0)

    React.useEffect(()=>{
        console.log(121)
    },[count])
    // useEffect可以传两个参数,第二个参数有监测的意思.
    // 当没有穿参数时,相当于所有数据全都检测,当为[]时,谁都不检测
    function add() {
        // setCount(count + 1) //第一种写法
        setCount(count => count + 1) // 第二种写法
        console.log(count)
    }

    return (
        <div>
            <div>
                <h2>当前求和为{count}</h2>
                <button onClick={add}>点我加1</button>

            </div>
        </div>
    );
}

export default Index;
