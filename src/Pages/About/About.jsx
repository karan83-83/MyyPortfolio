import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer/Footer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './about.css';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
          <p>
            I'm a passionate web developer with experience in building dynamic and responsive web applications using React, JavaScript, HTML, and CSS. I enjoy creating clean and user-friendly interfaces that provide a great user experience.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>My Journey</h2>
            <p>
              I started my coding journey as a self-taught developer, learning the basics of HTML and CSS before moving on to more advanced topics like JavaScript, React, and back-end technologies. Over the years, I've worked on various projects, from simple static websites to complex web applications.
            </p>
          </div>

          <div className="about-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li><span>HTML & CSS</span></li>
              <li><span>JavaScript (ES6+)</span></li>
              <li><span>React.js</span></li>
              <li><span>Node.js</span></li>
              <li><span>Mongo DB</span></li>
              <li><span>Express.js</span></li>
              <li><span>Version Control (Git & GitHub)</span></li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Contact</h2>
            <p>Feel free to reach out to me through the following platforms:</p>
            <ul className="contact-list">
              <li>
                <a href="mailto:karanpan77@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="icon" /> karanpan77@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/karan83-83" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/karan-panchal-771008257/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
