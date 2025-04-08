const express = require('express');
const router = express.Router();
const flashcardController = require('../../controllers/flashcards');
const { flashcardValidationRules } = require('../../validators/flashcards');
const { validationResult } = require('express-validator');

router.post('/create', flashcardValidationRules(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  flashcardController.create(req, res);
});

router.post('/update/:id', flashcardValidationRules(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  flashcardController.update(req, res);
});

router.get('/delete/:id', flashcardController.delete);

module.exports = router;
