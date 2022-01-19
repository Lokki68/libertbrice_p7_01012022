const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mysql',
    host: 'localhost',
  },
);

sequelize
.sync()
.then(console.log('Connexion sequelize'))
.catch(err => console.log(err))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


