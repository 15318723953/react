import React,{Component} from 'react'
import hello from './hello.module.css'

export default class App extends Component{
    render(h) {
        return(
            <div>
            <h2 className={hello.title}>hello react</h2>
                
            </div>
        )
    }
}