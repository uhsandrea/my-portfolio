import React from 'react';
import cat from '../images/coding-cat.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-msg">
        <h1>Hello World!</h1>
        <h2>I am Andrea Chong.</h2>
        <h2>Front-End Deveopler.</h2>
        <div>
          <a href="#" className="button">Resume</a>
          <NavLink to="/projects" className="button">Projects</NavLink>
        </div>
      </div>
      <img src={cat} alt="cat"/>
    </section>
  );
}

export default Home;