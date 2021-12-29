import React from 'react';
import ReactDom from 'react-dom'

// class Index extends React.Component {
//     state = {
//         count: 0
//     }
//     // 类式组件实现页面开始就加载
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState((state) => {
//                 return { count: state.count + 1 }
//             })
//         }, 1000);
//     }
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//     add = () => {
//         this.setState((state) => {
//             return { count: state.count + 1 }
//         })
//     }
//     show = () => {
//         console.log(this.input1)
//         alert(this.input1.value)
//     }
//     unMount = () => {
//         ReactDom.unmountComponentAtNode(document.getElementById('root'))
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <input type="text" ref={value => this.input1 = value} />
//                 <button onClick={this.add}>点我加1</button>
//                 <button onClick={this.unMount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         );
//     }
// }


const Index = () => {
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => { // 在useEffect返回的函数相当于componentWillUnmount
            clearInterval(timer)
        }
    }, [])
    // useEffect可以传两个参数,第二个参数有监测的意思.
    // 当没有穿参数时,相当于所有数据全都检测,当为[]时,谁都不检测
    function add() {
        // setCount(count + 1) //第一种写法
        setCount(count => count + 1) // 第二种写法
        console.log(count)
    }
    function unMount() {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }
    function show(){
        alert(myRef.current.value)
    }
    return (
        <div>
            <div>
                <h2>当前求和为{count}</h2>
                <input type="text" ref={myRef} />
                <button onClick={add}>点我加1</button>
                <button onClick={unMount}>卸载组件</button>
                <button onClick={show}>点击提示数据</button>
            </div>
        </div>
    );
}

export default Index;
