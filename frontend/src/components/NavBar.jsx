import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/activities">Activities</NavLink>
        </li>
        <li>
          <NavLink exact to="/add-activity">Add Activity</NavLink>
        </li>
        <li>
          <NavLink exact to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink exact to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
