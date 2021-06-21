import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-msg">
        <h1>Hello World!</h1>
        <h2>I am Andrea Chong,</h2>
        <h3>Front-End Developer.</h3>
        <div>
          <a href="/images/coding-cat.jpeg" target="_blank" download="Resume.jpg" rel="noreferrer" className="button">Resume</a>
          <NavLink to="/projects" className="button">Projects</NavLink>
        </div>
      </div>
      <img src="/images/coding-cat.jpeg" alt="cat"/>
    </section>
  );
}

export default Home;