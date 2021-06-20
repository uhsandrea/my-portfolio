import React from 'react';
import cat from '../images/coding-cat.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-msg">
        <h1>Hello World!</h1>
        <h2>I am Andrea Chong,</h2>
        <h3>Front-End Develope.</h3>
        <div>
          <a href={cat} target="_blank" download="Resume.jpg" rel="noreferrer" className="button">Resume</a>
          <NavLink to="/projects" className="button">Projects</NavLink>
        </div>
      </div>
      <img src={cat} alt="cat"/>
    </section>
  );
}

export default Home;