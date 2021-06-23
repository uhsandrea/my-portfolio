import React from 'react';
import { SiCodesandbox, SiReplDotIt,SiGithub } from 'react-icons/si';


const Projects = () => {
  const projects = [
    {id: 1, name: "Ceramic Studio Website", img: "/images/doyoce.png", description: "Front-end responsive website introducing a ceramic studio. Built with HTML, CSS/SASS, and JavaScript.", live: "https://uhsandrea.github.io/doyoce-ceramic/", code: "https://github.com/uhsandrea/doyoce-ceramic"},
    {id: 2, name: "Mini Shopping Game", img: "/images/shopping.png", description: "Simple mini-shopping game by fetching JSON data and filtering.", live: "https://uhsandrea.github.io/mini-shopping-game/", code: "https://github.com/uhsandrea/mini-shopping-game"},
    {id: 3, name: "Paint Web App", img: "/images/paint.png", description: "Paint app with essential drawing features. Built by HTML5's canvas, CSS3, and JavaScript's Canvas API/DOM manipulation/functions.", live: "https://uhsandrea.github.io/paint-app/", code: "https://github.com/uhsandrea/paint-app"},
    {id: 4, name: "Cat World", img: "/images/catworld.png", description: "A website showing list of cat breeds and details of each breed by fetching data from TheCatAPI in React JS.", live: "https://uhsandrea.github.io/cat-world/#/", code: "https://github.com/uhsandrea/cat-world"},
    {id: 5, name: "React Momentum", img: "/images/momentum.png", description: "Single web page cloning Chrome Momentum extension, containing live clock, calendar, weather forecast, links, and todo list. Developed by React JS (fetching API, Hooks, Redux, etc.).", live: "https://uhsandrea.github.io/react-momentum/", code: "https://github.com/uhsandrea/react-momentum"},
    {id: 6, name: "Jobs Scraper", img: "/images/scraper.png", description: "Simple programming job postings scraper with searching by term. Used Python (beautifulsoup4 for pulling data out of HTML) and Flask.", live: "https://jobsscraper.uhsandrea.repl.co/", code: "https://replit.com/@uhsandrea/JobsScraper"}
  ];

  return (
    <section className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => {
          return <div key={project.id} className="projects__project">
            <div className="project__preview">
              <img src={project.img} alt="img"/>
              <div className="project__preview--hover">
                <div className="project__description">{project.description}</div>
                <div>
                  <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                  <a href={project.code} target="_blank" rel="noreferrer">Code</a>
                </div>
              </div>
            </div>
            <div className="project__name">{project.name}</div>
          </div>
        })}
      </div>
      <h2 className="projects-additional">More practices and mini projects are also available:</h2>
      <div className="additional__links">
        <a href="https://github.com/uhsandrea" target="_blank" rel="noreferrer"><SiGithub /></a>
        <a href="https://replit.com/@uhsandrea" target="_blank" rel="noreferrer"><SiReplDotIt /></a>
        <a href="https://codesandbox.io/u/uhsandrea" target="_blank" rel="noreferrer"><SiCodesandbox /></a>
      </div>
    </section>
  );
}

export default Projects;