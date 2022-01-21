const multer = require('multer');

const MIME_TYPES = {
  'image/jpeg': '.jpeg',
  'image/jpg': '.jpg',
  'image/png': '.png',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../../client/uploads/post');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split('.');
    callback(null, name[0] + Date.now() + '.jpg');
  },
});

module.exports = multer({ storage: storage }).single('image');
