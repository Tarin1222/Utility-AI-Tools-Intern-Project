import React, { useState } from 'react';
import './BackgroundChange.css';

const BackgroundChange = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const backgrounds = {
    neonLight: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725339001/background-neon-light_ur2ksp.jpg",
    brightNeonRoom: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725338922/bright-neon-illuminated-pink-room_fegxoa.jpg",
    pinkSand: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725338922/pinksand_orig_nfo8ec.jpg",
    blueWall: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725338922/blue-wall-background_apmkoi.avif",
    pinkWall: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725338922/pink-wall_ushdr1.avif",
  };

  const handleBackgroundChange = (event) => {
    setBackgroundImage(event.target.value);
  };

  const handleCustomBackground = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="backgroundChanger">
      <div className="controlsContainer">
        <div className="radioButtons">
          <label>
            <input
              type="radio"
              name="background"
              value={backgrounds.neonLight}
              onChange={handleBackgroundChange}
            />
            Neon Light
          </label>
          <label>
            <input
              type="radio"
              name="background"
              value={backgrounds.brightNeonRoom}
              onChange={handleBackgroundChange}
            />
            Bright Neon Room
          </label>
          <label>
            <input
              type="radio"
              name="background"
              value={backgrounds.pinkSand}
              onChange={handleBackgroundChange}
            />
            Pink Ocean
          </label>
          <label>
            <input
              type="radio"
              name="background"
              value={backgrounds.blueWall}
              onChange={handleBackgroundChange}
            />
            Day Light
          </label>
          <label>
            <input
              type="radio"
              name="background"
              value={backgrounds.pinkWall}
              onChange={handleBackgroundChange}
            />
            Pink Wall
          </label>
          <label>
            <input
              type="radio"
              name="background"
              value=""
              onChange={handleBackgroundChange}
            />
            Custom Background
          </label>
        </div>

        <input type="file" id="customBackgroundInput" accept="image/*" onChange={handleCustomBackground} />
      </div>

      <div
        className="containerChair"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
        }}
      >
        <img
          id="mainImage"
          src="https://res.cloudinary.com/dzrufky4s/image/upload/v1724826729/samples/chair.png"
          alt="Chair"
        />
      </div>
    </div>
  );
};

export default BackgroundChange;
