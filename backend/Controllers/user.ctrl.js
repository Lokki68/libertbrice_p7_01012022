const db = require('../models');

const User = db.users;
const Admin = db.admins;
const Post = db.posts;
const Comment = db.comments;
const Like = db.likes;

// Find All User
exports.getAllUser = (req, res, next) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    order: ['username'],
  })
    .then((users) => {
      res.status(200).json({ data: users });
    })

    .catch((err) => res.status(400).json({ err: err.message }));
};

// Find One User
exports.getById = (req, res, next) => {
  const id = req.params.id;

  User.findByPk(id, {
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Post,
        as: 'posts',
      },
      {
        model: Comment,
        as: 'comments',
      },
      {
        model: Like,
        as: 'likes',
      },
    ],
  })
    .then((user) => {
      res.status(200).json({ data: user });
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

// Update User
exports.updateUser = (req, res, next) => {
  const { email, description, phoneNumber } = req.body;
  const id = req.params.id;

  const userInfo = {
    email,
    description,
    phoneNumber,
    image: '',
  };

  if (req.file) {
    userInfo.image = `../client/public/uploads/profils/${req.file.filename}`;
  }

  User.update(userInfo, {
    where: { id },
  })
    .then((_) => {
      User.findByPk(id)
        .then((user) => {
          // Check User
          if (!user) return res.status(404).json({ msg: 'User not found' });

          const msg = 'User Found';
          res.status(200).json({ msg, data: user });
        })
        .catch((err) => res.status(403).json({ err: err.message }));
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

// Delete User
exports.deleteUser = (req, res, next) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((user) => {
      if (!user) return res.status(404).json({ msg: 'User not found' });

      return User.destroy({
        where: { id: user.id },
      })
        .then(() => {
          const msg = `User ${user.id} - ${user.username} was deleted`;

          res.status(200).json({ msg });
        })
        .catch((err) => res.status(400).json({ err: err.message }));
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

// upload Picture

exports.uploadPicture = (req, res) => {
  const id = req.params.id;

  const userImage = {
    image: '',
  };

  if (req.file) {
    userImage.image = `./uploads/profil/${req.file.filename}`;
  }

  User.findByPk(id)
    .then((user) => {
      user.image = userImage.image;
      user
        .save()
        .then(() => res.status(200).json({ msg: 'image updated' }))
        .catch((err) => res.status(400).json({ err: err.message }));
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};
