const config = require("../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: config.dbDialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

db.books = require("./books.model.js")(sequelize);

module.exports = db;