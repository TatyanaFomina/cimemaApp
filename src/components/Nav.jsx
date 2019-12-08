import React from 'react';
import {NavLink} from "react-router-dom";
import '../assets/style/Nav.css';


class Nav extends React.Component{
    render() {
        return(<div className="navigation">
        <ul className="list nav-menu">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink  exact to="/schedule" activeClassName="active">Schedule</NavLink></li>
        </ul>
    </div>);
    }
}

export default Nav;