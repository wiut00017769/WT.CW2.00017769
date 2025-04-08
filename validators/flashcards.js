const { body } = require('express-validator');

const flashcardValidationRules = () => {
  return [
    body('term')
      .notEmpty().withMessage('Term must not be empty'),
    body('definition')
      .notEmpty().withMessage('Definition must not be empty')
  ];
};

module.exports = {
  flashcardValidationRules
};
