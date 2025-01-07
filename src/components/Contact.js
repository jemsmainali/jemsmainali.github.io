import React from 'react';
import './Contact.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Feel free to reach out to us for any inquiries or collaborations. I'm here to help!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <p>+977 9816895883</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>jemsmainali@gmail.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>PepsiCola, Kathmandu</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h3>Follow Me </h3>
        <div className="social-icons">
          
          <a href="https://www.facebook.com" className="icon facebook" target="_blank" rel="noreferrer">
          <FaFacebook size="32"/>
          </a>
          <a href="https://www.instagram.com/" className="icon instagram" target="_blank" rel="noreferrer">
          <FaInstagram size="32"/>
          </a>
         
          <a href="https:https://www.linkedin.com/in/nischal-mainali-b367b6280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="icon instagram" target="_blank" rel="noreferrer">
          <FaLinkedin size="32"/>
          </a>

<a href="https://x.com/home " className="icon twitter" target="_blank" rel="noreferrer">
          <FaTwitter size="32"/>
          </a>
        
        </div>
      </footer>
    </section>
  );
};

export default Contact;
