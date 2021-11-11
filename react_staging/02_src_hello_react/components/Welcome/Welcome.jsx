import React,{Component} from 'react'

import welcome from './welcome.module.css'
export default class Welcome extends Component {
    render(){
        return (
            <div className = {welcome.title}>
                welCome
            </div>
        )
    }
}