import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/activities">Activities</Link>
        </li>
        <li>
            <Link to="/add-activity">Add Activity</Link>
        </li>
        <li>
            <Link to="/signup">Sign Up</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        </ul>
    </nav>
);
};

export default NavBar;
