const express = require('express');
const router = express.Router();
const flashcardsWeb = require('./flashcards');
const userWeb = require('./user');
router.use('/flashcards', flashcardsWeb);
router.use('/user', userWeb);
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
module.exports = router;
