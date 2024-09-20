// ContactPage.js
import React, { useState } from 'react';
import './contact.css';
import img from './hot-line-contact-us-call-center-search-interface_53876-124009.jpg'
import Navbar from '../../Navbar';
import Footer from '../../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Contact = () => {
  let users = {
    name: "",
    email: "",
    message:""
  }
  const [user, setUser] = useState(users);
  const navigate=useNavigate()
  const inputHandler = (e) => {
    const { name, value } = e.target
    setUser({...user,[name]:value})
  }
  const submitFrom = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:9000/create', user)
      .then((res) => {
        console.log(res.data);
        if (res.data === 'Success') {
          alert("Message send Successfully")
          return navigate("/")
       }
    })

  }
  return (
    <>
      <Navbar/>
    <div className="contact-page">
      <div className="contact-box">
        <div className="form-section">
          <h2>Contact us</h2>
          <form className="contact-form" onSubmit={submitFrom}>
            <div className="form-group">
              <input type="text" placeholder="Name" name='name ' required onChange={inputHandler} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Email" name='email' required onChange={inputHandler} />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="4" name='message'  onChange={inputHandler}></textarea>
            </div>
            <button  className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="illustration-section">
          <img 
            src={img} 
            alt="Illustration" 
          />
        </div>
      </div>
      </div>
      <Footer/>
      </>
  );
};

export default Contact;
