import React, { useState,useEffect } from "react"

function Button() {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('zzx')
    useEffect(()=>{
       const set = setInterval(()=>{
           setCount(count + 1)
       },1000)
       return ()=>{clearInterval(set)} 
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count + 1)}}>
                按钮{name}
            </button>
            <button onClick={()=>{setName(name + '1')}}>
                按钮
            </button>
        </div>

    )
}
export default Button