const express = require('express');
const router = express.Router();
const flashcardsController = require('../../controllers/flashcards');
router.get('/', (req, res) => {
  flashcardsController.getAll(req, res);
});
router.get('/create', (req, res) => {
  res.render('flashcards/create_update', { title: 'Create Flashcard' });
});
router.get('/update/:id', (req, res) => {
  flashcardsController.getById(req, res);
});
module.exports = router;
