import React, { useState } from 'react';

const ChangeDress = () => {
  // Define the default image and the options for different dresses
  const [currentImage, setCurrentImage] = useState("https://res.cloudinary.com/dzrufky4s/image/upload/v1725716283/2_jdyly7.jpg");

  const dressOptions = [
    {
      label: "Actual Image",
      value: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716283/2_jdyly7.jpg"
    },
    {
      label: "Winter Jacket",
      value: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716291/1_kvkqgs.png"
    },
    {
      label: "Jacket",
      value: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716289/4_ajke5g.png"
    },
    {
      label: "Arabian",
      value: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716302/3_xhb5mb.png"
    },
    {
      label: "Classy",
      value: "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716292/5_zmaewg.png"
    },
  ];

  // Function to handle dropdown change and update the image
  const handleDressChange = (e) => {
    setCurrentImage(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Try your ! </h1>
      <img src={currentImage} alt="Man in dress" style={{ width: '700px', height: '600px' }} />
      <br />
      <select onChange={handleDressChange} style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}>
        {dressOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeDress;
