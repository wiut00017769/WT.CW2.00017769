const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { flashcardValidationRules } = require('../../validators/flashcards');
const flashcardController = require('../../controllers/flashcards');

router.post('/create', flashcardValidationRules(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('flashcards/create_update', {
      errors: errors.array(),
      flashcard: req.body,
      title: 'Create Flashcard'
    });
  }
  flashcardController.create(req, res);
});

router.post('/update/:id', flashcardValidationRules(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('flashcards/create_update', {
      errors: errors.array(),
      flashcard: req.body,
      title: 'Update Flashcard'
    });
  }
  flashcardController.update(req, res);
});

router.get('/delete/:id', flashcardController.delete);

module.exports = router;
