import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
  return (
    <ul className="nav-bar">
      <li><NavLink to="/" className="nav-link" exact activeClassName="active">
        <FaHome className="icon" /><span>Home</span>
      </NavLink></li>
      <li><NavLink to="/about" className="nav-link" activeClassName="active">
        <FaUser className="icon about" /><span>About</span>
      </NavLink></li>
      <li><NavLink to="/projects" className="nav-link" activeClassName="active">
        <FaFolderOpen className="icon" /><span>Projects</span>
      </NavLink></li>
      <li><NavLink to="/contact" className="nav-link" activeClassName="active">
        <FaEnvelope className="icon" /><span>Contact</span>
      </NavLink></li>
    </ul>
  );
}

export default Nav;