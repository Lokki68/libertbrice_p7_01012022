const multer = require('multer');

const MIME_TYPES = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `../client/public/uploads/posts/`);
  },
  filename: (req, file, callback) => {
    const extension = MIME_TYPES[file.mimetype];
    callback(null, Date.now() + '.' + extension);
  },
});

module.exports = multer({ storage: storage }).single('image');
