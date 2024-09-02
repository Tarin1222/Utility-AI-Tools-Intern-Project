import React, { useState } from 'react';

const ChangeColor = () => {
  const [hairColor, setHairColor] = useState('black');
  const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/dzrufky4s/image/upload/v1725273854/woman.webp'); // Default image URL

  const handleHairColorChange = (e) => {
    const selectedHairColor = e.target.value;
    setHairColor(selectedHairColor);
    updateImageUrl(selectedHairColor);
  };

  const updateImageUrl = (color) => {
    let url = '';
    switch (color) {
      case 'black':
        url = 'https://res.cloudinary.com/dzrufky4s/image/upload/v1725273854/woman.webp';
        break;
      case 'brown':
        url = 'https://res.cloudinary.com/dzrufky4s/image/upload/v1725279645/brownhair_fku6wo.jpg';
        break;
      case 'red':
        url = 'https://res.cloudinary.com/dzrufky4s/image/upload/v1725279645/redhair_ydixqv.jpg';
        break;
      case 'blue':
        url = 'https://res.cloudinary.com/dzrufky4s/image/upload/v1725279645/bluehair_znhfq7.jpg';
        break;
      case 'green':
        url = 'https://res.cloudinary.com/dzrufky4s/image/upload/v1725279645/green_hair_kwhr3i.jpg';
        break;
      default:
        url = 'https://res.cloudinary.com/dzrufky4s/image/upload/v1725279645/blackhair_fku6wo.jpg';
    }
    setImageUrl(url);
  };

  return (
    <div className="change-color-container">
      <h1>Change Hair Color</h1>
      <div className="image-container">
        <img src={imageUrl} alt="Woman with different hair colors" className="person-image" />
      </div>
      <div className="controls">
        <label>
          Hair Color:
          <div>
            <label>
              <input 
                type="radio" 
                value="black" 
                checked={hairColor === 'black'} 
                onChange={handleHairColorChange}
              />
              Black
            </label>
            <label>
              <input 
                type="radio" 
                value="brown" 
                checked={hairColor === 'brown'} 
                onChange={handleHairColorChange}
              />
              Brown
            </label>
            <label>
              <input 
                type="radio" 
                value="red" 
                checked={hairColor === 'red'} 
                onChange={handleHairColorChange}
              />
              Red
            </label>
            <label>
              <input 
                type="radio" 
                value="blue" 
                checked={hairColor === 'blue'} 
                onChange={handleHairColorChange}
              />
              Blue
            </label>
            <label>
              <input 
                type="radio" 
                value="green" 
                checked={hairColor === 'green'} 
                onChange={handleHairColorChange}
              />
              Green
            </label>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ChangeColor;
