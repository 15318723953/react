import React, { Component } from 'react';
import { NavLink, Route, } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import './app.css'

class app extends Component {
    render() {
        return (
            <div>
                {/* 一般组件 */}
                <Header></Header>
                <div>
                    <NavLink to='/about' className='btn' activeClassName='peiqi'>About</NavLink><br />
                    <NavLink to='/home' className='btn' activeClassName='peiqi'>Home</NavLink>
                </div>
                <div>
                    {/* 注册路由 路由组件  v5版本 */}
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                </div>

            </div>
        );
    }
}

export default app;