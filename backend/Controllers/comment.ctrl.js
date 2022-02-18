const jwt = require('jsonwebtoken');

const db = require('../models');

const Comment = db.comments;

exports.getById = (req, res) => {
  const id = req.params.id;

  Comment.findByPk(id, {})
    .then((comment) => {
      const msg = `Comment Found`;
      res.status(200).json({ msg, data: comment });
    })
    .catch((err) => res.status(400).json({ err: err.message }));
};

exports.createComment = (req, res) => {
  const postId = req.params.postId;
  const { content, userId } = req.body;

  const comment = {
    content,
    userId,
    postId,
  };

  Comment.create(comment)
    .then((data) => {
      const msg = `CommentCreated`;
      res.status(200).json({ msg, data });
    })
    .catch((err) => res.status(400).json({ err: err.message }));
};

exports.updateComment = (req, res) => {
  const token = req.body.header.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
  const userId = decodedToken.userId

  const id = req.params.id;
  const { body } = req;

  Comment.findByPk(id)
    .then((comment) => {
      if (comment.userId === userId) {
        comment.content = body.content;
        comment
          .save()
          .then(() => {
            const msg = `Comment Updated`;
            res.status(200).json({ msg, data: comment });
          })
          .catch((err) => res.status(500).json({ err: err.message }));
      } else {
        const msg = 'Bad request';
        res.status(400).json({ err: msg });
      }
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

exports.deleteComment = (req, res) => {
  const token = req.body.header.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
  const userId = decodedToken.userId

  const id = req.params.id;

  Comment.findByPk(id)
    .then((comment) => {
      if (comment.userId === userId) {
        Comment.destroy({
          where: { id },
        })
          .then((ressource) => {
            if (ressource === 0) {
              const msg = 'Comment Not Found';
              res.status(404).json({ msg });
            }
            res.status(200).json({ msg: 'Comment deleted' });
          })
          .catch((err) => res.status(500).json({ err: err.message }));
      } else {
        const msg = 'Bad request';
        res.status(404).json({ err: msg });
      }
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};
