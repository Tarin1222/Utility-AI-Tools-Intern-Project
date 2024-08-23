import React from "react";
import ProfilePic from "../Assets/myPic.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom"; // Add this import statement

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">What Are You Saying ?</h1>
        <p className="primary-text">
          Reach out to us for any queries or support. We're here to help you with all your image editing needs.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="Profile Pic" className="testimonial-image" />
        <p>
          Get in touch with us for support, questions, or feedback. We're dedicated to helping you enhance your image editing experience.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Farzana Islam</h2>
        <Link to="/Contact">
          <button className="secondary-button">Contact Us</button>
        </Link>
      </div>
    </div>
    
  );
};

export default Testimonial;
