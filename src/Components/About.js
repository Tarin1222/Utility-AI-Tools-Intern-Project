 //AI TRY OUT 
import React from "react";
import AboutBackgroundImage from "../Assets/tr71123-ai-art.webp";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {           //AI TRY OUT 
  return (
    <div className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
        Explore AI
        </h1>
        <p className="primary-text">
        Experience the power of AI with hands-on tools and interactive demos. Discover how AI can transform your projects.
        </p>
        <p className="primary-text">
        Unlock the potential of AI with innovative tools and demos. See how AI can enhance your creativity and projects.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Explore</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
