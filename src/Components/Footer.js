import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FcWikipedia, FcGoogle, FcStart, FcShare, FcCurrencyExchange, FcCopyright } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img alt="" />
        </div>
        <div className="footer-icons">
          <FcWikipedia />
          <FcGoogle />
          <FcStart />
          <FcShare />
          <FcCopyright />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Share</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>01922-56-99-82</span>
          <span>farzanaislamtarin@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <FcCurrencyExchange 
            style={{
              fontSize: "44px", 
              verticalAlign: "middle", 
              marginRight: "5px"
            }} 
          />
          <Link to="/addPayment"> {/* Link wrapping the button */}
            <button
              className="add-payment-button"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(0, 0, 0, 0.3)", // Border lining the outside
                cursor: "pointer",
                fontSize: "18px",
                padding: "1px 2px",
                borderRadius: "9px",
                marginRight: "7px",
                display: "inline-flex",
                alignItems: "center",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
                color: "grey",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                e.target.style.borderColor = "rgba(0, 0, 0, 0.5)"; // Darker border on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "rgba(0, 0, 0, 0.3)"; // Original border color
              }}
            >
              Add Payment Method
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
