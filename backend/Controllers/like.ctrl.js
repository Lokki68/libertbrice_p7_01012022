const db = require('../models');

const Like = db.likes;

exports.getLikeByPostId = (req, res) => {
  const id = req.params.id;

  Like.findByPk(id, {})
    .then((like) => {
      const msg = 'Like found'
      res.json({status: 200, msg, like})
    })
    .catch(err => res.json({status: 400, err: err.message}))
}

exports.createLike = (req, res) => {
  const {postId, userId} = req.body;

  const like = {
    postId,
    userId
  };

  Like.create(like)
    .then((data) => {
      const msg = 'post liked';
      res.json({status: 200, msg, data});
    })
    .catch(err => res.status(400).json({err: err.message}))
};

exports.deleteLike = (req, res) => {
  const {id, userId} = req.body;

  Like.findByPk(id)
    .then(like => {
      if(like.userId === userId){
        Like.destroy({
          where: {id},
        })
          .then(ressource => {
            if(ressource === null){
              const msg = 'Like not Found'
              res.json({status: 400, msg})
            }
              res.json({status: 200, msg: 'Like deleted'})
          })
          .catch(err => res.json({status: 500, err: err.message}))
      } else {
        res.json({status: 404, msg: 'UserId not good'})
      }
    })
    .catch(err => res.status(500).json({err: err.message}))
}