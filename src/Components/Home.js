import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BannerImage from "../Assets/Artificial-Intelligence-AI-PNG-Clipart.png"; // Updated image import
import BannerImage2 from "../Assets/pngtree.png"; // Updated image import
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BannerImage3 from "../Assets/future-of-ai.jpg";
import BannerImage4 from "../Assets/AI.webp";
import green1 from "../Assets/green1.png";
import green2 from "../Assets/green2.png";
import yellow from "../Assets/yellow.png";



const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  alt="" />
        </div>
        <div className="home-text-section">
          <h1>Utility Tools With AI</h1>
  <h1 className="primary-heading">

    Transform Your Ideas with AI-Powered Editing Photos
  </h1>
  <p className="primary-text">
    AI-Driven Editors Handle All the Hard Work – From Enhancing and Retouching to Perfecting Your Photos
  </p>
  {/* Link component with corrected styling */}
  <Link to="/promptGenerator">
    <button className="secondary-button">
      Open Now <FiArrowRight />
    </button>
  </Link>
  
</div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" /> {/* Updated image source */}
        </div>
        
      </div>
       {/* NEW DIV */}
<div className="home-middle-image-container">
  <div className="middle-image">
    <img src={BannerImage2} alt="Sci-Fi Image" /> {/* Updated image source */}
  </div>
  <div className="middle-text">
    <h1 className="primary-heading">Are you confused?</h1>
    <p className="primary-text">Make things easier for you</p>
    <Link to="">
      <button className="watch-video-button">
      <BsFillPlayCircleFill /> Watch Video 
      </button>
    </Link>
  </div>
</div>

 {/* NEW DIV 3 */}
 <div className="home-last-image-container">
  <div className="last-image">
    <img src={BannerImage3} alt="Sci-Fi Image" />
    <img src={BannerImage4} alt="Sci-Fi Image" /> {/* Updated image source */}
  </div>
  <div className="last-text">
    <h1 className="last-heading">AI at the Helm</h1>
    <p className="last-text">"Infinite Possibilities: AI at the Helm" explores the transformative power of artificial intelligence as it leads us into a future of boundless innovation. From enhancing everyday tasks to pioneering groundbreaking technologies, AI is steering humanity toward a world where the limits of what we can achieve are redefined. With AI at the forefront, the possibilities are truly endless.</p>
    <Link to="">
      
    </Link>
  </div>
</div>

 {/* NEW DIV 4 */}
 <div className="home-last-image-container">
  <div className="last-image">
    <img src={green1} alt="Sci-Fi Image" />
    <img src={green2} alt="Sci-Fi Image" /> {/* Updated image source */}
  </div>
  <div className="last-text">
    <h1 className="last-heading">Unveiling Creativity: The Queen with Green Eyes</h1>
    <p className="last-text">Step into a world where imagination meets technology. Witness the power of AI as it transforms a simple prompt into a stunning portrayal of a queen with mesmerizing green eyes. Experience the seamless blend of creativity and innovation.</p>
    <Link to="">
      
    </Link>
  </div>
</div>

 {/* NEW DIV 5 */}
 <div className="home-yellow-image-container">
  <div className="yellow-image ">
    <img src={yellow} alt="" />
   
  </div>
  <div className="last-text"> 
    {/* Last Heading */}
    <h1 className="last-heading">"Majesty in Every Pixel: The King with Yellow Eyes"</h1>
    <p className="last-text">"Discover the elegance of AI as it breathes life into a regal figure. The King with Yellow Eyes is more than just an image—it's a testament to the fusion of artistry and advanced technology. Let your imagination soar as you witness a creation that captures the essence of power, mystery, and innovation, all crafted from a simple prompt."</p>
    
  </div>
</div>
<Link 
  to="/imageToImageTransform" 
  style={{ textDecoration: 'none' }} // Removes underline
>
  <button 
    className="secondary-button" 
    style={{ 
      backgroundColor: 'black', // Background color
      color: 'white', // Text color
      padding: '10px 20px', // Padding
      border: 'none', // Remove border
      cursor: 'pointer', // Pointer cursor on hover
      display: 'block', // Ensures button takes full width of its container
      margin: '0 auto', // Center the button horizontally
      textAlign: 'center' // Center text inside the button
    }}
  >
    Make Your Own Images
  </button>
</Link>



    </div>
  );
};

export default Home;
