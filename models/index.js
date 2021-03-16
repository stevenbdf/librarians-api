const config = require("../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: config.dbDialect,
  // to return UTC time, remove this property
  dialectOptions: {
    typeCast: function (field, next) { // for converting to time
      if (field.type === 'DATETIME') {
        return field.string()
      }
      return next()
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  timezone: '-06:00'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

db.books = require("./book.model.js")(sequelize);

module.exports = db;