import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

class app extends Component {
    render() {
        return (
            <div>
                
                    <h2>切换路由</h2>
                    <div>
                        <Link to='/about'>About</Link><br />
                        <Link to='/home'>Home</Link>

                    </div>
                    <div>
                        {/* 注册路由 */}
                        <Routes>
                            <Route path='/about' element={<About />} />
                            <Route path='/home' element={<Home />} />

                        </Routes>
                    </div>
                
            </div>
        );
    }
}

export default app;