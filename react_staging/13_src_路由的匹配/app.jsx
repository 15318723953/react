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
                    <MyNavLink to='/about'>about</MyNavLink>
                    <MyNavLink to='/home'>home</MyNavLink>
                </div>
                <div>
                {/* 路由默认是模糊匹配 
                    /home/a/b  会将其一部分一部分拿去来分别比对,当第一个匹配不对应时,直接结束
                */ }
                {/* 当添加exact属性时开启严格匹配 */}
                <Switch >
                     {/* 注册路由 路由组件  v5版本 */}
                     <Route exact path='/about' component={About} />
                     <Route exact path='/home/a/b' component={Home} />
                    
                </Switch>
                </div>

            </div>
        );
    }
}

export default app;