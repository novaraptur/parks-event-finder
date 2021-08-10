import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <ul>
      <NavLink exact to="/" className="navigation"><li>Home</li></NavLink>
      <NavLink exact to="/saved-events" className="navigation"><li>Saved Events</li></NavLink>
      <NavLink exact to="/saved-parks" className="navigation"><li>Saved Parks</li></NavLink>
    </ul>
  );
}

export default Nav;
