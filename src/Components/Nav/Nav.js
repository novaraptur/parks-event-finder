import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ()=> {
  return (
    <ul>
      <NavLink exact to="/"><li>Home</li></NavLink>
      <NavLink exact to="/saved-events"><li>Saved Events</li></NavLink>
      <NavLink exact to="/saved-parks"><li>Saved Parks</li></NavLink>
    </ul>
  );
}

export default Nav;
