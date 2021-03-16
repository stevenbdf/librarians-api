const dotenv = require("dotenv");

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT),

  /**
   * Database config
   */
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbDialect: process.env.DB_DIALECT,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};