const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dzrufky4s',  // Replace 'your_cloud_name' with your actual Cloudinary cloud name
  api_key: '837319792636397',     // Replace with your actual API key
  api_secret: 'NceSsQenanbf4PtaYThMJPUcaos'  // Replace with your actual API secret
});

module.exports = cloudinary;
