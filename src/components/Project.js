import React from 'react';
import './Project.css';
import project1 from '../Assets/project1.JPG';
import project2 from '../Assets/project2.PNG';
import project from '../Assets/project1.PNG';

const Project = () => {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <img src={project1}
           alt="Project 1"
            className="project-image" />
          <h3>Portfolio Website</h3>
          <p>
            A sleek and responsive portfolio website built using React, showcasing
            personal skills and projects with modern animations and a clean design.
          </p>
        </div>
        <div className="project-item">
          <img src={project2} 
          alt="Project 2"
           className="project-image" />
          <h3>E-Commerce Platform</h3>
          <p>
            A robust e-commerce platform developed with React and Firebase, featuring
            user authentication, real-time database updates, and a seamless shopping experience.
          </p>
        </div>
        <div className="project-item">
          <img src={project}
           alt="Project 3" 
           className="project-image" />
          <h3>NexZen Football Academy</h3>
          <p>
            A productivity tool designed to help users manage tasks effectively, complete
            with drag-and-drop functionality and a dynamic user interface.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
