const express = require('express');
const router = express.Router();
const flashcardController = require('../../controllers/flashcards');

router.get('/', flashcardController.getAll);
//route to display create flashcard form
router.get('/create', (req, res) => {
  res.render('flashcards/create_update', { title: 'Create Flashcard' });
});

router.get('/update/:id', flashcardController.getById);

module.exports = router;
