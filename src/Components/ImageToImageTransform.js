import React, { useState } from 'react';


const ImageToImageTransform = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTransformImage = async () => {
    setIsLoading(true);
    setError(null);

    const url = 'https://modelslab.com/api/v6/images/img2img';
    const apiKey = '5MqpLpSJY3vBIPyWYQKZTzSlG9TF7JeZZeclqQT8jKYt7lHjkKQLr7HwCvox';  // Replace with your actual API key

    const requestData = {
      key: apiKey,
      model_id: "realistic-vision-51",
      prompt: "Gold , Diamond , Emerald and Rubby",
      negative_prompt:  "((out of frame)), ((extra fingers)), ((extra legs)) .((women)), ((nudity)), ((vulger))",
      init_image: "https://i.pinimg.com/736x/20/ab/3d/20ab3df5c180e1cae812020bcfeb3093.jpg",
      samples: "1",
      num_inference_steps: "31",
      safety_checker: "yes",
      enhance_prompt: "yes",
      guidance_scale: 7.5,
      strength: 0.7,
      scheduler: "UniPCMultistepScheduler",
      seed: null,
      lora_model: null,
      tomesd: "yes",
      use_karras_sigmas: "yes",
      vae: null,
      lora_strength: null,
      embeddings_model: null,
      webhook: null,
      track_id: null
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Error fetching the image transformation');
      }

      const result = await response.json();

      if (result.status === 'success' && result.output && result.output.length > 0) {
        setImage(result.output[0]);  // Set the transformed image URL
      } else {
        throw new Error('No image generated');
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1>Image to Image Transformation</h1>
      <button onClick={handleTransformImage} disabled={isLoading}>
        {isLoading ? 'Transforming...' : 'Transform Image'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {image && (
        <div>
          <h2>Transformed Image</h2>
          <img src={image} alt="Transformed" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}

      {/* Tennis image positioned at the right corner */}
      
    </div>
  );
};

export default ImageToImageTransform;
