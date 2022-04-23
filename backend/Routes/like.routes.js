const router = require('express').Router();

const likeCtrl = require('../Controllers/like.ctrl')

router.get('/:id', likeCtrl.getLikeByPostId);
router.post('/:postId', likeCtrl.createLike);
router.delete('/', likeCtrl.deleteLike);

module.exports = router;