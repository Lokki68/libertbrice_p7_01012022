const fs = require('fs');
const jwt = require('jsonwebtoken');

const db = require('../models');

const Post = db.posts;
const User = db.users;
const Comment = db.comments;
const Like = db.likes;

exports.getAllPost = (req, res, next) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        as: 'comments',
      },
      {
        model: Like,
        as: 'likes',
      },
    ],
    order: [
      ['date', 'DESC'],
      ['comments', 'date', 'DESC'],
    ],
  })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(400).json({ err: err.message }));
};

exports.getById = (req, res, next) => {
  const id = req.params.id;

  Post.findByPk(id, {
    include: [
      {
        model: Comment,
        as: 'comments',
      },
      {
        model: Like,
        as: 'likes',
      },
    ],
    order: [['comments', 'date', 'ASC']],
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ err: err.message }));
};

exports.getByUserId = (req, res) => {
  const id = req.params.id;

  User.findByPk(id, {
    include: [
      {
        model: Post,
        as: 'posts',
        include: [
          {
            model: Comment,
            as: 'comments',
          },
          {
            model: Like,
            as: 'likes',
          },
        ],
      },
    ],
    order: [['posts', 'date', 'DESC']],
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ err: err.message }));
};

exports.createPost = (req, res, next) => {
  const { userId, message } = req.body;

  const post = {
    userId: userId,
    message: message,
    image: '',
  };

  if (req.file) {
    post.image = `./uploads/posts/${req.file.filename}`;
  }

  // Create post

  Post.create(post)
    .then((data) => {
      const msg = `Post Created`;
      res.json({ status: 200, msg, data });
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

exports.updatePost = (req, res, next) => {
  const token = req.body.header.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;

  const { body } = req;
  const id = req.params.id;

  Post.findByPk(id)
    .then((post) => {
      if (post.userId === userId) {
        if (!post) return res.status(404).json({ msg: 'No post found' });
        post.message = body.message;
        post
          .save()
          .then(() => res.status(200).json({ msg: 'post updated', data: post }))
          .catch((err) => res.status(500).json({ err: err.message }));
      } else {
        res.status(404).json({ msg: 'invalid request' });
      }
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

exports.deletePost = (req, res) => {
  const id = req.params.id;

  Post.findByPk(id)
    .then((post) => {
      Post.destroy({
        where: { id },
      })
        .then((postDelete) => {
          if (postDelete == 0)
            return res.status(404).json({ msg: 'Not Found' });
          res.status(200).json({ msg: 'Post deleted' });
        })
        .catch((err) => res.status(500).json({ err: err.message }));
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};
