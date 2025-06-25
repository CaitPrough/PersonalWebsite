import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="/public/images/cait-picture.png" alt="Cait standing in front of a train in her prom dress (2024)" /> 
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi! I am Cait Prough. I graduated from the 
          Oklahoma School of Science and Mathematics 
          in 2025, and am going on to pursue computer 
          science with a focus in data science in the 
          fall at the University of Alabama in 
          Huntsville as a recipient of the Saturn V 
          scholarship. When I discovered the world 
          of programming, it felt like a way to describe 
          the way I think, and fell in love. I also am I 
          licensed HAM radio operator, a railfan, and I 
          love to create abstract art that I paint as murals!
        </p>
      </div>
    </div>
  );
}

export default About;