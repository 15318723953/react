import React, { Component } from 'react';
import { Button , DatePicker } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
class app extends Component {
    onChange = ()=>{
        console.log()
    }
    render() {
        return (
            <div>
                <HomeOutlined />
                appp....
                <Button type="primary">Primary Button1</Button>
                <Button >Primary Button2</Button>
                <Button type="link">Primary Button3</Button>
                <DatePicker onChange={this.onChange} />
            </div>
        );
    }
}

export default app;