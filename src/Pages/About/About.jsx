import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer/Footer'
import './about.css'

export default function About() {
  return (
    <>    <Navbar/>
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
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Version Control (Git & GitHub)</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Contact</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out via email or through my social media channels.
          </p>
          <ul className="contact-list">
          <li>Email: karanpan77@gmail.com</li>
          <li>GitHub: <a href="https://github.com/karan83-83" target="_blank" rel="noopener noreferrer">github.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/karan-panchal-771008257/" target="_blank" rel="noopener noreferrer">linkedin.com</a></li>
          </ul>
        </div>
      </div>
    </div>
          <Footer/>
    </>
  )
}
