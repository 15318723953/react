import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class index extends Component {
    render() {
        return (
            <div>
                <NavLink {...this.props} className='btn' activeClassName='peiqi' />
            </div>
        );
    }
}

export default index;