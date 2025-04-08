const express = require('express');
const router = express.Router();
const flashcardController = require('../../controllers/flashcards');

//post endpoint for creating a flashcard
router.post('/create', flashcardController.create);
//for updating a flashcard
router.post('/update/:id', flashcardController.update);
//for deleting a flashcard
router.get('/delete/:id', flashcardController.delete);

module.exports = router;
