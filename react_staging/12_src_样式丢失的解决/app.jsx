import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink'

import './app.css'

class app extends Component {
    render() {
        return (
            <div>
                {/* 一般组件 */}
                <Header></Header>
                <div>
                    <MyNavLink to='/zzx/about'>about</MyNavLink>
                    <MyNavLink to='/zzx/home'>home</MyNavLink>
                </div>
                <div>
                <Switch>
                     {/* 注册路由 路由组件  v5版本 */}
                     <Route path='/zzx/about' component={About} />
                     <Route path='/zzx/home' component={Home} />
                    
                </Switch>
                </div>

            </div>
        );
    }
}

export default app;