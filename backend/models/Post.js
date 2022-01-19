module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    'post',
    {
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(100),
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequlize.NOW,
      },
    },
    {
      timestamp: false,
    },
  );
  return Post;
};
