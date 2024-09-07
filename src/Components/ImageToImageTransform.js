import React, { useState } from 'react';

const ImageToImageTransform = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [similarImages, setSimilarImages] = useState([]);

  // Dummy AI-generated similar images
  const aiGeneratedImages = [
    "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716289/4_ajke5g.png",
    "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716291/1_kvkqgs.png",
    "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716292/5_zmaewg.png",
    "https://res.cloudinary.com/dzrufky4s/image/upload/v1725716302/3_xhb5mb.png",
  ];

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); // Set uploaded image URL
        // Simulate fetching similar images after upload
        fetchSimilarImages();
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate fetching similar images (replace with real API call)
  const fetchSimilarImages = () => {
    setSimilarImages(aiGeneratedImages); // Simulated AI transformation
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Image-to-Image Transformation</h2>

      {/* Image Upload */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        style={{ marginBottom: '20px', padding: '10px' }}
      />

      {/* Show uploaded image */}
      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img 
            src={uploadedImage} 
            alt="Uploaded" 
            style={{ width: '300px', height: '400px', marginBottom: '20px' }} 
          />
        </div>
      )}

      {/* Show AI-generated similar images */}
      {similarImages.length > 0 && (
        <div>
          <h3>Similar Images:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {similarImages.map((img, index) => (
              <img key={index} src={img} alt={`Similar ${index}`} style={{ width: '150px', height: '200px' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageToImageTransform;
