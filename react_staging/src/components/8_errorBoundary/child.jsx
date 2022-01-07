import React, { useState } from 'react';

const Child = () => {
    const [users, setUsers] = useState([
        { id: '001', name: 'Tom', age: '18' },
        { id: '002', name: 'fom', age: '19' },
        { id: '003', name: 'gom', age: '20' }
    ])
    // const [users, setUsers] = useState(123)
    
    return (
        <div>
            <h2>我是child组件</h2>
            {
                users.map(item => {
                    return <h4 key={item.id}>{item.name}-----{item.age}</h4>
                })
            }
        </div>
    );
}

export default Child;
