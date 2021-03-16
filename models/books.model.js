const Sequelize = require("sequelize");

module.exports = (sequelize) => {

  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    }
  });

  return Book;
};