import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-text">
        <h1>Hello World!</h1>
        <h2>I am Andrea Chong,</h2>
        <h3>Front-End Developer.</h3>
        <div>
          <a href="/images/resume2021.pdf" target="_blank" download="Resume.pdf" rel="noreferrer" className="home__button">Resume</a>
          <Link to="projects" className="home__button" activeClass="nav--active" spy={true} smooth={true} duration={300}>Projects</Link>
        </div>
      </div>
      <img className="home__img" src="/images/coding-cat.jpeg" alt="cat"/>
    </section>
  );
}

export default Home;