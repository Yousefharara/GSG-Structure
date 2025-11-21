import React, { Component } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../router/paths';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <p className='hero'>Header Hero</p>
                    <ul>
                        <li><NavLink to={PATHS.HOME}>Home</NavLink></li>
                        <li><NavLink to={PATHS.ABOUT}>About</NavLink></li>
                        <li><NavLink to={PATHS.POST.ROOT}>Posts</NavLink></li>
                        <li><NavLink to={PATHS.ERRORS.PAGE_NOT_COMPLETED}>Todos</NavLink></li>
                    </ul>
                </nav>
                
            </header>
        );
    }
}

export default Header;
