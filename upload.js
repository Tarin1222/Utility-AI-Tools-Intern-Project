const cloudinary = require('./cloudinary');

cloudinary.uploader.upload('C:/INTERN PROJECT/utility-ai-tools/src/Assets/woman.webp', 
  { public_id: 'woman' }, // 'woman' is the public ID you'll use to reference this image later
  function(error, result) {
    if (error) {
      console.log('Upload error:', error);
    } else {
      console.log('Upload result:', result);
    }
  }
);
