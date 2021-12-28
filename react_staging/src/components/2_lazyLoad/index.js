import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, } from 'react-router-dom'
// import Home from './Home';
import Loading from './Loading';
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

class app extends Component {
    render() {
        return (
            <div>
                {/* 一般组件 */}
                <div>
                    <NavLink to='/about' className='btn' activeClassName='peiqi'>About</NavLink><br />
                    <NavLink to='/home' className='btn' activeClassName='peiqi'>Home</NavLink>
                </div>
                <div>
                    {/* 注册路由 路由组件  v5版本 */}
                    <Suspense fallback={<Loading></Loading>}>
                        <Route path='/about' component={About} />
                        <Route path='/home' component={Home} />
                    </Suspense>

                </div>

            </div>
        );
    }
}

export default app;