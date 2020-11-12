import { NavLink } from 'react-router-dom';
import React from 'react';

function Header({ isloggedIn, loginMsg }) {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
            { isloggedIn && (
                <React.Fragment>
                    <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
                    <li><NavLink activeClassName="active" to="/find-book">Find Book</NavLink></li>

                </React.Fragment>
            )}
            <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">{loginMsg}</NavLink></li>
        </ul>
    )
}

export default Header