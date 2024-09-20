import React from 'react'
import './section3.css'

export default function Section3() {
  return (
      <>
          
  <section className="skills-section">
    <h2>My Skill Set</h2>
    <div className="skills-grid">
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s" alt="React.js"/>
        <h3>React.js</h3>
            <p>Building dynamic, single-page web applications using React and its powerful hooks and components.</p>
            <a href="https://react.dev/"> <button class="styled-button" style={{backgroundColor:"#00D8FF"}}>Click Me!</button></a>
      </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YsuE5q1iv-naVRwRQlR2zRwibcPEFEr9nQ&s" alt="CSS3"/>
        <h3>CSS3</h3>
            <p>Creating responsive, modern, and user-friendly interfaces using Flexbox, Grid, and animations.</p>
            <a href="https://www.w3.org/Style/CSS/Overview.en.html"> <button class="styled-button" style={{backgroundColor:"#F71897"}}>Click Me!</button></a>
            
      </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvojrQH9ga-AHhE5bi4x0CuubfYWnPVYZTw&s" alt="JavaScript/"/>
        <h3>JavaScript</h3>
            <p>Expert in JavaScript for front-end development, DOM manipulation, and interactive web experiences.</p>
            <a href="https://www.javatpoint.com/javascript-tutorialhttps://react.dev/"> <button class="styled-button" style={{backgroundColor:"#F46B4E"}}>Click Me!</button></a>
      </div>
      <div className="skill-card">
            <img src="https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg" alt="Node.js" />
            
        <h3>Node.js</h3>
            <p>Back-end development with Node.js, building scalable server-side applications with Express.js.</p>
            <a href="https://nodejs.org/en"> <button class="styled-button" style={{backgroundColor:"#771DBF"}}>Click Me!</button></a>
      </div>
      <div className="skill-card">/
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQoN8DlfGZP7g70c-tgSctnVC-c6njv0oAg&s" alt="HTML5"/>
        <h3>HTML5</h3>
            <p>Crafting semantic, accessible, and SEO-friendly web pages using the latest HTML standards.</p>
            <a href="https://www.w3schools.com/html/"> <button class="styled-button" >Click Me!</button></a>
      </div>
      <div className="skill-card">
        <img src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png" alt="Figma"/>
        <h3>Figma</h3>
            <p>Prototyping and designing user interfaces with Figma for a seamless development-to-design workflow.</p>
            <a href="https://www.figma.com/"> <button class="styled-button" style={{backgroundColor:"#289ADE"}}>Click Me!</button></a>
      </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-J7CfNgRsIjAeLAYzM7dLWERxO-ijNvxLw&s" alt="Git & GitHub"/>
        <h3>Git & GitHub</h3>
            <p>Version control using Git and GitHub, ensuring efficient collaboration and code management.</p>
            <a href="https://github.com/"> <button class="styled-button"  style={{backgroundColor:"#F70000"}}>Click Me!</button></a>
      </div>
      <div className="skill-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVg5qT8hVHfozuOqt5KouH3FFgWlH0ZA4AA&s" alt="Responsive Design"/>
        <h3>Responsive Design</h3>
            <p>Creating websites that look great on all devices, using media queries and mobile-first approaches.</p>
            <a href="https://www.javatpoint.com/how-to-make-a-responsive-website-for-all-devices"> <button class="styled-button" style={{backgroundColor:"#EF6397"}}>Click Me!</button></a>
      </div>
    </div>
  </section>
    </>
  )
}
