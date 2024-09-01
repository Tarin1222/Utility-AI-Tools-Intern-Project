import React from "react";
import { Link } from "react-router-dom";

import backgroundChange from "../Assets/background_change.webp";  //image editing 
import imageResize from "../Assets/imageResize.png";

const Work = () => {
  const workInfoData = [
    
    {
      image: backgroundChange,
      title: "Change The Background",
      text: "Effortlessly change the background of your image with our intuitive tools.",
      link: "/backgroundChange", // Adding a link for navigation
    },
    {
      image: imageResize,
      title: "Resize Images",
      text: "Quickly resize your image to the perfect dimensions with our easy-to-use tool.",
      link: "/imageResize", // Adding a link for navigation
    },
  ];

  // Inline styles for headings and descriptions
  const headingStyle = {
    color: '#0f16a9', // Heading color
  };

  const descriptionStyle = {
    color: '#000002', // Set your desired color here
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Image editing involves manipulating and enhancing digital images using various tools and techniques. This can include adjusting backgrounds  and resizing, removing unwanted elements, and applying filters or effects. Advanced image editing can also involve retouching photos to remove blemishes, combining multiple images, and using AI to automate enhancements and corrections, resulting in professional-quality images.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <Link to={data.link || "#"} style={{ textDecoration: 'none' }}> {/* Remove underline from Link */}
              <div className="info-boxes-img-container">
                <img src={data.image} alt={data.title} />
              </div>
              <h2 style={headingStyle}>{data.title}</h2> {/* Inline style for heading */}
              <p style={descriptionStyle}>{data.text}</p> {/* Inline style for description */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
