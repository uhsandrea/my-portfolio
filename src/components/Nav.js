import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
  return (
    <ul className="nav-bar">
      <li><NavLink to="/" replace className="nav__link" exact activeClassName="nav--active">
        <FaHome className="icon" /><span>Home</span>
      </NavLink></li>
      <li><NavLink to="/about" replace className="nav__link" activeClassName="nav--active">
        <FaUser className="icon about" /><span>About</span>
      </NavLink></li>
      <li><NavLink to="/projects" replace className="nav__link" activeClassName="nav--active">
        <FaFolderOpen className="icon" /><span>Projects</span>
      </NavLink></li>
      <li><NavLink to="/contact" replace className="nav__link" activeClassName="nav--active">
        <FaEnvelope className="icon" /><span>Contact</span>
      </NavLink></li>
    </ul>
  );
}

export default Nav;