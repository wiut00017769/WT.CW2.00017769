const flashcardsService = require('../services/flashcards');
const flashcardsController = {
  getAll: (req, res) => {
    try {
      const flashcards = flashcardsService.get();
      res.render('flashcards/index', { title: 'Flashcards List', flashcards });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getById: (req, res) => {
    try {
      const flashcard = flashcardsService.getById(req.params.id);
      if (!flashcard) return res.status(404).send('Flashcard not found');
      res.render('flashcards/create_update', { title: 'Update Flashcard', flashcard });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  create: (req, res) => {
    try {
      flashcardsService.insert(req.body);
      res.redirect('/flashcards');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  update: (req, res) => {
    try {
      const updated = flashcardsService.update(req.params.id, req.body);
      if (!updated) return res.status(404).send('Flashcard not found');
      res.redirect('/flashcards');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  delete: (req, res) => {
    try {
      const deleted = flashcardsService.delete(req.params.id);
      if (!deleted) return res.status(404).send('Flashcard not found');
      res.redirect('/flashcards');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
module.exports = flashcardsController;
