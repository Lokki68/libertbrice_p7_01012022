const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');

const db = require('../models');

const User = db.users;

const schemaValidPassword = new passwordValidator();

schemaValidPassword
  .is()
  .min(5) // min length is 5 characters
  .is()
  .max(50) // max length is 50 characters
  .has()
  .uppercase() // uppercase
  .has()
  .lowercase() // lowercase
  .has()
  .digits(2) // 2 digits
  .has()
  .not()
  .spaces(); // not spaces

const maxAge = 3 * 24 * 60 * 60 * 1000; // Token Expiration

// SignUp
exports.signup = (req, res, next) => {
  const { username, password } = req.body;

  // Check PassWord

  if (!schemaValidPassword.validate(password)) {
    return res.status(403).json({ error: 'Password Security No Conform' });
  }

  // Create New User

  // Hash Password
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const newUser = {
        username: username,
        password: hash,
      };

      User.create(newUser)
        .then((data) => {
          const msg = 'User Created';
          res.status(200).json({ data, msg });
        })
        .catch((err) => res.status(400).json({ err: err.message }));
    })

    .catch((err) => res.status(500).json({ err: err.message }));
};

// Login
exports.login = (req, res, next) => {};
