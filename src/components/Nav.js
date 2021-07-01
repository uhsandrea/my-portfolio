import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
  return (
    <ul className="nav-bar">
      <li><Link to="home" className="nav__link" activeClass="nav--active" spy={true} smooth={true} duration={300}>
        <FaHome className="icon" /><span>Home</span>
      </Link></li>
      <li><Link to="about" className="nav__link" activeClass="nav--active" spy={true} smooth={true} duration={300}>
        <FaUser className="icon about" /><span>About</span>
      </Link></li>
      <li><Link to="projects" className="nav__link" activeClass="nav--active" spy={true} smooth={true} duration={300}>
        <FaFolderOpen className="icon" /><span>Projects</span>
      </Link></li>
      <li><Link to="contact" className="nav__link" activeClass="nav--active" spy={true} smooth={true} duration={300}>
        <FaEnvelope className="icon" /><span>Contact</span>
      </Link></li>
    </ul>
  );
}

export default Nav;