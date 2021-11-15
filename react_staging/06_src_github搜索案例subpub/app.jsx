import React, { Component } from 'react';


import List from './components/List'
import Search from './components/Search';

import './app.css'
class App extends Component {
    render() {
        return (
            <div className='app'>
                <Search></Search>
                <List></List>
            </div>
        );
    }
}

export default App;