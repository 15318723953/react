import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink'

import './app.css'


// BrowserRouter与HashRouter的区别
//  1.底层原理不一样
//        BrowserRouter使用的是h5的history API不兼容ie9及以下版本
//        HashRouter是使用的路由的hash值
//  2.表现形式不一样
//      BrowserRouter的路径中没有#
//      HashRouter的路径中包含#
//  3.表现形式不一样
//      BrowserRouter刷新没有任何影响,应为state保存在history对象中
//      HashRouter刷新会导致路由state参数的丢失
//  4.hashRouter可以用于解决一些路径错误的相关问题
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
                    {/* 当添加exact属性时开启严格匹配,有些时候开启无法使用二级路由 */}
                    <Switch >
                        {/* 注册路由 路由组件  v5版本 */}

                        <Route path='/about' component={About} />
                        <Route path='/home' component={Home} />
                        <Redirect to='/about'></Redirect>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default app;