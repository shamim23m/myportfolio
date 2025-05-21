import React from 'react';
import '../styles/About.css';
import profile from '../assets/1000275258.jpg';

function About() {
  return (
    <section id="about" className="about">
      <img src={profile} alt="Profile" className="profile-pic" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineer specializing in building modern web applications with JavaScript, React, and Node.js. I love solving problems and continuously learning.
        </p>
      </div>
    </section>
  );
}

export default About;
