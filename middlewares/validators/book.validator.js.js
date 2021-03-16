const { check, validationResult } = require('express-validator');

exports.validateCreateBook = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Title can not be empty')
    .bail()
    .not()
    .isNumeric()
    .withMessage('Must be a string')
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required')
    .isLength({ max: 255 })
    .withMessage('Maximum 255 characters')
    .bail(),
  check('author')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Author can not be empty')
    .bail()
    .not()
    .isNumeric()
    .withMessage('Must be a string')
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required')
    .isLength({ max: 255 })
    .withMessage('Maximum 255 characters')
    .bail(),
  check('description')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Description can not be empty')
    .bail()
    .not()
    .isNumeric()
    .withMessage('Must be a string')
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required')
    .isLength({ max: 255 })
    .withMessage('Maximum 255 characters')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

exports.validateUpdateBook = [
  check('title')
    .optional({ nullable: true })
    .trim()
    .escape()
    .bail()
    .not()
    .isNumeric()
    .withMessage('Must be a string')
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required')
    .isLength({ max: 255 })
    .withMessage('Maximum 255 characters')
    .bail(),
  check('author')
    .optional({ nullable: true })
    .trim()
    .escape()
    .bail()
    .not()
    .isNumeric()
    .withMessage('Must be a string')
    .isLength({ min: 2 })
    .withMessage('Minimum 2 characters required')
    .isLength({ max: 255 })
    .withMessage('Maximum 255 characters')
    .bail(),
  check('description')
    .optional({ nullable: true })
    .trim()
    .escape()
    .bail()
    .not()
    .isNumeric()
    .withMessage('Must be a string')
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required')
    .isLength({ max: 255 })
    .withMessage('Maximum 255 characters')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];