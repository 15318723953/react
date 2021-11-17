import React, { Component } from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom'

import News from './News';
import Message from './Message';
import MyNavLink from '../../components/MyNavLink'

class Home extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <h2>home</h2>
                <ul>
                    <MyNavLink to='/home/message'>message</MyNavLink>
                    <MyNavLink to='/home/news'>news</MyNavLink>
                </ul>

                { /* 注册路由 */}
                <Switch>
                    <Route path='/home/news' component={News}></Route>
                    <Route path='/home/message' component={Message}></Route>
                    <Redirect to='/home/news'></Redirect>
                </Switch>

            </div>
        );
    }
}

export default Home;