const db = require('../models');

const User = db.users;
const Admin = db.admins;

exports.getAll = (req, res) => {
  Admin.findAll()
    .then((admins) => {
      const msg = 'Admins found';
      res.status(200).json({ msg, admins });
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

exports.passAdmin = (req, res) => {
  const userId = req.params.id;
  const username = req.body.username;

  Admin.findOne({
    where: { username },
  })
    .then((adminList) => {
      if (adminList === null) {
        const newAdmin = {
          username,
          userId,
        };

        const userAdmin = {
          admin: true,
        };

        User.update(userAdmin, {
          where: { id: userId },
        })
          .then((user) => {
            res.status(200).send('Success');
          })
          .catch((err) => res.status(403).json({ err: err.message }));

        Admin.create(newAdmin)
          .then((data) => {
            const msg = 'New Admin was created successfully';
            res.status(200).json({ msg, data });
          })
          .catch((err) => res.status(400).json({ err: err.message }));
      } else {
        const msg = 'Admin as already exists';
        res.status(401).json({ msg });
      }
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

exports.deleteAdmin = (req, res) => {};
