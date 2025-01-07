import React from 'react';
import './Home.css';
import profileImage from './nischal.jpg';

const Home = () => {
  return (
    <div className="home">


      <div className="hero">
        <div className="hero-text">
          <h1>
            I'm <span className="gradient-text">Jems Mainali</span> <br />

          </h1>
          <p>
            Hi! I’m Jems, a web designer and developer based in Kathmandu. I create user-friendly
            interfaces for fast-growing startups.
          </p>
          <div className="cta-buttons">
            <button
              className="call-button"
              onClick={() => (window.location.href = 'tel:+977 9766362893')}
            >
              Book a Call
            </button>
            <button
              className="cv-button"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1SRxH42w-Z3Zdj0uPX5cQ0frD13x_9mUh/view?usp=sharing',
                  '_blank' // Opens in a new tab
                )
              }
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
