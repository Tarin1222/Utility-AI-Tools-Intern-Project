import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AboutBackgroundImage from "../Assets/tr71123-ai-art.webp";
import { BsFillPlayCircleFill } from "react-icons/bs";

// AI TRY OUT
const About = () => {
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
          <Link to="/changeColor" style={{ textDecoration: "none" }}>
            <button className="secondary-button">Explore</button>
          </Link>
          
          <Link to="/changeDress" style={{ textDecoration: "none" }}>
            <button className="primary-button">View more</button>
          </Link>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
