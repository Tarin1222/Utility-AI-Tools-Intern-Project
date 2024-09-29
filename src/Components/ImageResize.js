import React, { useState } from 'react';
import './ImageResize.css';

const ImageResize = () => {
  const [resizedImage, setResizedImage] = useState('');
  const [resizeWidth, setResizeWidth] = useState(100);

  const uploadImage = (event) => {
    const [imageFile] = event.target.files;
    const { type: mimeType } = imageFile;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (fileReaderEvent) => {
      const imageAsBase64 = fileReaderEvent.target.result;
      const image = new Image();
      image.src = imageAsBase64;
      image.onload = () => {
        const imageResizeWidth = resizeWidth;
        const canvas = document.createElement('canvas');
        canvas.width = imageResizeWidth;
        canvas.height = ~~(image.height * (imageResizeWidth / image.width));
        const context = canvas.getContext('2d');
        if (!context) return;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        const resizedImageAsBase64 = canvas.toDataURL(mimeType);
        setResizedImage(resizedImageAsBase64);
      };
    };
  };

  const handleResizeWidthChange = (event) => {
    setResizeWidth(parseInt(event.target.value, 10));
  };

  return (
    <div className="image-resize-container">
      <form>
        <input 
          type="file" 
          accept="image/jpeg" 
          onChange={uploadImage} 
        />
        <input
          type="number"
          value={resizeWidth}
          onChange={handleResizeWidthChange}
          min="10"
          max="10000"
          placeholder="Width"
          className="resize-width-input"
        />
      </form>
      {resizedImage && (
        <div className="image-preview">
          <img src={resizedImage} alt="Resized" />
        </div>
      )}
    </div>
  );
};

export default ImageResize;
