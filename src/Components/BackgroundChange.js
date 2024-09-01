import React, { useState } from 'react';
import images from '../Components/data.json'; // Adjust the path if necessary
import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUD_NAME
  }
});

function BackgroundChange() {
  const { cars, furniture } = images;
  const [collection, setCollection] = useState({ title: 'cars', images: cars });

  return (
    <div className="container">
      <h2>Background Change & Image Effects</h2>

      <div className="collection-selector">
        <ul>
          <li>
            <input
              id="cars"
              className="sr-only"
              type="radio"
              name="collection"
              value="cars"
              onChange={() => setCollection({ title: 'cars', images: cars })}
              checked={collection.title === 'cars'}
            />
            <label htmlFor="cars">Cars</label>
          </li>
          <li>
            <input
              id="furniture"
              className="sr-only"
              type="radio"
              name="collection"
              value="furniture"
              onChange={() => setCollection({ title: 'furniture', images: furniture })}
              checked={collection.title === 'furniture'}
            />
            <label htmlFor="furniture">Furniture</label>
          </li>
        </ul>
      </div>

      <div className="image-gallery">
        {collection.images.map(({ publicId, width, height }) => {
          const imageUrl = cld.image(publicId)
            .effect(backgroundRemoval())
            .effect(
              dropShadow()
                .azimuth(150)
                .elevation(50)
                .spread(70)
            )
            .resize(scale().width(width).height(height))
            .format("auto")
            .quality("auto")
            .toURL();

          // Log the generated image URL
          console.log('Generated Image URL:', imageUrl);

          return (
            <img
              key={publicId}
              width={width}
              height={height}
              src={imageUrl}
              alt={`${collection.title} image`}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150"; // Fallback to a placeholder if the image fails to load
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BackgroundChange;
