const multer = require('multer');

const MIME_TYPES = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `../client/public/uploads/profil`);
  },
  filename: (req, file, callback) => {
    const extension = MIME_TYPES[file.mimetype];
    const name = file.originalname.split('.')[0]
    callback(null,name + Date.now() + '.' + extension);
  },
});

module.exports = multer({ storage: storage }).single('image');
