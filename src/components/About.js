import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        {/* About Image Section */}
        <div className="about-image">
          <img
            src="/nischalpokh.jpg"
            alt="Jems Mainali"
            className="profile-photo"
          />
        </div>

        {/* About Content Section */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Jems Mainali</span>, a passionate web designer and developer with an IT background. I specialize in creating user-friendly and visually appealing websites. My expertise includes modern web technologies like React, JavaScript, and CSS. I love solving complex problems and bringing creative ideas to life through code.
          </p>
          <p>
            Whether it's designing interactive user interfaces, developing responsive layouts, or collaborating with clients to bring their visions to reality, I thrive on delivering high-quality work that exceeds expectations.
          </p>
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
    </div>
  );
};

export default About;
