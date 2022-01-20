const router = require('express').Router();

// Controllers
const userCtrl = require('../Controllers/user.ctrl');
const authCtrl = require('../Controllers/auth.ctrl');

// R.U.D.
router.get('/', userCtrl.getAllUser);

// Auth
router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

module.exports = router;
