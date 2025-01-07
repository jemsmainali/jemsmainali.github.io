import React from 'react';
import './Services.css';
import serviceImg from '../Assets/Services1.jpeg';
import serviceImge from '../Assets/Services2.jpeg';
import serviceImges from '../Assets/Services3.jpg';

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {/* Service 1 */}
        <div className="service-card">
          <img
            src={serviceImg}
            alt="Service 1"
            className="service-image"
          />
          <h3 className="service-title">Web Design</h3>
          <p className="service-description">
            Crafting beautiful, user-friendly designs to bring your vision to life.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <img
            src={serviceImge}
            alt="Service 2"
            className="service-image"
          />
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            Building robust and scalable web applications using modern technologies.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <img
            src={serviceImges}
            alt="Service 3"
            className="service-image"
          />
          <h3 className="service-title">Database Management</h3>
          <p className="service-description">
          I design and manage secure, scalable, and efficient databases to store and organize your data effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
