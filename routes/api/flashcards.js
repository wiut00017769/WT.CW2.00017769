const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { flashcardValidationRules } = require('../../validators/flashcards');
const flashcardsController = require('../../controllers/flashcards');
router.post('/create', flashcardValidationRules(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('flashcards/create_update', { errors: errors.array(), flashcard: req.body, title: 'Create Flashcard' });
  }
  flashcardsController.create(req, res);
});
router.post('/update/:id', flashcardValidationRules(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('flashcards/create_update', { errors: errors.array(), flashcard: req.body, title: 'Update Flashcard' });
  }
  flashcardsController.update(req, res);
});
router.get('/delete/:id', (req, res) => {
  flashcardsController.delete(req, res);
});
module.exports = router;
