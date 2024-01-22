import React from 'react';
import yourImage from '../assets/meimage.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Marion</h2>
      </div>
      <div className="about-content">
        <img
          src={yourImage}
          alt="profile pic"
          style={{ width: '200px', height: 'auto' }} 
        />
        <p>
          Hello! I am a new mama bear who is completely besotted with being one. With a toe always in the tech world, I wanted to be able to create my own websites and applications that can serve to help parents and how they navigate the wonderful and messy world of BEING A PARENT!
        </p>
      </div>
    </div>
  );
};

export default About;
