const { body } = require('express-validator');
const flashcardValidationRules = () => {
  return [
    body('term').trim().notEmpty().withMessage('Term is required.').isLength({ min: 3, max: 100 }).withMessage('Term must be between 3 and 100 characters.'),
    body('definition').trim().notEmpty().withMessage('Definition is required.').isLength({ min: 3, max: 300 }).withMessage('Definition must be between 3 and 300 characters.')
  ];
};
module.exports = { flashcardValidationRules };
