import React from 'react';
import './project.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer/Footer';

const projects = [

  {
    title: 'Moto Dresser',
    description: 'Motodresser is an e-commerce platform specializing in premium motorcycle gear, accessories, and apparel, catering to riders safety and style needs. It offers a curated selection of high-quality products for motorcycle enthusiasts.',
    github: 'https://github.com/karan83-83/myportfolio',
    liveDemo: 'https://motodresser.com/',
    style:"https://img.freepik.com/free-photo/blur-hospital-clinic-interior_74190-5191.jpg"
  },

  {
    title: 'Brighter Future',
    description: 'The BrighterFuture website is a platform dedicated to empowering individuals through resources, tools, and programs focused on education, career development, and personal growth. It aims to create opportunities for a better tomorrow by connecting users with valuable content and guidance.',
    github: 'https://github.com/karan83-83/myportfolio',
    liveDemo: 'https://brighterfutureif.com/',
    style:"https://img.freepik.com/free-photo/blur-hospital-clinic-interior_74190-5191.jpg"
  },
  {
    title: 'Portfolio Web',
    description: 'A portfolio website is a personal platform showcasing your skills, projects, and experiences to highlight your work and expertise. It serves as a digital resume to attract potential employers, clients, or collaborators.',
    github: 'https://github.com/karan83-83/myportfolio',
    liveDemo: ' https://karan83-83.github.io/myportfolio/',
    style:"https://img.freepik.com/free-photo/blur-hospital-clinic-interior_74190-5191.jpg"
  },
  {
    title: 'Weather App',
    description: 'A weather application that fetches data from an API and displays current weather conditions for any city. Built using React.js and OpenWeather API.',
    github: 'https://github.com/karan83-83/weatherapp/',
    liveDemo: 'https://karan83-83.github.io/weatherapp/',
    style:"https://t3.ftcdn.net/jpg/01/15/05/88/360_F_115058873_PlbfM1AlHNW31gBQcKSxZLhGdUst9ErP.jpg"
  },
  {
    title: 'E-Commerce ',
    description: 'A fully functional e-commerce store with product listing, cart functionality, and payment integration. Built using React, Node.js, and MongoDB.',
    github: 'https://github.com/karan83-83/mern-ecommerce/',
    liveDemo: 'https://karan83-83.github.io/mern-ecommerce/',
    style:"https://t3.ftcdn.net/jpg/01/64/52/04/360_F_164520480_E6yjoiiHHnMPFrj4ClYdyAgw1uZnGsdL.jpg"
  },
  
  
 
];

const Projects = () => {
  return (
    <>
      <Navbar/>
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
    
          <div className="project-card" key={index} style={{ backgroundImage: `url(${project.style})` }} >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a> */}
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <button class="styled-button" style={{backgroundColor:"#EF6397"}}>Live Demo!</button></a>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Projects;
