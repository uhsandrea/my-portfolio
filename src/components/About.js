import React from 'react';

const About = () => {
  const skills = ["HTML5", "CSS3/SASS", "JavasSript", "JSON", "React JS", "Redux", "Light Python/Flask", "Git/GitHub", "Responsive Web Design"];

  return (
    <section className="about-container">
      <div className="aboutme">
        <h1>About Me</h1>
        <h3>
          Hi! I am a self-taught front-end developer with solid foundation.
          I want to learn and gain real-world experience.
          I am looking for any opportunity of entry level/junior front-end web developer position and 
          ready to grow from the bottom to become a professional web developer.
          <br /><br />
          I will love to hear from you. Feel free to contact me.
        </h3>
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <div>
          {skills.map(skill => {
            return <span key={skills.indexOf(skill)}>{skill}</span>
          })}
        </div>
      </div>

    </section>
  );
}

export default About;