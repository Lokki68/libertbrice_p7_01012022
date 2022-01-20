const db = require('../models');

const User = db.users;
const Post = db.posts;
const Comment = db.comments;
const Like = db.likes;

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

exports.updateUser = (req, res, next) => {
  const { body } = req;
  const id = req.params.id;

  User.update(body, {
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
