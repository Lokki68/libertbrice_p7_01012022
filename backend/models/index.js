const Sequelize = require('sequelize');
const sequelize = new Sequelize('groupomania', 'root', 'LaithiBrice1903', {
  dialect: 'mysql',
  host: 'localhost',
});

sequelize
  .sync()
  .then(console.log('Connexion sequelize'))
  .catch((err) => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require('./Admin')(sequelize, Sequelize);
db.users = require('./User')(sequelize, Sequelize);
db.posts = require('./Post')(sequelize, Sequelize);
db.comments = require('./Comment')(sequelize, Sequelize);
db.likes = require('./Like')(sequelize, Sequelize);

// Users relations

db.admins.hasMany(db.users, { as: 'users', onDelete: 'CASCADE' });
db.users.belongsTo(db.admins, { foreignKey: 'adminId', as: 'admin' });

// Posts relations

db.users.hasMany(db.posts, { as: 'posts', onDelete: 'CASCADE' });
db.posts.belongsTo(db.users, { foreignKey: 'userId', as: 'user' });

// Comments relations

db.users.hasMany(db.comments, { as: 'comments', onDelete: 'CASCADE' });
db.comments.belongsTo(db.users, { foreignKey: 'userId', as: 'user' });

db.posts.hasMany(db.comments, { as: 'comments', onDelete: 'CASCADE' });
db.comments.belongsTo(db.posts, { foreignKey: 'postId', as: 'post' });

// Likes relations

db.users.hasMany(db.likes, { as: 'likes', onDelete: 'CASCADE' });
db.likes.belongsTo(db.users, { foreignKey: 'userId', as: 'user' });

db.posts.hasMany(db.likes, { as: 'likes', onDelete: 'CASCADE' });
db.likes.belongsTo(db.posts, { foreignKey: 'postId', as: 'post' });

module.exports = db;
