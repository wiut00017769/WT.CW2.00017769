const flashcardService = require('../services/flashcards');

const flashcardController = {
  //render the flashcards list view
  getAll: (req, res) => {
    try {
      const flashcards = flashcardService.get();
      res.render('flashcards/index', { title: 'Flashcards', flashcards });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  //render the update form prefilled with flashcard data
  getById: (req, res) => {
    try {
      const card = flashcardService.getById(req.params.id);
      if (!card) return res.status(404).send('Flashcard not found');
      res.render('flashcards/create_update', { title: 'Update Flashcard', flashcard: card });
    } catch(error) {
      res.status(500).send(error.message);
    }
  },
  //create a new flashcard
  create: (req, res) => {
    try {
      flashcardService.insert(req.body);
      res.redirect('/flashcards');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  //update an existing flashcard
  update: (req, res) => {
    try {
      const updated = flashcardService.update(req.params.id, req.body);
      if (!updated) return res.status(404).send('Flashcard not found');
      res.redirect('/flashcards');
    } catch(error) {
      res.status(500).send(error.message);
    }
  },
  //delete a flashcard
  delete: (req, res) => {
    try {
      const success = flashcardService.delete(req.params.id);
      if (!success) return res.status(404).send('Flashcard not found');
      res.redirect('/flashcards');
    } catch(error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = flashcardController;
