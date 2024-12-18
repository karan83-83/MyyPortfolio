import React from 'react'
import './Section1.css'
import img from './pngwing.png'
export default function Section1() {
  return (
      <>   <div className="m">
          <div className='main'>
              <div className="main-c">
                  <p>Mern Stack Developer</p>
                  <h1>I'm <span style={{ color: '#C244A7' }}>Karan</span>
                  <br />Panchal From India</h1>
               <a href="/contact">    <button className='btn'>Contact Us!</button></a>
              </div>
              <div className='main-m'>
                  <img src={img} alt=""  />
              </div>
              
          </div>
          </div>
    </>
  )
}
