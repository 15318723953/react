import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test';
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
                <Switch>
                     {/* 注册路由 路由组件  v5版本 */}
                     <Route path='/about' component={About} />
                     <Route path='/home' component={Home} />
                     <Route path='/test' component={Test} />
                </Switch>
                </div>

            </div>
        );
    }
}

export default app;