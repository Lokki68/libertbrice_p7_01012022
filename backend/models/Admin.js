module.exports = (sequelize, Sequelize) => {
  const Admin = Sequelize.define(
    'Admin',
    {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamp: false,
    },
  );
  return Admin;
};
