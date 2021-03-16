const bookValidator = require('../middlewares/validators/book.validator.js');

module.exports = app => {
  const books = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // Create a new Book
  router.post("/", bookValidator.validateCreateBook, books.create);

  // Retrieve all Books
  router.get("/", books.findAll);

  // Retrieve a single Book with id
  router.get("/:id", books.findOne);

  // Update a Book with id
  router.put("/:id", bookValidator.validateUpdateBook, books.update);

  // Delete a Book with id
  router.delete("/:id", books.delete);

  app.use('/api/books', router);
};