const db = require("../models");
const Book = db.books;
const Op = db.Op;

exports.create = (req, res) => {
  // Create a book object
  const book = {
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  };

  // Save Book in the database
  Book.create(book)
    .then(data => {
      res.status(201).json({ data })
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Book."
      });
    });
}

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Book.findAll({ where: condition })
    .then(data => {
      res.json({ data })
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving books."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Book.findByPk(id)
    .then(data => {
      res.json({ data })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving Book with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Book.update(req.body, {
    where: { id },
  })
    .then(async (num) => {
      if (num == 1) {
        const data = await Book.findByPk(id);
        res.status(205).json({ data });
      } else {
        res.status(500).json({
          message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Book with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Book.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(205);
      } else {
        res.status(500).json({
          message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Could not delete Book with id=" + id
      });
    });
};