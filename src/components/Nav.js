import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav-bar">
      <li><NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
      <li><NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink></li>
      <li><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
    </ul>
  );
}

export default Nav;