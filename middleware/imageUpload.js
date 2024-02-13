const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "de00c0pcb",
  api_key: "865957248269771",
  api_secret: "22R8DEqglZENxmCgfDzrGW8jpL0",
});

// Configure multer storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Optional - specify folder in Cloudinary where the images will be stored
    allowed_formats: ["jpg", "jpeg", "png"], // Optional - specify allowed image formats
    // Other optional parameters...
  },
});

// Initialize multer with Cloudinary storage
const upload = multer({ storage: storage });

module.exports = upload;
